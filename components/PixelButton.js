import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, Dimensions} from 'react-native';

const window = Dimensions.get('window')
const _BORDER_BUTTON = window.height/45;
// const _DARK = '#46B1C9';
// const _MIDDLE = '#85BAC6';
// const _LIGHT = '#D2ECF2';

export default class PixelButton extends React.Component {
    static propTypes = {
        content: PropTypes.string.isRequired,
        buttonWidth: PropTypes.number.isRequired,
        buttonHeight: PropTypes.number.isRequired,
        lightColor: PropTypes.string.isRequired,
        darkColor: PropTypes.string.isRequired,
        midColor: PropTypes.string.isRequired,
        textSize: PropTypes.number.isRequired
    }


    render() {
        const { content, buttonHeight, buttonWidth, lightColor, darkColor, midColor, textSize, buttonBorderColor } = this.props;
        let theWidth = buttonWidth - _BORDER_BUTTON
        let theHeight = buttonHeight - _BORDER_BUTTON
        return (
            <View style={[styles.button,{width:buttonWidth, height:buttonHeight}]}>
                <View style={[styles.borderTopAndBottom,{top:0, width:theWidth, backgroundColor:buttonBorderColor}]}></View>
                <View style={[styles.borderTopAndBottom,{bottom:0, width:theWidth, backgroundColor:buttonBorderColor}]}></View>
                <View style={[styles.borderLeftAndRight,{left:0, height:theHeight, backgroundColor:buttonBorderColor}]}></View>
                <View style={[styles.borderLeftAndRight,{right:0, height:theHeight, backgroundColor:buttonBorderColor}]}></View>
                    <View style={
                        [
                            styles.buttonInside,
                            {
                                borderBottomColor:darkColor,
                                borderRightColor:darkColor,
                                borderLeftColor:lightColor,
                                borderTopColor:lightColor,
                                backgroundColor:midColor,
                                width: buttonWidth - _BORDER_BUTTON,
                                height: buttonHeight - _BORDER_BUTTON
                            }
                        ]
                        }>
                        <View style={[styles.corner, {bottom:0, right:-1, backgroundColor:darkColor}]}></View>
                        <Text style={{color:'white', fontSize:textSize, fontWeight:'bold', fontFamily:'sans-serif-condensed'}}>{content}</Text>
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
        width:_BORDER_BUTTON/2,
        height:_BORDER_BUTTON/2,
    },
    buttonInside: {
        borderWidth:_BORDER_BUTTON/2,
        position:'absolute',
        alignItems:'center',
        justifyContent:'center'

    },
    borderTopAndBottom: {
        position:'absolute',
        height: _BORDER_BUTTON,
    },
    borderLeftAndRight: {
        position:'absolute',
        width:_BORDER_BUTTON
    }
})
