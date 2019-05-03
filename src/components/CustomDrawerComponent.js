import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity
} from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import Icon from "@expo/vector-icons/Ionicons";

class CustomDrawerComponent extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <ImageBackground
          source={require("../../assets/coffeeplantation.jpg")}
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
            resizeMode: "contain"
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "#541C52",
              paddingTop: wp("14%"),
              paddingHorizontal: wp("9.5%"),
              paddingBottom: wp("7%")
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  fontWeight: "bold"
                }}
              >
                Menu
              </Text>
              <Icon
                onPress={() => this.props.navigation.closeDrawer()}
                name="ios-close"
                color="white"
                size={50}
              />
            </View>
            <View
              style={{
                flex: 2,
                justifyContent: "space-around",
                marginVertical: 20,
                padding: 5
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.closeDrawer();
                  this.props.navigation.navigate("Home");
                }}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 5
                }}
              >
                <Icon name="ios-home" color="white" size={40} />
                <Text
                  style={{
                    color: "white",
                    fontSize: 25,
                    fontWeight: "400",
                    marginLeft: wp("4.5%")
                  }}
                >
                  Home
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.closeDrawer();
                  this.props.navigation.navigate("News");
                }}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 5
                }}
              >
                
              <Icon name="logo-designernews" color="white" size={40} />
                <Text
                  style={{
                    color: "white",
                    fontSize: 25,
                    fontWeight: "400",
                    marginLeft: wp("4.5%")
                  }}
                >
                  News
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.closeDrawer();
                  this.props.navigation.navigate("Chat");
                }}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 5
                }}
              >
                
              <Icon name="ios-chatboxes" color="white" size={40} />
                <Text
                  style={{
                    color: "white",
                    fontSize: 25,
                    fontWeight: "400",
                    marginLeft: wp("4.5%")
                  }}
                >
                 Chat
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.closeDrawer();
                  this.props.navigation.navigate("MyLanguages");
                }}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 5
                }}
              >
                
              <Icon name="ios-globe" color="white" size={40} />
                <Text
                  style={{
                    color: "white",
                    fontSize: 25,
                    fontWeight: "400",
                    marginLeft: wp("4.5%")
                  }}
                >
                  My Languages
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.closeDrawer();
                  this.props.navigation.navigate("MyProducts");
                }}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 5
                }}
              >
                
              <Icon name="md-list-box" color="white" size={40} />
                <Text
                  style={{
                    color: "white",
                    fontSize: 25,
                    fontWeight: "400",
                    marginLeft: wp("4.5%")
                  }}
                >
                  My Products
                </Text>
              </TouchableOpacity>

              
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.closeDrawer();
                  this.props.navigation.navigate("Statistics");
                }}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 5
                }}
              >
              <Icon name="ios-analytics" color="white" size={40} />
                <Text
                  style={{
                    color: "white",
                    fontSize: 25,
                    fontWeight: "400",
                    marginLeft: wp("4.5%")
                  }}
                >
                  Statistics
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.closeDrawer();
                  this.props.navigation.navigate("AgriBot");
                }}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 5
                }}
              >
              <Icon name="logo-android" color="white" size={40} />
                <Text
                  style={{
                    color: "white",
                    fontSize: 25,
                    fontWeight: "400",
                    marginLeft: wp("4.5%")
                  }}
                >
                  AgriBot
                </Text>
              </TouchableOpacity>
              
              
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.closeDrawer();
                  this.props.navigation.navigate("Basket");
                }}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 5
                }}
              >
                <Icon name="ios-cart" color="white" size={40} />
                <Text
                  style={{
                    color: "white",
                    fontSize: 25,
                    fontWeight: "400",
                    marginLeft: wp("4.5%")
                  }}
                >
                  Basket
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end"
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center"
                }}
              >
                <View
                  style={{
                    width: wp("20%"),
                    height: wp("20%"),
                    overflow: "hidden",
                    borderRadius: wp("10%"),
                    marginRight: wp("4.5%")
                  }}
                >
                  <Image
                    source={require("../../assets/reviewer.jpg")}
                    style={{
                      flex: 1,
                      width: null,
                      height: null,
                      resizeMode: "contain"
                    }}
                  />
                </View>
                <Text
                  style={{
                    color: "white",
                    fontSize: 25,
                    fontWeight: "400"
                  }}
                >
                  Account
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default CustomDrawerComponent;

{
  /* <Text> CustomDrawerComponent </Text>
        <Button
          title="go to Basket"
          onPress={() => this.props.navigation.navigate("Basket")}
        /> */
}
