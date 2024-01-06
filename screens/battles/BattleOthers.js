import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, LogBox, ScrollView, Button, TouchableOpacity } from 'react-native';

import UsersBattles from '../../components/UsersBattles.js'

export default function BattleOthers({navigation}) {
  return (
      <View style={styles.container}>
        <Text style={styles.title}>Send Battle requests to play with you friends</Text>
        <Text style={styles.body}>Gently wait for your opponent to accept your request in order to go live.</Text>
        <UsersBattles/>
        <StatusBar style="auto"/>
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
    paddingTop: 12,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 12,
    width: '100%',
    color: 'white',
  },
  body: {
    fontSize: 16,
    marginBottom: 48,
    width: '100%',
    color: 'grey',
  },
});