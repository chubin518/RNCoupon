import React, { PureComponent } from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    WebView
} from 'react-native';

export default class ProductDetail extends PureComponent {
    constructor(props) {
        super(props)
    }
    render() {
        return (<WebView
            style={styles.container}
            javaScriptEnabled={true}
            source={{ uri: 'https://uland.taobao.com/coupon/edetail?activityId=cd8eeeed82fa414ca7543824e29e7d8e&pid=mm_124544751_33334167_118612702&itemId=559811180569' }} />
        );
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});