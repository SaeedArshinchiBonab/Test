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
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    }
  }
  ShowModalFunction(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          transparent={false}
          animationType="slide"
          visible={this.state.modalVisible}
          onRequestClose={() => this.state.ShowModalFunction(!this.state.modalVisible)}

        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
            <View style={styles.ModalInsideView}>
              <Text style={styles.TextStyle}>
                Text component with a sample text
            </Text>
              <Button title='بستن Modal' onPress={() => this.ShowModalFunction(!this.state.modalVisible)}></Button>

            </View>
          </View>
        </Modal>
        <Button title="نمایش Modal" onPress={() => this.ShowModalFunction(true)} />
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