import React, { PureComponent } from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import { CategoryBar, RefreshFlatList, FlatListItem } from "../components";
import { HttpUtils } from "../utils";
import Swiper from 'react-native-swiper';
import Loading from 'react-native-loading-w';

export default class DetailPage extends PureComponent {
    flag = null;
    constructor(props) {
        super(props)
        this.flag = 1;
        this.state = {
            banners: [],
            product: null,
            isTmail: 0,
            url: ''
        };
    }

    componentWillUnmount() {
        this.flag = null;
    }

    componentDidMount() {
        const { navigate } = this.props.navigation;
        this.flag && this.loading.show();
        HttpUtils.get('detail/get', {
            id: navigate.ItemId
        }).then(response => {
            this.setState({
                product: response,
                url: navigate.Url,
                isTmail: navigate.isTmail
            });
            this.flag && this.loading.dismiss();
        }).catch(error => {
            this.setState({
                url: navigate.Url,
                isTmail: navigate.isTmail
            });
            this.flag && this.loading.dismiss();
        }).done();
    }

    /**
    * 加载数据
    * @param page
    * @returns {Promise}
    */
    loadData(page) {
        this.flag && this.loading.show();
        return HttpUtils.get('detail/similar', {
            cat: this.state.product.SPLM
        }).then(response => {
            this.flag && this.loading.dismiss();
        }).catch(err => {
            this.flag && this.loading.dismiss();
        });
    }
    render() {
        var product = this.state.product;
        return (
            <View>
                <View
                    style={styles.swiper}>
                    <Swiper
                        height={150}
                        loop={true}
                        index={0}
                        autoplay={true}
                        horizontal={true}>
                        {
                            product.Images && product.Images.map((item, index) =>
                                <Image
                                    style={styles.swiperImage}
                                    source={{ uri: item }} />)
                        }
                    </Swiper>
                </View>
                <View>
                    <View>
                        <Image />
                        <Text>
                        </Text>
                    </View>
                    <View>
                        <Text>
                        </Text>
                        <Text>
                        </Text>
                    </View>
                    <View>
                        <Text>
                        </Text>
                        <Text>
                        </Text>
                    </View>
                </View>
                <View>
                    <Image />
                    <Text>
                    </Text>
                </View>
                <CategoryBar />
                <View>
                    <Image />
                </View>
                <View>
                    <RefreshFlatList
                        isReload={false}
                        numColumns={2}
                        fetchRequest={(page) => this.loadData(page)}
                        renderItem={(item) =>
                            <FlatListItem
                                product={item.item}
                                navigation={this.props.navigation} />}
                    />
                </View>
                <Loading ref={ref => this.loading = ref} text={'Loading...'} />
            </View>
        );
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    swiper: {
        width: '100%',
        height: 150,
        padding: 0,
        margin: 0
    },
    swiperImage: {
        flex: 1,
        width: '100%',
        resizeMode: 'stretch'
    }
});