import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import CirclePixel from './CirclePixel';
import TrianglePixel from './TrianglePixel';


export default class BackButton extends React.Component {
    static propTypes = {
        lightColor: PropTypes.string.isRequired,
        darkColor: PropTypes.string.isRequired,
        midColor: PropTypes.string.isRequired,
        size: PropTypes.number.isRequired,
    }

    static defaultProps = {
        lightColor:'#F7CD6B',
        midColor:'#D88038',
        darkColor:'#A13D3B',
    }

    constructor(props){
        super(props);
    }

    render(){
        const { lightColor, midColor, darkColor, size } = this.props;
        return(
            <View style={{width:size, height:size, justifyContent:'center', alignItems:'center'}}>
                <CirclePixel
                    cirRadius={size}
                    cirColor={midColor}
                    shadowColor={darkColor}
                />
                <View style={{position:'absolute', left:'15%'}}>
                    <TrianglePixel
                        triWidth={size/2}
                        triHeight={size/1.5}
                        triColor={lightColor}
                        shadowColor={darkColor}
                        triDir={'left'}
                    />
                </View>
            </View>
        );
    }
}