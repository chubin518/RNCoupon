import React, { PureComponent } from "react";

import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  ImageBackground
} from "react-native";

import { system } from "../utils";

export default class ClassifyPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ""
    };
  }

  _onChangeText = txt => {
    this.setState({
      keyword: txt
    });
  };

  _onSubmit = () => {
    let { navigate } = this.props.navigation;
    navigate("result", {
      keyworld: this.state.keyword
    });
    Keyboard.dismiss();
  };

  _clearInput = () => {
    this.setState({
      keyword: ""
    });
  };
  render() {
    let clearControl = null;
    if (this.state.keyword && this.state.keyword.length >= 1) {
      clearControl = (
        <Text style={styles.cancel} onPress={this._clearInput}>
          X
        </Text>
      );
    }
    return (
      <ScrollView style={styles.container}>
        <ImageBackground
          style={styles.bg}
          source={require("../images/search/bg.png")}
        >
          <View style={styles.info}>
            <View style={styles.searchBox}>
              <Image
                style={styles.searchIcon}
                source={require("../images/search_icon.png")}
              />
              <TextInput
                placeholder="好宝贝 等你搜"
                value={this.state.keyword}
                returnKeyType="search"
                style={styles.searchInput}
                underlineColorAndroid="transparent"
                onChangeText={this._onChangeText}
                onSubmitEditing={this._onSubmit}
              />
              {clearControl}
              <TouchableOpacity
                onPress={this._onSubmit}
                activeOpacity={1}
                style={styles.searchButton}
              >
                <Text>搜索</Text>
              </TouchableOpacity>
            </View>
            <Text style={{ marginTop: 10, color: "#fff" }}>
              百万张淘宝优惠券等你搜
            </Text>
          </View>
        </ImageBackground>
        <Image
          source={require("../images/search/jiaocheng.png")}
          style={{ width: system.width, resizeMode: "stretch" }}
        />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },

  bg: {
    width: system.width,
    height: 120,
    justifyContent: "center",
    alignItems: "center"
  },
  info: {
    alignItems: "center",
    justifyContent: "space-around"
  },
  searchBox: {
    height: 45,
    width: system.width * 0.9,
    flexDirection: "row",
    borderRadius: 5,
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  },
  searchIcon: {
    width: 18,
    height: 18,
    marginLeft: 10,
    marginRight: 5,
    resizeMode: "stretch"
  },
  searchInput: {
    flex: 1,
    padding: 0,
    marginHorizontal: 5
  },
  searchButton: {
    width: 70,
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    backgroundColor: "#ffb300",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5
  },
  cancel: {
    width: 21,
    height: 21,
    alignItems: "center",
    justifyContent: "center"
  },
  body: {
    flex: 1
  }
});
