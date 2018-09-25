import { createTabNavigator } from 'react-navigation';
import { GREETING_TAB } from '../constants/routes';
import MainTabRouteConfigs from './mainTabRouteConfigs';

const AppRouteConfigs = {
  ...MainTabRouteConfigs,
};

const navigatorConfig = {
  initialRouteName: GREETING_TAB,
};

export default createTabNavigator(AppRouteConfigs, navigatorConfig);
