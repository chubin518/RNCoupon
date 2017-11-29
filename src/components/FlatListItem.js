import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import { system } from "../utils";
import PropTypes from 'prop-types'

export default class FlatListItem extends PureComponent {
    constructor(props) {
        super(props)
    }
    static propTypes = {
        product: PropTypes.object.isRequired
    }
    render() {
        var item = this.props.product;
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={styles.productItem}>
                <Image
                    style={styles.image}
                    source={{ uri: item.SPZT }} />
                <Text style={styles.title}
                    numberOfLines={2}>
                    {item.SPMC}
                </Text>
                <View style={styles.coupon}>
                    <Text style={styles.couponTitle}>
                        领券
                        </Text>
                    <Text style={styles.couponInfo}>
                        {item.CP}
                    </Text>
                </View>
                <View style={styles.sale}>
                    <Text style={styles.cprice}>
                        券后价 {item.FP}
                    </Text>
                    <Text style={styles.rprice}>
                        销量 {item.SPYXL}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}


var styles = StyleSheet.create({
    productItem: {
        width: system.width / 2,
        height: system.width / 2 + 90,
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 5,
        backgroundColor: '#fff'
    },
    image: {
        width: system.width / 2 - 10,
        height: system.width / 2 - 10,
        resizeMode: 'stretch',
        borderRadius: 10
    },
    title: {
        height: 40,
        alignItems: 'center',
    },
    coupon: {
        flexDirection: 'row',
        height: 30,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    couponTitle: {
        height: 20,
        borderStyle: 'dotted',
        borderRightColor: '#fe0000',
        borderRightWidth: 1,
        backgroundColor: '#fe0000',
        color: '#fff',
        paddingLeft: 3,
        paddingRight: 3,
        textAlign: 'center'
    },
    couponInfo: {
        height: 20,
        marginLeft: 1,
        backgroundColor: '#f78585',
        color: '#fff',
        width: 120,
        justifyContent: 'center',
        textAlign: 'center',
    },
    sale: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    cprice: {
        flex: 1,
        color: '#FF0000',
    },
    rprice: {
        flex: 1,
        textAlign: 'right'
    },
});