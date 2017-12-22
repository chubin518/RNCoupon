import React, { PureComponent } from "react";

import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";
import { system, Config } from "../utils/index";

export default class ClassifyPage extends PureComponent {
  constructor(props) {
    super(props);
    this.dataSource = Config.Classyfy;
  }
  _redirect = item => {
    const { navigate } = this.props.navigation;
    navigate("classifyList", {
      cat: item.id,
      title:item.name
    });
  };
  _renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.classifyItem}
      onPress={() => this._redirect(item)}
    >
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.desc}>{item.desc}</Text>
      </View>
      <Image style={styles.image} source={{ uri: item.image }} />
    </TouchableOpacity>
  );

  render() {
    return (
      <FlatList
        style={styles.container}
        data={this.dataSource}
        renderItem={this._renderItem}
        numColumns={2}
        keyExtractor={(item, index) => index}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingRight: 10
  },
  classifyItem: {
    width: system.width / 2 - 15,
    height: 72,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginLeft: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#eeeff1"
  },
  info: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  },
  name: {
    color: "#333",
    fontWeight: "700"
  },
  desc: {
    fontSize: 14,
    color: "#a6a4b2"
  },
  image: {
    height: 70,
    width: 70
  }
});
