import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { system } from "../utils";
import PropTypes from "prop-types";

const FlatListItem = ({ product, navigation }) => {
  const onRedirect = () => {
    navigation.navigate &&
      navigation.navigate("detail", {
        itemId: product.SPID,
        title: product.SPMC,
        intro: product
      });
  };
  return (
    <TouchableOpacity
      onPress={onRedirect}
      activeOpacity={1}
      style={styles.productItem}
    >
      <Image style={styles.image} source={{ uri: product.SPZT }} />
      <View style={styles.intro}>
        <Text style={styles.title} numberOfLines={2}>
          {product.SPMC}
        </Text>
        <View style={styles.coupon}>
          <Text style={styles.couponTitle}>券</Text>
          <Text style={styles.couponInfo}>￥{product.CP}</Text>
          <Text style={styles.saleTotal}>月消{product.SPYXL}件</Text>
        </View>
        <View style={styles.price}>
          <Text>券后价</Text>
          <Text style={styles.cprice}>￥{product.FP}</Text>
          <Text style={styles.rprice}>￥{product.SPJG}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

FlatListItem.propTypes = {
  product: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  productItem: {
    width: system.width / 2,
    height: system.width / 2 + 100,
    justifyContent: "space-around",
    padding: 5,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#eeeff1"
  },
  image: {
    width: system.width / 2 - 10,
    height: system.width / 2 - 10,
    borderRadius: 10
  },
  intro: {
    flex: 1,
    padding: 5,
    justifyContent: "space-between"
  },
  title: {
    marginTop: 5,
    height: 40
  },
  coupon: {
    height: 20,
    flexDirection: "row"
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
  price: {
    height: 20,
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "flex-start"
  },
  cprice: {
    marginLeft: 5,
    marginRight: 5,
    color: "#FF0000",
    fontSize: 16,
    fontWeight: "bold"
  },
  rprice: {
    textDecorationLine: "line-through",
    flex: 1,
    fontSize: 13
  },
  saleTotal: {
    flex: 1,
    textAlign: "right"
  }
});

export default FlatListItem;
