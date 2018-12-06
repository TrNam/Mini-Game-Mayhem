import React from 'react';
import PropTypes from 'prop-types';
import { Font } from 'expo';
import { Text, View, StyleSheet, Dimensions} from 'react-native';

const window = Dimensions.get('window')
const _BORDER_BUTTON = window.height/45;

export default class PixelButton extends React.Component {
    static propTypes = {
        content: PropTypes.string.isRequired,
        buttonWidth: PropTypes.number.isRequired,
        buttonHeight: PropTypes.number.isRequired,
        lightColor: PropTypes.string.isRequired,
        darkColor: PropTypes.string.isRequired,
        midColor: PropTypes.string.isRequired,
        fontType: PropTypes.string.isRequired,
        textSize: PropTypes.number.isRequired,
        borderWidth: PropTypes.number.isRequired,
        buttonBorderColor: PropTypes.string.isRequired,
    }

    static defaultProps = {
        lightColor:'#F9C2A2',
        darkColor:'#C94900',
        midColor:'#F79256',
        textSize:window.height/25,
        buttonBorderColor:'#89441C',
        borderWidth: _BORDER_BUTTON,
        fontType:'sans-serif-condensed'
    }

    constructor(props){
        super(props);
        this.state={
            fontLoaded: false,
        }
    }

    componentWillMount = async () => {
        await Font.loadAsync({
            'munro': require('../assets/fonts/munro.ttf'),
        });
        this.setState({ fontLoaded: true });
    }

    render() {
        const { content, fontType, buttonHeight, buttonWidth, lightColor, darkColor, midColor, textSize, buttonBorderColor, borderWidth } = this.props;
        let theWidth = buttonWidth - borderWidth
        let theHeight = buttonHeight - borderWidth
        return (
            <View style={[styles.button,{width:buttonWidth, height:buttonHeight}]}>
                <View style={[styles.borderTopAndBottom,{top:0, height: borderWidth, width:theWidth, backgroundColor:buttonBorderColor}]}></View>
                <View style={[styles.borderTopAndBottom,{bottom:0, height: borderWidth, width:theWidth, backgroundColor:buttonBorderColor}]}></View>
                <View style={[styles.borderLeftAndRight,{left:0, width:borderWidth, height:theHeight, backgroundColor:buttonBorderColor}]}></View>
                <View style={[styles.borderLeftAndRight,{right:0, width:borderWidth, height:theHeight, backgroundColor:buttonBorderColor}]}></View>
                    <View style={
                        [
                            styles.buttonInside,
                            {
                                borderBottomColor:darkColor,
                                borderRightColor:darkColor,
                                borderLeftColor:lightColor,
                                borderTopColor:lightColor,
                                backgroundColor:midColor,
                                width: buttonWidth - borderWidth,
                                height: buttonHeight - borderWidth,
                                borderWidth:borderWidth/2,
                            }
                        ]
                        }>
                        <View style={[styles.corner, {bottom:0, right:-1, backgroundColor:darkColor, width:borderWidth/2, height:borderWidth/2,}]}></View>
                        <Text style={{fontFamily:fontType,color:'white', fontSize:textSize, fontWeight:'bold',}}>{content}</Text>
                    </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        justifyContent:'center',
        alignItems:'center',
    },
    corner: {
        position:'absolute',
        // width:_BORDER_BUTTON/2,
        // height:_BORDER_BUTTON/2,
    },
    buttonInside: {
        // borderWidth:_BORDER_BUTTON/2,
        position:'absolute',
        alignItems:'center',
        justifyContent:'center'

    },
    borderTopAndBottom: {
        position:'absolute',
        // height: _BORDER_BUTTON,
    },
    borderLeftAndRight: {
        position:'absolute',
        // width:_BORDER_BUTTON
    }
})
