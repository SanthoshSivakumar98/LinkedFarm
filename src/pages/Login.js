import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity,
  ImageBackground,
  Button,
  TouchableNativeFeedback
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';


import Form from '../components/Form';
import News from '../components/News';


import {Actions} from 'react-native-router-flux';

export default class Login extends React.Component {

	


	render() {
		return(
      
    
  
			<View style={styles.container}>
      <ImageBackground source={require('C:/Users/SNEHA/LinkedFarm/src/images/farm.jpg')} style={{width: '100%', height: '100%'}} >
				
				<Form type="Login"/>
        <View style={styles.signupTextCont}>
        <Button color='#087F31' 
          title="LOGIN" 
          onPress={() => this.props.navigation.navigate('Home')}
        />
        </View>
				<View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Don't have an account yet?</Text>
          <Button color="#ff5c5c"
          title="SignUp" 
          onPress={() => this.props.navigation.navigate('Signup')}
        />
        </View>

        </ImageBackground>
			</View>	
      
			);
	}
}
const styles = StyleSheet.create({
  container : {
    backgroundColor:'#053109',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
  	color:'rgba(255,255,255,0.6)',
  	fontSize:16
  },
  signupButton: {
  	color:'#ffffff',
  	fontSize:16,
  	fontWeight:'500',
    color:'green'
  }
});