import React, { PureComponent } from 'react';

import {
    Platform,
    StyleSheet,
    View,
    WebView
} from 'react-native';

export default class ProductDetail extends PureComponent {
    constructor(props) {
        super(props)
    }
    render() {
        const { state } = this.props.navigation;

        return (<WebView
            style={styles.container}
            javaScriptEnabled={true}
            source={{ uri: state.params.url }} />
        );
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});