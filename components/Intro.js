import posed from 'react-native-pose';
import React from 'react';
import Triangle from 'react-native-triangle';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

const window = Dimensions.get('window')

const IntroAni = posed.View({
    start: {opacity:0, transition:{duration:1000}},
    end: {opacity:1, transition:{duration:1000}}
})


export default class App extends React.Component {

    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props);
        this.state = {
            isIntroPlaying: false
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                isIntroPlaying: true
            })
        }, 1000)

        setTimeout(() => {
            this.setState({
                isIntroPlaying: false
            })
        }, 3000)

        setTimeout(() => {
            this.props.navigation.navigate('Home')
        }, 5000)
    }

    render() {
      return (
        <View style={{flex:1, backgroundColor:'black'}}>
            <IntroAni style={{flex:1, alignItems:'center', justifyContent:'center'}} pose={this.state.isIntroPlaying ? 'end' : 'start'}>
                <View style={styles.container}>
                    <Image style={{width:window.width/3, height:window.height/3, resizeMode:'contain'}} source={require('../assets/Intro/coffeeIntro.png')}/>
                    <Text style={{color:'white', fontSize:30, fontWeight:'bold', fontFamily:'sans-serif-condensed'}}>KOHI</Text>
                </View>
            </IntroAni>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
        width:window.width/2,
        height:window.height/2,
        alignItems:'center',
        justifyContent:'space-around',
    },
  });


