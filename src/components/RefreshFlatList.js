import React, {
    PureComponent
} from 'react';

import {
    FlatList
} from 'react-native';
import BaseRefresh from "./BaseRefresh";

export default class RefreshFlatList extends BaseRefresh {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <FlatList
                data={this.state.dataList}
                refreshControl={this.renderRefreshControl()}
                onEndReachedThreshold={0.1}
                onEndReached={this.onLoading.bind(this)}
                ListEmptyComponent={() => {
                    return this.renderEmpty(this.state.refreshSate)
                }}
                ListFooterComponent={() => {
                    return this.renderFooter(this.state.refreshSate)
                }}
                extraData={this.state}
                keyExtractor={this.keyExtra}
                {...this.props}
            />
        );
    }
}