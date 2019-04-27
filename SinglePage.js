import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { YELPTOKEN } from './secrets';
import styles from './styles';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCafe: null,
    };
  }

  async getCafeFromAPI() {
    try {
      let cafeId = this.props.navigation.getParam('cafeId');
      let url = `https://api.yelp.com/v3/businesses/${cafeId}`;
      let response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: YELPTOKEN,
        },
      });
      let responseJson = await response.json();
      this.setState({ selectedCafe: responseJson });
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  }
  componentDidMount() {
    this.getCafeFromAPI();
  }

  render() {
    return (
      <View>
        <Text>Name: {this.props.navigation.getParam('cafe')}</Text>
        {this.state.selectedCafe && (
          <View>
            <Text>Url: {this.state.selectedCafe.url}</Text>
            <Text>Price: {this.state.selectedCafe.price}</Text>
            <Text>Rating: {this.state.selectedCafe.rating}</Text>
            <Image
              style={{ width: 500, height: 500 }}
              source={{ uri: this.state.selectedCafe.photos[0] }}
            />
          </View>
        )}
      </View>
    );
  }
}
