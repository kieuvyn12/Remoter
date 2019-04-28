import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export default class ListItem extends Component {
  onPress = () => {
    this.props.navigate.push('SinglePage', {
      cafe: this.props.prop.name,
      cafeId: this.props.prop.id,
    });
  };

  render() {
    return (
      <View key={this.props.prop.id} style={styles.list}>
        <Text onPress={this.onPress}>{this.props.prop.name}</Text>
      </View>
    );
  }
}
