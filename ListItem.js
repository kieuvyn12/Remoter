import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class ListItem extends Component {
  onPress = () => {
    this.props.navigate.push('SinglePage', { cafe: this.props.prop.name });
  };

  render() {
    return (
      <View key={this.props.prop.id}>
        <Text onPress={this.onPress}>{this.props.prop.name}</Text>
      </View>
    );
  }
}
