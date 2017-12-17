import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { system } from "../utils";
import PropTypes from "prop-types";

const BannerBar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={1} style={styles.item}>
        <Image style={styles.image} source={require("../images/9k91.png")} />
        <Text style={styles.title}>超值9.9</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={1} style={styles.item}>
        <Image style={styles.image} source={require("../images/20yuan.png")} />
        <Text style={styles.title}>20元封顶</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={1} style={styles.item}>
        <Image style={styles.image} source={require("../images/pinpai.png")} />
        <Text style={styles.title}>人气榜单</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={1} style={styles.item}>
        <Image style={styles.image} source={require("../images/temai.png")} />
        <Text style={styles.title}>品牌特卖</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={1} style={styles.item}>
        <Image
          style={styles.image}
          source={require("../images/xiaobian.png")}
        />
        <Text style={styles.title}>小编力荐</Text>
      </TouchableOpacity>
    </View>
  );
};

BannerBar.propTypes = {
  navigation: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  container: {
    width: system.width,
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#FFFFFF"
  },
  item: {
    flex: 1,
    height: 75,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 5,
    paddingRight: 5
  },
  image: {
    width: 50,
    height: 50
  },
  title: {
    marginTop: 5,
    textAlign: "center"
  }
});

export default BannerBar;
