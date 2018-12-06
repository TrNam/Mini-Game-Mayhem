import React from 'react';
import { Alert, Text, View, ListView, TouchableOpacity, StyleSheet, ImageBackground, StatusBar, TextInput, TouchableHighlight, Image , Dimensions} from 'react-native';
import SweetAlert from 'react-native-sweet-alert';
import PixelButton from '../../components/PixelButton'


const cols =[[],[{color: 'white'},{color: 'white'},{color: 'white'},{color: 'white'},{color: 'white'},{color: 'white'}],
	[{color: 'white'},{color: 'white'},{color: 'white'},{color: 'white'},{color: 'white'},{color: 'white'}],
	[{color: 'white'},{color: 'white'},{color: 'white'},{color: 'white'},{color: 'white'},{color: 'white'}],
	[{color: 'white'},{color: 'white'},{color: 'white'},{color: 'white'},{color: 'white'},{color: 'white'}],
	[{color: 'white'},{color: 'white'},{color: 'white'},{color: 'white'},{color: 'white'},{color: 'white'}],
	[{color: 'white'},{color: 'white'},{color: 'white'},{color: 'white'},{color: 'white'},{color: 'white'}],
	[{color: 'white'},{color: 'white'},{color: 'white'},{color: 'white'},{color: 'white'},{color: 'white'}]]




export default class Connect4 extends React.Component {
	static navigationOptions = {
    header: null
  }
    constructor({navigation}) {
    	super();
    	const AI = navigation.getParam('Ai', false); 
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })
        this.state = {
            DataSource1: ds.cloneWithRows(cols[1]),
            DataSource2: ds.cloneWithRows(cols[2]),
            DataSource3: ds.cloneWithRows(cols[3]),
            DataSource4: ds.cloneWithRows(cols[4]),
            DataSource5: ds.cloneWithRows(cols[5]),
            DataSource6: ds.cloneWithRows(cols[6]),
            DataSource7: ds.cloneWithRows(cols[7]),
            turn:true,
            c1:6,
            c2:6,
            c3:6,
            c4:6,
            c5:6,
            c6:6,
            c7:6,
            Ai: AI ,
        }
        this.renderRow = this.renderRow.bind(this); 
    }

    Drop(col){
    	if(col == 1 && this.state.c1 > 0){
	    	if(this.state.turn==true){cols[1][this.state.c1-1].color = 'red'}
	    	else{cols[1][this.state.c1-1].color = 'yellow'}
	    	this.setState({
	    		c1:this.state.c1-1,
	    		DataSource1:this.state.DataSource1.cloneWithRows(cols[1]),
	    		turn:!this.state.turn
	    	})
	    	this.checkWinner(col,this.state.c1)
	    }
		else if(col == 2  && this.state.c2 > 0){
	    	if(this.state.turn==true){cols[2][this.state.c2-1].color = 'red'}
	    	else{cols[2][this.state.c2-1].color = 'yellow'}
	    	this.setState({
	    		c2:this.state.c2-1,
	    		DataSource2:this.state.DataSource2.cloneWithRows(cols[2]),
	    		turn:!this.state.turn
	    	})
	    	this.checkWinner(col,this.state.c2)
	    }
		else if(col == 3  && this.state.c3 > 0){
	    	if(this.state.turn==true){cols[3][this.state.c3-1].color = 'red'}
	    	else{cols[3][this.state.c3-1].color = 'yellow'}
	    	this.setState({
	    		c3:this.state.c3-1,
	    		DataSource3:this.state.DataSource3.cloneWithRows(cols[3]),
	    		turn:!this.state.turn
	    	})
	    	this.checkWinner(col,this.state.c3)
	    }
		else if(col == 4  && this.state.c4 > 0){
	    	if(this.state.turn==true){cols[4][this.state.c4-1].color = 'red'}
	    	else{cols[4][this.state.c4-1].color = 'yellow'}
	    	this.setState({
	    		c4:this.state.c4-1,
	    		DataSource4:this.state.DataSource4.cloneWithRows(cols[4]),
	    		turn:!this.state.turn
	    	})
	    	this.checkWinner(col,this.state.c4)
	    }
		else if(col == 5  && this.state.c5 > 0){
	    	if(this.state.turn==true){cols[5][this.state.c5-1].color = 'red'}
	    	else{cols[5][this.state.c5-1].color = 'yellow'}
	    	this.setState({
	    		c5:this.state.c5-1,
	    		DataSource5:this.state.DataSource5.cloneWithRows(cols[5]),
	    		turn:!this.state.turn
	    	})
	    	this.checkWinner(col,this.state.c5)
	    }
		else if(col == 6  && this.state.c6 > 0){
	    	if(this.state.turn==true){cols[6][this.state.c6-1].color = 'red'}
	    	else{cols[6][this.state.c6-1].color = 'yellow'}
	    	this.setState({
	    		c6:this.state.c6-1,
	    		DataSource6:this.state.DataSource6.cloneWithRows(cols[6]),
	    		turn:!this.state.turn
	    	})
	    	this.checkWinner(col,this.state.c6)
	    }
		else if(col == 7  && this.state.c7 > 0){
	    	if(this.state.turn==true){cols[7][this.state.c7-1].color = 'red'}
	    	else{cols[7][this.state.c7-1].color = 'yellow'}
	    	this.setState({
	    		c7:this.state.c7-1,
	    		turn:!this.state.turn,
	    		DataSource7:this.state.DataSource7.cloneWithRows(cols[7])
	    	})
	    	this.checkWinner(col,this.state.c7)
	    }

	    if(this.state.Ai == true && this.state.turn==true){
	    	this.setState({
	    		turn:!this.state.turn,
	    	}, () => {
			    console.log(this.state.turn);
			    this.Drop((0.51 + Math.random() * (6.98)).toFixed(0))
			});
	    }
    	
    }

    reset(home){
    	cols =[[],[{color: 'white'},{color: 'white'},{color: 'white'},{color: 'white'},{color: 'white'},{color: 'white'}],
			[{color: 'white'},{color: 'white'},{color: 'white'},{color: 'white'},{color: 'white'},{color: 'white'}],
			[{color: 'white'},{color: 'white'},{color: 'white'},{color: 'white'},{color: 'white'},{color: 'white'}],
			[{color: 'white'},{color: 'white'},{color: 'white'},{color: 'white'},{color: 'white'},{color: 'white'}],
			[{color: 'white'},{color: 'white'},{color: 'white'},{color: 'white'},{color: 'white'},{color: 'white'}],
			[{color: 'white'},{color: 'white'},{color: 'white'},{color: 'white'},{color: 'white'},{color: 'white'}],
			[{color: 'white'},{color: 'white'},{color: 'white'},{color: 'white'},{color: 'white'},{color: 'white'}]]

		this.setState({
	    	DataSource1: this.state.DataSource1.cloneWithRows(cols[1]),
            DataSource2: this.state.DataSource2.cloneWithRows(cols[2]),
            DataSource3: this.state.DataSource3.cloneWithRows(cols[3]),
            DataSource4: this.state.DataSource4.cloneWithRows(cols[4]),
            DataSource5: this.state.DataSource5.cloneWithRows(cols[5]),
            DataSource6: this.state.DataSource6.cloneWithRows(cols[6]),
            DataSource7: this.state.DataSource7.cloneWithRows(cols[7]),
            turn:true,
            c1:6,
            c2:6,
            c3:6,
            c4:6,
            c5:6,
            c6:6,
            c7:6,
	    })
		if(home == 2){
			this.props.navigation.navigate('Home')
		}

    }

    checkWinner(col, row){
    	let color = this.state.turn ? "red" : "yellow";
    	let down = 0;
    	let left = 0;
    	let right = 0;
    	let ur = 0;
    	let ul = 0;
    	let dr = 0;
    	let dl = 0;
    	let s1 = true;
    	let s2 = true;
    	let s3 = true;
    	let i = 1
    	for(let x=col-1; x > 0 && x > col-4;x--){
    		if(cols[x][row-1].color == color && s1 == true){
    			left = left+1;
    		}
    		else{
    			s1 = false;
    		}
    		if(row-1-i > 0){
	    		if(cols[x][row-1-i].color == color && s2 == true){
	    			dl = dl+1;
	    		}
	    		else{
	    			s2 = false;
	    		}
	    	}
	    	if(row-1+i < 6){
	    		if(cols[x][row-1+i].color == color && s3 == true){
	    			ul = ul+1;
	    		}
	    		else{
	    			s3 = false;
	    		}
		    }
		    i++;
    	}
    	s1 = true;
    	s2 = true;
    	s3 = true;
    	i = 1;
    	for(let x=col+1; x < 8 && x < col+4;x++){
    		if(cols[x][row-1].color == color && s1 == true){
    			right = right+1;
    		}
    		else{
    			s1 = false;
    		}
    		if(row-1-i > 0){
	    		if(cols[x][row-1-i].color == color && s2 == true){
	    			dr = dr+1;
	    		}
	    		else{
	    			s2 = false;
	    		}
	    	}
    		if(row-1+i < 6){
	    		if(cols[x][row-1+i].color == color && s3 == true){
	    			ur = ur+1;
	    		}
	    		else{
	    			s3 = false;
	    		}
    		}
    		i++
    	}
    	s1 = true;
    	for(let x=1; x < 4;x++){
    		if(row-1+x < 6){
	    		if(cols[col][row-1+x].color == color && s1 == true){
	    			down = down + 1;
	    		}
	    		else{
	    			s1 = false;
	    		}
	    	}
    	}
    	if(left+right > 2 || ul+dr > 2 || ur+dl >2 || down >2){
    		Alert.alert(
			'Winner!!',
			`${color} has won. Do you want to play again?`,
			[
				{text: 'Home', onPress: () => this.reset(2)},
				{text: 'Play again', onPress: () => this.reset(1)},
			],
			{ cancelable: false }
			)
    	}
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
		const { navigation } = this.props;

		return (
			<ImageBackground
                    source={require('../../assets/bg/4.png')}
                    style={{width:window.width, height:window.height}}
            >
			<View style ={styles.container}>
				
				<StatusBar hidden/>
				<View style={{position:'absolute', left:'50%', top:'50%'}}>
					<TouchableOpacity
						onPress={() => {
							this.props.navigation.navigate('GamesList')
						}}
					>
						<PixelButton
							content={'Games List'}
							buttonWidth={window.height/6}
							buttonHeight={window.height/18}
							textSize={window.height/35}
							borderWidth={window.height/90}
						/>
					</TouchableOpacity>
				</View>
				<View style={styles.col}>
					<ListView
					key={this.state.turn}
		            dataSource = {this.state.DataSource1}
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
		            dataSource = {this.state.DataSource2}
		            renderRow={this.renderRow}
		            />
		            <TouchableHighlight onPress={() => {
                		this.Drop(2);
                		}}>
						<View style={styles.row}>
	                	</View>
					</TouchableHighlight>
				</View>
				<View style={styles.col}>
					<ListView
					key={this.state.turn}
		            dataSource = {this.state.DataSource3}
		            renderRow={this.renderRow}
		            />
					<TouchableHighlight onPress={() => {
                		this.Drop(3);
                		}}>
						<View style={styles.row}>
	                	</View>
					</TouchableHighlight>
				</View>
				<View style={styles.col}>
					<ListView
					key={this.state.turn}
		            dataSource = {this.state.DataSource4}
		            renderRow={this.renderRow}
		            />
					<TouchableHighlight onPress={() => {
                		this.Drop(4);
                		}}>
						<View style={styles.row}>
	                	</View>
					</TouchableHighlight>
				</View>
				<View style={styles.col}>
					<ListView
					key={this.state.turn}
		            dataSource = {this.state.DataSource5}
		            renderRow={this.renderRow}
		            />
					<TouchableHighlight onPress={() => {
                		this.Drop(5);
                		}}>
						<View style={styles.row}>
	                	</View>
					</TouchableHighlight>
				</View>
				<View style={styles.col}>
					<ListView
					key={this.state.turn}
		            dataSource = {this.state.DataSource6}
		            renderRow={this.renderRow}
		            />
					<TouchableHighlight onPress={() => {
                		this.Drop(6);
                		}}>
						<View style={styles.row}>
	                	</View>
					</TouchableHighlight>
				</View>
				<View style={styles.col}>
					<ListView
					key={this.state.turn}
		            dataSource = {this.state.DataSource7}
		            renderRow={this.renderRow}
		            />
					<TouchableHighlight onPress={() => {
                		this.Drop(7);
                		}}>
						<View style={styles.row}>
	                	</View>
					</TouchableHighlight>
				</View>

			</View>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		width:Dimensions.get('window').width,
		height:Dimensions.get('window').height,
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
		height:Dimensions.get('window').width+29
	},
	row:{
		height:Dimensions.get('window').width/7,
		borderWidth:2,
		borderColor:'black',
		flexDirection:'column',
		backgroundColor:'white',
		top:0,
	},
})
