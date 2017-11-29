import React, { PureComponent } from 'react';

import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import {
    HttpUtils
} from "../utils";

import {
    RefreshSectionList,
    SectionListItem,
    TopBar,
    SubjectBar,
    CategoryBar,
    SearchBar
} from "../components";

import Swiper from 'react-native-swiper';
import Loading from 'react-native-loading-w';

export default class CouponList extends PureComponent {
    flag = null;
    constructor(props) {
        super(props);
        this.state = {
            banners: [],
            categories: [],
            subjects: [],
            currentCat: 1,
            isReload: false
        };
        this.flag = 1;
    }
    componentDidMount() {
        this.getLoading().show();
        HttpUtils.get('search/Config').then(response => {
            this.flag && this.setState({
                banners: response.Banners || [],
                categories: response.Cats || [],
                subjects: response.Favorites || []
            });
            this.flag && this.getLoading().dismiss();
        }).catch(error => {
            this.flag && this.getLoading().dismiss();
        });
    }
    componentWillUnmount() {
        this.flag = null;
    }

    getLoading() {
        return this.refs['loading'];
    }

    /**
     * 网络上加载数据
     * @param page
     * @returns {Promise}
     */
    loadData(page) {
        return HttpUtils.get('search/Cats', {
            cat: this.state.currentCat,
            pageno: page
        });
    }
    onCatChange(cat) {
        this.setState({
            currentCat: cat,
            isReload: true
        });
    }
    onSubmit(key) {
        const { navigate } = this.props.navigation;
        navigate.push('search', {
            keyworld: key,
        });
    }
    renderHeader() {
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
                            this.state.banners && this.state.banners.map((item, index) => this.renderBanner(item, index))
                        }
                    </Swiper>
                </View>
                <SubjectBar
                    data={this.state.subjects}
                    navigation={this.props.navigation} />
                <TopBar navigation={this.props.navigation} />
            </View>
        );
    }
    renderSection() {
        return (<View style={{ backgroundColor: '#fff' }}>
            <CategoryBar
                data={this.state.categories}
                onChange={this.onCatChange} />
        </View>);
    }
    renderBanner(item, index) {
        const { navigate } = this.props.navigation;
        return (<TouchableOpacity
            activeOpacity={1}
            key={index}
            style={styles.swiperItem}
            onPress={() => {
                navigate('html', {
                    title: item.Title,
                    url: item.Url
                })
            }}>
            <Image
                style={styles.swiperImage}
                source={{ uri: item.Icon }} />
        </TouchableOpacity>);
    }
    render() {
        return (
            <View style={styles.container}>
                <SearchBar onSubmit={(key) => this.onSubmit(key)} />
                <RefreshSectionList
                    isReload={this.state.isReload}
                    fetchRequest={(page) => this.loadData(page)}
                    ListHeaderComponent={this.renderHeader.bind(this)}
                    renderSectionHeader={this.renderSection.bind(this)}
                    stickySectionHeadersEnabled={true}
                    renderItem={(item) => <SectionListItem
                        product={item.item}
                        navigation={this.props.navigation} />}
                />
                <Loading ref={'loading'} text={'Loading...'} />
            </View>
        );
    }
}


var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    swiper: {
        width: '100%',
        height: 150,
        padding: 0,
        margin: 0
    },
    swiperItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    swiperImage: {
        flex: 1,
        width: '100%',
        resizeMode: 'stretch'
    }
});