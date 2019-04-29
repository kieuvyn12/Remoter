import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { Card, Divider } from 'react-native-elements';
import { YELPTOKEN } from './secrets';

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
      <ScrollView>
        <View>
          {this.state.selectedCafe && (
            <Card
              title={this.props.navigation.getParam('cafe')}
              image={{ uri: this.state.selectedCafe.photos[0] }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}
              >
                <Image
                  source={{ uri: this.state.selectedCafe.photos[1] }}
                  style={{
                    width: 175,
                    height: 175,
                  }}
                />
                <View
                  style={{
                    borderLeftWidth: 8,
                    borderLeftColor: 'white',
                  }}
                />
                <Image
                  source={{ uri: this.state.selectedCafe.photos[2] }}
                  style={{ width: 175, height: 175 }}
                />
                <Divider style={{ height: 10 }} />
              </View>
              <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                Useful Information:
              </Text>
              <Text>
                Currently:{' '}
                {this.state.selectedCafe.hours[0].is_open_now
                  ? 'open'
                  : 'closed'}
              </Text>
              <Text>Price: {this.state.selectedCafe.price}</Text>
              <Text>Rating: {this.state.selectedCafe.rating}</Text>
              <Text>Phone: {this.state.selectedCafe.display_phone}</Text>
              <Text>
                Address: {this.state.selectedCafe.location.display_address}
              </Text>
            </Card>
          )}
        </View>
      </ScrollView>
    );
  }
}
