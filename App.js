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
  Share

} from 'react-native';
import Header from './component/header'

export default class App extends Component {


  render() {
    return (
      <View style={styles.main}>
        <Header headerText='FlowerList' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1
  }
})