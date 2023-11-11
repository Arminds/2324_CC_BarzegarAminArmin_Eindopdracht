import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, LogBox, ScrollView, Button, TouchableOpacity } from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';


import useNetwork from '../data/network'

export default function Home({ navigation }) {

  const axearminimage = require('../assets/axearmin.png'); //constante voor foto

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
      <Image
        style={styles.logo}
        source={axearminimage}
      />
     <Text style={styles.headerText}>Lora Sylvia</Text>
     <View style={styles.rank}>
       <View style={styles.gridItem}>
        <Image
          style={styles.iconRank}
          source={axearminimage}
        />
      </View>
      <View style={styles.gridItem}>
        <Text style={styles.bodyText}>843</Text>
      </View>
     </View>

      <View style={styles.profileInfo}>
        <View style={styles.Blogs}>
          <View style={styles.gridItem}>

          </View>
          <View style={styles.gridItem}>

          </View>
        </View>
        <View style={styles.Followers}>
          <View style={styles.gridItem}>

          </View>
          <View style={styles.gridItem}>

          </View>
        </View>
        <View style={styles.Following}>
          <View style={styles.gridItem}>

          </View>
          <View style={styles.gridItem}>

          </View>
        </View>
      </View>



    <StatusBar style="auto" />
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
  },
  logo: {
    width: 60,
    height: 60,
    margin: 0,
    marginBottom: 20,
    borderRadius: 100
  },
  headerText: {
    color: '#FFF',
    fontSize: '24px',
    fontFamily: 'Inter_900Black',
    textAlign:'center'
  },
  iconRank: {
    width: 30,
    height: 30,
    margin: 0,
    borderRadius: 100,
  },
  bodyText: {
    color: '#FFF',
    fontSize: '16px',
    fontFamily: 'Inter_900Black',
    textAlign:'center',
    padding: 2
  },
  rank: {
    flexDirection: 'row',
    padding: 6,
    margin: 24,
    alignItems:'center',
    borderRadius:'100%',
    backgroundColor:'blue'
  },
  gridItem: {
    marginHorizontal: 2, // Adjust margin as needed
  },

});

