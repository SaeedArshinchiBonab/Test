import React, { Component } from 'react';
import { styles, Text, View } from 'react-native';

class TextComponent extends Component {
  render() {
    return (
      <Text styles={{ fontFamily: 'IRANSansMobile', fontSize: 22 }}>
        Hello {this.props.name}
      </Text>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View>
        <TextComponent name="saeed" />
        <TextComponent name="reza" />
      </View>
    );
  }
}
