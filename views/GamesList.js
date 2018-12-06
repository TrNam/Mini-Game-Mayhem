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
            games:["Tap'pa Tap","Checkers","Tic Tac Toe","Hangman"],
            isTapPressed: true,
            isCheckerPressed: true,
            isTicPressed: true,
            isHangPressed: true,
            isDropDownTapPressed: false,
            isDropDownCheckerPressed: false,
            isDropDownTicPressed: false,
            isDropDownHangPressed: false,
        }
    }
  

    static navigationOptions = {
        header: null
    }

    closeEverything = () => {
        this.setState({
            isTapPressed: true,
            isCheckerPressed: true,
            isTicPressed: true,
            isHangPressed: true,
            isDropDownTapPressed: false,
            isDropDownCheckerPressed: false,
            isDropDownTicPressed: false,
            isDropDownHangPressed: false,
        })
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
                        currentDropDown = this.state.isDropDownTapPressed
                        currentMoved = 'tap'
                    } else if (item === "Checkers") {
                        currentGame = this.state.isCheckerPressed
                        currentDropDown = this.state.isDropDownCheckerPressed
                        currentMoved = 'checker'
                    } else if (item === "Tic Tac Toe") {
                        currentGame = this.state.isTicPressed
                        currentDropDown = this.state.isDropDownTicPressed
                        currentMoved = 'tic'
                    } else if (item === "Hangman") {
                        currentGame = this.state.isHangPressed
                        currentDropDown = this.state.isDropDownHangPressed
                        currentMoved = 'hang'
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
                                onPress={ async () => {
                                    if (item === "Tap'pa Tap") {
                                        await this.setState({
                                            isCheckerPressed: !this.state.isCheckerPressed,
                                            isTicPressed: !this.state.isTicPressed,
                                            isHangPressed: !this.state.isHangPressed,
                                        })
                                        await this.setState({
                                            isDropDownTapPressed: !this.state.isDropDownTapPressed
                                        })
                                        
                                    } else if (item === "Checkers") {
                                        this.setState({
                                            isHangPressed: !this.state.isHangPressed,
                                            isTapPressed: !this.state.isTapPressed,
                                            isTicPressed: !this.state.isTicPressed,
                                        })
                                        this.setState({
                                            isDropDownCheckerPressed: !this.state.isDropDownCheckerPressed,
                                        })
                                    } else if (item === "Tic Tac Toe") {
                                        this.setState({
                                            isHangPressed: !this.state.isHangPressed,
                                            isCheckerPressed: !this.state.isCheckerPressed,
                                            isTapPressed: !this.state.isTapPressed,
                                            isDropDownTicPressed: !this.state.isDropDownTicPressed,
                                        })
                                    } else {
                                        this.setState({
                                            isCheckerPressed: !this.state.isCheckerPressed,
                                            isTapPressed: !this.state.isTapPressed,
                                            isTicPressed: !this.state.isTicPressed,
                                            isDropDownHangPressed: !this.state.isDropDownHangPressed,
                                        })
                                    }
                                }}
                            >
                                <PixelButton
                                    content={item}
                                    buttonWidth={window.height/2}
                                    buttonHeight={window.height/8}
                                />
                            </TouchableOpacity>
                            <DropDown
                                style={styles.dropDown}
                                pose={currentDropDown ? 'end' : 'start'}
                            >
                                {currentDropDown == true &&
                                    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                                        <Image style={{height:'90%',resizeMode:'contain'}} source={require('../assets/GIF/Hangman.gif')}/>
                                    </View>
                                }
                                {currentDropDown == true &&
                                    <View style={{position:'absolute',alignItems:'center', justifyContent:'center'}}>
                                    
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
                                                    navigate('Options', {game: 'Tap'})
                                                    this.closeEverything()
                                                } else if (item === "Checkers") {
                                                    navigate('Options', {game: 'Checkers'})
                                                    this.closeEverything()
                                                } else if (item === "Tic Tac Toe") {
                                                    navigate('Options', {game: 'Tic'})
                                                    this.closeEverything()
                                                } else {
                                                    navigate('Options', {game: 'Hang'})
                                                    this.closeEverything()
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
        backgroundColor:'#F79256',
        width:window.height/2,
        height:window.height/1.4,
        borderRadius:10,
        borderTopColor:'#F9C2A2',
        borderBottomColor:'#C94900',
        borderRightColor:'#C94900',
        borderLeftColor:'#F9C2A2',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
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