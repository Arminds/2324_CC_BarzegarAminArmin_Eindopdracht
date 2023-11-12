
import Settings from '../Settings';
import Profile from './Profile';

import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

const Stack = createNativeStackNavigator();

export default function WatchOthers({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={Settings} options={{title: 'WatchOthers'}} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator> 
  );
}
