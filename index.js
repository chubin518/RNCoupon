import { AppRegistry } from 'react-native';
import React, { PureComponent } from 'react';
import RootPage from "./src/RootPage";

// export default class App extends PureComponent {
//     render() {
//         return <RootPage />;
//     }
// }
AppRegistry.registerComponent('rnfirst', () => RootPage);
