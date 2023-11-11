import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, LogBox, ScrollView, Button, TouchableOpacity } from 'react-native';


export default function Profile({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <TouchableOpacity onPress={() => {navigation.navigate('Settings')}} title='Hello'>
        <View style={{ backgroundColor: 'blue', padding: 20, borderRadius: 5}}>
          <Text style={{ color: 'white' }}>Settings Link</Text>
        </View>
      </TouchableOpacity>
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
});
