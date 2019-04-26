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
        {/* <View>
          {this.props.navigation.getParam('place').map(cafe => {
            return (
              <View key={cafe.id}>
                <Text>{cafe.name}</Text>
              </View>
            );
          })}
        </View> */}
      </View>
    );
  }
}
