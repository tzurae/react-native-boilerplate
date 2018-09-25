import React from 'react';
import { GREETING_TAB } from '../constants/routes';
import GreetingScreen from '../screens/greetingScreen';

export default {
  [GREETING_TAB]: {
    screen: props => (<GreetingScreen {...props}/>),
    navigationOptions: () => ({
      header: null,
    }),
  }
};
