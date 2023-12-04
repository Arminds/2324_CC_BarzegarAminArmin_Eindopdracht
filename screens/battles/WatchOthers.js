import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, LogBox, ScrollView, Button, TouchableOpacity } from 'react-native';


export default function WatchOthers({navigation}) {
  return (
      <View style={styles.container}>
        <Text style={styles.text}>WatchOthers</Text>
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
  text: {
    color: 'white',
  }
});