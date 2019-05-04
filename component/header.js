import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class Header extends Component{
    render(){
        return(
            <View style={styles.hearerStyle}>
                <Text>{this.props.headerText}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    hearerStyle:{
      width:'100%',
      height:50,
      flexDirection:'row',
      borderBottomWidth:0.5,
      borderColor:'#ccc',
      justifyContent:'center',
      alignItems:'center'
    }
  })