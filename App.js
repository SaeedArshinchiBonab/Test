import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  TextInput,
  Image,
  Alert
} from 'react-native';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TextInputValue: ''
    }
  }
  checkValue = () => {
    if (this.state.TextInputValue == '') {
      Alert.alert('لطفا شماره همراه خود را وارد کنید')
      return false;
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.sectionStyle}>
          <Image source={require('./image/person_icon.png')} style={styles.imageStyle} />
          <TextInput
            style={{ flex: 1 }}
            placeholder="شماره موبایل خود را وارد کنید"
            underlineColorAndroid='transparent'
            keyboardType='numeric'
            value={this.state.TextInputValue}
            onChangeText={(value) => this.setState({ TextInputValue: value })}
          />
        </View>
        <Button
          title="ذخیره اطلاعات"
          onPress={this.checkValue}
          color='#2196f3'
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
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  }
})