import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  TextInput,
  Image,
  Alert,
  WebView,
  Platform,
  ActivityIndicator,
  Slider
} from 'react-native';


export default class App extends Component {
constructor(props){
  super(props);
  this.state={
    Slider_Value:0
  }
}
  render() {
    return (
      <View style={styles.container}>
      <Text style={{fontSize:20}}>Slider Value : {this.state.Slider_Value}</Text> 
      <Slider 
style={{width:'90%'}}
step={1}
minimumValue={0}
maximumValue={100}

maximumTrackTintColor='#009688'
onValueChange={(ChangeValue)=>this.setState({Slider_Value:ChangeValue})}
      />

      </View>

      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  WebViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: (Platform.OS) === 'ios' ? 20 : 0
  },
  ActivityIndicatorStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
})