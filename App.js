import React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Font } from 'expo';
import Home from './views/Home';
import Intro from './views/Intro';
import Options from './views/Options';
import GamesList from './views/GamesList';
import TicTacToe from './views/TicTacToe/Landing';
import TapGame from './views/TapGame/TapGame';

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
    TicTacToe: {
      screen: TicTacToe
    },
    TapGame: {
      screen: TapGame
    }
  },
  {
    initialRouteName: 'GamesList'
  }
)


export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount = async () => {
    StatusBar.setHidden(true);
    await Font.loadAsync({
        'munro': require('./assets/fonts/munro.ttf'),
    });
    this.setState({ fontLoaded: true });
}

  render() {
    return (
      <RootStack/>
    );
  }
}


