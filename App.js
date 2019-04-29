import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button, Header } from 'react-native-elements';
import HomeScreen from './HomeScreen';
import MainPage from './MainPage';
import SinglePage from './SinglePage';
import List from './List';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const MainStackNavigator = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Home',
      }),
    },
    MainPage: {
      screen: MainPage,
      navigationOptions: ({ navigation }) => ({
        title: 'The Spots',
      }),
    },
    List,
    SinglePage: {
      screen: SinglePage,
      navigationOptions: ({ navigation }) => ({
        title: navigation.getParam('cafe'),
      }),
    },
  },
  { headerMode: 'float', headerTransitionPreset: 'fade-in-place' }
);

const NavigationApp = createAppContainer(MainStackNavigator);

export default NavigationApp;
