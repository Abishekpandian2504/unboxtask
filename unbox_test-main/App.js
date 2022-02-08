/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// Why these imports?
// Read here: https://github.com/heroiclabs/nakama-js/issues/85#issuecomment-770027343
import { decode, encode } from 'base-64'
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Dimensions, LogBox } from "react-native";
// import Geocoder from "react-native-geocoding";
import Bugsnag from "@bugsnag/react-native";
import BugsnagPluginReactNavigation from '@bugsnag/plugin-react-navigation'
// import messaging from '@react-native-firebase/messaging';
// import { handleNotificationMessageClick } from "./src/state-management/notification";
// import { Settings } from 'react-native-fbsdk-next';
import Home from './src/Home'
// import LottieView from 'lottie-react-native';
// import global from './src/global'


// The returned BugsnagNavigationContainer has exactly the same usage
// except now it tracks route information to send with your error reports

// https://stackoverflow.com/a/69649068/980834



const App = () => {




  return (
    <Home />
  );
};
// }



export default App;
