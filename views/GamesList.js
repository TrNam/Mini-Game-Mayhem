import React from 'react';
import posed from 'react-native-pose';
import { StyleSheet, Text, View, ImageBackground, Dimensions, TouchableOpacity, Image } from 'react-native';
import PixelButton from '../components/PixelButton';
import CirclePixel from '../components/CirclePixel';
import TrianglePixel from '../components/TrianglePixel';

const window = Dimensions.get('window')



const DropDown = posed.View({
    start: {height: 0, borderWidth: 0, transition:{duration:500}},
    end: {height:400, borderWidth: window.height/90, transition:{duration:500}}
})

const TheGame = posed.View({
    selected: {y:window.height/10, transition:{duration:350}},
    tap: {y: window.height/10,transition:{duration:250}},
    tic: {y: window.height/10 + window.height/8 + window.height/10, transition:{duration:350}},
    checker: {y: (window.height/10 + (window.height/8)*2 + (window.height/10)*2),transition:{duration:500}},
    hang: {y: (window.height/10 + (window.height/8)*3 + (window.height/10)*3),transition:{duration:650}}
})


export default class GamesList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            games:["Tap'pa Tap","Connect4","Tic Tac Toe","Hangman"],
            isTapPressed: true,
            isCheckerPressed: true,
            isTicPressed: true,
            isHangPressed: true,
            isDropDownTapPressed: false,
            isDropDownCheckerPressed: false,
            isDropDownTicPressed: false,
            isDropDownHangPressed: false,
            isTapMoved: false,
            isTicMoved: false,
            isHangMoved: false,
            isCheckerMoved: false,
        }
    }
  

    static navigationOptions = {
        header: null
    }


    render() {
        const { navigate } = this.props.navigation
        closeEverything = () => {
            this.setState({
                isTapPressed: false,
                isCheckerPressed: false,
                isTicPressed: false,
                isHangPressed: false,
            })
        }
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
                        currentDropDown = this.state.isDropDownTapPressed
                        currentMoved = 'tap'
                        test = this.state.isTapMoved
                    } else if (item === "Connect4") {
                        currentGame = this.state.isCheckerPressed
                        currentDropDown = this.state.isDropDownCheckerPressed
                        currentMoved = 'checker'
                        test = this.state.isCheckerMoved
                    } else if (item === "Tic Tac Toe") {
                        currentGame = this.state.isTicPressed
                        currentDropDown = this.state.isDropDownTicPressed
                        currentMoved = 'tic'
                        test = this.state.isTicMoved
                    } else if (item === "Hangman") {
                        currentGame = this.state.isHangPressed
                        currentDropDown = this.state.isDropDownHangPressed
                        currentMoved = 'hang'
                        test = this.state.isHangMoved
                    }
                    return (
                        <TheGame 
                        key={index} 
                        style={styles.theGame}
                        pose={currentDropDown ? 'selected' : currentMoved}
                        >
                        {currentGame == true && 
                        <View>
                            <TouchableOpacity
                                onPress={() => {
                                    if (item === "Tap'pa Tap") {
                                        this.setState({
                                            isCheckerPressed: !this.state.isCheckerPressed,
                                            isTicPressed: !this.state.isTicPressed,
                                            isHangPressed: !this.state.isHangPressed,
                                            isDropDownTapPressed: !this.state.isDropDownTapPressed,
                                            isTapMoved: !this.state.isTapMoved
                                        })
                                        
                                    } else if (item === "Connect4") {
                                        this.setState({
                                            isHangPressed: !this.state.isHangPressed,
                                            isTapPressed: !this.state.isTapPressed,
                                            isTicPressed: !this.state.isTicPressed,
                                            isDropDownCheckerPressed: !this.state.isDropDownCheckerPressed,
                                            isCheckerMoved: !this.state.isCheckerMoved
                                        })
                                    } else if (item === "Tic Tac Toe") {
                                        this.setState({
                                            isHangPressed: !this.state.isHangPressed,
                                            isCheckerPressed: !this.state.isCheckerPressed,
                                            isTapPressed: !this.state.isTapPressed,
                                            isDropDownTicPressed: !this.state.isDropDownTicPressed,
                                            isTicMoved: !this.state.isTicMoved
                                        })
                                    } else {
                                        this.setState({
                                            isCheckerPressed: !this.state.isCheckerPressed,
                                            isTapPressed: !this.state.isTapPressed,
                                            isTicPressed: !this.state.isTicPressed,
                                            isDropDownHangPressed: !this.state.isDropDownHangPressed,
                                            isHangMoved: !this.state.isHangMoved
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
                            {currentDropDown == true &&
                                <View style={{position:'absolute', right:50, top:40, alignItems:'center', justifyContent:'center'}}>
                                    
                                    <View style={{position:'absolute'}}>
                                        <CirclePixel
                                            cirRadius={window.width/8}
                                            cirColor={'#E07BD2'}
                                            shadowColor={'#932F86'}
                                        />
                                    </View>
                                    <View style={{position:'absolute'}}>
                                        <TouchableOpacity
                                            onPress = {() => {
                                                if (item === "Tap'pa Tap") {
                                                    navigate('Options')
                                                } else if (item === "Connect4") {
                                                    navigate('Connect4')
                                                } else if (item === "Tic Tac Toe") {
                                                    navigate('TicTacToe')
                                                } else {
                                                    navigate('Hangman')
                                                }
                                            }}
                                        >
                                            <TrianglePixel
                                                triWidth={window.width/18}
                                                triHeight={window.width/14}
                                                triColor={'#FFCCF8'}
                                                triDir={'right'}
                                                shadowColor={'#932F86'}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    
                                </View>
                                }
                            <DropDown
                                style={styles.dropDown}
                                pose={currentDropDown ? 'end' : 'start'}
                            >
                                {currentDropDown == true &&
                                    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                                        <Image style={{height:'90%',resizeMode:'contain'}} source={require('../assets/GIF/Hangman.gif')}/>
                                    </View>
                                }
                            </DropDown>
                        </View>}
                        </TheGame>
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
        // justifyContent:'space-evenly',
    },
    theGame: {
        position:'absolute'
    },
    dropDown: {
        backgroundColor:'#E07BD2',
        width:window.height/2,
        height:window.height/1.4,
        borderRadius:10,
        borderTopColor:'#FFCCF8',
        borderBottomColor:'#932F86',
        borderRightColor:'#932F86',
        borderLeftColor:'#FFCCF8',
        flexDirection:'row',
        borderWidth:window.height/90,
    },
    tap: {
        top:10
    },
    tic: {
        top:100
    },
    checker: {
        bottom:100
    },
    hang: {
        bottom:10
    }
})