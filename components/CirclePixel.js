import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';


export default class CirclePixel extends React.Component {
    static propTypes = {
        cirRadius: PropTypes.number.isRequired,
        cirColor: PropTypes.string.isRequired,
        shadowColor: PropTypes.string.isRequired
    }

    constructor(props){
        super(props);
        this.state = {
            pixelColumns: ['50%','70%','90%','100%','100%','100%','100%','90%','70%','50%']
        }
    }

    render(){
        const { cirColor, cirRadius, shadowColor } = this.props;
        return(
            <View style={[styles.container, {width:cirRadius, height:cirRadius}]}>
                {this.state.pixelColumns.map((item, index) => {
                    if (index === 7 || index === 5 || index === 6 || index === 8 || index === 9 || index === 4 || index === 3) {
                        return(
                            <View key={index} style={{flex:1, height:item, borderBottomWidth:cirRadius/12, borderBottomColor:shadowColor, backgroundColor: cirColor}}>
                            </View>
                        )
                    } else {
                        return(
                            <View key={index} style={{flex:1, height:item, backgroundColor: cirColor}}>
                            </View>
                        )
                    }
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center'
    }
})