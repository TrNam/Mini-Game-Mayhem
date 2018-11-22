import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native'

import {
  GAME_RESULT_NO,
  GAME_RESULT_USER,
  GAME_RESULT_AI,
  GAME_RESULT_TIE
} from './game'

import PixelButton from '../../components/PixelButton'

const window = Dimensions.get('window');

export default class Header extends Component {
  generateResultText(result) {
    switch (result) {
      case GAME_RESULT_USER:
        return 'You won the game!'
      case GAME_RESULT_AI:
        return 'AI won the game!'
      case GAME_RESULT_TIE:
        return 'Tie!'
      default:
        return ''
    }
  }

  render() {
    const { result, onRestart } = this.props
    return (
      <View>
        <Text style={styles.text}>{ this.generateResultText(result) }</Text>
        {
          result !== GAME_RESULT_NO && (
            <TouchableOpacity onPress={() => onRestart()}>
              <PixelButton
                    content='Touch Here To Play Again'
                    buttonWidth={window.height/2}
                    buttonHeight={window.height/8}
                    lightColor={'#F9C2A2'}
                    darkColor={'#C94900'}
                    midColor={'#F79256'} 
                    textSize={window.height/25}
                    buttonBorderColor={'#89441C'}
                  />
            </TouchableOpacity>
          )
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    marginTop: 20,
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  instructions: {
    marginTop: 20,
    color: 'grey',
    marginBottom: 5,
    textAlign: 'center'
  },
})
