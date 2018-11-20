import React from 'react';
import { Text, View, ImageBackground, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from './components/Home';
import Intro from './components/Intro';
import Options from './components/Options';
import GamesList from './components/GamesList';
import Hangman from './screens/Hangman';


const RootStack = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    Intro: {
      screen: Intro
    },
    Options: {
      screen: Options
    },
    GamesList: {
      screen: GamesList
    },
    Hangman: {
      screen: Hangman
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


