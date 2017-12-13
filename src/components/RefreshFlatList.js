import React, { PureComponent } from "react";

import { FlatList, View } from "react-native";
import BaseRefresh from "./BaseRefresh";
import Loading from "./Loading";

export default class RefreshFlatList extends BaseRefresh {
  render() {
    return (
      <View>
        <FlatList
          data={this.state.dataList}
          refreshControl={this.renderRefreshControl()}
          onEndReachedThreshold={0.1}
          onEndReached={() => this.onLoading()}
          ListEmptyComponent={() => this.renderEmpty()}
          ListFooterComponent={() => this.renderFooter()}
          extraData={this.state}
          keyExtractor={(item, index) => index}
          {...this.props}
        />
        <Loading ref={r => (this.loading = r)} text={"Loading..."} />
      </View>
    );
  }
}
