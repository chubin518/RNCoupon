import React, { PureComponent } from "react";

import {
  StyleSheet,
  Text,
  View,
  RefreshControl,
  Image,
  FlatList
} from "react-native";

import {
  EmptyComponent,
  FooterComponent,
  SectionListItem,
  BannerBar,
  SelectionBar,
  ScrollToTop
} from "../stateless";
import { SwiperBar, SearchBar, Loading } from "../components";

import { RefreshState, system, HttpUtils } from "../utils";
import PropTypes from "prop-types";

const itemHeight = system.width / 2 + 100;

export default class RefreshFlatList extends PureComponent {
  pageno = 0;
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      refreshState: RefreshState.Idle,
      datas: [],
      banners: []
    };
    this.flag = 1;
  }

  static navigationOptions = ({ navigation }) => {
    const { navigate, state } = navigation;
    return {
      header: (
        <SearchBar
          showLogo={true}
          onSubmit={key => {
            navigate("result", {
              keyworld: key
            });
          }}
        />
      )
    };
  };
  
  componentDidMount() {
    this.initDatas();
  }

  initDatas() {
    this.setState({
      refreshState: RefreshState.Refreshing
    });
    HttpUtils.get("config/index").then(result => {
      this.setState({
        refreshState: result ? RefreshState.Idle : RefreshState.NoData,
        banners: result.Banners
      });
    });
  }

  componentWillUnmount() {
    this.flag = null;
  }

  /**
   * 加载数据
   */
  _loadDatas = () => {
    this.flag &&
      HttpUtils.get("Topic/all", {
        pageno: this.pageNo
      }).then(res => {
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
    <SectionListItem navigation={this.props.navigation} product={item} />
  );

  /**
   * 头部模块
   */
  _renderHeader = () => {
    return (
      <View>
        <SwiperBar
          datasource={this.state.banners}
          navigation={this.props.navigation}
        />
        <BannerBar navigation={this.props.navigation} />
        <SelectionBar navigation={this.props.navigation} />
        <View style={styles.header}>
          <Image style={styles.lanmu} source={require("../images/zhibo.png")} />
        </View>
      </View>
    );
  };
  /**
   * getItemLayout是一个可选的优化，用于避免动态测量内容尺寸的开销，不过前提是你可以提前知道内容的高度。如果你的行高是固定的，getItemLayout用起来就既高效又简单
   */
  _itemLayout = (item, index) => {
    return {
      length: itemHeight,
      offset: itemHeight * index,
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
          style={styles.listView}
          data={this.state.datas}
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          onEndReachedThreshold={0.1}
          ref={flat => (this._flatList = flat)}
          keyExtractor={(item, index) => index}
          ListEmptyComponent={<EmptyComponent />}
          getItemLayout={this._itemLayout}
          onEndReached={this._onLoading}
          renderItem={this._renderItem}
          onScroll={this._onScroll}
          ListHeaderComponent={this._renderHeader}
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
  },
  header: {
    backgroundColor: "#f5f5f5",
    height: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  lanmu: {
    height: 22,
    width: "100%",
    resizeMode: "contain"
  }
});
