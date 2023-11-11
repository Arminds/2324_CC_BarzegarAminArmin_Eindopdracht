import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, LogBox, ScrollView, Button, TouchableOpacity } from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';


import useNetwork from '../data/network'

export default function Home({ navigation }) {

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
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('/Users/armin/Documents/2223_Sem5/Coding/React Native/2324_CC_BarzegarAminArmin_Eindopdracht/KnittingApp/assets/axearmin.png')}
        />
      <Text style={styles.text}>{network.name}{"\n"}{network.location.city}{"\n"}</Text>

      <Button title='Armin'></Button>

      <TouchableOpacity onPress={() => {navigation.navigate('Detail')}} title='Hello'>
        <View style={{ backgroundColor: 'blue', padding: 20, borderRadius: 5}}>
          <Text style={{ color: 'white' }}>Go to Blog</Text>
        </View>
      </TouchableOpacity>

      {network.stations.map(station =>
        <Text key={station.id} style={styles.text}>
          {station.name}
        </Text>
      )}

      <StatusBar style="auto" />
      </View>
    </ScrollView>
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
  text: {
    color: '#FFF',
    fontSize: '18px',
    fontFamily: 'Inter_900Black',
    textAlign:'center'
  },
});

