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
import {styles} from './Styles'
import Repo from './Repo'

class Result extends Component{

  componentDidMount() 
    {
      const username = (this.props.route.params.username).toLowerCase().trim();
      const url = `https://api.github.com/users/${username}/repos`;
      
      fetch(url).then(response => response.json() ).then( (data) =>{ this.setState({repos:data})}).catch(()=>this.setState({repos:null}));
    
    }
  
  state = {
    repos : null
  }
  
  render(){
    return(
      <View>
        <Text style={styles.title}>User's Repositories</Text>
        {   this.state.repos ? 
           (
      <ScrollView style={styles.scroll}>
        {
          this.state.repos.map((repo, i) => {
            return (
              <Repo key={i} repo = {repo} ></Repo>
            )
          })
        }
      </ScrollView>
    ) : null
        }
      </View>
    )
  }

}

export default Result