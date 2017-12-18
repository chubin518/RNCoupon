import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import PropTypes from "prop-types";
import { RefreshState } from "../utils";
const EmptyComponent = ({ text }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{text}</Text>
    </View>
  );
};

EmptyComponent.defaultProps = {
  text: "亲，木有了哦"
};

const FooterComponent = props => {
  let eleFooter = null;
  switch (props.refreshState) {
    case RefreshState.Failure:
      const onReloading = () => {
        props.reloading && props.reloading();
      };
      <TouchableOpacity
        style={styles.footerContainer}
        activeOpacity={1}
        onPress={onReloading}
      >
        <Text style={styles.footerText}>{props.failureText}</Text>
      </TouchableOpacity>;
      break;
    case RefreshState.Loading:
      eleFooter = (
        <View style={styles.footerContainer}>
          <ActivityIndicator size="small" color="#888888" />
          <Text style={[styles.footerText, { marginLeft: 7 }]}>
            {props.loadingText}
          </Text>
        </View>
      );
      break;
    case RefreshState.NoMoreData:
      eleFooter = (
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>{props.noMoreText}</Text>
        </View>
      );
      break;
  }
  return eleFooter;
};

FooterComponent.propTypes = {
  refreshState: PropTypes.number.isRequired,
  reloading: PropTypes.func.isRequired
};

FooterComponent.defaultProps = {
  loadingText: "努力加载中...",
  failureText: "暂无数据，点我重新加载",
  noMoreText: "亲，没有更多数据了..."
};

const styles = StyleSheet.create({
  footerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    height: 44
  },
  footerText: {
    fontSize: 14,
    color: "#555555"
  }
});

export { EmptyComponent, FooterComponent };
