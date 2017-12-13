import { StackNavigator } from "react-navigation";
import React from "react";
import { View } from "react-native";
import { SearchBar } from "../src/components";
import {
  DetailPage,
  SearchPage,
  SubjectPage,
  WebPage,
  HomePage,
  WelcomePage
} from "./page";

const RootNavigator = StackNavigator(
  {
    home: {
      screen: HomePage
    },
    welcome: {
      screen: WelcomePage
    },
    search: {
      screen: SearchPage
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
    initialRouteName: "welcome", //根导航控制页面，默认为第一个
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
