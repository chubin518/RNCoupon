import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SectionList
} from "react-native";
import PropTypes from "prop-types";

const SectionListItem = ({ product, navigation }) => {
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
      <Image style={styles.zhutu} source={{ uri: product.SPZT }} />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>
          {product.SPMC}
        </Text>
        <View style={styles.coupon}>
          {/* 券信息 */}
          <Text style={styles.couponTitle}>券</Text>
          <Text style={styles.couponInfo}>￥{product.CP}</Text>
        </View>
        <View style={styles.sale}>
          <Image style={styles.saleImage} />
          <Text style={styles.saleInfo}>已售 {product.SPYXL}件</Text>
        </View>
        <View style={styles.price}>
          <View
            style={{ flexDirection: "row", alignItems: "baseline", flex: 1 }}
          >
            <Text>券后价</Text>
            <Text style={styles.cprice}>￥{product.FP}</Text>
          </View>
          <View
            style={{ flexDirection: "row", alignItems: "baseline", flex: 1 }}
          >
            <Text>原价</Text>
            <Text style={styles.rprice}>￥{product.SPJG}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

SectionListItem.propTypes = {
  product: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  productItem: {
    height: 150,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eeeff1"
  },
  zhutu: {
    width: 150,
    height: "100%",
  },
  info: {
    flex: 1,
    paddingLeft: 5,
    justifyContent: "space-around"
  },
  title: {
    height: 40,
    alignItems: "center"
  },
  coupon: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center"
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
  sale: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center"
  },
  saleImage: {
    width: 18,
    height: 18,
    resizeMode: "stretch"
  },
  saleInfo: {
    flex: 1
  },
  price: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between"
  },
  cprice: {
    color: "#FF0000",
    fontSize: 16,
    fontWeight: "bold"
  },
  rprice: {
    paddingLeft: 5,
    textDecorationLine: "line-through",
    flex: 1,
    fontSize: 13
  }
});

export default SectionListItem;
