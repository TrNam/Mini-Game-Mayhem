import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, Dimensions} from 'react-native';

const window = Dimensions.get('window')
const _CORNERS = window.height/90;
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
        return (
            <View style={[styles.button,{width:buttonWidth, height:buttonHeight, borderColor:buttonBorderColor}]}>
                <View style={[styles.corner, {top:-_CORNERS, left:-_CORNERS}]}></View>
                <View style={[styles.corner, {top:-_CORNERS, right:-_CORNERS}]}></View>
                <View style={[styles.corner, {bottom:-_CORNERS, left:-_CORNERS}]}></View>
                <View style={[styles.corner, {bottom:-_CORNERS, right:-_CORNERS}]}></View>
                    <View style={
                        [
                            styles.buttonInside,
                            {
                                borderBottomColor:darkColor,
                                borderRightColor:darkColor,
                                borderLeftColor:lightColor,
                                borderTopColor:lightColor,
                                backgroundColor:midColor,
                                width: buttonWidth - _CORNERS*2,
                                height: buttonHeight - _CORNERS*2
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
        backgroundColor:'transparent',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:_CORNERS,
    },
    corner: {
        position:'absolute',
        width:_CORNERS,
        height:_CORNERS,
        backgroundColor:'#D2ECF2'
    },
    buttonInside: {
        borderWidth:_CORNERS,
        position:'absolute',
        alignItems:'center',
        justifyContent:'center'

    }
})
