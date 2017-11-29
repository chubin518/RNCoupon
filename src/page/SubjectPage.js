import React, { PureComponent } from 'react';

import {
    StyleSheet,
    View,
} from 'react-native';

import {
    CategoryBar,
    RefreshFlatList
} from "../components";

import { FlatListItem } from "../components";
import Loading from 'react-native-loading-w';

export default class SubjectPage extends PureComponent {
    flag = null;
    constructor(props) {
        super(props);

        this.state = {
            categories: [
                {
                    "ID": 1,
                    "Name": "人气"
                },
                {
                    "ID": 5,
                    "Name": "推荐"
                },
                {
                    "ID": 3,
                    "Name": "销量"
                },
                {
                    "ID": 4,
                    "Name": "到手价"
                }
            ],
            currentCat: 1,
            isReload: false
        }
        flag = 1;
    }

    onCatChange(cat) {
        this.setState({
            currentCat: cat,
            isReload: true
        });
    }

    /**
     * 加载数据
     * @param page
     * @returns {Promise}
     */
    loadData(page) {
        const { navigate } = this.props.navigation;
        this.flag && this.loading.show();
        return HttpUtils.get('search/Favorite', {
            t: navigate.sid,
            pageno: page,
            sort: this.state.currentCat
        }).then(response => {
            this.flag && this.loading.dismiss();
        }).catch(err => {
            this.flag && this.loading.dismiss();
        });
    }

    componentWillUnmount() {
        this.flag = null;
    }
    render() {
        return (
            <View style={styles.container}>
                <CategoryBar
                    data={this.state.categories}
                    onChange={this.onCatChange} />
                <RefreshFlatList
                    isReload={this.state.isReload}
                    numColumns={2}
                    fetchRequest={(page) => this.loadData(page)}
                    renderItem={(item) => <FlatListItem
                        product={item.item}
                        navigation={this.props.navigation} />}
                />
                <Loading ref={ref => this.loading = ref} text={'Loading...'} />
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});