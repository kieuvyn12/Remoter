import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { ThemeProvider, Overlay, Button } from 'react-native-elements';
import { Constants } from 'expo';
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
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'stretch',
              }}
            >
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
          </View>
        </Overlay>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'stretch',
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              paddingTop: 250,
            }}
          >
            <Button
              buttonStyle={{
                borderWidth: 5,
                borderColor: 'lightgrey',
                borderRadius: 20,
              }}
              onPress={this.onPress}
              title="Back to site!"
              type="outline"
              raised={true}
              containerStyle={{
                height: 50,
                width: 150,
              }}
            />
          </View>
        </View>
      </ThemeProvider>
    );
  }
}
