import React, { PureComponent } from "react";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  RefreshControl,
  FlatList
} from "react-native";

import {
  EmptyComponent,
  FooterComponent,
  FlatListItem,
  ScrollToTop
} from "../stateless";

import { RefreshState, system } from "../utils";
import PropTypes from "prop-types";

const itemHeight = system.width / 2 + 100;

export default class RefreshFlatList extends PureComponent {
  pageno = 0;
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      refreshState: RefreshState.Idle,
      datas: []
    };
    this.flag = 1;
  }

  static propTypes = {
    fetchRequest: PropTypes.func.isRequired,
    itemHeight: PropTypes.number
  };

  componentWillUnmount() {
    this.flag = null;
  }

  initDatas() {
    this.pageno = 1;
    this._loadDatas();
  }

  /**
   * 加载数据
   */
  _loadDatas = () => {
    const { fetchRequest } = this.props;
    this.flag &&
      fetchRequest &&
      fetchRequest(this.pageno).then(res => {
        if (res && res.Datas) {
          let refreshState = RefreshState.NoData;
          const datas = this.pageno === 1 ? [] : this.state.datas;
          const length = res.Datas.length;

          if (length >= 1 && length < 10) {
            refreshState = RefreshState.NoMoreData;
          } else if (length >= 10) {
            refreshState = RefreshState.Idle;
          }

          this.flag &&
            this.setState({
              datas: datas.concat(res.Datas),
              refreshState: refreshState
            });
        }
      });
  };

  /**
   * 下拉刷新
   */
  _onRefreshing = () => {
    const currentState = this.state.refreshState;
    if (
      currentState !== RefreshState.Loading &&
      currentState !== RefreshState.Refreshing
    ) {
      this.setState({
        refreshState: RefreshState.Refreshing
      });
      this._loadDatas();
    }
  };

  /**
   * 上拉加载
   */
  _onLoading = () => {
    const currentState = this.state.refreshState;
    if (currentState === RefreshState.Idle) {
      this.setState({
        refreshState: RefreshState.Loading
      });
      this.pageno += 1;
      this._loadDatas();
    }
  };

  _renderItem = ({ item }) => (
    <FlatListItem navigation={this.props.navigation} product={item} />
  );

  /**
   * getItemLayout是一个可选的优化，用于避免动态测量内容尺寸的开销，不过前提是你可以提前知道内容的高度。如果你的行高是固定的，getItemLayout用起来就既高效又简单
   */
  _itemLayout = (item, index) => {
    const height = this.props.itemHeight ? this.props.itemHeight : itemHeight;
    return {
      length: height,
      offset: height * index,
      index
    };
  };

  _onScroll = e => {
    const offsetY = e.nativeEvent.contentOffset.y;
    this.setState({
      isShow: offsetY > 100
    });
  };

  _scrollToTop = () => {
    this._flatList.scrollToOffset({ offset: 0, animated: true });
  };

  render() {
    const isRefreshing = this.state.refreshState === RefreshState.Refreshing;
    return (
      <View style={styles.container}>
        <FlatList
          {...this.props}
          data={this.state.datas}
          numColumns={2}
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          onEndReachedThreshold={0.1}
          style={styles.listView}
          ref={flat => (this._flatList = flat)}
          keyExtractor={(item, index) => index}
          ListEmptyComponent={<EmptyComponent />}
          getItemLayout={this._itemLayout}
          onEndReached={this._onLoading}
          renderItem={this._renderItem}
          onScroll={this._onScroll}
          refreshControl={
            <RefreshControl
              onRefresh={this._onRefreshing}
              refreshing={isRefreshing}
              title={isRefreshing ? "刷新数据中" : "松开立即更新"}
            />
          }
          ListFooterComponent={
            <FooterComponent
              reloading={this._onLoading}
              refreshState={this.state.refreshState}
            />
          }
        />
        <ScrollToTop isShow={this.state.isShow} scrollTo={this._scrollToTop} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: system.height
  },
  listView: {
    flex: system.height
  }
});
