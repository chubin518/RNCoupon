import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { system } from "../utils";
import PropTypes from "prop-types";

const SelectionBar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.lanmu} source={require("../images/lanmu.png")} />
      </View>
      <View style={styles.body}>
        <View style={styles.left}>
          <Image />
          <Text>今日上新</Text>
        </View>
        <View style={styles.right}>
          <View style={styles.top}>
            <View style={styles.subLeft}>
              <Image />
              <Text>海淘精选</Text>
            </View>
            <View style={styles.subRight}>
              <Image />
              <Text>聚划算</Text>
            </View>
          </View>
          <View style={styles.bottom}>
            <View style={styles.subLeft}>
              <Image />
              <Text>天猫好货</Text>
            </View>
            <View style={styles.subRight}>
              <Image />
              <Text>淘抢购</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

SelectionBar.propTypes = {
  navigation: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  container: {
    width: system.width,
    backgroundColor: "#FFFFFF"
  },
  header: {
    backgroundColor: "#f5f5f5",
    height: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  lanmu: {
    height: 22,
    width: '100%',
    resizeMode: "contain"
  },
  body: {
    height: 200,
    flexDirection: "row"
  },
  left: {
    flex: 1,
    borderRightColor: "#f5f5f5",
    borderRightWidth: 1
  },
  right: {
    flex: 2
  },
  top: {
    flex: 1,
    flexDirection: "row",
    borderBottomColor: "#f5f5f5",
    borderBottomWidth: 1
  },
  bottom: {
    flex: 1,
    flexDirection: "row"
  },
  subLeft: {
    flex: 1,
    borderRightColor: "#f5f5f5",
    borderRightWidth: 1
  },
  subRight: {
    flex: 1
  }
});

export default SelectionBar;
