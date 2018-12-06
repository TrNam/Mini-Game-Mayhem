import React from 'react';
import { Text, StatusBar, View, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import PixelButton from '../components/PixelButton';
import { Font } from 'expo';


const window = Dimensions.get('window')

export default class Home extends React.Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            fontLoaded: false
        }
    }

    componentWillMount = async () => {
        StatusBar.setHidden(true);
        await Font.loadAsync({
            'munro': require('../assets/fonts/munro.ttf'),
        });
    
        this.setState({ fontLoaded: true });
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor:'#D2ECF2'}}>
                <ImageBackground
                    source={require('../assets/bg/4.png')}
                    // resizeMode='contain'
                    style={{width:window.width, height:window.height}}
                >
                    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                        <Text style={{position:'absolute', top:'20%', fontFamily:'munro', color:'#FFCDAA',fontSize:window.height/7,textAlign:'center'}}>Mini Game Mayhem</Text>
                        <Text style={{position:'absolute',top:'22%', fontFamily:'munro', color:'#FAAD95',fontSize:window.height/7,textAlign:'center'}}>Mini Game Mayhem</Text>
                        <Text style={{position:'absolute',top:'24%', fontFamily:'munro', color:'#F59A9A',fontSize:window.height/7,textAlign:'center'}}>Mini Game Mayhem</Text>
                    </View>
                    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('GamesList')
                            }}
                            style={{bottom:'10%'}}
                        >
                            <PixelButton
                                content={'START'}
                                buttonWidth={window.height/2.5}
                                buttonHeight={window.height/8}
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


