import React, { PureComponent } from "react";

import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Image
} from "react-native";

import { system } from "../utils";

export default class SearchBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      inputText: this.props.text
    };
  }

  static defaultProps = {
    text: "",
    showLogo: false
  };

  searchClick = () => {
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state.inputText);
    }

    Keyboard.dismiss(); //回收展开的键盘
  };

  onTextChange = txt => {
    this.setState({
      inputText: txt
    });
  };

  clearInput = () => {
    this.setState({
      inputText: ""
    });
  };

  render() {
    let eleCancel = null;
    if (this.state.inputText.length >= 1) {
      eleCancel = (
        <Text onPress={this.clearInput} style={styles.cancel}>
          X
        </Text>
      );
    }
    let logo = null;
    if (this.props.showLogo) {
      logo = (
        <Image style={styles.logo} source={require("../images/logo.png")} />
      );
    }
    return (
      <View style={[styles.container, this.props.style]}>
        {logo}
        <View style={styles.searchBox}>
          <Image
            source={require("../images/search_icon.png")}
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="好宝贝 等你搜"
            returnKeyType="search"
            value={this.state.inputText}
            onChangeText={this.onTextChange}
            underlineColorAndroid="transparent"
            onSubmitEditing={this.searchClick}
            style={styles.searchInput}
          />
          {eleCancel}
        </View>
        <TouchableOpacity
          style={styles.searchButton}
          onPress={this.searchClick}
        >
          <Text>搜索</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 48,
    marginTop: system.isIOS ? 20 : 0,
    backgroundColor: "#fff"
  },
  logo: {
    height: 24,
    width: 80,
    resizeMode: "stretch" //拉伸模式
  },
  searchBox: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 5,
    backgroundColor: "#eeeff1",
    alignItems: "center"
  },
  searchIcon: {
    width: 18,
    height: 18,
    marginLeft: 10,
    marginRight: 10,
    resizeMode: "stretch"
  },
  searchInput: {
    flex: 1,
    padding: 0,
    marginHorizontal: 5
  },
  searchButton: {
    width: 55,
    alignItems: "center",
    justifyContent: "center"
  },
  cancel: {
    width: 21,
    height: 21,
    alignItems: "center",
    justifyContent: "center"
  }
});
