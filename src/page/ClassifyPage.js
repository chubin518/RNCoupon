import React, { PureComponent } from "react";

import { StyleSheet, View, Text, FlatList, Image } from "react-native";
import { system } from "../utils/index";

export default class ClassifyPage extends PureComponent {
  constructor(props) {
    super(props);
    this.dataSource = [
      {
        id: 0,
        name: "精选",
        desc: "优质好券等你领",
        image:
          "https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/1035099073/TB10N3SXMYDK1JjSZFNXXXnkVXa_!!0-item_pic.jpg_250x250.jpg"
      },
      {
        id: 1,
        name: "女装",
        desc: "品牌大券疯狂选",
        image:
          "https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/1035099073/TB10N3SXMYDK1JjSZFNXXXnkVXa_!!0-item_pic.jpg_250x250.jpg"
      },
      {
        id: 2,
        name: "男装",
        desc: "帅得有理由",
        image:
          "https://img.alicdn.com/imgextra/i1/757782080/TB2tVYMnJBopuFjSZPcXXc9EpXa_!!757782080.jpg_250x250.jpg"
      },
      {
        id: 3,
        name: "内衣",
        desc: "爱你全心为你",
        image:
          "https://img.alicdn.com/bao/uploaded/i4/TB1yM5cRVXXXXX_XFXXXXXXXXXX_!!0-item_pic.jpg_250x250.jpg"
      },
      {
        id: 4,
        name: "数码家电",
        desc: "他/她和你最配了",
        image:
          "https://gd1.alicdn.com/imgextra/i1/42407521/TB2a3b0mC8mpuFjSZFMXXaxpVXa_!!42407521.jpg_250x250.jpg"
      },
      {
        id: 5,
        name: "美食",
        desc: "零食冰点价",
        image:
          "https://img.alicdn.com/imgextra/i3/3166563218/TB2NAEwpH4npuFjSZFmXXXl4FXa_!!3166563218.jpg_250x250.jpg"
      },
      {
        id: 6,
        name: "美妆个护",
        desc: "春风十里绽新颜",
        image:
          "https://img.alicdn.com/bao/uploaded/i3/TB18kRjSpXXXXc6XFXXXXXXXXXX_!!0-item_pic.jpg_250x250.jpg"
      },
      {
        id: 7,
        name: "母婴",
        desc: "伴你一起慢慢长大",
        image:
          "https://img.alicdn.com/imgextra/i1/1095246860806/TB2WiSIwmFjpuFjSspbXXXagVXa_!!1095246860806.jpg_250x250.jpg"
      },
      {
        id: 8,
        name: "鞋包配饰",
        desc: "职场女性专场",
        image:
          "https://gd3.alicdn.com/imgextra/i3/1737356009/TB2BACxmCVmpuFjSZFFXXcZApXa_!!1737356009.jpg_250x250.jpg"
      },
      {
        id: 9,
        name: "家居家装",
        desc: "打造温馨爱巢",
        image:
          "https://img.alicdn.com/imgextra/i3/916243692/TB2EKSoaq9I.eBjy0FeXXXqwFXa_!!916243692.jpg_250x250.jpg"
      },
      {
        id: 10,
        name: "文体车品",
        desc: "优质好货任意选",
        image:
          "https://img.alicdn.com/imgextra/i3/2590052250/TB2swINA.lnpuFjSZFjXXXTaVXa_!!2590052250.jpg_250x250.jpg"
      },
      {
        id: 11,
        name: "其他",
        desc: "大品牌日",
        image:
          "https://img.alicdn.com/imgextra/i3/1695056629/TB2QfBMvmtkpuFjy0FhXXXQzFXa_!!1695056629.jpg_250x250.jpg"
      }
    ];
  }
  _renderItem = ({ item }) => (
    <View style={styles.classifyItem}>
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.desc}>{item.desc}</Text>
      </View>
      <Image style={styles.image} source={{ uri: item.image }} />
    </View>
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
    paddingRight: 10,
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
