import Home from './screens/Home';
import Learning from './screens/Learning';
import Battles from './screens/Battles';
import Profile from './screens/Profile';
import Posting from './screens/Posting';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{ 
            title: 'SKMC',
            headerStyle: {
            backgroundColor: '#f4511e',
          },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold',
          },
          }} />
        <Tab.Screen name="Learning" component={Learning} options= {{headerShown: false}}/>
        <Tab.Screen name="Posting" component={Posting} options= {{headerShown: false}}/>
        <Tab.Screen name="Battles" component={Battles} options= {{headerShown: false}}/>
        <Tab.Screen name="Profile" component={Profile} options= {{headerShown: false}}/>
      </Tab.Navigator> 
    </NavigationContainer>
  );
}