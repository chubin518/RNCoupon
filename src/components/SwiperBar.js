import React, { PureComponent } from "react";

import { StyleSheet, View, TouchableOpacity, Image } from "react-native";

import Swiper from "react-native-swiper";
import PropTypes from "prop-types";

import { system } from "../utils";

class SwiperBar extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderChild = () => {
    let navigate = this.props.navigation && this.props.navigation.navigate;
    let lstImage = this.props.datasource;
    if (lstImage && lstImage.length >= 1) {
      return lstImage.map((item, index) => {
        return (
          <Image
            key={index}
            style={styles.swiperImage}
            source={{ uri: item.Icon }}
            onPress={() => {
              if (!item.Url || item.Url.length <= 0) {
                return;
              }
              navigate &&
                navigate("html", {
                  title: item.Title,
                  url: item.Url
                });
            }}
          />
        );
      });
    } else {
      return <View />;
    }
  };
  render() {
    return (
      <View style={styles.swiper}>
        <Swiper
          height={150}
          loop={true}
          index={0}
          autoplay={true}
          horizontal={true}
        >
          {this._renderChild()}
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  swiper: {
    width: system.width,
    height: 180,
    padding: 0,
    margin: 0,
    backgroundColor: "#fff"
  },
  swiperItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  swiperImage: {
    flex: 1,
    width: system.width,
    resizeMode: "stretch"
  }
});

export default SwiperBar;
