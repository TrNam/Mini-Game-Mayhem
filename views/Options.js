import React from 'react';
import { StatusBar, View, ImageBackground, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import PixelButton from '../components/PixelButton';


const window = Dimensions.get('window')

export default class Options extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            vs2Player: 'VS 2 Player',
            vsComp: 'VS Computer',
        }
    }


    static navigationOptions = {
        header: null
    }


    render() {
        const { navigate } = this.props.navigation
        const {navigation} = this.props;
        const game = navigation.getParam('game', 'Home');
        return (
            <ImageBackground
                source={require('../assets/bg/4.png')}
                style={{width:window.width, height:window.height}}
            >
            <View style={styles.container}>
                <View style={{position:'absolute', left:'2%', top:'2%'}}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.goBack()
                        }}
                    >
                        <PixelButton
                            content={'Back'}
                            buttonWidth={window.height/6}
                            buttonHeight={window.height/18}
                            textSize={window.height/35}
                            borderWidth={window.height/90}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.option}>
                    <TouchableOpacity
                        onPress = {() => {
                            if (game === "Tap") {
                                navigate('TapGame', {twoPlayers: true})
                            } else if (game === "Connect4") {
                                navigate(game,{Ai:false})
                            } else if (game === "Tic Tac Toe") {
                                navigate('TicTacToe', {twoPlayers: true})
                            } else {
                                navigate('Hangman', {twoPlayers: true})
                            }
                        }}
                    >
                        <PixelButton
                            content={'VS Player 2'}
                            buttonWidth={window.height/2.5}
                            buttonHeight={window.height/8}
                            textSize={window.height/25}
                            fontType={'munro'}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.option}>
                    <TouchableOpacity
                        onPress = {() => {
                            if (game === "Tap") {
                                navigate('TapGame', {twoPlayers: false})
                            } else if (game === "Connect4") {
                                navigate(game,{Ai:true})
                            } else if (game === "Tic Tac Toe") {
                                navigate('TicTacToe', {twoPlayers: false})
                            } else {
                                navigate('Hangman', {twoPlayers: false})
                            }
                        }}
                    >
                        <PixelButton
                            content={'VS Computer'}
                            buttonWidth={window.height/2.5}
                            buttonHeight={window.height/8}
                            textSize={window.height/25}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        backgroundColor:'transparent'
    },
    option: {
        flex:1,
        justifyContent:'center'
    },
    button: {
        width:window.height/2,
        height:window.height/10,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:10,
    },
})
