import React, { PureComponent } from "react";
import { StyleSheet, View } from "react-native";
import { RefreshFlatList, Loading, ClassifyBar } from "../components";
import { HttpUtils } from "../utils";

export default class TopicPage extends PureComponent {
  currentCat = 0;
  currentSort = 0;

  constructor(props) {
    super(props);
    this.state = {
      datas: [],
      classify: [
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
      ]
    };
  }
  componentDidMount() {
    // this._flatList.initDatas();
  }

  _fetchRequest = pageno => {
    let sid = this.props.sid;
    if (this.props.navigation) {
      const { state } = this.props.navigation;
      if (state && state.params) {
        sid = state.params.sid;
      }
    }
    return HttpUtils.get("Topic/Channel", {
      t: sid,
      pageno: pageno,
      cat: this.currentCat,
      sort: this.currentSort
    });
  };
  _onCatChange = cat => {
    this.currentCat = cat;
    this._flatList.initDatas();
  };
  _onSortChange = sort => {
    this.currentSort = sort;
    this._flatList.initDatas();
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ClassifyBar onChange={this._onCatChange} />
        <ClassifyBar data={this.state.classify} onChange={this._onSortChange} />
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
