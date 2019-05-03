import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import HomeCategory from "../components/HomeCategory";
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";
import Icon from "@expo/vector-icons/Ionicons";
import { DrawerActions } from 'react-navigation';

class Home extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <ScrollView scrollEnabled>
          <HomeCategory
            imageUri={require("../../assets/fruits_tile.jpg")}
            titleFirst="Fruits"
        
            subTitle="Freshness of Fruits!. Opened!"
            screenProps="Super"
            {...this.props}
          />
          <HomeCategory
            imageUri={require("../../assets/vegetable_tile.jpg")}
            titleFirst="Vegetables"
            
            subTitle="Health at it's Best!!."
            {...this.props}
          />
          <HomeCategory
            imageUri={require("../../assets/Staple_tile.jpg")}
            titleFirst="Staples"
            
            subTitle="For the daily needs.."
            {...this.props}
          />
        </ScrollView>
      </View>
    );
  }
}

export default Home;
