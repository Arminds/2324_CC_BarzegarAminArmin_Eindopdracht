import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, LogBox, ScrollView, Button, TouchableOpacity } from 'react-native';


export default function Excercise({route}) {
  const { Title, Description, Difficulty } = route.params;

  return (
      <View style={styles.container}>
        <Text style={styles.title}>{Title}</Text>
        <Text style={styles.Difficulty}>Difficulty level: {Difficulty}</Text>
        <Text style={styles.text}>{Description}</Text>
        <StatusBar style="auto"/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 24,
    paddingTop: 12,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
  Difficulty: {
    color: 'grey',
    fontSize: 16,
    marginBottom: 24,
  },

});