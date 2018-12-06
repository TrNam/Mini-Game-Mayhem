import React from 'react';
import CirclePixel from '../../components/CirclePixel';
import BarPixel from '../../components/BarPixel';
import PixelButton from '../../components/PixelButton';
import { Font } from 'expo';
import RefreshButton from '../../components/RefreshButton';
import QuitButton from '../../components/QuitButton'
import TrianglePixel from '../../components/TrianglePixel';

import { Modal, View, Text, ImageBackground, Dimensions, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

const window = Dimensions.get('window')


export default class TapGame extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            fontLoaded: false,
            playerOne: '2%',
            playerTwo: '2%',
            buttonOne: 1,
            buttonTwo: 1,
            menuVisible: false,
            whoWins: '',
            countDown: '3',
            isPaused: false,
        }
    }

    

    static navigationOptions = {
        header: null
    }

    componentWillMount = async () => {
        StatusBar.setHidden(true);
        await Font.loadAsync({
            'munro': require('../../assets/fonts/munro.ttf'),
        });
    
        this.setState({ fontLoaded: true });
    }

    openCloseMenu = () => {
        this.setState({
            menuVisible: !this.state.menuVisible
        })
    }

    gameStartWithComp = () => {
        setTimeout(() => {
            var compPlays = setInterval(() => {
                if (this.state.playerTwo === '94%' || this.state.isPaused === true || this.state.whoWins != '') {
                    clearInterval(compPlays);
                    if (this.state.playerTwo === '94%' && this.state.whoWins === '') {
                        this.setState({
                            whoWins:'AI WINS!'
                        })
                    }
                    this.setState({
                        playerTwo: this.decPer(this.state.playerTwo)
                    })
                }
                this.setState({
                    playerTwo: this.incPer(this.state.playerTwo)
                })

            }, 150)
        }, 4000)
    }

    _setStatecountDown = (number) => {
        this.setState({
            countDown: number
        })
    }

    countDown = () => {
        setTimeout(() => {
            this._setStatecountDown('2');
        }, 1000)
        setTimeout(() => {
            this._setStatecountDown('1');
        }, 2000)
        setTimeout(() => {
            this._setStatecountDown('0');
        }, 3000)
        setTimeout(() => {
            this._setStatecountDown('');
        }, 4000)
    }


    componentDidMount() {
        const { navigation } = this.props;
        const twoPlayers = navigation.getParam('twoPlayers', '????');
        this.countDown();
        if (!twoPlayers) {
            this.gameStartWithComp();
        }
    }

    incPer = (percent) => {
        percent = percent.split('')
        percent.pop()
        percent = percent.join('')
        percent = parseInt(percent)
        percent += 2
        percent = percent.toString();
        percent = percent + '%'
        return percent
    }

    decPer = (percent) => {
        percent = percent.split('')
        percent.pop()
        percent = percent.join('')
        percent = parseInt(percent)
        percent -= 2
        percent = percent.toString();
        percent = percent + '%'
        return percent
    }

    playAgain = () => {
        this.setState({
            playerOne: '2%',
            playerTwo: '2%',
            whoWins: ''
        })
    }

    render() {
        const { navigation } = this.props;
        const twoPlayers = navigation.getParam('twoPlayers', '????');
        const { navigate } = this.props.navigation
        return(
            <ImageBackground
                source={require('../../assets/bg/4.png')}
                // resizeMode='contain'
                style={{width:window.width, height:window.height}}
            >
            <View style={{flex:1}}>
                <View style={styles.header}>
                    <TouchableOpacity
                    onPress = {() => {
                        this.setState({
                            menuVisible: !this.state.menuVisible,
                            isPaused: !this.state.isPaused
                        })
                        if (this.state.isPaused === true && this.state.whoWins === ''){
                            this._setStatecountDown('3')
                            this.countDown();
                            if (!twoPlayers){
                                this.gameStartWithComp();
                            }
                        }
                    }}
                    >
                        <PixelButton
                            content={'Menu'}
                            buttonWidth={window.height/4}
                            buttonHeight={window.height/16}
                            textSize={window.height/35}
                            borderWidth={window.height/65}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <View style={styles.smallContainer}>
                        <View style={styles.barContainer}>
                            <View>
                                <BarPixel
                                    width={window.width/5}
                                    height={window.height/1.7}
                                    //202034
                                />
                            </View>
                            <View style={{position:'absolute'}}>
                                <BarPixel
                                    width={window.width/6}
                                    height={window.height/1.75}
                                    color= {'#6A829A'}
                                    borderColor={'#6A829A'}
                                    shadowColor= {'#ffffff'}
                                    switchHeight = {this.state.playerOne}
                                />
                            </View>
                        </View>
                        <View style={styles.buttonContainer}>
                                <View
                                onTouchStart={() => {
                                    this.setState({
                                        buttonOne: 0.5
                                    })
                                    if ((this.state.playerOne) != '94%'){
                                        this.setState({
                                            playerOne: this.incPer(this.state.playerOne)
                                        })
                                    }
                                }}
                                onTouchEnd={() => {
                                    this.setState({
                                        buttonOne: 1
                                    })
                                    if (this.state.playerOne === '94%' && this.state.whoWins === '') {
                                        this.setState({
                                            whoWins:'PLAYER 1 WINS!',
                                        })
                                        // this.playAgain();
                                    }
                                }}
                                style={{opacity:this.state.buttonOne}}
                                >
                                    <CirclePixel
                                        cirRadius={window.width/5}
                                        cirColor={'#F7CD6B'}
                                        shadowColor={'#DE7D39'}
                                    />
                                </View>
                        </View>
                    </View>
                    <View style={styles.smallContainer}>
                        <View style={styles.buttonContainer}>
                                <View
                                onTouchStart={() => {
                                    if (twoPlayers) {
                                        this.setState({
                                            buttonTwo: 0.5
                                        })
                                        if (this.state.playerTwo != '94%'){
                                            this.setState({
                                                playerTwo: this.incPer(this.state.playerTwo)
                                            })
                                        }
                                    }
                                }}
                                onTouchEnd={() => {
                                    if (twoPlayers){
                                        this.setState({
                                            buttonTwo: 1
                                        })
                                        if (this.state.playerTwo === '94%') {
                                            this.setState({
                                                whoWins:'PLAYER 2 WINS!'
                                            })
                                            // this.playAgain();
                                        }
                                    }
                                    
                                }}
                                style={{opacity:this.state.buttonTwo}}
                                >
                                    <CirclePixel
                                        cirRadius={window.width/5}
                                        cirColor={'#F7CD6B'}
                                        shadowColor={'#DE7D39'}
                                    />
                                </View>
                        </View>
                        <View style={styles.barContainer}>
                        <View>
                            <BarPixel
                                width={window.width/5}
                                height={window.height/1.7}
                                reverse={true}
                            />
                        </View>
                        <View style={{position:'absolute'}}>
                                <BarPixel
                                    width={window.width/6}
                                    height={window.height/1.75}
                                    color= {'#BF1A2A'}
                                    borderColor={'#BF1A2A'}
                                    shadowColor= {'#FFFFFF'}
                                    reverse={true}
                                    switchHeight = {this.state.playerTwo}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                {this.state.whoWins != '' &&
                    <View style={[styles.menuContainer,{zIndex:98}]}>
                        <Text style={{fontFamily: 'munro', color:'purple', fontSize:window.height/10, textAlign:'center'}}>{this.state.whoWins}</Text>
                    </View>
                }
                {this.state.countDown != '' &&
                <View style={[styles.menuContainer,{height:window.height, zIndex:100}]}>
                    <Text style={{fontFamily: 'munro',color:'purple', fontSize:window.height/10, textAlign:'center'}}>{this.state.countDown}</Text>
                </View>
                }
                {this.state.menuVisible &&
                <View style={[styles.menuContainer,{zIndex:99}]}>
                    <View style={styles.menu}>
                        <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={()=>{
                            this.setState({
                                menuVisible: !this.state.menuVisible,
                                isPaused: false
                            })
                            navigate('GamesList')
                            this._setStatecountDown('3')
                            this.playAgain();
                        }}
                        >
                            <QuitButton
                                size={window.width/8}
                            />
                        </TouchableOpacity>


                        <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => {
                            this.playAgain();
                            this.setState({
                                menuVisible: !this.state.menuVisible,
                                countDown: '3',
                                isPaused: false
                            })
                            this.countDown();
                            if (!twoPlayers){
                                this.gameStartWithComp();
                            }
                        }}                       
                        >
                            <RefreshButton
                                size={window.width/8}
                            />
                        </TouchableOpacity>


                        <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress = {() => {
                            this.setState({
                                menuVisible: !this.state.menuVisible,
                                isPaused: false
                            })
                            if (this.state.whoWins === ''){
                                this.setState({
                                    countDown: '3',
                                })
                                this.countDown();
                                if (!twoPlayers){
                                    this.gameStartWithComp();
                                }
                            }
                        }}
                        >
                            <CirclePixel
                                cirRadius={window.width/8}
                                cirColor={'#D88038'}
                                shadowColor={'#A13D3B'}
                            />
                            <View style={{position:'absolute'}}>
                                <TrianglePixel
                                    triWidth={window.width/18}
                                    triHeight={window.width/14}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                }
            </View>
            </ImageBackground>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex:10,
        flexDirection: 'row',
    },
    header: {
        flex:1,
        justifyContent:'center',
        alignItems:'flex-end',
        paddingRight:10,
        paddingLeft:10,
    },
    smallContainer: {
        flex:1,
        flexDirection:'column'
    },
    barContainer: {
        flex:4,
        alignItems: 'center',
        justifyContent:'center',
    },
    buttonContainer: {
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
    },
    menu: {
        position:'absolute',
        backgroundColor:'#F7CD6B',
        borderWidth:7,
        borderColor:'#DE7D39',
        width:window.width/1.2,
        height:window.width/5,
        borderRadius: 5,
        justifyContent:'center',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center'
    },
    menuContainer: {
        width:window.width,
        justifyContent:'center',
        alignItems:'center',
        height:window.height/1.1,
        bottom:0,
        position:'absolute', 
    }
})