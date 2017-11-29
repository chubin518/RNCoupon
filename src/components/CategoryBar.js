import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types'

export default class CategoryBar extends PureComponent {
    constructor(props) {
        super(props)
    }

    static propTypes = {
        onChange: PropTypes.func.isRequired
    }

    itemClick(item) {
        this.catItem && this.catItem.setNativeProps({
            borderBottomWidth: 2,
            borderBottomColor: '#FF0000',
        });
        this.props.onChange && this.props.onChange(item.ID);
    }

    renderItem(data) {
        var item = data.item;
        return (<TouchableOpacity
            ref={(ref) => this.catItem = ref}
            style={[styles.item, this.props.data && this.props.data.length >= 5 ? null : { flex: 1 }]}
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
                    data={this.props.data}
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