import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './lib/configureStore';
import navigation from './lib/configureNavigation';
import MainStackNavigator from './navigation/mainStackNavigator';

const {store, persistor} = configureStore();

export default class App extends Component {
  setRootNavigationRef = (ref) => {
    navigation.setRootNavigator(ref);
  };

  render () {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MainStackNavigator
            ref={this.setRootNavigationRef}
          />
        </PersistGate>
      </Provider>
    )
  }
}
