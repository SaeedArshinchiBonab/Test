import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

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
  constructor(props){
    super(props);
    this.state={title:'Salam'}
  }
  render() {
    return (
      <View>
        <TextComponent name="saeed" />
        <TextComponent name="reza" />
        <Text>
          {this.state.title}
        </Text>
        <Button title="Click" onPress={()=>this.setState({title:''})}></Button>
      </View>
    );
  }
}
