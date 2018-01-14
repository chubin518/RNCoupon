import React, { PureComponent } from "react";

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity
} from "react-native";
import extend from "extend";
import AutoImage from "react-native-scalable-image";

import { Loading, Describe } from "../components";
import { HttpUtils, system, RNAlibcSdk } from "../utils";
import { ProductName, ProductImages } from "../stateless";

export default class DetailPage extends PureComponent {
  flag = null;
  destory = null;
  constructor(props) {
    super(props);
    this.flag = 1;
    this.state = {
      product: {}
    };
  }

  componentWillUnmount() {
    this.flag = null;
    this.destory && RNAlibcSdk.PageDestory();
  }

  componentDidMount() {
    const { navigate, state } = this.props.navigation;
    this.flag && this.loading.show();
    HttpUtils.get("detail/getdetail", {
      id: state.params.itemId
    }).then(response => {
      let product = {};
      extend(product, state.params.intro, response);
      this.flag &&
        this.setState({
          product: product
        });
      this.flag && this.loading.dismiss();
    });
  }

  _goBuy = () => {
    let product = this.state.product;
    this.destory = 1;
    RNAlibcSdk.Show(product.SPYHQTGLJ);
  };

  _renderItem = ({ item }) => {
    return (
      <AutoImage
        width={system.width}
        style={{
          margin: 0,
          padding: 0,
          resizeMode: "stretch"
        }}
        source={{ uri: item }}
      />
    );
  };

  _renderHeader = () => {
    let product = this.state.product;
    return (
      <View>
        <ProductImages source={product.Images} />
        <ProductName product={product} />
        <View
          style={{
            borderLeftColor: "#FF0036",
            borderLeftWidth: 3,
            borderStyle: "solid",
            height: 45,
            padding: 3,
            justifyContent: "center",
            backgroundColor: "#FFFFFF",
            marginTop: 5
          }}
        >
          <Text
            style={{
              fontSize: 18,
              paddingLeft: 10
            }}
          >
            商品图片
          </Text>
        </View>
      </View>
    );
  };

  render() {
    let product = this.state.product;
    return (
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={this._renderHeader}
          keyExtractor={(item, index) => index}
          data={product.Details}
          renderItem={this._renderItem}
        />
        <TouchableOpacity
          style={{
            height: 50,
            backgroundColor: "#fff",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row"
          }}
          activeOpacity={1}
          onPress={this._goBuy}
        >
          <Text style={{ marginLeft: 5, flex: 1 }}>
            券后价：
            <Text style={{ color: "#fc3616" }}>￥</Text>
            <Text style={[styles.salePrice, { fontSize: 24 }]}>
              {product.FP}
            </Text>
          </Text>
          <View
            style={{
              backgroundColor: "#f69919",
              height: 50,
              justifyContent: "center",
              alignItems: "center",
              minWidth: 70
            }}
          >
            <Text style={{ color: "#fff" }}>优惠券</Text>
            <Text style={{ color: "#fff" }}>{product.CP}元</Text>
          </View>
          <Text
            style={{
              width: 120,
              height: 50,
              fontWeight: "bold",
              fontSize: 18,
              backgroundColor: "#fc3616",
              color: "#fff",
              textAlign: "center",
              textAlignVertical: "center"
            }}
          >
            领券购买
          </Text>
        </TouchableOpacity>
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
