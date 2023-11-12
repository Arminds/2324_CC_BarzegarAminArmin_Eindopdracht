import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, LogBox, ScrollView, Button, TouchableOpacity } from 'react-native';
import { useFonts, Inter_900Black, Inter_300Light } from '@expo-google-fonts/inter';


import useNetwork from '../data/network'

export default function Home({ navigation }) {

  const axearminimage = require('../assets/axearmin.png'); //constante voor foto
  const starsvg = require('../assets/star.png'); //constante voor foto

  const {network, isLoading, isError} = useNetwork()
  console.log(network);

  let [fontsLoaded, fontError] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  if (isLoading) return <Text>Loading...</Text>
  if (isError) return <Text>Error</Text>

  return (
    <View style={styles.container}>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'top',
    padding: 24,
    paddingTop: 72,
  }

});

