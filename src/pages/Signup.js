import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
  Button
} from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import Form from '../components/Form';



export default class Signup extends React.Component {
  

  

	render() {
		return(
       <ImageBackground
        source={require('C:/Users/SNEHA/LinkedFarm/src/images/farm.jpg')}
        style={styles.container}>
      
     
			
      

          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Full Name"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="name-phone-pad"
              onSubmitEditing={()=> this.password.focus()}
              />
         <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Phone Number"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="phone-pad"
              onSubmitEditing={()=> this.password.focus()}
              />
         <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Email"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="email-address"
              onSubmitEditing={()=> this.password.focus()}
              />
        <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              ref={(input) => this.password = input}
              />
              <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Aadhar Number"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="phone-pad"
              onSubmitEditing={()=> this.password.focus()}
              />
              

				<View style={styles.signupTextCont}>
          
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}><Text style={styles.signupButton}>Already Have an Account?Login</Text></TouchableOpacity>

        </View>
      
        </ImageBackground>
      
			

			)
	}
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputBox: {
    width:300,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
  },
  button: {
    width:300,
    backgroundColor:'#032526',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  },
  signupText:{
    textAlign:'center',
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff'
  },
  signupButton: {
    width:300,
    backgroundColor:'#087F31',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13,
      color:'#ffffff',
      textAlign:'center'

  }
  
});