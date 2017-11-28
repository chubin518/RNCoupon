import React, { PureComponent } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

export default class SubjectBar extends PureComponent {
    constructor(props) {
        super(props)
    }
    static defaultProps = {
        subjectList: [
            {
                "ID": 1,
                "Name": "超值9块9",
                "Icon": "https://www.51hui.xin/images/9k9.jpg"
            },
            {
                "ID": 2,
                "Name": "20元封顶",
                "Icon": "https://www.51hui.xin/images/20yuan.jpg"
            },
            {
                "ID": 5,
                "Name": "聚划算",
                "Icon": "https://www.51hui.xin/images/muying.jpg"
            },
            {
                "ID": 3,
                "Name": "淘抢购",
                "Icon": "https://www.51hui.xin/images/tejia.jpg"
            }
        ]
    }
    onClick(item) {
        const { navigate } = this.props.navigation;
        navigate('subject', {
            sid: item.ID,
            title: item.Name
        });
    }

    renderSubject(item, index) {
        return (<TouchableOpacity
            activeOpacity={1}
            key={index}
            style={styles.subjectItem}
            onPress={() => {
                this.onClick(item);
            }}>
            <Image style={styles.itemImage} source={{ uri: item.Icon }} />
            <Text style={styles.itemTitle}>
                {item.Name}
            </Text>
        </TouchableOpacity>);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    {
                        this.props.subjectList.map((item, index) => this.renderSubject(item, index))
                    }
                </View>
                <View style={styles.bottomContainer}>
                    <TouchableOpacity
                        onPress={this.onClick.bind(this, { ID: 1, Name: '今日上新' })}
                        activeOpacity={1}
                        style={styles.todayLeft}>
                        <Text style={styles.itemTitle}>
                            今日上新
                        </Text>
                        <Image style={styles.itemImage} />
                    </TouchableOpacity>
                    <View style={styles.todayRight}>
                        <TouchableOpacity
                            onPress={this.onClick.bind(this, { ID: 2, Name: '销量爆款' })}
                            activeOpacity={1}
                            style={styles.xiaoLiang}>
                            <Image style={styles.itemImage} />
                            <Text style={styles.itemTitle}>
                                销量爆款
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={this.onClick.bind(this, { ID: 3, Name: '销量爆款' })}
                            activeOpacity={1}
                            style={styles.zhiBo}>
                            <Image style={styles.itemImage} />
                            <Text style={styles.itemTitle}>
                                好券直播
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        height: 280
    },
    topContainer: {
        height: 120,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomWidth: 1,
        borderBottomColor: '#eeeff1',
    },
    subjectItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemImage: {
        width: 80,
        height: 80,
        resizeMode: 'stretch',
    },
    itemTitle: {
        marginTop: 5,
        fontSize: 14,
        height: 24
    },
    bottomContainer: {
        flexDirection: 'row',
        height: 160,
        borderBottomWidth: 1,
        borderBottomColor: '#eeeff1',
    },
    todayLeft: {
        width: 160,
        borderRightWidth: 1,
        borderRightColor: '#eeeff1',
    },
    todayRight: {
        flex: 1,
    },
    xiaoLiang: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#eeeff1',
    },
    zhiBo: {
        flex: 1
    }
});