import Home from './screens/Home';
import Learning from './screens/Learning';
import Battles from './screens/Battles';
import Profile from './screens/Profile';
import Posting from './screens/Posting';

import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
  
const home = require('../KnittingApp/assets/Home.png');
const learning = require('../KnittingApp/assets/Learning.png');
const profile = require('../KnittingApp/assets/Profile.png');
const post = require('../KnittingApp/assets/Post.png');
const battles = require('../KnittingApp/assets/Battles.png');

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: true,
          style: {
            position: 'absolute',
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: 'blue',
            borderRadius: 15,
            height: 90,
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
                style={{ width: 20, height: 20}}
                source={home}
              />
            ),
          }} />
        <Tab.Screen 
          name="Learning"  
          component={Learning} 
          options= {{
            headerShown: false,
            tabBarLabel: 'Learning',
            tabBarIcon: () => (
              <Image
                style={{ width: 20, height: 20}}
                source={learning}
              />
            ),
          }}
        />
        <Tab.Screen name="Posting" component={Posting} 
          options= {{
            headerShown: false,
            tabBarLabel: 'Posting',
            tabBarIcon: () => (
              <Image
                style={{ width: 50, height: 50}}
                source={post}
              />
            ),
          }}
        />
        <Tab.Screen name="Battles" component={Battles} 
          options= {{
            headerShown: false,
            tabBarLabel: 'Battles',
            tabBarIcon: () => (
              <Image
                style={{ width: 20, height: 20}}
                source={battles}
              />
            ),
          }}
        />
        <Tab.Screen name="Profile" component={Profile} 
          options= {{
            headerShown: false,
            tabBarLabel: 'Profile',
            tabBarIcon: () => (
              <Image
                style={{ width: 20, height: 20}}
                source={profile}
              />
            ),
          }}
        />
      </Tab.Navigator> 
    </NavigationContainer>
  );
}