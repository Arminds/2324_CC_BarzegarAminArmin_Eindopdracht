import Home from './screens/Home';
import Detail from './screens/Detail';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{ 
            title: 'Knitting App',
            headerStyle: {
            backgroundColor: '#f4511e',
          },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold',
          },
          }} />
        <Tab.Screen name="Detail" component={Detail} options= {{headerShown: false}}/>
      </Tab.Navigator> 
    </NavigationContainer>
  );
}