import { StackNavigator } from "react-navigation";
import React from "react";
import { View, Alert } from "react-native";
import {
  DetailPage,
  ResultPage,
  SubjectPage,
  WebPage,
  HomePage,
  WelcomePage
} from "./page";

import TabNav from "./TabNav";
import ErrorUtils from "ErrorUtils";

ErrorUtils.setGlobalHandler(e => {
  console.log(e);
  Alert.alert("异常", JSON.stringify(e));
});

const RootNavigator = StackNavigator(
  {
    tab: {
      screen: TabNav
    },
    // welcome: {
    //   screen: WelcomePage,
    //   navigationOptions: {
    //     header: null
    //   }
    // },
    result: {
      screen: ResultPage
    },
    subject: {
      screen: SubjectPage,
      navigationOptions: ({ navigation }) => {
        const { state } = navigation;
        return {
          title: state.params.title
        };
      }
    },
    detail: {
      screen: DetailPage,
      navigationOptions: ({ navigation }) => {
        const { state } = navigation;
        return {
          title: state.params.title
        };
      }
    },
    html: {
      screen: WebPage,
      navigationOptions: ({ navigation }) => {
        const { state } = navigation;
        return {
          title: state.params.title
        };
      }
    }
  },
  {
    initialRouteName: "tab", //根导航控制页面，默认为第一个
    mode: "card",
    headerMode: "screen",
    navigationOptions: {
      headerStyle: {
        height: 48,
        borderBottomWidth: 0,
        backgroundColor: "#fff",
        elevation: 0,
        shadowOpacity: 0
      },
      headerTitleStyle: {
        alignSelf: "center"
      },
      headerBackTitle: null,
      headerTintColor: "#333333",
      showIcon: true,
      headerRight: <View />
    }
  }
);

export default RootNavigator;
