import React, { PureComponent } from "react";

import { Platform, StyleSheet, View, InteractionManager } from "react-native";
import SplashScreen from "react-native-splash-screen";

export default class WelcomePage extends PureComponent {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.timer = setTimeout(() => {
      InteractionManager.runAfterInteractions(() => {
        SplashScreen.hide();
        const { navigate } = this.props.navigation;
        navigate("home");
      });
    }, 500);
  }
  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }
  render() {
    return <View style={{ flex: 1 }} />;
  }
}
