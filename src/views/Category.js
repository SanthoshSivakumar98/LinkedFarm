import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";
import Icon from "@expo/vector-icons/Ionicons";
import ItemList from "../components/ItemList";

const CATEGORY = [
  "Fruits",
  "Vegetables",
  "Staples"
  
];

const FRUITS = [
  {
    id: 1,
    imageUri: require("C:/Users/SNEHA/LinkedFarm/src/assets/FRUITS/apple.jpg"),
    name: "Apple",
    priceOne: 100,
    priceTwo: "Rs.180"
  },
  {
    id: 2,
    imageUri: require("C:/Users/SNEHA/LinkedFarm/src/assets/FRUITS/orange.jpg"),
    name: "Orange",
    priceOne: 100,
    priceTwo: null
  },
  {
    id: 3,
    imageUri: require("C:/Users/SNEHA/LinkedFarm/src/assets/FRUITS/grapes.jpg"),
    name: "Grapes",
    priceOne: 80,
    priceTwo: null
  },
  {
    id: 4,
    imageUri: require("C:/Users/SNEHA/LinkedFarm/src/assets/FRUITS/mango.jpg"),
    name: "Mango",
    priceOne: 80,
    priceTwo: null
  },
  {
    id: 5,
    imageUri: require("C:/Users/SNEHA/LinkedFarm/src/assets/FRUITS/banana.jpg"),
    name: "Banana",
    priceOne: 80,
    priceTwo: null
  },
  {
    id: 6,
    imageUri: require("C:/Users/SNEHA/LinkedFarm/src/assets/FRUITS/grapes-blue.jpg"),
    name: "Blue-Grapes",
    priceOne: 80,
    priceTwo: null
  },
  
];

const VEGETABLES = [
  {
    id: 1,
    imageUri: require("C:/Users/SNEHA/LinkedFarm/src/assets/VEGETABLES/onion.jpg"),
    name: "Onion",
    priceOne: 120,
    priceTwo: null
  },
  {
    id: 2,
    imageUri: require("C:/Users/SNEHA/LinkedFarm/src/assets/VEGETABLES/tomato.jpg"),
    name: "Tomato",
    priceOne: 180,
    priceTwo: null
  },
  {
    id: 3,
    imageUri: require("C:/Users/SNEHA/LinkedFarm/src/assets/VEGETABLES/carrot.jpg"),
    name: "Carrot",
    priceOne: 80,
    priceTwo: null
  },
  {
    id: 4,
    imageUri: require("C:/Users/SNEHA/LinkedFarm/src/assets/VEGETABLES/spinach.jpg"),
    name: "Spinach",
    priceOne: 80,
    priceTwo: null
  },
  {
    id: 5,
    imageUri: require("C:/Users/SNEHA/LinkedFarm/src/assets/VEGETABLES/cabbage.jpg"),
    name: "Cabbage",
    priceOne: 80,
    priceTwo: null
  },
  {
    id: 6,
    imageUri: require("C:/Users/SNEHA/LinkedFarm/src/assets/VEGETABLES/brinjal.jpg"),
    name: "Brinjal(Egg Plant)",
    priceOne: 80,
    priceTwo: null
  },
  
];
const STAPLES=[
{
    id: 1,
    imageUri: require("C:/Users/SNEHA/LinkedFarm/src/assets/STAPLES/coffee.jpg"),
    name: "Coffee",
    priceOne: 120,
    priceTwo: null
  },
  {
    id: 2,
    imageUri: require("C:/Users/SNEHA/LinkedFarm/src/assets/STAPLES/moong.jpg"),
    name: "Moong-Daal",
    priceOne: 120,
    priceTwo: null
  },
  
  {
    id: 3,
    imageUri: require("C:/Users/SNEHA/LinkedFarm/src/assets/STAPLES/rice.jpg"),
    name: "Rice",
    priceOne: 120,
    priceTwo: null
  },
  
  {
    id: 4,
    imageUri: require("C:/Users/SNEHA/LinkedFarm/src/assets/STAPLES/tea.jpg"),
    name: "Tea",
    priceOne: 120,
    priceTwo:null
  },
  
  {
    id: 5,
    imageUri: require("C:/Users/SNEHA/LinkedFarm/src/assets/STAPLES/urad.jpg"),
    name: "Urad-Daal",
    priceOne: 120,
    priceTwo: null
  },

  {
    id: 6,
    imageUri: require("C:/Users/SNEHA/LinkedFarm/src/assets/STAPLES/pepper.jpg"),
    name: "Pepper",
    priceOne: 120,
    priceTwo: null
  },
  
  

];

class Category extends Component {
  state = {
    currentIndex: 0
  };

  renderCategory = () => {
    return CATEGORY.map((item, i) => {
      return (
        <Text
          key={i}
          onPress={() => this.setState({ currentIndex: i })}
          style={{
            fontSize: 18,
            color: this.state.currentIndex === i ? "#290250" : "white",
            paddingHorizontal: 10
          }}
        >
          {item}
        </Text>
      );
    });
  };

  renderItemList_Fruits = () => {
    return FRUITS.map((item, i) => {
      return (
        <ItemList
          onPress={() =>
            this.props.navigation.navigate("Detail", {
              detailName: item.name,
              detailImageUri: item.imageUri,
              detailPriceOne: item.priceOne,
              detailPriceTwo: item.priceTwo ? item.priceTwo : null
            })
          }
          key={item.id}
          imageUri={item.imageUri}
          name={item.name}
          priceOne={item.priceOne}
          priceTwo={item.priceTwo ? item.priceTwo : null}
        />
      );
    });
  };

  renderItemList_Vegetables = () => {
    return VEGETABLES.map((item, i) => {
      return (
        <ItemList
          onPress={() =>
            this.props.navigation.navigate("Detail", {
              detailName: item.name,
              detailImageUri: item.imageUri,
              detailPriceOne: item.priceOne,
              detailPriceTwo: item.priceTwo ? item.priceTwo : null
            })
          }
          key={item.id}
          imageUri={item.imageUri}
          name={item.name}
          priceOne={item.priceOne}
          priceTwo={item.priceTwo ? item.priceTwo : null}
        />
      );
    });
  };
  renderItemList_Staples = () => {
    return STAPLES.map((item, i) => {
      return (
        <ItemList
          onPress={() =>
            this.props.navigation.navigate("Detail", {
              detailName: item.name,
              detailImageUri: item.imageUri,
              detailPriceOne: item.priceOne,
              detailPriceTwo: item.priceTwo ? item.priceTwo : null
            })
          }
          key={item.id}
          imageUri={item.imageUri}
          name={item.name}
          priceOne={item.priceOne}
          priceTwo={item.priceTwo ? item.priceTwo : null}
        />
      );
    });
  };

  renderItemList = () => {
    if (this.state.currentIndex === 0) {
      return this.renderItemList_Fruits();
    } else if (this.state.currentIndex === 1) {
      return this.renderItemList_Vegetables();
    }
    else if (this.state.currentIndex === 2) {
      return this.renderItemList_Staples();
    }
  };

  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        {/* headerScrollHorizontal */}
        <View
          style={{
            height: hp("8%"),
            backgroundColor: "#611993",
            flexDirection: "row"
          }}
        >
          <View
            style={{
              flex: 4
            }}
          >
            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                justifyContent: "center"
              }}
              ref={node => (this.scroll = node)}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center"
                }}
              >
                {this.renderCategory()}
              </View>
            </ScrollView>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Icon
              onPress={() => {
                this.scroll.scrollTo({ x: wp("80%") });
              }}
              name="ios-arrow-forward"
              size={20}
              color="white"
            />
          </View>
        </View>
        {/* headerScrollHorizontal */}

        {/* itemLists ScrollVertical */}
        <View
          style={{
            flex: 1
          }}
        >
          <ScrollView
            contentContainerStyle={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between"
            }}
          >
            {/* ItemList */}
            {this.renderItemList()}
          </ScrollView>
        </View>
        {/* itemLists ScrollVertical */}
      </View>
    );
  }
}

export default Category;
