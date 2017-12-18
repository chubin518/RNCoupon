import React, { PureComponent } from "react";

import { StyleSheet, View } from "react-native";

import {
  SearchBar,
  ClassifyBar,
  RefreshFlatList,
  Loading
} from "../components";

import { FlatListItem } from "../stateless";

import { HttpUtils } from "../utils";

export default class SearchPage extends PureComponent {
  flag = null;
  constructor(props) {
    super(props);
    const { navigate, state } = this.props.navigation;
    this.state = {
      categories: [
        {
          ID: 0,
          Name: "人气"
        },
        {
          ID: 1,
          Name: "销量"
        },
        {
          ID: 2,
          Name: "到手价"
        },
        {
          ID: 3,
          Name: "推荐"
        }
      ],
      keyworld: state.params.keyworld,
      currentCat: 0,
      isReload: false
    };
    this.flag = 1;
  }
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      headerTitle: (
        <SearchBar
          text={params.keyworld}
          onSubmit={key => params.onSearch(key)}
        />
      ),
      headerRight: null
    };
  };

  /**
   * 加载数据
   * @param page
   * @returns {Promise}
   */
  loadData(page) {
    return HttpUtils.get("search/Product", {
      k: encodeURIComponent(this.state.keyworld),
      pageno: page,
      sort: this.state.currentCat
    });
  }

  componentDidMount() {
    // this.props.navigation.setParams({
    //   keyworld: this.state.keyworld,
    //   onSearch: key => {
    //     this.setState({
    //       isReload: true,
    //       keyworld: key
    //     });
    //   }
    // });
  }

  _RenderItem = item => (
    <FlatListItem navigation={this.props.navigation} product={item.item} />
  );

  _onChange = cat => {
    this.setState({
      currentCat: cat,
      isReload: true
    });
  };
  componentWillUnmount() {
    this.flag = null;
  }
  render() {
    return (
      <View style={styles.container}>
        <ClassifyBar data={this.state.categories} onChange={this._onChange} />
        <RefreshFlatList
          isReload={this.state.isReload}
          numColumns={2}
          fetchRequest={page => this.loadData(page)}
          renderItem={this._RenderItem}
          navigation={this.props.navigation}
        />
        <Loading ref={ref => (this.loading = ref)} text={"Loading..."} />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
