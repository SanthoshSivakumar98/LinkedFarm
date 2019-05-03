import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Echarts from 'native-echarts';

export default class Statistics extends React.Component {
  render() {
    const option = {
      title: {
          text: 'Growth In Year-2018'
      },
      tooltip: {},
      legend: {
          data:['Statistics']
      },
      xAxis: {
          data: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
      },
      yAxis: {},
      series: [{
          name: 'Sales',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20,25,19,18,23,25,15]
      }]
    };
    return (
      <Echarts option={option} height={300} />
    );
  }
}
