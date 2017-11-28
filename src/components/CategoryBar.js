import React, { PureComponent } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity
} from 'react-native';

export default class CategoryBar extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            selectCat: 1,
            catList: this.props.cats
        }
    }

    itemClick(item) {
        this.setState({
            selectCat: item.ID
        });
    }

    renderItem(data) {
        var item = data.item;
        return (<TouchableOpacity
            style={[styles.item, this.state.selectCat == item.ID ? styles.selected : null]}
            activeOpacity={1}
            onPress={this.itemClick.bind(this, item)}>
            <Text>
                {item.Name}
            </Text>
        </TouchableOpacity>
        );
    }

    keyExtra(item) {
        return item.ID;
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.body}
                    horizontal={true}
                    data={this.state.catList}
                    renderItem={this.renderItem.bind(this)}
                    refreshing={true}
                    keyExtractor={this.keyExtra}
                    extraData={this.state}
                    showsHorizontalScrollIndicator={false}>
                </FlatList>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#eeeff1',
    },
    selected: {
        borderBottomWidth: 2,
        borderBottomColor: '#FF0000',
    },
    body: {
        flex: 1,
    },
    item: {
        width: 70,
        justifyContent: 'center',
        alignItems: 'center'
    }
});