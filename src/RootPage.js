
import { StackNavigator } from "react-navigation";
import React from 'react';
import {
    View
} from 'react-native';
import {
    MainPage,
    DetailPage,
    SearchPage,
    SubjectPage,
    WebPage
} from "./page";

const RootNavigator = StackNavigator({
    home: {
        screen: MainPage,
        navigationOptions: {
            header: null
        }
    },
    search: {
        screen: SearchPage,
        navigationOptions: ({ navigation }) => {
            const { state } = navigation;
            return {
                title: state.params.title
            };
        }
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
}, {
        initialRouteName: 'home',//根导航控制页面，默认为第一个
        mode: 'card',
        headerMode: 'screen',
        navigationOptions: {
            headerStyle: {
                height: 48,
                borderBottomWidth: 0,
                backgroundColor: '#fff',
                elevation: 0,
                shadowOpacity: 0,
            },
            headerTitleStyle: {
                alignSelf: 'center',
            },
            headerBackTitle: null,
            headerTintColor: '#333333',
            showIcon: true,
            headerRight:<View/>
        },
    });

export default RootNavigator;