import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { system } from "../utils";
import PropTypes from "prop-types";

const SelectionBar = ({ navigation }) => {
  const _onPress = item => {
    const { navigate } = navigation;
    navigate &&
      navigate("channel", {
        sid: item.ID,
        title: item.Title
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.lanmu} source={require("../images/lanmu.png")} />
      </View>
      <View style={styles.body}>
        <TouchableOpacity
          onPress={() =>
            _onPress({
              ID: 5,
              Title: "今日上新"
            })
          }
          activeOpacity={1}
          style={styles.left}
        >
          <Image />
          <Text>今日上新</Text>
        </TouchableOpacity>
        <View style={styles.right}>
          <View style={styles.top}>
            <TouchableOpacity
              onPress={() =>
                _onPress({
                  ID: 3,
                  Title: "海淘精选"
                })
              }
              activeOpacity={1}
              style={styles.subLeft}
            >
              <Image />
              <Text>海淘精选</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                _onPress({
                  ID: 1,
                  Title: "聚划算"
                })
              }
              activeOpacity={1}
              style={styles.subRight}
            >
              <Image />
              <Text>聚划算</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity
              onPress={() =>
                _onPress({
                  ID: 4,
                  Title: "天猫好货"
                })
              }
              activeOpacity={1}
              style={styles.subLeft}
            >
              <Image />
              <Text>天猫好货</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                _onPress({
                  ID: 2,
                  Title: "淘抢购"
                })
              }
              activeOpacity={1}
              style={styles.subRight}
            >
              <Image />
              <Text>淘抢购</Text>
            </TouchableOpacity>
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
    width: "100%",
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
