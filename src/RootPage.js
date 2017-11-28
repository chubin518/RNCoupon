
import { StackNavigator } from "react-navigation";

import {
    MainPage,
    SubjectList,
    ProductDetail,
    HtmlView
} from "./page";

const RootNavigator = StackNavigator({
    home: {
        screen: MainPage,
        navigationOptions: {
            header: null
        }
    },
    subject: {
        screen: SubjectList,
        navigationOptions: ({ navigation }) => {
            const { state } = navigation;
            return {
                title: state.params.title
            };
        }
    },
    detail: {
        screen: ProductDetail
    },
    html: {
        screen: HtmlView,
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
                shadowOpacity: 0
            },
            headerTitleStyle: {
                alignSelf: 'center'
            },
            headerBackTitle: null,
            headerTintColor: '#333333',
            showIcon: true,
        },
    });

export default RootNavigator;