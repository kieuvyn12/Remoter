import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button, Header } from 'react-native-elements';
import HomeScreen from './HomeScreen';
import MainPage from './MainPage';
import SinglePage from './SinglePage';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const MainStackNavigator = createStackNavigator({
  HomeScreen,
  MainPage,
  SinglePage,
});

const NavigationApp = createAppContainer(MainStackNavigator);

export default NavigationApp;
