import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { system } from "../utils";
import PropTypes from "prop-types";

const BannerBar = ({ navigation }) => {
  const _onPress = item => {
    const { navigate } = navigation;
    navigate &&
      navigate(item.Url, {
        sid: item.ID,
        title: item.Title
      });
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          _onPress({
            ID: 6,
            Title: "超值9.9",
            Url: "channel"
          });
        }}
        activeOpacity={1}
        style={styles.item}
      >
        <Image style={styles.image} source={require("../images/9k91.png")} />
        <Text style={styles.title}>超值9.9</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          _onPress({
            ID: 7,
            Title: "20元封顶",
            Url: "channel"
          });
        }}
        activeOpacity={1}
        style={styles.item}
      >
        <Image style={styles.image} source={require("../images/20yuan.png")} />
        <Text style={styles.title}>20元封顶</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          _onPress({
            ID: 1,
            Title: "人气榜单",
            Url: "topic"
          });
        }}
        activeOpacity={1}
        style={styles.item}
      >
        <Image style={styles.image} source={require("../images/pinpai.png")} />
        <Text style={styles.title}>人气榜单</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          _onPress({
            ID: 5,
            Title: "品牌特卖",
            Url: "topic"
          });
        }}
        activeOpacity={1}
        style={styles.item}
      >
        <Image style={styles.image} source={require("../images/temai.png")} />
        <Text style={styles.title}>品牌特卖</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          _onPress({
            ID: 4,
            Title: "小编力荐",
            Url: "topic"
          });
        }}
        activeOpacity={1}
        style={styles.item}
      >
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
