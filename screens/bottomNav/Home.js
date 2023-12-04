import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, LogBox, ScrollView, Button, TouchableOpacity } from 'react-native';


import useNetwork from '../../data/network'

export default function Home({ navigation }) {

  //dbData = ()=>{fetch('http://2a02:1810:c31:5800:69b5:3593:275a:d2fb/endpoint.php')} 

  const axearminimage = require('../../assets/axearmin.png'); //constante voor foto
  const starsvg = require('../../assets/star.png'); //constante voor foto

  const {network, isLoading, isError} = useNetwork()
  console.log(network);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {
        navigation.navigate('BlogPost')
      }}>
        <View style={styles.readTheBlogBox}>
          <Text style={styles.readTheBlog}>
            Read The Blog →
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444333',
    alignItems: 'center',
    justifyContent: 'top',
    padding: 24,
    paddingTop: 12,
  },
  readTheBlogBox: {
    backgroundColor: 'black',
    padding: 12,
    paddingLeft: 24,
    paddingRight: 24,
    borderRadius: 24,
    position: 'absolute',
    right: 0,
    top: 600

  },
  readTheBlog: {
    color: 'white',
  }
});

