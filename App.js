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
  ActivityIndicator
} from 'react-native';


export default class App extends Component {
  ActivityIndicatorLodingView(){
    return (
      <ActivityIndicator 
        color='#002688'
        size='large'
        style={styles.ActivityIndicatorStyle}
      />
    )
  }

  render() {
    return (
      <WebView
        style={styles.WebViewStyle}
        source={{uri:'http:reactapp.ir'}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        renderLoading={this.ActivityIndicatorLodingView}

      />
    );
  }
}

const styles = StyleSheet.create({
  WebViewStyle: {
    flex:1,
    justifyContent : 'center',
    alignItems: 'center',
    marginTop:(Platform.OS)==='ios'?20:0
  },
  ActivityIndicatorStyle: {
    position: 'absolute',
    left:0,
    right:0,
    top:0,
    bottom:0,
    justifyContent: 'center',
    alignItems:'center'
  }
})