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
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <Button
                buttonStyle={{
                  borderWidth: 5,
                  borderColor: 'lightgrey',
                  borderRadius: 20,
                }}
                onPress={this.onPress}
                title="Enter the site!"
                type="outline"
                raised={true}
                containerStyle={{
                  height: 50,
                  width: 150,
                }}
              />
            </View>
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
