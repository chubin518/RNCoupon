import React from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";
import { system } from "../utils";
import Swiper from "react-native-swiper";
import AutoImage from "react-native-scalable-image";
import PropTypes from "prop-types";

const ProductName = ({ product }) => {
  return (
    <View style={styles.product}>
      <Text style={styles.name} numberOfLines={2}>
        {product.SPMC}
      </Text>
      <Text
        style={{
          marginTop: 5,
          marginBottom: 5
        }}
      >
        小编推荐：
        <Text
          style={{
            color: "#FF3C00"
          }}
        >
          {product.Desc}
        </Text>
      </Text>
      <View style={styles.price}>
        <View style={styles.oldPrice}>
          <Text>券后价</Text>
          <Text style={styles.salePrice}>￥{product.FP}</Text>
          <Text style={styles.rprice}>￥{product.SPJG}</Text>
        </View>
        <View style={styles.coupon}>
          <Text style={styles.couponTitle}>券</Text>
          <Text style={styles.couponInfo}>{product.CP}</Text>
        </View>
        <Text>月消{product.SPYXL}件</Text>
      </View>
    </View>
  );
};
ProductName.propTypes = {
  product: PropTypes.object.isRequired
};

const ProductShop = ({ product }) => {
  return (
    <View
      style={{
        height: 60,
        paddingLeft: 5,
        flexDirection: "row",
        backgroundColor: "#fff",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#eeeff1"
      }}
    >
      <Image source={{ uri: product.DPZT }} style={{ width: 55, height: 55 }} />
      <View style={{ flex: 1, marginLeft: 10, justifyContent: "space-around" }}>
        <Text style={{ height: 30, textAlignVertical: "center" }}>
          {product.DPMC}
        </Text>
        <View
          style={{ flexDirection: "row", flex: 1, justifyContent: "center" }}
        >
          {product.Evaluates &&
            product.Evaluates.map((item, index) => {
              return (
                <Text
                  key={item.Title}
                  style={{ flex: 1, flexDirection: "row" }}
                >
                  {item.Title}
                  <Text style={{ color: "red", paddingLeft: 5 }}>
                    {item.Score}
                  </Text>
                </Text>
              );
            })}
        </View>
      </View>
    </View>
  );
};
ProductShop.propTypes = {
  product: PropTypes.object.isRequired
};

const ProductImages = ({ source }) => {
  return (
    <View style={styles.swiper}>
      <Swiper
        height={150}
        loop={true}
        index={0}
        autoplay={true}
        horizontal={true}
      >
        {source && source.length >= 1 ? (
          source.map((item, index) => {
            return (
              <Image
                key={index}
                style={styles.swiperImage}
                source={{
                  uri: item
                }}
              />
            );
          })
        ) : (
          <View />
        )}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    backgroundColor: "#fff",
    width: system.width,
    padding: 10,
    justifyContent: "space-around"
  },
  name: {
    width: "100%",
    height: 50,
    textAlignVertical: "center",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#eeeff1",
    paddingBottom: 10
  },
  price: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between"
  },
  salePrice: {
    fontSize: 18,
    color: "#fc3616",
    fontWeight: "bold",
    marginLeft: 5,
    marginRight: 5
  },
  oldPrice: {
    flexDirection: "row",
    alignItems: "baseline"
  },
  rprice: {
    textDecorationLine: "line-through"
  },
  coupon: {
    flexDirection: "row",
    height: 30,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  couponTitle: {
    backgroundColor: "#ff6600",
    color: "#fff",
    paddingLeft: 3,
    paddingRight: 3,
    borderWidth: 1,
    borderColor: "#ff6600",
    textAlign: "center"
  },
  couponInfo: {
    borderWidth: 1,
    borderColor: "#ff6600",
    paddingLeft: 5,
    paddingRight: 5
  },
  swiper: {
    width: system.width,
    height: system.width,
    padding: 0,
    margin: 0
  },
  swiperImage: {
    width: system.width,
    height: system.width
  }
});

export { ProductName, ProductShop, ProductImages };
