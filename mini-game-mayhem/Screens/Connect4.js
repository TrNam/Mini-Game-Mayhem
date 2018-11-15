import React from 'react';
import { Text, View, ListView, StyleSheet, StatusBar, TextInput, Alert,TouchableHighlight, Image , Dimensions} from 'react-native';

const todos =[
    {
        color: 'white'
    },
    {
        color: 'white'
    },
    {
        color: 'white'
    },
    {
        color: 'white'
    },
    {
        color: 'white'
    },
    {
        color: 'white'
    },
]

export default class Connect4 extends React.Component {
	
	static navigationOptions = {
        title:'Connect4',
        headerStyle:{
            backgroundColor:'#f4511e',
            //height:Dimensions.get('window').height*0.03,
        },
        headerTintColor: '#fff',
        headerTitleStyle:{
            fontWeight:'bold',
        },
    };

    constructor() {
    	super();
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })
        this.state = {
            todoDataSource: ds.cloneWithRows(todos),
            turn:1
        }
        this.renderRow = this.renderRow.bind(this); 
    }

    Drop(col){
    	if(this.state.turn==true){
    		todos[1].color = 'red'
    	}
    	else{
    		todos[1].color = 'yellow'
    	}
    	this.setState({
    		todoDataSource:this.state.todoDataSource.cloneWithRows(todos),
    		turn:!this.state.turn
    	})
    	console.log(todos)
    }


    renderRow(task, sectionID, rowID, highlightRow){
        return(
            <View style={{
				height:Dimensions.get('window').width/7,
				borderWidth:2,
				borderRadius:Dimensions.get('window').width/14,
				borderColor:'blue',
				flexDirection:'column',
				backgroundColor:task.color}}>
            </View>
        )
    }

	render() {

		return (

			<View style ={styles.container}>
				<StatusBar hidden/>
				<View style={styles.col}>
					<ListView
					key={this.state.turn}
		            dataSource = {this.state.todoDataSource}
		            renderRow={this.renderRow}
		            />
					<TouchableHighlight onPress={() => {
                		this.Drop(1);
                		}}>
						<View style={styles.row}>
	                	</View>
					</TouchableHighlight>
				</View>
				<View style={styles.col}>
					<ListView
					key={this.state.turn}
		            dataSource = {this.state.todoDataSource}
		            renderRow={this.renderRow}
		            />
		            <View style={styles.row}>
					</View>
				</View>
				<View style={styles.col}>
					<ListView
					key={this.state.turn}
		            dataSource = {this.state.todoDataSource}
		            renderRow={this.renderRow}
		            />
					<View style={styles.row}>
					</View>
				</View>
				<View style={styles.col}>
					<ListView
					key={this.state.turn}
		            dataSource = {this.state.todoDataSource}
		            renderRow={this.renderRow}
		            />
					<View style={styles.row}>
					</View>
				</View>
				<View style={styles.col}>
					<ListView
					key={this.state.turn}
		            dataSource = {this.state.todoDataSource}
		            renderRow={this.renderRow}
		            />
					<View style={styles.row}>
					</View>
				</View>
				<View style={styles.col}>
					<ListView
					key={this.state.turn}
		            dataSource = {this.state.todoDataSource}
		            renderRow={this.renderRow}
		            />
					<View style={styles.row}>
					</View>
				</View>
				<View style={styles.col}>
					<ListView
					key={this.state.turn}
		            dataSource = {this.state.todoDataSource}
		            renderRow={this.renderRow}
		            />
					<View style={styles.row}>
					</View>
				</View>
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
		flexDirection:'row'
	},
	col:{
		flex:1,
		borderWidth:2,
		borderColor:'black',
		backgroundColor:'blue',
		flexDirection:'column',
		height:Dimensions.get('window').width+4
	},
	row:{
		height:Dimensions.get('window').width/7,
		borderWidth:2,
		borderColor:'black',
		flexDirection:'column',
		backgroundColor:'white'
	},
})