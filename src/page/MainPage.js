import React, { PureComponent } from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

import {
    SearchBar,
    SubjectBar,
    TopBar,
    ProductList,
    CategoryBar
} from "../components";

import Swiper from 'react-native-swiper';


export default class MainPage extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            SwiperList: [{
                Title: '测试',
                Icon: 'http://pic2.ooopic.com/10/94/82/07b1OOOPICc6.jpg',
                Url: 'https://uland.taobao.com/coupon/edetail?activityId=a4d3e3bb798d434caf6826dd9489bca3&pid=mm_124544751_33334167_118612702&itemId=39272696835'
            }],
            Cats: [
                {
                    "ID": 1,
                    "Name": "精选",
                    "Icon": ""
                },
                {
                    "ID": 2,
                    "Name": "女人精选",
                    "Icon": ""
                },
                {
                    "ID": 8,
                    "Name": "美妆精选",
                    "Icon": ""
                },
                {
                    "ID": 4,
                    "Name": "男人",
                    "Icon": ""
                },
                {
                    "ID": 12,
                    "Name": "内衣",
                    "Icon": ""
                },
                {
                    "ID": 13,
                    "Name": "鞋包",
                    "Icon": ""
                },
                {
                    "ID": 3,
                    "Name": "母婴",
                    "Icon": ""
                },
                {
                    "ID": 6,
                    "Name": "家居",
                    "Icon": ""
                },
                {
                    "ID": 10,
                    "Name": "配饰",
                    "Icon": ""
                },
                {
                    "ID": 7,
                    "Name": "美食",
                    "Icon": ""
                },
                {
                    "ID": 14,
                    "Name": "厨卫",
                    "Icon": ""
                },
                {
                    "ID": 5,
                    "Name": "运动",
                    "Icon": ""
                },
                {
                    "ID": 9,
                    "Name": "数码",
                    "Icon": ""
                },
                {
                    "ID": 11,
                    "Name": "其它",
                    "Icon": ""
                }]
        }
    }

    renderHeader() {
        const { navigate } = this.props.navigation;
        var swiperItems = this.state.SwiperList.map(function (item, index) {
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
        });
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
                        {swiperItems}
                    </Swiper>
                </View>
                <SubjectBar navigation={this.props.navigation} />
                <TopBar navigation={this.props.navigation} />
            </View>
        );
    }

    renderSection() {
        return (
            <View style={{ backgroundColor: '#fff' }}>
                <CategoryBar cats={this.state.Cats} />
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <SearchBar />
                <ProductList
                    ListHeaderComponent={this.renderHeader.bind(this)}
                    renderSectionHeader={this.renderSection.bind(this)} />
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