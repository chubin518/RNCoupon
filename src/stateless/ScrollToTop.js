import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { system } from "../utils";
import PropTypes from "prop-types";

const ScrollToTop = ({ isShow, scrollTo }) => {
  const _onPress = () => {
    scrollTo && scrollTo();
  };
  return isShow ? (
    <TouchableOpacity onPress={_onPress} style={styles.toTop} activeOpacity={1}>
      <Image
        source={require("../images/scroll.png")}
        style={{ height: 45, width: 45 }}
      />
    </TouchableOpacity>
  ) : null;
};

const styles = StyleSheet.create({
  toTop: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: 45,
    height: 45,
    left: system.width - 60,
    top: system.height - 200
  }
});

ScrollToTop.propTypes = {
  isShow: PropTypes.bool.isRequired,
  scrollTo: PropTypes.func.isRequired
};

export default ScrollToTop;
