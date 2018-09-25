import { createStackNavigator } from 'react-navigation';
import { SPLASH_SCREEN } from '../constants/routes';
import MainStackRouteConfigs from './mainStackRouteConfigs';

const AppRouteConfigs = {
  ...MainStackRouteConfigs,
};

const navigatorConfig = {
  initialRouteName: SPLASH_SCREEN,
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#ddd',
    },
    headerTitleStyle: {
      color: '#000',
    },
  },
  mode: 'modal',
};

export default createStackNavigator(AppRouteConfigs, navigatorConfig);
