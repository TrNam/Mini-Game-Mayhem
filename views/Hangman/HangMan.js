import React from 'react';
import { Svg } from 'expo';
import { Dimensions, Keyboard, Alert, Text, View, ImageBackground, Image, Button, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, StatusBar } from 'react-native';
import { ApiService } from './apiService';
import { Font } from 'expo'
import KeyboardSpacer from 'react-native-keyboard-spacer';
import PixelButton from '../../components/PixelButton';
const window = Dimensions.get('window')
const {
    Circle,
    G,
    Line,
    Rect
} = Svg;


export default class HangMan extends React.Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            apiService: null,
            letter: '',
            theWord: '',
            hangman: '',
            wrong: 0,
            correctLettersGuessed: [],
            incorrectLettersGuessed: [],
            hangmanString: null,
            fontLoaded: false,
        }

    }

    goToMain = () => {
        this.props.navigation.navigate('GamesList');
    }


    componentWillMount = async () => {
        await Font.loadAsync({
            'munro': require('../../assets/fonts/munro.ttf'),
        });

        this.setState({ fontLoaded: true });

        const apiService = new ApiService();

        apiService.newGame()
            .then((result) => {
                this.setState({
                    apiService,

                }, () => {
                    this.setState({
                        hangmanString: this.state.apiService.hangman,
                    })
                    this.getSolution().then((theWord) => {
                        this.setState({
                            theWord
                        });
                    })
                });
            })
    }

    guessLetter = (letter) => {
        Keyboard.dismiss();
        this.textInput.clear();
        letter = letter.toLowerCase()
        if (!letter.trim() == "") {
            if (letter.length === 1 && letter.match(/[a-z]/i)) {
                this.state.apiService.guessLetter(letter)
                    .then((result) => {
                        console.log(result);
                        if (!result.correct) {
                            if (this.state.incorrectLettersGuessed.includes(letter)) {
                                alert('You have guessed this letter!')
                            } else {
                                this.setState({
                                    incorrectLettersGuessed: [...this.state.incorrectLettersGuessed, letter]
                                });
                                this.setState({
                                    wrong: this.state.wrong += 1,
                                }, () => {
                                    if (this.state.wrong > 4) {
                                        this.getSolution()
                                            .then((result) => {
                                                Alert.alert(
                                                    'You Lost',
                                                    `The word was ${result}`,
                                                    [
                                                        { text: 'Exit', onPress: () => this.goToMain() },
                                                    ],
                                                    { cancelable: false }
                                                )
                                            });
                                    }
                                })
                            }

                        } else {
                            if (this.state.correctLettersGuessed.includes(letter)) {
                                alert('You have guessed this letter!')
                            } else {
                                let display = this.state.hangmanString.split('');
                                let guess = result.hangman.split('');

                                for (var i = 0; i < display.length; i++) {
                                    if (guess[i] != '_') {
                                        display[i] = guess[i];
                                    }

                                    // if (i == display.length - 1) {

                                    // }
                                }

                                this.setState({
                                    hangmanString: display.join(''),
                                }, () => {
                                    if (!display.includes('_')) {
                                        this.getSolution()
                                            .then((result) => {
                                                Alert.alert(
                                                    'You Won',
                                                    `The word was ${result}`,
                                                    [
                                                        { text: 'Exit', onPress: () => this.goToMain() },
                                                    ],
                                                    { cancelable: false }
                                                )
                                            })
                                    }
                                })


                                console.log('Adding ', letter, ' to state');
                                this.setState({
                                    correctLettersGuessed: [...this.state.correctLettersGuessed, letter]
                                });
                            }
                        }
                    })
            }

        }

    }

    getSolution = () => {
        return new Promise((resolve, reject) => {
            this.state.apiService.getSolution()
                .then((result) => {
                    console.log(result.solution);
                    resolve(result.solution);
                })

        })
    }

    getHint = () => {
        return new Promise((resolve, reject) => {
            this.state.apiService.getHint()
                .then((result) => {
                    // console.log(result.hint);
                    resolve(result.hint)
                });
        })
    }


    render() {
        let rope = <Line x1="250" y1="0" x2="250" y2="120" stroke="#895917" strokeWidth="5" id="rope" />;
        let head = <Circle cx="250" cy="150" r="30" id="head" fill="#ecd2b7" />;
        let bodyMain = <Rect width="10" height="100" x="245" y="150" id="bodyMain" fill="#ecd2b7" />
        let hands = <G><Line x1="250" y1="200" x2="220" y2="230" stroke="#ecd2b7" stroke-Linecap="round" strokeWidth="10" id="handLeft" />
            <Line x1="250" y1="200" x2="280" y2="230" stroke="#ecd2b7" stroke-Linecap="round" strokeWidth="10" id="handRight" /></G>;
        let legs = <G><Line x1="250" y1="250" x2="230" y2="300" stroke="#ecd2b7" stroke-Linecap="round" strokeWidth="10" id="legLeft" />
            <Line x1="250" y1="250" x2="270" y2="300" stroke="#ecd2b7" stroke-Linecap="round" strokeWidth="10" id="legRight" /></G>

        return (
                <ImageBackground
                    source={require('../../assets/bg/4.png')}

                    style={{ ...StyleSheet.absoluteFillObject }}>
                    <StatusBar hidden />
                    <View style={{ flex: 2 }}>
                        <View style={styles.header}>
                            {this.state.fontLoaded && <Text style={{ fontFamily: 'munro', fontSize: 30 }}>HANGMAN</Text>}
                        </View>

                        <View style={styles.hangmanArea}>
                            <Svg style={{ marginTop: 80, }} version="1.1" viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet" class="svg-content" width="200" height="250">
                                <Rect fill="#053544" width="10" height="400" x="20" y="0" />
                                <Rect fill="#053544" width="300" height="10" x="20" y="0" />
                                <Rect fill="#053544" width="300" height="10" x="0" y="400" />
                                {this.state.wrong > 0 ? rope : null}
                                {this.state.wrong > 1 ? head : null}
                                {this.state.wrong > 2 ? bodyMain : null}
                                {this.state.wrong > 3 ? hands : null}
                                {this.state.wrong > 4 ? legs : null}
                            </Svg>


                        </View>
                        {this.state.fontLoaded && <View style={styles.wordArea}>

                            <Text style={{ fontFamily: 'munro', fontSize: 30, letterSpacing: 10 }}>{this.state.hangmanString}</Text>

                        </View>}


                    </View>
                    <View style={styles.bottomHalf}>
                        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
                            <TextInput
                                ref={input => { this.textInput = input }}
                                maxLength={1}
                                onChangeText={(letter) => this.setState({ letter })}
                                underlineColorAndroid='transparent'
                                value={this.state.letter}
                                style={{
                                    textAlign: 'center',
                                    borderColor: 'black',
                                    borderWidth: 0.5,
                                    width: 40,
                                    alignSelf: 'center',
                                    marginVertical: 10,
                                }}
                            />
                            {/* <KeyboardAvoidingView> */}
                            <TouchableOpacity style={{alignSelf: 'center',}} onPress={() => { this.guessLetter(this.state.letter) }}>
                                <PixelButton
                                    content={'SELECT'}
                                    buttonWidth={100}
                                    buttonHeight={60}
                                    textSize={10}
                                    buttonBorderColor={'#89441C'}
                                />
                            </TouchableOpacity>
                            
                            {/* </KeyboardAvoidingView> */}

                        </View>
                        
                        <View style={styles.footerButtonContainer}>
                            <TouchableOpacity onPress={() => alert(this.state.theWord)}>
                            <PixelButton
                                    content={'GET SOLUTION'}
                                    buttonWidth={100}
                                    buttonHeight={60}
                                    textSize={10}
                                    buttonBorderColor={'#89441C'}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => { this.getHint().then(result => { alert(`A letter in the word is: ${result}`) }) }}>
                            <PixelButton
                                    content={'GET HINT'}
                                    buttonWidth={100}
                                    buttonHeight={60}
                                    textSize={10}
                                    buttonBorderColor={'#89441C'}
                                />
                            </TouchableOpacity>
                        </View>
                        
                    </View>

                <KeyboardSpacer />
                </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    hangmanArea: {
        flex: 4,
        alignItems: 'center',
    },
    wordArea: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerButtonContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    buttonStyle: {
        backgroundColor: 'dodgerblue',
        height: 40,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 0,
        alignSelf: 'center',
        marginBottom: 20,
        // position: 'absolute',
    },

    buttonStyleSelect: {
        backgroundColor: 'dodgerblue',
        height: 40,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 50,
        alignSelf: 'center',
        // position: 'absolute',
    },

    bottomHalf: {
        flex: 1,
        backgroundColor: 'transparent'
    }
});


