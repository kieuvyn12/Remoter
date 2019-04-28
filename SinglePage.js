import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Card, Button } from 'react-native-elements';
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
        {this.state.selectedCafe && (
          <Card
            title={this.props.navigation.getParam('cafe')}
            image={{ uri: this.state.selectedCafe.photos[0] }}
          >
            <Text>
              Currently:{' '}
              {this.state.selectedCafe.hours[0].is_open_now ? 'open' : 'closed'}
            </Text>
            <Text>Price: {this.state.selectedCafe.price}</Text>
            <Text>Rating: {this.state.selectedCafe.rating}</Text>
            <Text>Phone: {this.state.selectedCafe.display_phone}</Text>
            <Text>
              Address: {this.state.selectedCafe.location.display_address}
            </Text>
            <Button
              backgroundColor="#03A9F4"
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 3,
                marginTop: 3,
                marginRight: 3,
                marginBottom: 3,
              }}
              title="VIEW NOW"
            />
          </Card>
        )}
      </View>
    );
  }
}
