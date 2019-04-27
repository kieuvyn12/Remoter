import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Text>
          What you clicked on will show up here!{' '}
          {this.props.navigation.getParam('cafe')}
        </Text>
      </View>
    );
  }
}
