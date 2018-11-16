import React from 'react';
import { Font } from 'expo';
import { Text, View, ImageBackground, Image } from 'react-native';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';


export default class App extends React.Component {

    state = {
        fontLoaded: false,
    };

    static navigationOptions = {
        header: null
    }

    async componentWillMount() {
        await Font.loadAsync({
            'FFF_Tusj': require('../assets/fonts/FFF_Tusj.ttf'),
        });

        this.setState({ fontLoaded: true });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground
                    source={require('../assets/coffee-s.jpg')}
                    style={{ width: '100%', height: '100%' }}
                    resizeMode = 'contain'
                    // blurRadius={3}
                >
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly' }}>
                        {
                            this.state.fontLoaded ? (
                                <Text style={{ color: 'black', fontWeight: 'bold', fontFamily: 'FFF_Tusj', fontSize: 40 }} >
                                    Hello, world!
                                </Text>
                            ) : null
                        }
                        <AwesomeButtonRick type='anchor'>Start</AwesomeButtonRick>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}


