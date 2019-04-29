import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
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
                paddingTop: 80,
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'stretch',
              }}
            >
              <Image
                source={require('./logo.png')}
                style={{
                  flex: 1,
                  alignItems: 'stretch',
                  width: 300,
                  height: 200,
                  justifyContent: 'center',
                  paddingBottom: 100,
                }}
              />

              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}
              >
                <Button
                  buttonStyle={{
                    borderColor: '#4b4343',
                    borderRadius: 20,
                  }}
                  onPress={this.onPress}
                  title="Enter"
                  type="outline"
                  titleStyle={{ color: '#4b4343' }}
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
                borderColor: '#4b4343',
                borderRadius: 20,
              }}
              onPress={this.onPress}
              title="Back to site "
              type="outline"
              titleStyle={{ color: '#4b4343' }}
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
