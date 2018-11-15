import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Connect4 from './Screens/Connect4';
import HomeScreen from './Screens/HomeScreen'

const RootStack = createStackNavigator(
    {
        Home:{
            screen:HomeScreen,
        },
        Game1:{
            screen:Connect4
        },
    },
    {
        initialRouteName:'Game1',
    }
);

export default class App extends React.Component {
    render() {
        return <RootStack/>;
    }
}