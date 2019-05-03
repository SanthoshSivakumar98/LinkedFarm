import React, { Component } from "react";
import { View } from "react-native";
import BasketItem from "../components/BasketItem";
import ChoosingSizeBox from "../components/ChoosingSizeBox";

class EditBasket extends Component {
  render() {
    const {
      basketItemName,
      basketItemPrice,
      basketItemColor,
      basketItemSize,
      basketItemImageUri
    } = this.props.navigation.state.params;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#CAE0F5"
        }}
      >
        <BasketItem
          editIcon={false}
          imageUri={basketItemImageUri}
          name={basketItemName}
          color={basketItemColor}
          size={basketItemSize}
          price={basketItemPrice}
        />
        <View
          style={{
            flex: 1
          }}
        >
          <ChoosingSizeBox
            label="Choosing a Quantity"
            onBasketPage={true}
            top={this.sizeBox}
            opacity={1}
            firstItem="1 KG"
            secondItem="2 KG"
            thirdItem="3 KG"
          />
          
        </View>
      </View>
    );
  }
}

export default EditBasket;
