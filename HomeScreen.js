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
import { render } from 'react-dom';
import {styles} from './Styles'

class HomeScreen extends Component{

  state ={
    username:'',
  }

  _handleChange = (evt) => {
    this.setState({
      username: evt.nativeEvent.text
    });
  }

  render(){
  const navigation= this.props.navigation
  return(
    <View style={styles.container}>
      <Text style={styles.title}>GitHub Username</Text>
      <TextInput
          placeholder="Enter your github username"
          style={styles.input}
          onChange={this._handleChange} 
      />
      {this.state.username !== ''?
      (<TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Result', {username:this.state.username})}>
        <Text style={styles.buttonText}>Find most successful repository</Text>
      </TouchableOpacity>): null}
    </View>
    );
  }
}
export default HomeScreen