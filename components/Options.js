import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import PixelButton from './PixelButton';


const window = Dimensions.get('window')

export default class Options extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            vs2Player: 'VS 2 Player',
            vsComp: 'VS Computer'
        }
    }

    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.option}>
                <PixelButton
                    content={'VS Player 2'}
                    buttonWidth={window.height/2.5}
                    buttonHeight={window.height/8}
                    lightColor={'#F4CDD1'}
                    darkColor={'#75161F'}
                    midColor={'#BA323F'} //or C14955
                    textSize={window.height/25}
                />
                </View>
                <View style={styles.option}>
                <PixelButton
                    content={'VS Computer'}
                    buttonWidth={window.height/2.5}
                    buttonHeight={window.height/8}
                    lightColor={'#F4CDD1'}
                    darkColor={'#75161F'}
                    midColor={'#BA323F'} //or C14955
                    textSize={window.height/25}
                />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        backgroundColor:'#ffffff'
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
