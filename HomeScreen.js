import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { ThemeProvider, Overlay, Button } from 'react-native-elements';
import styles from './styles';

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
          <View style={styles.container}>
            <Text style={styles.paragraph}>Welcome to Remoter!</Text>
            <Button
              onPress={this.onPress}
              title="Enter the site!"
              type="outline"
              raised={true}
            />
          </View>
        </Overlay>
        <Text>Remoter Home</Text>
        <Button
          onPress={this.onPress}
          title="I want to find somewhere to work today!"
          type="outline"
          raised={true}
        />
      </ThemeProvider>
    );
  }
}
