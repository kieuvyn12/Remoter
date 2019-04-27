import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { ThemeProvider, Button, Overlay } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: true,
    };
  }
  onPress = () => {
    this.setState({ isVisible: false });
    this.props.navigation.push('MainPage');
  };

  render() {
    return (
      <ThemeProvider>
        <Overlay isVisible={this.state.isVisible}>
          <View>
            <Text>Welcome to Remoter!</Text>
            <Button
              onPress={this.onPress}
              title="I want to find somewhere to work today!"
              type="outline"
              raised={true}
            />
          </View>
        </Overlay>
        <Text>Remoter Home</Text>
      </ThemeProvider>
    );
  }
}
