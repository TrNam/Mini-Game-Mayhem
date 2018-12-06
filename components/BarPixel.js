import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';


export default class BarPixel extends React.Component {

    static propTypes = {
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        color: PropTypes.string.isRequired,
        borderColor: PropTypes.string.isRequired,
        reverse: PropTypes.bool.isRequired,
        shadowColor: PropTypes.string.isRequired,
        switchHeight: PropTypes.string.isRequired,
        // borderWidth:PropTypes.number.isRequired,
    }

    static defaultProps = {
        color: '#3A2B40',
        borderColor:'#222233',
        shadowColor: '#3A2B40',
        reverse:false,
        switchHeight:'95%',
    }

    constructor(props){
        super(props);
        this.state = {
            pixelRows: ['55%','70%','85%','100%','85%','70%','55%']
        }
    }


    render() {
        const { width, height, color, borderColor, reverse ,shadowColor, switchHeight } = this.props;
        return(
            <View style={{alignItems:'center', justifyContent:'center', width:width, height:height}}>
                {this.state.pixelRows.map((item, index) => {
                    if (index === 0 || index === this.state.pixelRows.length - 1){
                        return(
                            <View key={index} style={{height:'2%',width:item, backgroundColor:borderColor}}>
                            </View>
                        )
                    } else if (item === '100%'){
                        return(
                            <View key={index} style={{height:switchHeight,width:item, backgroundColor:color, borderLeftWidth:5, borderRightWidth: 5,borderLeftColor:borderColor, borderRightColor:borderColor}}>
                            </View>
                        )
                    } else {
                        return(
                            <View key={index} style={{height:'2%', width:item, backgroundColor:color, borderLeftWidth:5, borderRightWidth: 5,borderLeftColor:borderColor, borderRightColor:borderColor}}>
                            </View>
                        )
                    }
                })}
                {
                    reverse ? 
                    <View style={{height:'100%', width:'85%', position:'absolute', justifyContent:'center'}}> 
                        <View style={{height:switchHeight, width:'10%', position:'absolute',backgroundColor:shadowColor, right:'10%'}}></View>
                    </View>
                    :
                    <View style={{height:'100%', width:'85%', position:'absolute',justifyContent:'center'}}> 
                        <View style={{height:switchHeight, width:'10%', backgroundColor:shadowColor, position:'absolute', left:'10%'}}></View>
                    </View>
                }
            </View>
        )
    }
}