import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Font, AppLoading } from 'expo';
import Home from './views/Home';
import Intro from './views/Intro';
import Options from './views/Options';
import GamesList from './views/GamesList';
import TicTacToe from './views/TicTacToe/Landing';
import TapGame from './views/TapGame/TapGame';
import Connect4 from './views/Connect4/Connect4';
import HangMan from './views/Hangman/HangMan';


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
    },
    TapGame: {
      screen: TapGame
    },
    Hangman : {
      screen: HangMan
    }
  },
  {
    initialRouteName: 'Intro'
  }
)


export default class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state={
    //   isLoadingComplete: false
    // }
  }


  // _loadResourcesAsync = async () => {
  //   return Promise.all([
  //       Font.loadAsync({
  //           ...Icon.Ionicons.font,
  //           'munro': require('./assets/fonts/munro.ttf'),
  //       }),
  //   ]);
  // };

  // _handleLoadingError = error => {
  //     console.warn(error);
  // };

  // _handleFinishLoading = () => {
  //     this.setState({isLoadingComplete: true});
  // };  

  render() {
    // if (!this.state.isLoadingComplete) {
    //   return (
    //     <AppLoading
    //         startAsync={this._loadResourcesAsync}
    //         onError={this._handleLoadingError}
    //         onFinish={this._handleFinishLoading}
    //     />
    //   );
    // } else {
      return(
        <RootStack/>
      )
    // }
  }
}

