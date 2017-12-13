import React, { PureComponent } from "react";

import {
  StyleSheet,
  Text,
  View,
  SectionList,
  RefreshControl,
  FlatList
} from "react-native";
import { RefreshState, HttpUtils } from "../utils";
import { EmptyComponent, FooterComponent, SectionListItem } from "../stateless";
import {
  CategoryBar,
  SwiperBar,
  SubjectBar,
  SaleTop100,
  SearchBar,
  Loading
} from "../components";

export default class HomePage extends PureComponent {
  currentCat = 1;
  pageNo = 1;
  constructor(props) {
    super(props);
    this.state = {
      refreshState: RefreshState.Idle,
      banners: [],
      products: [],
      topList: [],
      sections: [{ key: 0, data: [] }]
    };
  }
  setSectionData(products) {
    let datas = [];
    if (
      this.pageNo >= 2 &&
      this.state.sections &&
      this.state.sections.length >= 1
    ) {
      datas = this.state.sections[0].data;
    }
    this.setState({
      sections: [{ key: 0, data: datas.concat(products) }]
    });
  }
  static navigationOptions = ({ navigation }) => {
    const { navigate, state } = navigation;
    return {
      header: (
        <SearchBar
          showLogo={true}
          onSubmit={key => {
            navigate("search", {
              keyworld: key
            });
          }}
        />
      )
    };
  };

  componentDidMount() {
    this.refs["loading"].show();
    HttpUtils.get("config/index").then(result => {
      if (result) {
        this.setState({
          banners: result.Banners,
          topList: result.Top100
        });
        this.setSectionData(result.Products);
      }
      this.refs["loading"].dismiss();
    });
  }

  /**
   * 上拉刷新
   */
  _onRefreshing = () => {
    this.setState({
      refreshState: RefreshState.Refreshing
    });
    HttpUtils.get("config/index")
      .then(result => {
        if (result) {
          this.setState({
            banners: result.Banners,
            topList: result.Top100,
            refreshState: RefreshState.Idle
          });
          this.setSectionData(result.Products);
        } else {
          this.setState({
            refreshState: RefreshState.NoData
          });
        }
        //  this.getLoading().dismiss();
      })
      .catch(error => {
        // this.getLoading().dismiss();
      });
  };

  /**
   * 下拉加载
   */
  _onLoading = () => {
    this.pageNo += 1;
    this.loadDatas();
  };

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

        <SubjectBar navigation={this.props.navigation} />

        <SaleTop100 data={this.state.topList} navigation={this.props.navigation} />
      </View>
    );
  };

  _onChange = cat => {
    this.currentCat = cat;
    this.pageNo = 1;
    this.setState({
      products: []
    });
    this.loadDatas();
  };

  loadDatas() {
    this.setState({
      refreshState:
        this.pageNo == 1 ? RefreshState.Refreshing : RefreshState.Loading
    });
    HttpUtils.get("search/Cats", {
      cat: this.currentCat,
      pageno: this.pageNo
    }).then(resp => {
      let length = resp.Datas.length;
      if (length >= 10) {
        this.setState({
          refreshState: RefreshState.Idle
        });
        this.setSectionData(resp.Datas);
      } else if (length >= 1 && length < 10) {
        this.setState({
          refreshState: RefreshState.NoMoreData
        });
        this.setSectionData(resp.Datas);
      } else {
        this.setState({
          refreshState: RefreshState.NoData
        });
      }
    });
  }

  /**
   * 项
   */
  _renderItem = item => (
    <SectionListItem navigation={this.props.navigation} product={item.item} />
  );

  /**
   * key
   */
  _keyExtract = (item, index) => index;

  /**
   * getItemLayout是一个可选的优化，用于避免动态测量内容尺寸的开销，不过前提是你可以提前知道内容的高度。如果你的行高是固定的，getItemLayout用起来就既高效又简单
   */
  _itemLayout = (item, index) => ({
    //   150为Item高度 同时也要加上分隔符的高度
    length: 150,
    offset: 150 * index,
    index
  });
  _renderSection = () => <CategoryBar onChange={this._onChange} />;
  render() {
    const isRefreshing = this.state.refreshState === RefreshState.Refreshing;
    return (
      <View>
        <SectionList
          sections={this.state.sections}
          initialNumToRender={5}
          maxToRenderPerBatch={10}
          renderSectionHeader={this._renderSection}
          stickySectionHeadersEnabled={true}
          ListHeaderComponent={this._renderHeader}
          ListFooterComponent={
            <FooterComponent
              reloading={this._onLoading}
              refreshState={this.state.refreshState}
            />
          }
          ListEmptyComponent={<EmptyComponent />}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtract}
          getItemLayout={this._itemLayout}
          refreshControl={
            <RefreshControl
              onRefresh={this._onRefreshing}
              refreshing={isRefreshing}
              title={isRefreshing ? "刷新数据中" : "松开立即更新"}
            />
          }
          onEndReached={this._onLoading}
          onEndReachedThreshold={0.1}
        />
        <Loading ref={"loading"} text={"Loading..."} />
      </View>
    );
  }
}
