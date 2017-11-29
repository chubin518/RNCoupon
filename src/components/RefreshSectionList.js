import React, {
    PureComponent
} from 'react';

import {
    SectionList
} from 'react-native';
import BaseRefresh from "./BaseRefresh";

export default class RefreshFlatList extends BaseRefresh {
    render() {
        var refresh = this.renderRefreshControl();
        return (<SectionList
            refreshControl={this.renderRefreshControl()}
            onEndReachedThreshold={0.1}
            onEndReached={this.onLoading.bind(this)}
            ListEmptyComponent={() => {
               return this.renderEmpty(this.state.refreshSate)
            }}
            ListFooterComponent={() => {
                return this.renderFooter(this.state.refreshSate)
            }}
            sections={[{ key: 1, data: this.state.dataList }]}
            extraData={this.state}
            keyExtractor={this.keyExtra}
            {...this.props}
        >
        </SectionList>);
    }
}