// TODO: 

import Home from './screens/bottomNav/Home';
import Learning from './screens/bottomNav/Learning';
import Battles from './screens/bottomNav/Battles';
import Profile from './screens/bottomNav/Profile';
import Posting from './screens/bottomNav/Posting';

import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
  
const homeIcon = require('./assets/Icons/Home.png');
const learningIcon = require('./assets/Icons/Learning.png');
const profileIcon = require('./assets/Icons/Profile.png');
const postIcon = require('./assets/Icons/Post.png');
const battlesIcon = require('./assets/Icons/Battles.png');

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator    
        tabBarOptions={{
          showLabel:false,
        }}
        screenOptions={{
          tabBarStyle: {
            position: 'absolute', 
            padding: 29,
            paddingLeft: 12,
            paddingRight: 12,
            justifyContent: 'center',
            alignItems: 'center',
            left: 24,
            right: 24,
            bottom: 24,
            backgroundColor: 'blue',
            borderRadius: 30,
            height: 60,
            borderTopWidth: 0
          }
        }}
      >
        <Tab.Screen name="Home" component={Home} options={{ 
            title: 'Home',
            headerStyle: {
              backgroundColor: '#000000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            tabBarIcon: () => (
              <Image
                style={{ width: 22, height: 22}}
                source={homeIcon}
              />
            ),
          }} />
        <Tab.Screen 
          name="Learning"  
          component={Learning} 
          options= {{
            tabBarLabel: 'Learning',
            headerStyle: {
              backgroundColor: '#000000',
            },
            headerTintColor: '#fff',
            tabBarIcon: () => (
              <Image
                style={{ width: 18, height: 24}}
                source={learningIcon}
              />
            ),
          }}
        />
        <Tab.Screen name="Posting" component={Posting} 
          options= {{
            tabBarLabel: 'Posting',
            headerStyle: {
              backgroundColor: '#000000',
            },
            headerTintColor: '#fff',
            tabBarIcon: () => (
              <Image
                style={{ width: 50, height: 50}}
                source={postIcon}
              />
            ),
          }}
        />
        <Tab.Screen name="Battles" component={Battles} 
          options= {{
            tabBarLabel: 'Battles',
            headerStyle: {
              backgroundColor: '#000000',
            },
            headerTintColor: '#fff',
            tabBarIcon: () => (
              <Image
                style={{ width: 20, height: 23}}
                source={battlesIcon}
              />
            ),
          }}
        />
        <Tab.Screen name="Profile" component={Profile} 
          options= {{
            tabBarLabel: 'Profile',
            headerStyle: {
              backgroundColor: '#000000',
            },
            headerTintColor: '#fff',
            tabBarIcon: () => (
              <Image
                style={{ width: 20, height: 22}}
                source={profileIcon}
              />
            ),
          }}
        />
      </Tab.Navigator> 
    </NavigationContainer>
  );
}