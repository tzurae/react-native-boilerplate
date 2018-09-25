import React from 'react';
import MainTabNavigator from './mainTabNavigator';

// screens
import SplashScreen from '../screens/splashScreen';
import LoginScreen from '../screens/loginScreen';

// constants
import {
  SPLASH_SCREEN,
  SIGN_UP,
  MAIN_TAB,
} from '../constants/routes';

export default {
  [SPLASH_SCREEN]: {
    screen: props => (<SplashScreen {...props} />),
    navigationOptions: () => ({
      header: null,
    })
  },
  [SIGN_UP]: {
    screen: props => (<LoginScreen {...props}/>),
    navigationOptions: () => ({
      header: null,
    })
  },
  [MAIN_TAB]: {
    screen: MainTabNavigator,
    navigationOptions: () => ({
      header: null,
    })
  }
};
