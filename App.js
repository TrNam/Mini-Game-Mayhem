import React from 'react';
import { Text, View, ImageBackground, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from './components/Home';
import Intro from './components/Intro'


const RootStack = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    Intro: {
      screen: Intro
    }
  },
  {
    initialRouteName: 'Intro'
  }
)

export default class App extends React.Component {
  render() {
    return (
      <RootStack/>
    );
  }
}


