import React, { PureComponent } from 'react';

import {
    StyleSheet,
    View,
} from 'react-native';

import {
    SearchBar,
    CategoryBar,
    RefreshFlatList
} from "../components";

import { RefreshState } from "../utils";
import Loading from 'react-native-loading-w';

export default class SearchPage extends PureComponent {
    flag = null;
    keyworld = ''
    constructor(props) {
        super(props);
        const { navigate } = this.props.navigation;
        this.keyworld = navigate.keyworld;
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
            isReload: false,
        }
        this.flag = 1;
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
        this.flag && this.loading.show();
        return HttpUtils.get('search/Product', {
            k: this.keyworld,
            pageno: page,
            sort: this.state.currentCat
        }).then(response => {
            this.flag && this.loading.dismiss();
        }).catch(err => {
            this.flag && this.loading.dismiss();
        });
    }

    onSubmit(key) {
        this.keyworld = key;
        this.setState({
            isReload: true
        });
    }

    componentWillUnmount() {
        this.flag = null;
    }
    render() {
        return (
            <View style={styles.container}>
                <SearchBar
                    text={this.keyworld}
                    onSubmit={(key) => this.onSubmit(key)} />
                <CategoryBar
                    data={this.state.categories}
                    onChange={this.onCatChange} />
                <RefreshFlatList
                    isReload={this.state.isReload}
                    numColumns={2}
                    fetchRequest={(page) => this.loadData(page)}
                    renderItem={(item) =>
                        <FlatListItem
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