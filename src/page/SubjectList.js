import React, { PureComponent } from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import {
    SearchList
} from "../components";

export default class SubjectList extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            Cats: []
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <SearchList />
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});