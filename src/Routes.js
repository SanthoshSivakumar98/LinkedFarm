import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import { createStackNavigator } from 'react-navigation';
import Login from './pages/Login';
import Signup from './pages/Signup';
import News from './components/News';


export default class Routes extends Component<{}> {
	render() {
		return(
			<Router>
			    <Stack key="root" hideNavBar={true}>
			      <Scene key="login" component={Login} title="Login" initial={true}/>
			      <Scene key="signup" component={Signup} title="Register"/>
			      <Scene key="news" component={News} title="News-App"/>
			     
			    </Stack>
			 </Router>
			)
	}
}