import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';

export default class HomeScreen extends React.Component {
	
	static navigationOptions = {
		title:'Home',
		headerStyle:{
			backgroundColor:'#f4511e',
		},
		headerTintColor: '#fff',
		headerTitleStyle:{
			fontWeight:'bold',
		},
	};

	render() {
		return (
			<View style ={styles.container}>
				<Button
					title="Connect 4"
					onPress={() => {
						this.props.navigation.navigate('Game1');
					}}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'#f00',
		alignItems:'center',
		justifyContent:'center',
	},
})