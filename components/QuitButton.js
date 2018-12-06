import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import CirclePixel from './CirclePixel';
import TrianglePixel from './TrianglePixel';


export default class Quit extends React.Component {
    static propTypes = {
        quitColor:PropTypes.string.isRequired,
        circolor: PropTypes.string.isRequired,
        shadowColor: PropTypes.string.isRequired,
        size:PropTypes.number.isRequired,
    }

    static defaultProps = {
        quitColor:'#F7CD6B',
        circolor:'#D88038',
        shadowColor:'#A13D3B',
    }

    constructor(props){
        super(props);
        this.state = {
            pixelColumns: ['100%','80%','60%','40%','15%','40%','60%','80%', '100%']
        }
    }

    render(){
        const { quitColor, circolor, shadowColor, size } = this.props;
        return(
            <View style={{width:size, height:size, justifyContent:'center', alignItems:'center'}}>
                <CirclePixel
                    cirRadius={size}
                    cirColor={circolor}
                    shadowColor={shadowColor}
                />
                <View style={{position:'absolute', justifyContent:'center', alignItems:'center', width:size/2, height:size/2, flexDirection:'row'}}>
                    {this.state.pixelColumns.map((item, index) => {
                        if (item === '15%') {
                            return(
                                <View key={index} style={{flex:1, backgroundColor:quitColor, height:item}}>
                                </View>
                            )
                        } else {
                            return(
                                <View key={index} style={{flex:1, backgroundColor:'transparent', height:item, borderTopWidth:size/15,borderBottomWidth:size/15, borderBottomColor:quitColor, borderTopColor:quitColor}}>
                                </View>
                            )
                        }
                    })}
                </View>
            </View>
        );
    }
}