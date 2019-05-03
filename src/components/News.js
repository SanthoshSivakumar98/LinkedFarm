import React, { Component } from 'react';
import {  Text,Button,TouchableOpacity} from "react-native";
import { FlatList } from 'react-native';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import MenuDrawer from 'react-native-side-drawer'
import { getNews } from './news-config';
import Statistics from './Statistics';
import AgriBot from './AgriBot';
import Article from './Article';
import {Dimensions} from 'react-native';
import { DrawerView } from 'react-navigation';
import Home from "C:/Users/SNEHA/LinkedFarm/src/views/Home";
import {
  StyleSheet,
  View,
  StatusBar

} from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import {createDrawerNavigator} from 'react-navigation'

export default class News extends React.Component{ 
constructor(props) {
    super(props);
    this.state = { articles: [], refreshing: true };
    this.fetchNews = this.fetchNews.bind(this);
  }
  
  // Called after a component is mounted
  componentDidMount() {
    this.fetchNews();
   }

  fetchNews() {
    getNews()
      .then(articles => this.setState({ articles, refreshing: false }))
      .catch(() => this.setState({ refreshing: false }));
  }

  handleRefresh() {
    this.setState(
      {
        refreshing: true
    },
      () => this.fetchNews()
    );
  }
  
    static navigationOptions = {
    title:News,
  };

  render() {
    return (
      <View style={styles.container}>
     
          <FlatList
        data={this.state.articles}
        renderItem={({ item }) => <Article article={item} />}
        keyExtractor={item => item.url}
        refreshing={this.state.refreshing}
        onRefresh={this.handleRefresh.bind(this)}
      />
        
        
      </View>
    );
  }
}


const styles = StyleSheet.create({
	
  container : {
    flex: 1,
     backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    zIndex: 0
  },
  button:{
  	color:'#ffffff',
  	fontSize:16,
  	fontWeight:'500',
    backgroundColor:'#38C8EC'
  },
  animatedBox: {
    flex: 1,
    backgroundColor: "#38C8EC",
    padding: 10
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FCFCFC'
  },
  button_1:{

      width: '30%',
      height: 30,
      color:'#ffffff',
  	fontSize:16,
  	fontWeight:'500',
    backgroundColor:'#38C8EC'

}
});


