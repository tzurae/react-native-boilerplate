/* eslint-disable no-console */

import {
  NavigationActions,
  StackActions,
} from 'react-navigation';

class NavigationService {
  rootNavigator;

  setRootNavigator = (navigatorRef) => {
    this.rootNavigator = navigatorRef;
  };

  navigate = ({
                routeName, params, key, action,
              }) => {
    if (!this.rootNavigator) {
      console.warn('No navigator set.');
    } else {
      const navigateAction = NavigationActions.navigate({
        routeName,
        params,
        key,
        action,
      });
      this.rootNavigator.dispatch(navigateAction);
    }
  }

  back = (key) => {
    if (!this.rootNavigator) {
      console.warn('No navigator set.');
    } else {
      const navigateAction = NavigationActions.back({ key });
      this.rootNavigator.dispatch(navigateAction);
    }
  }

  reset = ({
             index = 0, actions, key, routeName, params,
           }) => {
    if (!this.rootNavigator) {
      console.warn('No navigator set.');
    } else {
      const navigateAction = StackActions.reset({
        index,
        actions: actions || [NavigationActions.navigate({ routeName, params })],
        key,
      });
      this.rootNavigator.dispatch(navigateAction);
    }
  }

  setParams = ({
                 routeName, params,
               }) => {
    if (!this.rootNavigator) {
      console.warn('No navigator set.');
    } else {
      const setParamsAction = NavigationActions.setParams({
        key: routeName,
        params,
      });
      this.rootNavigator.dispatch(setParamsAction);
      console.log(routeName, params);
    }
  }
}

export default new NavigationService();
