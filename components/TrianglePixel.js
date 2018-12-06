import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';



export default class TrianglePixel extends React.Component {
    static propTypes = {
        triWidth: PropTypes.number.isRequired,
        triHeight: PropTypes.number.isRequired,
        triColor: PropTypes.string.isRequired,
        triDir: PropTypes.string.isRequired,
        shadowColor: PropTypes.string.isRequired
    }

    static defaultProps = {
        triDir: 'right',
        triColor:'#F7CD6B',
        shadowColor:'#A13D3B'
    }

    constructor(props){
        super(props);
        this.state = {
            pixelColumns: ['100%','100%','70%','50%','20%']
        }
    }

    render(){
        const { triColor, triHeight, triWidth, triDir, shadowColor } = this.props;
        if (triDir === 'up') {
            direction =  'column-reverse'
        } else if (triDir === 'down') {
            direction = 'column'
        } else if (triDir === 'left') {
            direction = 'row-reverse'
        } else if (triDir === 'right') {
            direction = 'row'
        }
        return(
            <View style={[styles.container, {flexDirection: direction, width:triWidth, height:triHeight}]}>
                {this.state.pixelColumns.map((item, index) => {
                    return(
                        <View key={index} style={{flex:1, height:item, backgroundColor:triColor, borderBottomWidth:triWidth/5, borderBottomColor:shadowColor}}>
                        </View>
                    )
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        justifyContent:'center',
    }
})