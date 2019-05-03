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


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TextInputValue: ''
    }
  }
  ShareMessage = () => {
    Share.share({
      message: this.state.TextInputValue.toString()
    }).then(result => console.log(result))
      .catch(console.log(errorMessage))
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          underlineColorAndroid="transparent"
          style={styles.TextInputStyle}
          onChangeText={(value) => this.setState({ TextInputValue:value })}
        />
        <Button
          title='اشتراک گذاری متن'
          color='blue'
          onPress={this.ShareMessage}
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
  TextInputStyle: {
    borderWidth: 1,
    borderColor: '#009688',
    width: '100%',
    height: 40,
    borderRadius: 10,
    marginBottom: 10,
    textAlign: 'center',

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
    fontSize: 24,
    marginBottom: 20,
    color: '#fff',
    padding: 20,
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