/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
// react-native run-android --port 8097
// react-native start
// react-native link
// react-native run-android --variant=release