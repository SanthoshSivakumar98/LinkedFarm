import React, { Component } from 'react';
 import { ListView, Text, View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  img: {
    width: 193,
    height: 110,
  },
});

export default class MyProducts extends React.Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    this.state = {
      dataSource: ds.cloneWithRows(['Sales:120 Kg', 'Sales:200 Kg']),
    };
  }
  render() {
    const imageSource1 = "https://5.imimg.com/data5/PD/WY/MY-15786968/red-onion-500x500.jpg";
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={data => (
          <View style={styles.container}>
            <Image
              source={{ uri: imageSource1 }}
              style={styles.img}
            />
            <Text>{data}</Text>
          </View>)}
      />
    );
  }
}


