import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Dimensions
} from 'react-native'

import Header from './Header'
import GameBoard from './GameBoard'
import PixelButton from '../../components/PixelButton'

const window = Dimensions.get('window')
export default class Landing extends React.Component {
  static navigationOptions = {
    header: null
  }
  constructor() {
    super()
    this.state={ gameStarted: false }
  }

  startGame() {
    this.setState({ gameStarted: true })
  }

  render() {
    const { gameStarted } = this.state
    return (
      <ImageBackground
        source={require('../../assets/bg/4.png')}
        // resizeMode='contain'
        style={{width:window.width, height:window.height}}
      >
        <View style={styles.container}>
          <Header />
          {
            gameStarted ? (
              <GameBoard />
            ) : (
              <View style={styles.gameBoard}>
                <TouchableOpacity onPress={() => this.startGame()}>
                  <PixelButton
                    content='Game Start'
                    buttonWidth={window.height/2}
                    buttonHeight={window.height/8}
                    lightColor={'#F9C2A2'}
                    darkColor={'#C94900'}
                    midColor={'#F79256'} 
                    textSize={window.height/25}
                    buttonBorderColor={'#89441C'}
                  />
                </TouchableOpacity>
              </View>
            )
          }
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1
  },
  welcome: {
    fontSize: 20,
    marginTop: 50,
  },
  instructions: {
    textAlign: 'center',
    marginTop: 20,
    color: 'grey',
    marginBottom: 5,
  },
  gameBoard: {
    width:'100%', 
    height:'100%', 
    justifyContent:'center', 
    alignItems:'center'
  }
})
