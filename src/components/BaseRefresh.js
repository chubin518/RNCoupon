import React, {
    PureComponent
} from 'react';

import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    TouchableOpacity,
    RefreshControl
} from 'react-native';
import PropTypes from 'prop-types'

import { RefreshState } from "../utils";

export default class BaseRefresh extends PureComponent {
    pageNo = 1;
    flag = null;
    constructor(props) {
        super(props)
        this.state = {
            refreshState: RefreshState.Idle,
            dataList: [],
            isFirst: true
        };
        this.flag = 1;
    }

    static propTypes = {
        isReload: PropTypes.bool.isRequired,
        fetchRequest: PropTypes.func.isRequired
    }

    static defaultProps = {
        isReload: false,
        loadingText: '努力加载中...',
        failureText: '暂无数据，点我重新加载',
        noMoreText: '亲，没有更多数据了...',
        emptyText: "亲，木有了哦"
    }

    componentDidMount() {
        this.setState({
            refreshState: RefreshState.Refreshing
        });
        this.loadData();
    }

    componentWillUnmount() {
        this.flag = null;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isReload) {
            this.reLoadData();
        }
    }
    /**
     * 加载数据
     */
    loadData() {
        this.flag && this.props.fetchRequest
            && this.props.fetchRequest(this.pageNo).then(data => {
                var length = data.length;
                if (length >= 10) {
                    this.flag && this.setState({
                        refreshState: RefreshState.Idle,
                        dataList: data,
                        isFirst: false
                    });
                }
                else if (length >= 1 && length < 10) {
                    this.flag && this.setState({
                        refreshState: RefreshState.NoMoreData,
                        dataList: data,
                        isFirst: false
                    });
                } else {
                    this.flag && this.setState({
                        refreshState: RefreshState.NoData,
                        isFirst: false
                    });
                }
            }).catch((ex) => {
                this.flag && this.setState({
                    refreshState: RefreshState.Failure,
                    isFirst: false
                });
            });
    }

    /**
     * 重新加载
     */
    reLoadData() {
        this.pageNo = 1;
        this.loadData();
    }

    /**
     * 下拉刷新时调用
     */
    onRefreshing() {
        if (this.canRefreshing()) {
            this.setState({
                refreshState: RefreshState.Refreshing
            });
            this.pageNo = 1;
            this.loadData();
        }
    }
    /**
     * 是否可以下拉刷新
     */
    canRefreshing() {
        if (this.state.refreshState === RefreshState.Refreshing
            || this.state.refreshState === RefreshState.Loading) {
            return false;
        }
        return true;
    }

    /**
     * 上拉加载时调用
     */
    onLoading() {
        if (this.canRefreshing()) {
            this.pageNo += 1;
            this.setState({
                refreshState: RefreshState.Loading
            });
            this.loadData();
        }
    }

    /**
     * 数据为空时的页面试图
     */
    renderEmpty(rstate) {
        let contents = null;
        if (this.state.isFirst) {
            return contents;
        }
        if (rstate === RefreshState.NoData) {
            contents = <Text>{this.props.emptyText}</Text>;
        } else if (rstate === RefreshState.Failure) {
            contents = (
                <TouchableOpacity
                    activeOpacity={1}
                    style={{
                        marginTop: 20,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={this.onRefreshing.bind(this)}>
                    <Text>{this.props.failureText}</Text>
                </TouchableOpacity>);
        }
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                marginTop: 30,
                justifyContent: 'center'
            }}>
                {contents}
            </View>
        );
    }

    renderFooter(rstate) {
        let footer = null;
        switch (rstate) {
            case RefreshState.NoMoreData:
                footer = (
                    <View style={styles.footerContainer}>
                        <Text styles={styles.footerText}>
                            {this.props.noMoreText}
                        </Text>
                    </View>
                );
                break;
            case RefreshState.Failure:
                footer = (
                    <TouchableOpacity
                        style={styles.footerContainer}
                        activeOpacity={1}
                        onPress={this.onLoading.bind(this)}>
                        <Text style={styles.footerText}>
                            {this.props.failureText}
                        </Text>
                    </TouchableOpacity>
                );
                break;
            case RefreshState.Loading:
                footer = (
                    <View style={styles.footerContainer}>
                        <ActivityIndicator size="small" color="#888888" />
                        <Text style={[styles.footerText, { marginLeft: 7 }]}>
                            {this.props.loadingText}
                        </Text>
                    </View>
                );
                break;
        }
        return footer;
    }

    renderRefreshControl() {
        return (this.state.isFirst ? null : <RefreshControl
            onRefresh={this.onRefreshing.bind(this)}
            refreshing={this.state.refreshState === RefreshState.Refreshing}
            title={this.state.refreshState === RefreshState.Refreshing ? '刷新数据中' : '松开立即更新'}
        />);
    }

    keyExtra(item) {
        return item.SPID;
    }
}


const styles = StyleSheet.create({
    footerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        height: 44,
    },
    footerText: {
        fontSize: 14,
        color: '#555555'
    }
})