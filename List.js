import React, { Component } from 'react';
import { ListItem } from 'react-native-elements';
import styles from './styles';
import TouchableScale from 'react-native-touchable-scale';

export default class List extends Component {
  onPress = () => {
    this.props.navigate.push('SinglePage', {
      cafe: this.props.prop.name,
      cafeId: this.props.prop.id,
    });
  };

  render() {
    return (
      <ListItem
        key={this.props.prop.id}
        style={styles.list}
        onPress={this.onPress}
        Component={TouchableScale}
        friction={90}
        tension={100}
        activeScale={0.95}
        linearGradientProps={{
          colors: ['#FF9800', '#F44336'],
          start: [1, 0],
          end: [0.2, 0],
        }}
        leftAvatar={{
          rounded: true,
          source: { uri: this.props.prop.image_url },
        }}
        title={this.props.prop.name}
        titleStyle={{ color: 'white', fontWeight: 'bold', fontSize: 13 }}
        subtitleStyle={{ color: 'white', fontSize: 10 }}
        subtitle={this.props.prop.categories[0].title}
        chevronColor="white"
        chevron
        containerStyle={{
          marginHorizontal: 16,
          marginVertical: 8,
          borderRadius: 8,
        }}
      />
    );
  }
}
