import React, { PureComponent } from "react";
import { StyleSheet, View } from "react-native";
import { RefreshFlatList, Loading, ClassifyBar, SortBar } from "../components";
import { HttpUtils } from "../utils";

export default class TopicPage extends PureComponent {
  classify = 1;
  sort = 0;
  constructor(props) {
    super(props);
    this.state = {
      datas: []
    };
    const { state, setParams } = this.props.navigation;
    if (state && state.params) {
      this.classify = state.params.cat;
    }
  }

  _fetchRequest = pageno => {
    return HttpUtils.get("Classify/List", {
      pageno: pageno,
      cat: this.classify,
      sort: this.sort
    });
  };
  _onCatChange = cat => {
    this.classify = cat.id;
    const { setParams } = this.props.navigation;
    setParams({
      title: cat.name
    });
    this._flatList.initDatas();
  };
  _onSortChange = sort => {
    this.sort = sort;
    this._flatList.initDatas();
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ClassifyBar onChange={this._onCatChange} selected={this.classify} />
        <SortBar onChange={this._onSortChange} />
        <RefreshFlatList
          ref={flat => (this._flatList = flat)}
          fetchRequest={this._fetchRequest}
          navigation={this.props.navigation}
        />
        <Loading ref={load => (this._loading = load)} />
      </View>
    );
  }
}
