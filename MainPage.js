import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Button, Divider } from 'react-native-elements';
import { Permissions, Location, MapView } from 'expo';
import { YELPTOKEN } from './secrets';
import List from './List';
import styles from './styles';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasLocationPermissions: false,
      locationResult: null,
      mapRegion: null,
      currentCoordinates: {},
      cafes: [],
    };
    this.getCafesFromAPI = this.getCafesFromAPI.bind(this);
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

  async getCafesFromAPI() {
    try {
      let url = `https://api.yelp.com/v3/businesses/search?term="study"&categories="cafes"&latitude=${
        this.state.currentCoordinates.latitude
      }&longitude=${this.state.currentCoordinates.longitude}&limit=10`;
      let response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: YELPTOKEN,
        },
      });
      let responseJson = await response.json();
      this.setState({ cafes: responseJson.businesses });
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <ScrollView>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text style={styles.paragraph}>Remote Spots Near You: </Text>
          {this.state.locationResult === null ? (
            <Text style={styles.paragraph}>
              Finding your current location...
            </Text>
          ) : this.state.hasLocationPermissions === false ? (
            <Text style={styles.paragraph}>
              Location permissions are not granted.
            </Text>
          ) : this.state.mapRegion === null ? (
            <Text style={styles.paragraph}>Map region doesn't exist.</Text>
          ) : (
            <MapView
              style={{ alignSelf: 'stretch', height: 400 }}
              region={this.state.mapRegion}
            >
              <MapView.Marker
                coordinate={{
                  latitude: this.state.currentCoordinates.latitude,
                  longitude: this.state.currentCoordinates.longitude,
                }}
                title={'you are here!'}
                description={'your location'}
              />

              {this.state.cafes.length > 0 &&
                this.state.cafes.map(cafe => (
                  <MapView.Marker
                    key={cafe.id}
                    coordinate={{
                      latitude: cafe.coordinates.latitude,
                      longitude: cafe.coordinates.longitude,
                    }}
                    title={cafe.name}
                    description={cafe.alias}
                    image={require('./cafeicon.png')}
                  >
                    <MapView.Callout>
                      <Text style={styles.paragraph}>Name: {cafe.name}</Text>

                      <Text style={styles.paragraph}>
                        {cafe.is_closed
                          ? 'Currently: open'
                          : 'Currently: closed'}
                      </Text>

                      <Text style={styles.paragraph}>
                        Distance: {Math.floor(cafe.distance)} m away
                      </Text>
                    </MapView.Callout>
                  </MapView.Marker>
                ))}
            </MapView>
          )}

          <Divider style={{ height: 8 }} />

          {this.state.currentCoordinates.latitude && (
            <Button
              onPress={this.getCafesFromAPI}
              title="Find Remote Workplaces Near Me"
              type="outline"
              raised={true}
              accessibilityLabel="Click Here To See Remote Workplaces Near You"
            />
          )}

          {this.state.cafes.length > 0 &&
            this.state.cafes.map(cafe => (
              <List
                prop={cafe}
                key={cafe.id}
                navigate={this.props.navigation}
              />
            ))}
        </View>
      </ScrollView>
    );
  }
}
