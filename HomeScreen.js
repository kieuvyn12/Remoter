import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class HomeScreen extends Component {
  onPress = () => {
    this.props.navigation.push('HelloWorldApp');
  };

  render() {
    return (
      <View>
        <Text onPress={this.onPress}>Welcome to Remoter!</Text>
      </View>
    );
  }
}
