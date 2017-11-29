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

export default class SectionListItem extends PureComponent {
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
                <Image style={styles.zhutu} source={{ uri: item.SPZT }} />
                <View style={styles.info}>
                    {/*  产品名称 */}
                    <Text style={styles.title}
                        numberOfLines={2}>
                        {item.SPMC}
                    </Text>
                    <View style={styles.coupon}>
                        {/* 券信息 */}
                        <Text style={styles.couponTitle}>领券</Text>
                        <Text style={styles.couponInfo}>
                            {item.CP}
                        </Text>
                    </View>
                    <View style={styles.sale}>
                        {/* 销量 */}
                        <Image style={styles.saleImage} />
                        <Text style={styles.saleInfo}>月销 {item.SPYXL}</Text>
                    </View>
                    <View style={styles.price}>
                        {/* 价格 */}
                        <Text style={styles.cprice}>
                            券后价 {item.FP}
                        </Text>
                        <Text style={styles.rprice}>
                            {item.SPJG}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}


var styles = StyleSheet.create({
    productItem: {
        height: 150,
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eeeff1',
    },
    zhutu: {
        width: 150,
        height: '100%',
        resizeMode: 'stretch'
    },
    info: {
        flex: 1,
        paddingLeft: 5,
        justifyContent: 'space-around'
    },
    title: {
        height: 40,
        alignItems: 'center',
    },
    coupon: {
        flexDirection: 'row',
        height: 30,
        alignItems: 'center',
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
    },
    saleImage: {
        width: 18,
        height: 18,
        resizeMode: 'stretch'
    },
    saleInfo: {
        flex: 1
    },
    price: {
        flexDirection: 'row',
        flex: 1,
    },
    cprice: {
        color: '#FF0000',
        fontSize: 16,
        alignSelf: "flex-end"
    },
    rprice: {
        paddingLeft: 5,
        textDecorationLine: 'line-through',
        flex: 1,
        fontSize: 13,
        alignSelf: "flex-end"
    }
});