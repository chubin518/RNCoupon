import React, { PureComponent } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { HttpUtils } from "../utils";

export default class TopBar extends PureComponent {
    flag = null;
    constructor(props) {
        super(props);
        this.state = {
            topList: []
        }
        this.flag = 1;
    }

    componentDidMount() {
        HttpUtils.get('search/Favorite', { t=1 }).then(response => {
            this.flag && this.setState({
                topList: response.Datas
            });
        }).done();
    }

    componentWillUnmount() {
        this.flag = null;
    }

    keyExtra(item) {
        return item.SPID;
    }
    renderItem(data) {
        var item = data.item;
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={styles.productItem}>
                <Image style={styles.image}
                    source={{ uri: item.SPZT }} />
                <Text style={styles.name}
                    numberOfLines={1}>
                    {item.SPMC}
                </Text>
                <View style={styles.price}>
                    <Text style={styles.txt}>
                        券后
                        </Text>
                    <Text style={styles.cprice}>
                        {item.FP}
                    </Text>
                    <Text style={styles.rprice}>
                        {item.SPJG}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
    renderSeparator() {
        return (<View style={styles.separator}>
        </View>);
    }
    render() {
        return (
            <View
                style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headLogo}>

                    </View>
                    <Text style={styles.title}>
                        Top榜单
                    </Text>
                </View>
                <FlatList
                    style={styles.body}
                    horizontal={true}
                    data={this.state.topList}
                    renderItem={this.renderItem.bind(this)}
                    refreshing={true}
                    keyExtractor={this.keyExtra}
                    extraData={this.state}
                    showsHorizontalScrollIndicator={false}
                >
                </FlatList>
            </View>);
    }
}

var styles = StyleSheet.create({
    container: {
        height: 220,
        backgroundColor: '#fff',
    },
    separator: {
        width: 5
    },
    header: {
        height: 40,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 10,
        flexDirection: 'row'
    },
    headLogo: {
        width: 5,
        height: 18,
        marginRight: 10,
        backgroundColor: '#FF0000'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16
    },
    body: {
        flex: 1,
        marginRight: 5
    },
    productItem: {
        width: 120,
        marginLeft: 5,
        justifyContent: 'space-around'
    },
    image: {
        height: 120,
        width: '100%',
        resizeMode: 'stretch',
    },
    name: {
        height: 20,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: 5,
        fontSize: 13
    },
    price: {
        height: 20,
        flexDirection: 'row',
    },
    txt: {
        width: 30
    },
    cprice: {
        color: '#FF0000',
        paddingLeft: 5,
    },
    rprice: {
        paddingLeft: 5,
        textDecorationLine: 'line-through',
        flex: 1,
        fontSize: 13
    }
});