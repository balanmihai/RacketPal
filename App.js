import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Alert,
  ScrollView,
  Button
} from 'react-native';
import{NavigationContainer} from "@react-navigation/native";
import{createStackNavigator} from "@react-navigation/stack";
import HomeScreen from './HomeScreen'
import Result from './Result'

const Stack = createStackNavigator()

export default function App(){
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="RacketPal Assingment" component={HomeScreen} />
        <Stack.Screen name="Result" component={Result} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}
