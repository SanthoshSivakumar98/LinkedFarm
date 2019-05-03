import BrickList from 'react-native-masonry-brick-list';
import React, {Component} from 'react';
import {View, Text} from 'react-native'


type Props = {};
export default class MyLanguages extends React.Component {
    constructor(props){
        super(props);
        this.state={
            //Just id (unique) and span (1,2,3, ...) is required
            data:[
                {id: '1', name: "Hindi", color: "#f44336", span: 1},
                {id: '2', name: "English", color: "#E91E63", span: 2},
                {id: '3', name: "Guajarati", color: "#9C27B0", span: 3},
                {id: '4', name: "Bengali", color: "#673AB7", span: 1},
                {id: '5', name: "Punjabi", color: "#3F51B5", span: 1},
                {id: '6', name: "Tamil", color: "#2196F3", span: 1},
                {id: '7', name: "Urdu", color: "#03A9F4", span: 3},
                {id: '8', name: "Telugu", color: "#00BCD4", span: 2},
                {id: '9', name: "Malayalam", color: "#009688", span: 1},
                {id: '10', name: "Kannada", color: "#4CAF50", span: 1},
                {id: '11', name: "Sindhi", color: "#8BC34A", span: 2},
                {id: '12', name: "Sanskrit", color: "#CDDC39", span: 3},
                {id: '13', name: "Assamese", color: "#FFEB3B", span: 2},
                {id: '14', name: "Odia", color: "#FFC107", span: 1},
                {id: '15', name: "  Maithili", color: "#FF5722", span: 3},
            ],
        }
    }


    render() {
        return (
            <BrickList
            data = {this.state.data}
            renderItem={(prop)=>renderView(prop)}
            columns = {3}
            />
        );
    }
}
//RenderAnyItem
renderView=(prop)=>{
    return(
        <View key={prop.id} style={{
            margin: 2,
            borderRadius: 2,
            backgroundColor: prop.color,
            flex:1,
            alignItems:'center',
            justifyContent:'center',
        }} >
            <Text style={{color:'white'}}>{prop.name}</Text>
        </View>
    )
};