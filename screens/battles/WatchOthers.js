import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, LogBox, ScrollView, Button, TouchableOpacity } from 'react-native';

import UsersBattlesWatch from '../../components/UsersBattlesWatch.js'

export default function WatchOthers({navigation}) {
  return (
      <View style={styles.container}>
        <Text style={styles.title}>Watch Pro-Knitters to learn from the best</Text>
        <Text style={styles.body}>Watch how pros knit and listen to their thought proces.</Text>
        <UsersBattlesWatch/>

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