import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, LogBox, ScrollView, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home';
import Exercise from '../Exercise';

const Stack = createNativeStackNavigator();


export default function HomeNavigator({ navigation }) {

  return(
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} 
          options= {{
            headerStyle: {
              backgroundColor: '#000000',
            },
            headerTintColor: '#fff',
          }}>
        </Stack.Screen>
        <Stack.Screen name="Exercise" component={Exercise} options= {{
            headerStyle: {
              backgroundColor: '#000000',
            },
            headerTintColor: '#fff',
          }}>
        </Stack.Screen>
      </Stack.Navigator>
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
    padding: 12,
    margin: 12,
    backgroundColor: 'blue',
  }
});

