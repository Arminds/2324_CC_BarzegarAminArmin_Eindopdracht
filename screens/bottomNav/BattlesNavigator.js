import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, LogBox, ScrollView, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Battles from './Battles';

import BlogPost from '../BlogPost';
import BattleOthers from '../battles/BattleOthers';
import WatchOthers from '../battles/WatchOthers';
import MyRank from '../MyRank';

const Stack = createNativeStackNavigator();


export default function BattlesNavigator({ navigation }) {

  return(
      <Stack.Navigator>
        <Stack.Screen name="Battles" component={Battles} 
          options= {{
            headerStyle: {
              backgroundColor: '#000000',
            },
            headerTintColor: '#fff',
          }}>
        </Stack.Screen>
        <Stack.Screen name="BattleOthers" component={BattleOthers} options= {{
            headerStyle: {
              backgroundColor: '#000000',
            },
            headerTintColor: '#fff',
          }}>
        </Stack.Screen>
        <Stack.Screen name="WatchOthers" component={WatchOthers} options= {{
            headerStyle: {
              backgroundColor: '#000000',
            },
            headerTintColor: '#fff',
          }}>
        </Stack.Screen>
        <Stack.Screen name="MyRank" component={MyRank} options= {{
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

