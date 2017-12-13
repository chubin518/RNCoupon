import React, { PureComponent } from "react";

import { StyleSheet, View } from "react-native";

import {
  CategoryBar,
  RefreshFlatList,
  Loading
} from "../components";

import { FlatListItem } from "../stateless";

import { HttpUtils } from "../utils";

export default class SubjectPage extends PureComponent {
  loading = null;
  constructor(props) {
    super(props);

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
      currentCat: 0,
      isReload: false
    };
  }

  /**
   * 加载数据
   * @param page
   * @returns {Promise}
   */
  loadData(page) {
    const { navigate, state } = this.props.navigation;
    return HttpUtils.get("search/Favorite", {
      t: state.params.sid,
      pageno: page,
      sort: this.state.currentCat
    });
  }

  _RenderItem = item => (
    <FlatListItem navigation={this.props.navigation} product={item.item} />
  );

  render() {
    return (
      <View style={styles.container}>
        <CategoryBar
          data={this.state.categories}
          onChange={cat =>
            this.setState({
              currentCat: cat,
              isReload: true
            })
          }
        />
        <RefreshFlatList
          isReload={this.state.isReload}
          numColumns={2}
          fetchRequest={page => this.loadData(page)}
          renderItem={this._RenderItem}
        />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
