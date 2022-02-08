import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Unbox test App </Text>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'
    },
    title:{
        color:'#000',
        fontSize:14
    }
})