import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';
import PrimaryScreen from './PrimaryScreen';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  PrimaryScreen: PrimaryScreen,
});

const AppContainer = createAppContainer(AppNavigator);
