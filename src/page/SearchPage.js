import React, { PureComponent } from "react";

import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView
} from "react-native";

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
        <View style={styles.header}>
          <Image
            style={styles.bg}
            source={require("../images/search/bg.png")}
          />
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
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  header: {
    height: 120,
    alignItems: "center",
    justifyContent: "center"
  },
  bg: {
    width: "100%",
    height: 120,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  info: {
    alignItems: "center",
    justifyContent: "space-around"
  },
  searchBox: {
    height: 45,
    width: "90%",
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
    height: "100%",
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
