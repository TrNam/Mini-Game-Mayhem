import React from 'react';
import posed from 'react-native-pose';
import { StyleSheet, Text, View, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import PixelButton from './PixelButton';
import CirclePixel from './CirclePixel';
import TrianglePixel from './TrianglePixel';

const window = Dimensions.get('window')

const DropDown = posed.View({
    start: {height: 0, borderWidth: 0, transition:{duration:500}},
    end: {height:window.height/4, borderWidth:window.height/90, transition:{duration:500}}
})




export default class GamesList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            games:["Tap'pa Tap","Checkers","Tic Tac Toe","Hangman"],
            isTapPressed: false,
            isCheckerPressed: false,
            isTicPressed: false,
            isHangPressed: false,
        }
    }
  

    static navigationOptions = {
        header: null
    }

    render() {
        const { navigate } = this.props.navigation
        return(
            <ImageBackground
                source={require('../assets/bg/4.png')}
                // resizeMode='contain'
                style={{width:window.width, height:window.height}}
            >
            <View style={styles.container}>
                {this.state.games.map((item, index) => {
                    if (item === "Tap'pa Tap") {
                        currentGame = this.state.isTapPressed
                    } else if (item === "Checkers") {
                        currentGame = this.state.isCheckerPressed
                    } else if (item === "Tic Tac Toe") {
                        currentGame = this.state.isTicPressed
                    } else if (item === "Hangman") {
                        currentGame = this.state.isHangPressed
                    }
                    return (
                        <View key={index}>
                            <TouchableOpacity
                                onPress={() => {
                                    if (item === "Tap'pa Tap") {
                                        this.setState({
                                            isTapPressed: !this.state.isTapPressed
                                        })
                                    } else if (item === "Checkers") {
                                        this.setState({
                                            isCheckerPressed: !this.state.isCheckerPressed
                                        })
                                    } else if (item === "Tic Tac Toe") {
                                        this.setState({
                                            isTicPressed: !this.state.isTicPressed
                                        })
                                    } else {
                                        this.setState({
                                            isHangPressed: !this.state.isHangPressed
                                        })
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
                            <DropDown 
                                style={[styles.dropDown, item === "Tap'pa Tap" || item === "Checkers" ? styles.down : styles.up]}
                                pose={currentGame ? 'end' : 'start'}
                            >
                                <View style={{flex:1}}></View>
                                <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                                    
                                    <View style={{position:'absolute'}}>
                                        <CirclePixel
                                            cirRadius={window.width/8}
                                            cirColor={'#F79256'}
                                            shadowColor={'#C94900'}
                                        />
                                    </View>
                                    <View style={{position:'absolute'}}>
                                        <TouchableOpacity
                                            onPress = {() => {
                                                if (item === "Tap'pa Tap") {
                                                    navigate('Options')
                                                } else if (item === "Checkers") {
                                                    navigate('Options')
                                                } else if (item === "Tic Tac Toe") {
                                                    navigate('Options')
                                                } else {
                                                    navigate('Options')
                                                }
                                            }}
                                        >
                                            <TrianglePixel
                                                triWidth={window.width/18}
                                                triHeight={window.width/14}
                                                triColor={'#F9C2A2'}
                                                triDir={'right'}
                                                shadowColor={'#C94900'}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    
                                </View>
                            </DropDown>
                        </View>
                    )
                })}
            </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'space-evenly',
        // backgroundColor:'#D2ECF2',
    },
    dropDown: {
        position:'absolute',
        backgroundColor:'#E07BD2',
        width:window.height/2,
        zIndex:1,
        borderRadius:10,
        borderTopColor:'#FFCCF8',
        borderBottomColor:'#932F86',
        borderRightColor:'#932F86',
        borderLeftColor:'#FFCCF8',
        flexDirection:'row'
    },
    down: {
        top:window.height/8,
    },
    up: {
        bottom:window.height/8,
    }
})