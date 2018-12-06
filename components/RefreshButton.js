import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import CirclePixel from './CirclePixel';
import TrianglePixel from './TrianglePixel';


export default class RefreshButton extends React.Component {
    static propTypes = {
        refColor:PropTypes.string.isRequired,
        circolor: PropTypes.string.isRequired,
        shadowColor: PropTypes.string.isRequired,
        size:PropTypes.number.isRequired,
    }

    static defaultProps = {
        refColor:'#F7CD6B',
        circolor:'#D88038',
        shadowColor:'#A13D3B',
    }

    constructor(props){
        super(props);
        this.state = {
            pixelColumns: ['50%','70%','90%','100%','100%','100%','100%','90%', '70%', '50%']
        }
    }

    render(){
        const { refColor, circolor, shadowColor, size } = this.props;
        return(
            <View style={{width:size, height:size, justifyContent:'center', alignItems:'center'}}>
                <CirclePixel
                    cirRadius={size}
                    cirColor={circolor}
                    shadowColor={shadowColor}
                />
                <View style={{position:'absolute', justifyContent:'center', alignItems:'center', width:size/2, height:size/2, flexDirection:'row'}}>
                    <View style={{width:size/2, height:size/2, justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
                        {this.state.pixelColumns.map((item, index) => {
                            if (index === 0) {
                                return(
                                    <View key={index} style={{flex:1, height:item, backgroundColor: refColor}}>
                                    </View>
                                )
                            } else if (index === this.state.pixelColumns.length - 1) {
                                return(
                                    <View key={index} style={{flex:1, height:item, backgroundColor: 'transparent'}}>
                                    </View>
                                )
                            }
                            else {
                                return(
                                    <View key={index} style={{flex:1, backgroundColor:'transparent', height:item, borderTopWidth:size/20,borderBottomWidth:size/20, borderBottomColor:refColor, borderTopColor:refColor}}>
                                    </View>
                                )
                            }
                        })}
                    </View>
                    <View style={{position:'absolute', right:-size/60, top:size/20, transform:[{rotate:'45deg'}]}}>
                        <TrianglePixel
                            triWidth={size/7}
                            triHeight={size/7}
                            triColor={refColor}
                            shadowColor={refColor}
                        />
                    </View>
                </View>
            </View>
        );
    }
}