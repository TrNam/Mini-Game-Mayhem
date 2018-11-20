import React from 'react';
import { Text, View, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import PixelButton from './PixelButton';
import CirclePixel from './CirclePixel';
import TrianglePixel from './TrianglePixel';

const window = Dimensions.get('window')

export default class Home extends React.Component {

    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor:'#D2ECF2'}}>
                <ImageBackground
                    source={require('../assets/bg/4.png')}
                    // resizeMode='contain'
                    style={{width:window.width, height:window.height}}
                >
                    <View style={{flex:1}}></View>
                    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('GamesList')
                            }}
                        >
                            <PixelButton
                                content={'START'}
                                buttonWidth={window.height/2.5}
                                buttonHeight={window.height/8}
                                lightColor={'#F9C2A2'}
                                darkColor={'#C94900'}
                                midColor={'#F79256'} 
                                textSize={window.height/25}
                                buttonBorderColor={'#89441C'}
                            />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}


