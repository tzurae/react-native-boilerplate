import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './lib/configureStore';

const {store, persistor} = configureStore();

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View style={styles.container}>
            <Text>Hello world</Text>
          </View>
        </PersistGate>
      </Provider>
    )
  }
}
