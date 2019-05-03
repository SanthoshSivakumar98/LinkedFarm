import React, { Component } from 'react';
import { createBottomTabNavigator,createAppContainer ,createStackNavigator,StackViewTransitionConfigs} from 'react-navigation';
import {
  StyleSheet,
  View,
  StatusBar,
  AppRegistry
} from 'react-native';
import { Dimensions } from "react-native";
import {
  
  createSwitchNavigator,
 
  createDrawerNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";
import Icon from "@expo/vector-icons/Ionicons";
import { DrawerActions } from 'react-navigation';

import Home from "./src/views/Home";
import Category from "./src/views/Category";
import Detail from "./src/views/Detail";
import Basket from "./src/views/Basket";
import EditBasket from "./src/views/EditBasket";
import Address from "./src/views/Address";
import Shipping from "./src/views/Shipping";
import Payment from "./src/views/Payment";
import TermsAndConditions from "./src/views/TermsAndConditions";
import CreditCard from "./src/views/CreditCard";
import CustomDrawerComponent from "./src/components/CustomDrawerComponent";

import News from './src/components/News';
import Login from './src/pages/Login';
import Signup from './src/pages/Signup';
import Statistics from './src/components/Statistics';
import AgriBot from './src/components/AgriBot';
import MyProducts from './src/components/MyProducts';
import Chat from './src/components/Chat';
import MyLanguages from './src/components/MyLanguages';
const paymentStackNavigator = createStackNavigator(
  {
    
    CreditCard: {
      screen: CreditCard
    }
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

const CheckoutTabNavigator = createMaterialTopTabNavigator(
  {
    Address: {
      screen: Address
    },
    Shipping: {
      screen: Shipping
    },
    Payment: {
      screen: paymentStackNavigator
    }
  },
  {
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: "#D61609",
      style: {
        backgroundColor: "#290250"
      },
      indicatorStyle: {
        backgroundColor: "#D61609"
      }
    }
  }
);

const HomeStackNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Home",
        headerTitleStyle: {
          color: "white"
        },
        headerStyle: {
          backgroundColor: "#541C52"
        },
        headerLeft: (
          <Icon
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            color="white"
            size={30}
            style={{
              paddingLeft: 10
            }}
          />
        ),
        headerRight: (
          <Icon
            onPress={() => navigation.openDrawer()}
            name="ios-search"
            color="white"
            size={30}
            style={{
              paddingRight: 10
            }}
          />
        )
      };
    }
  },
  News:{
    screen:News,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "News",
        headerTitleStyle: {
          color: "white"
        },
        headerStyle: {
          backgroundColor: "#541C52"
        },
        headerLeft: (
          <Icon
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            color="white"
            size={30}
            style={{
              paddingLeft: 10
            }}
          />
        ),
        
      };
    }
  
  },
   MyLanguages:{
    screen:MyLanguages,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "My Languages",
        headerTitleStyle: {
          color: "white"
        },
        headerStyle: {
          backgroundColor: "#541C52"
        },
        headerLeft: (
          <Icon
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            color="white"
            size={30}
            style={{
              paddingLeft: 10
            }}
          />
        ),
        
      };
    }
  
  },
   MyProducts:{
    screen:MyProducts,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "My Products",
        headerTitleStyle: {
          color: "white"
        },
        headerStyle: {
          backgroundColor: "#541C52"
        },
        headerLeft: (
          <Icon
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            color="white"
            size={30}
            style={{
              paddingLeft: 10
            }}
          />
        ),
        
      };
    }
  
  },
  Statistics:{
    screen:Statistics,
  navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Statistics",
        headerTitleStyle: {
          color: "white"
        },
        headerStyle: {
          backgroundColor: "#541C52"
        },
        headerLeft: (
          <Icon
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            color="white"
            size={30}
            style={{
              paddingLeft: 10
            }}
          />
        ),
        
      };
    }
  },
  Chat:{
    screen:Chat,
  navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "My Chats",
        headerTitleStyle: {
          color: "white"
        },
        headerStyle: {
          backgroundColor: "#541C52"
        },
        headerLeft: (
          <Icon
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            color="white"
            size={30}
            style={{
              paddingLeft: 10
            }}
          />
        ),
        
      };
    }
  },
  AgriBot:{
    screen:AgriBot,
  navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "AgriBot",
        headerTitleStyle: {
          color: "white"
        },
        headerStyle: {
          backgroundColor: "#541C52"
        },
        headerLeft: (
          <Icon
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            color="white"
            size={30}
            style={{
              paddingLeft: 10
            }}
          />
        ),
        
      };
    }
  },
  Category: {
    screen: Category,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: navigation.state.params.name,
        headerTitleStyle: {
          color: "white"
        },
        headerStyle: {
          backgroundColor: "#541C52"
        },
        headerLeft: (
          <Icon
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            color="white"
            size={30}
            style={{
              paddingLeft: 10
            }}
          />
        ),
        headerRight: (
          <Icon
            onPress={() => navigation.navigate("Basket")}
            name="md-cart"
            color="white"
            size={30}
            style={{
              paddingRight: 10
            }}
          />
        )
      };
    }
  },
  Basket: {
    screen: Basket,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Basket",
        headerTitleStyle: {
          color: "white"
        },
        headerStyle: {
          backgroundColor: "#541C52"
        },
        headerLeft: (
          <Icon
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
            style={{
              paddingLeft: 10
            }}
          />
        )
      };
    }
  },
  Checkout: {
    screen: CheckoutTabNavigator,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitleStyle: {
          color: "white"
        },
        headerStyle: {
          backgroundColor: "#541C52"
        },
        headerTitle: "Checkout",
        headerLeft: (
          <Icon
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
            style={{
              paddingLeft: 10
            }}
          />
        )
      };
    }
  },
  Detail: {
    screen: Detail,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitleStyle: {
          color: "white"
        },
        headerStyle: {
          backgroundColor: "#541C52"
        },
        headerTitle: navigation.state.params.detailName,
        headerLeft: null,
        headerRight: (
          <Icon
            onPress={() => navigation.navigate("Home")}
            name="ios-close"
            color="white"
            size={50}
            style={{
              paddingRight: 10
            }}
          />
        ),
        gesturesEnabled: false
      };
    }
  },
  TermsAndConditions: {
    screen: TermsAndConditions,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitleStyle: {
          color: "white"
        },
        headerStyle: {
          backgroundColor: "#541C52"
        },
        headerTitle: "Terms & Conditions",
        headerLeft: null,
        headerRight: (
          <Icon
            onPress={() => navigation.navigate("CreditCard")}
            name="ios-close"
            color="white"
            size={50}
            style={{
              paddingRight: 10
            }}
          />
        ),
        gesturesEnabled: false
      };
    }
  },
  EditBasket: {
    screen: EditBasket,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitleStyle: {
          color: "white"
        },
        headerStyle: {
          backgroundColor: "#541C52"
        },
        headerTitle: "Edit Basket Item",
        headerLeft: null,
        headerRight: (
          <Icon
            onPress={() => navigation.navigate("Basket")}
            name="ios-checkmark"
            color="white"
            size={50}
            style={{
              paddingRight: 10
            }}
          />
        ),
        gesturesEnabled: false
      };
    }
  }
});

const HomeDrawNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeStackNavigator
    }
  },
  {
    drawerWidth: Dimensions.get("window").width,
    contentComponent: CustomDrawerComponent
  }
);




const AppSwitchNavigator = createSwitchNavigator({
  
  Signup: {
    screen: Signup
  },
  Login: {
    screen: Login
  },

  Home: {
    screen: HomeDrawNavigator
  }
  
  
   

});

const AppContainer = createAppContainer(AppSwitchNavigator);
export default class App extends React.Component {
  

  render() {
    return (
      
            
 
         <AppContainer/>
        
       
        
      
    );
  }
}



const styles = StyleSheet.create({
  container : {
    flex: 1,
  }
});
