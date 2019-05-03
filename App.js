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
  Slider,
  Modal,

} from 'react-native';


export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Image 
        // source={{uri:'http://reactapp.ir/wp-content/uploads/happy_mothersDay.gif'}}
        source={require('./image/happy_mothersDay.gif')}
        style={{ width:315, height: 383 , }}
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
  ModalInsideView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00BCD4',
    height: 300,
    width: '90%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  TextStyle: {
    fontSize:24,
    marginBottom:20,
    color:'#fff',
    padding:20,
    textAlign: 'center'
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