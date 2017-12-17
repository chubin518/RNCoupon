import React, { PureComponent } from "react";

import { Platform, StyleSheet, View, InteractionManager } from "react-native";
import SplashScreen from "react-native-splash-screen";
import RootNav from "./RootNav";

export default class Entry extends PureComponent {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      SplashScreen.hide();
    });
  }
  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }
  render() {
    return <RootNav style={{ flex: 1 }} />;
  }
}
