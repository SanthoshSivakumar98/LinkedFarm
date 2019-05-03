import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import ShippingPartner from "../components/ShippingPartner";

class Shipping extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
       
        <View
          style={{
            paddingVertical: 15,
            flex: 1,
            paddingHorizontal: 15
          }}
        >
          <Text
            style={{
              color: "gray",
              fontSize: 14,
              marginBottom: 15
            }}
          >
            Shipping Address
          </Text>
          <Text
            style={{
              fontSize: 14
            }}
          >
           
          </Text>
          <Text
            style={{
              fontSize: 14
            }}
          >
           
          </Text>
          <Text
            style={{
              fontSize: 14
            }}
          >
            
          </Text>
          <Text
            style={{
              fontSize: 14
            }}
          >
            
          </Text>
          <Text
            style={{
              fontSize: 14
            }}
          >
            
          </Text>
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end"
            }}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this.props.navigation.navigate("CreditCard")}
              style={{
                backgroundColor: "#290250",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 2,
                shadowOffset: { width: 1, height: 2 },
                shadowColor: "#000",
                shadowOpacity: 0.4,
                elevation: 4,
                paddingVertical: 10
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "500",
                  color: "white"
                }}
              >
                Next Step
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Shipping;
