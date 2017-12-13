import React, { PureComponent } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native";

export default class SubjectBar extends PureComponent {
  constructor(props) {
    super(props);
  }
  onClick = item => {
    const { navigate } = this.props.navigation;
    navigate("subject", {
      sid: item.ID,
      title: item.Name
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.subjectItem}
            onPress={() => this.onClick({ ID: 7, Name: "超值9块9" })}
          >
            <Image
              style={styles.itemImage}
              source={require("../images/9k9.jpg")}
            />
            <Text style={styles.itemTitle}>超值9块9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.subjectItem}
            onPress={() => this.onClick({ ID: 8, Name: "20元封顶" })}
          >
            <Image
              style={styles.itemImage}
              source={require("../images/20yuan.jpg")}
            />
            <Text style={styles.itemTitle}>20元封顶</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.subjectItem}
            onPress={() => this.onClick({ ID: 5, Name: "聚划算" })}
          >
            <Image
              style={styles.itemImage}
              source={require("../images/muying.jpg")}
            />
            <Text style={styles.itemTitle}>聚划算</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.subjectItem}
            onPress={() => this.onClick({ ID: 9, Name: "精品海淘" })}
          >
            <Image
              style={styles.itemImage}
              source={require("../images/tejia.jpg")}
            />
            <Text style={styles.itemTitle}>精品海淘</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            onPress={() => this.onClick({ ID: 4, Name: "今日上新" })}
            activeOpacity={1}
            style={styles.todayLeft}
          >
            <Text style={styles.itemTitle}>今日上新</Text>
            <Image style={styles.itemImage} />
          </TouchableOpacity>
          <View style={styles.todayRight}>
            <TouchableOpacity
              onPress={() => this.onClick({ ID: 2, Name: "销量爆款" })}
              activeOpacity={1}
              style={styles.xiaoLiang}
            >
              <Image style={styles.itemImage} />
              <Text style={styles.itemTitle}>销量爆款</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.onClick({ ID: 3, Name: "好券直播" })}
              activeOpacity={1}
              style={styles.zhiBo}
            >
              <Image style={styles.itemImage} />
              <Text style={styles.itemTitle}>好券直播</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    height: 280,
    backgroundColor: "#fff"
  },
  topContainer: {
    height: 120,
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 1,
    borderBottomColor: "#eeeff1"
  },
  subjectItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  itemImage: {
    width: 80,
    height: 80,
    resizeMode: "stretch"
  },
  itemTitle: {
    marginTop: 5,
    fontSize: 14,
    height: 24
  },
  bottomContainer: {
    flexDirection: "row",
    height: 160,
    borderBottomWidth: 1,
    borderBottomColor: "#eeeff1"
  },
  todayLeft: {
    width: 160,
    borderRightWidth: 1,
    borderRightColor: "#eeeff1"
  },
  todayRight: {
    flex: 1
  },
  xiaoLiang: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#eeeff1"
  },
  zhiBo: {
    flex: 1
  }
});
