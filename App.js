import React from 'react';
import { Text, View, ImageBackground, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from './views/Home';
import Intro from './views/Intro';
import Options from './views/Options';
import GamesList from './views/GamesList';
import TicTacToe from './views/TicTacToe/Landing';
import Connect4 from './views/Connect4';

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
    Connect4: {
      screen: Connect4
    },
    TicTacToe: {
      screen: TicTacToe
    }
  },
  {
    initialRouteName: 'Home'
  }
)

export default class App extends React.Component {
  render() {
    return (
      <RootStack/>
    );
  }
}


