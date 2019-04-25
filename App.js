import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Permissions, Location, MapView } from 'expo';

export default class HelloWorldApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasLocationPermissions: false,
      locationResult: null,
      mapRegion: null,
      currentCoordinates: {},
    };
  }

  componentDidMount() {
    this.getLocationAsync();
  }

  async getLocationAsync() {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status === 'granted') {
      this.setState({ hasLocationPermissions: true });
      let location = await Location.getCurrentPositionAsync({
        enableHighAccuracy: true,
      });
      this.setState({ locationResult: JSON.stringify(location) });
      this.setState({
        currentCoordinates: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        },
      });

      this.setState({
        mapRegion: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
      });
      return Location.getCurrentPositionAsync({ enableHighAccuracy: true });
    } else {
      this.setState({
        locationResult: 'Permission to access location was denied',
      });
    }
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hello, world hi!</Text>
        {this.state.locationResult === null ? (
          <Text>Finding your current location...</Text>
        ) : this.state.hasLocationPermissions === false ? (
          <Text>Location permissions are not granted.</Text>
        ) : this.state.mapRegion === null ? (
          <Text>Map region doesn't exist.</Text>
        ) : (
          <MapView
            style={{ alignSelf: 'stretch', height: 400 }}
            region={this.state.mapRegion}
            onRegionChange={this._handleMapRegionChange}
          />
        )}

        <Text>Latitude: {this.state.currentCoordinates.latitude}</Text>
        <Text>Longitude: {this.state.currentCoordinates.longitude}</Text>
      </View>
    );
  }
}
