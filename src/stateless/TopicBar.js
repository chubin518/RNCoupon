import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { system } from "../utils";
import PropTypes from "prop-types";

const TopicBar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item}>
        <Image source={require("../images/renqi.png")} style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Image style={styles.image} />
        <Text>每日必拍 无门槛直减百元</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Image style={styles.image} />
        <Text>销量爆款 优质好货任意选</Text>
      </TouchableOpacity>
    </View>
  );
};

TopicBar.propTypes = {
  navigation: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  container: {
    width: system.width,
    flexDirection: "row",
    height: 70,
    padding: 1,
    backgroundColor: "#FFFFFF",
    borderTopColor: "#f5f5f5",
    borderTopWidth: 1
  },
  item: {
    flex: 1
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "stretch"
  }
});

export default TopicBar;
