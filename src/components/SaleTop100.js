import React, { PureComponent } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity
} from "react-native";

const TopItem = ({ item, navigation }) => (
  <TouchableOpacity
    activeOpacity={1}
    onPress={() => {
      navigation.navigate &&
        navigation.navigate("detail", {
          itemId: item.SPID,
          title: item.SPMC,
          intro: item
        });
    }}
    style={styles.productItem}
  >
    <Image style={styles.image} source={{ uri: item.SPZT }} />
    <Text style={styles.name} numberOfLines={1}>
      {item.SPMC}
    </Text>
    <View style={styles.price}>
      <Text style={styles.cprice}>￥{item.FP}</Text>
      <Text style={styles.rprice}>￥{item.SPJG}</Text>
    </View>
  </TouchableOpacity>
);

export default class SaleTop100 extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderItem = item => (
    <TopItem navigation={this.props.navigation} item={item.item} />
  );
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headLogo} />
          <Text style={styles.title}>TOP100销量榜 - 实时更新 随时关注</Text>
        </View>
        <FlatList
          style={styles.body}
          initialNumToRender={10}
          horizontal={true}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => index}
          showsHorizontalScrollIndicator={false}
          {...this.props}
        />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    height: 210,
    backgroundColor: "#fff"
  },
  separator: {
    width: 5
  },
  header: {
    height: 40,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 10,
    flexDirection: "row"
  },
  headLogo: {
    width: 5,
    height: 18,
    marginRight: 10,
    backgroundColor: "#FF0000"
  },
  title: {
    fontWeight: "bold",
    fontSize: 16
  },
  body: {
    flex: 1,
    marginRight: 5
  },
  productItem: {
    width: 120,
    marginLeft: 5,
    justifyContent: "space-around"
  },
  image: {
    height: 120,
    width: "100%",
    resizeMode: "stretch"
  },
  name: {
    flex: 1,
    marginTop: 5
  },
  price: {
    flex: 1,
    flexDirection: "row",
    alignItems: "baseline"
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
