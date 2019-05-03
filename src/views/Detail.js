import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  Animated,
  TouchableWithoutFeedback
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";
import Icon from "@expo/vector-icons/Ionicons";
import StarRating from "react-native-star-rating";
import ChoosingSizeBox from "../components/ChoosingSizeBox";
import Address from "./Address";


const { width } = Dimensions.get("window");

class Detail extends Component {
  state = {
    defaultBox: null,
    City: "Coimbatore",
    Quantity: "1",
    CityBoxOpen: false,
    QuantityBoxOpen: false,
    QuantityIconName: "ios-arrow-down",
    iconName: "ios-arrow-down",
    CityBorderColor: "gray",
    QuantityBorderColor: "gray"
  };

  componentWillMount() {
    this.CityBox = new Animated.Value(hp("65%"));
    this.QuantityBox = new Animated.Value(hp("65%"));
  }

  onChooseItem = item => {
    this.setState({ City: item });
  };

  onChooseQuantity = item => {
    this.setState({ Quantity: item });
  };

  openQuantityBox = () => {
    this.setState(
      (prevState, props) => {
        return {
          CityBoxOpen: false,
          QuantityBoxOpen: !prevState.QuantityBoxOpen,
          QuantityIconName:
            prevState.QuantityIconName === "ios-arrow-down"
              ? "ios-arrow-up"
              : "ios-arrow-down",
          iconName: "ios-arrow-down",
          QuantityBorderColor:
            prevState.QuantityBorderColor === "gray" ? "black" : "gray",
          CityBorderColor: "gray",
          defaultBox: "QuantityBox"
        };
      },
      () => {
        if (this.state.QuantityBoxOpen) {
          Animated.timing(this.QuantityBox, {
            toValue: hp("30%"),
            duration: 400
          }).start();
        } else {
          Animated.timing(this.QuantityBox, {
            toValue: hp("65%"),
            duration: 400
          }).start();
        }
        if (this.state.CityBoxOpen) {
          Animated.timing(this.CityBox, {
            toValue: hp("30%"),
            duration: 400
          }).start();
        } else {
          Animated.timing(this.CityBox, {
            toValue: hp("65%"),
            duration: 400
          }).start();
        }
      }
    );
  };

  openCityBox = () => {
    this.setState(
      (prevState, props) => {
        return {
          QuantityBoxOpen: false,
          CityBoxOpen: !prevState.CityBoxOpen,
          iconName:
            prevState.iconName === "ios-arrow-down"
              ? "ios-arrow-up"
              : "ios-arrow-down",
          QuantityIconName: "ios-arrow-down",
          CityBorderColor:
            prevState.CityBorderColor === "gray" ? "black" : "gray",
          QuantityBorderColor: "gray",
          defaultBox: "CityBox"
        };
      },
      () => {
        if (this.state.CityBoxOpen) {
          Animated.timing(this.CityBox, {
            toValue: hp("30%"),
            duration: 400
          }).start();
        } else {
          Animated.timing(this.CityBox, {
            toValue: hp("65%"),
            duration: 400
          }).start();
        }
        if (this.state.QuantityBoxOpen) {
          Animated.timing(this.QuantityBox, {
            toValue: hp("30%"),
            duration: 400
          }).start();
        } else {
          Animated.timing(this.QuantityBox, {
            toValue: hp("65%"),
            duration: 400
          }).start();
        }
      }
    );
  };

  render() {
    const animatedCityBoxOpacity = this.CityBox.interpolate({
      inputRange: [hp("30%"), hp("65%")],
      outputRange: [1, 0],
      extrapolate: "clamp"
    });

    const animatedQuantityBoxOpacity = this.QuantityBox.interpolate({
      inputRange: [hp("30%"), hp("65%")],
      outputRange: [1, 0],
      extrapolate: "clamp"
    });

    const {
      detailName,
      detailImageUri,
      detailPriceOne,
      detailPriceTwo
    } = this.props.navigation.state.params;
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <ScrollView>
          {/* image */}
          <View
            style={{
              width: width,
              height: hp("65%")
            }}
          >
            <Image
              source={detailImageUri}
              style={{
                flex: 1,
                width: null,
                height: null,
                resizeMode: "contain"
              }}
            />
          </View>
          {/* image */}

          {/* ChoosingSizeBox */}
          {this.state.defaultBox === "QuantityBox" ? (
            <ChoosingSizeBox
              label="Choosing a Quantity"
              
              top={this.QuantityBox}
              opacity={animatedQuantityBoxOpacity}
              firstItem="1"
              secondItem="2"
              thirdItem="3"
              onPressFirst={() => this.onChooseQuantity("1")}
              onPressSecond={() => this.onChooseQuantity("2")}
              onPressThird={() => this.onChooseQuantity("3")}
            />
          ) : (
            <ChoosingSizeBox
              label="Choosing a City"
              top={this.CityBox}
              opacity={animatedCityBoxOpacity}
              firstItem="Coimbatore"
              secondItem="Chennai"
              thirdItem="Madhurai"
              onPressFirst={() => this.onChooseItem("Coimbatore")}
              onPressSecond={() => this.onChooseItem("Chennai")}
              onPressThird={() => this.onChooseItem("Madhurai")}
            />
          )}
          {/* ChoosingSizeBox */}

          {/* priceBox */}
          <View
            style={{
              flex: 1,
              borderBottomWidth: 1,
              borderBottomColor: "gray",
              zIndex: 200
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 15,
                marginVertical: 25
              }}
            >
              {/* up bar */}
              {/* left */}
              <TouchableWithoutFeedback onPress={() => this.openQuantityBox()}>
                <View
                  style={{
                    width: wp("45%"),
                    flexDirection: "row",
                    borderWidth: 0.8,
                    borderColor: "gray",
                    borderRadius: 2,
                    padding: 5
                  }}
                >
                  <View
                    style={{
                      flex: 2,
                      flexDirection: "row",
                      alignItems: "center"
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "green",
                        width: wp("4.5%"),
                        height: wp("4.5%"),
                        marginRight: 15
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 16,
                        color: "gray",
                        textTransform: "capitalize"
                      }}
                    >
                     
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: "flex-end",
                      paddingRight: 15
                    }}
                  >
                    
                  </View>
                </View>
              </TouchableWithoutFeedback>
              {/* left */}

              {/* right */}
              <TouchableWithoutFeedback onPress={() => this.openCityBox()}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: wp("45%"),
                    borderWidth: 0.8,
                    borderColor: "green",
                    borderRadius: 2,
                    padding: 5
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: "gray",
                      marginLeft: 15,
                      textTransform: "capitalize"
                    }}
                  >
                    {this.state.City}
                  </Text>
                  <View
                    style={{
                      flex: 1,
                      alignItems: "flex-end",
                      paddingRight: 15
                    }}
                  >
                    <Icon name={this.state.iconName} size={20} color="gray" />
                  </View>
                </View>
              </TouchableWithoutFeedback>
              {/* right */}
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 15,
                paddingBottom: 25
              }}
            >
              {/* down bar */}
              {/* left */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-end"
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    marginRight: 15
                  }}
                >
                  Rs. {detailPriceOne}
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "gray",
                    textDecorationLine: "line-through"
                  }}
                >
                  {detailPriceTwo}
                </Text>
              </View>
              {/* left */}
              {/* right */}
              <View
                style={{
                  width: wp("45%"),
                  backgroundColor: "#290250",
                  borderRadius: 2,
                  padding: 5
                }}
              >
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Adddress")}
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center"
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      paddingLeft: 15
                    }}
                  >
                    <Icon name="md-cart" size={20} color="white" />
                  </View>
                  <View
                    style={{
                      flex: 2
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 18,
                        color: "white"
                      }}
                    >
                      Purchase
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              {/* right */}
            </View>
          </View>
          {/* priceBox */}

          {/* DescriptionBox */}
          <View
            style={{
              flex: 1,
              borderBottomWidth: 1,
              borderBottomColor: "gray"
            }}
          >
            {/* upper */}
            <View
              style={{
                flex: 1,
                marginHorizontal: 15,
                marginVertical: 25
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "#290250"
                }}
              >
                Description
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  lineHeight: 20
                }}
              >
                Just in the past year, we have continued to see customers embrace online shopping methods, and retail e-commerce sales data supports that theory.
                 By the end of the second quarter in 2016, retail e-commerce sales were at $96 billion, which made up roughly 8 percent of total retail sales. By the second quarter of 2017, e-commerce sales had grown by 16 percent. 
                 Just from these numbers, it’s safe to say starting an online store is crucial for business.
              </Text>
            </View>
            {/* upper */}
            {/* lower */}
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 15,
                paddingBottom: 25
              }}
            >
              {/* left */}
              <View
                style={{
                  flex: 1
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#290250",
                    marginBottom: 5
                  }}
                >
                  Available Quantities
                </Text>
                <View
                  style={{
                    flexDirection: "row"
                  }}
                ><Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold"
                  }}
                >
                  1 Kg, 2 Kg, 3 Kg
                </Text>
                  
                  
                  
                </View>
              </View>
              {/* left */}
              {/* right */}
              <View
                style={{
                  flex: 1
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#290250",
                    marginBottom: 5
                  }}
                >
                  Available Cities
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold"
                  }}
                >
                  Coimbatore, Chennai, Madhurai
                </Text>
              </View>
              {/* right */}
            </View>
            {/* lower */}
          </View>
          {/* DescriptionBox */}

          {/* reviews */}
          <View
            style={{
              paddingLeft: 25,
              paddingVertical: 5,
              backgroundColor: "#EFF0F1"
            }}
          >
            <Text
              style={{
                fontSize: 14,
                color: "gray"
              }}
            >
              33 Reviews
            </Text>
          </View>
          {/* reviews */}

          {/* reviewBox */}
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginHorizontal: 15,
              marginVertical: 25
            }}
          >
            {/* left */}
            <View
              style={{
                flex: 1
              }}
            >
              {/* profile */}
              <View
                style={{
                  width: wp("10%"),
                  height: wp("10%"),
                  borderWidth: 1,
                  borderColor: "gray",
                  borderRadius: wp("5%"),
                  overflow: "hidden"
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
            </View>
            {/* left */}
            {/* right */}
            <View
              style={{
                flex: 4
              }}
            >
              {/* right_up */}
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingBottom: 10
                }}
              >
                {/* name and star */}
                <View>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      paddingBottom: 10
                    }}
                  >
                    Shreya says
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      color: "gray"
                    }}
                  >
                    2 Hours ago
                  </Text>
                </View>
                <View>
                  <StarRating
                    disabled={true}
                    maxStars={5}
                    rating={4}
                    starSize={16}
                    fullStarColor="yellow"
                  />
                </View>
              </View>
              {/* right_up */}
              {/* right_down */}
              <Text
                style={{
                  color: "gray",
                  fontSize: 13,
                  lineHeight: 18
                }}
              >
                The products brought were good and Fresh! Keep Going LinkedFarm :)!
              </Text>
              {/* right_down */}
            </View>
            {/* right */}
          </View>
          {/* reviewBox */}
        </ScrollView>
      </View>
    );
  }
}

export default Detail;
