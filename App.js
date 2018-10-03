import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "react-navigation"

import Sentry from 'sentry-expo'

import HomeScreen from './HomeScreen'
import CounterScreen from './CounterScreen'

Sentry.enableInExpoDevelopment = true;
Sentry.config('https://4abe208ad60141f688c00fa33632c83d@sentry.io/1293538').install();

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Counter: {
    screen: CounterScreen
  }
})

export default class App extends React.Component {
  render() {
    return (
      <RootStack/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
