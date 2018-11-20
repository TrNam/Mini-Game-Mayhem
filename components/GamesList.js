import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import PixelButton from './PixelButton';

const window = Dimensions.get('window')


export default class GamesList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            games:["Tap'pa Tap","Checkers","Tic Tac Toe","Hangman"]
        }
    }
  

    static navigationOptions = {
        header: null
    }

    render() {
        return(
            <View style={styles.container}>
                {this.state.games.map((item, index) => {
                    return (
                        <View key={index}>
                            <TouchableOpacity
                                onPress={() => {
                                    if (item === 'Hangman'){
                                        this.props.navigation.navigate('Hangman');
                                    } else {
                                        this.props.navigation.navigate('Options');
                                    }
                                    
                                }}
                            >
                                <PixelButton
                                    content={item}
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
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'space-evenly',
        backgroundColor:'#D2ECF2',
    },
})