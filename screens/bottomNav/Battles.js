import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useFonts, Inter_900Black, Inter_700Bold, Inter_400Regular, Inter_300Light} from '@expo-google-fonts/inter';


const Stack = createNativeStackNavigator();
const others = require('../../assets/aiImages/3.jpeg');
const watch = require('../../assets/aiImages/1.jpeg');


export default function Battles({navigation}) {

  let [fontsLoaded, fontError] = useFonts({
    Inter_900Black,
    Inter_700Bold,
    Inter_400Regular,
    Inter_300Light,
  });

  return (
    <View style={styles.container}>
      <View style={styles.bigBox}>
        <Image
          style={{ width: '100%', height: '100%', borderRadius: 24, position: 'absolute'}}
          source={others}
        />
        <View style={styles.imageTextContainer}>
        <Text style={styles.body}>
          BATTLE AGAINST FRIENDS
        </Text>
        <Text style={styles.header}>
          BATTLES OTHERS! →
        </Text>
        </View>
      </View>


        <Text style={{color: 'grey', margin: 20}}>OR</Text>


      <View style={styles.bigBox}>
        <Image
          style={{ width: '100%', height: '100%', borderRadius: 24, position: 'absolute'}}
          source={watch}
        />
        <View style={styles.imageTextContainer}>
        <Text style={styles.body}>
          LEARN FROM PROFESSIONAL KNITTERS
        </Text>
        <Text style={styles.header}>
          WATCH OTHERS! →
        </Text>
        </View>
      </View>
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
  bigBox: {
    backgroundColor: 'grey',
    width: '100%',
    height: '35%',
    borderRadius: 24,
  },
  imageTextContainer: {
    position: 'absolute',
    bottom: 24,
    left: 24,
  },
  header: {
    color: 'white',
    fontSize: 24,
    backgroundColor: 'blue',
    paddingLeft: 6,
    paddingRight: 6,
    fontFamily: 'Inter_700Bold',
  },
  body: {
    color: 'white',
    fontSize: 12,
    backgroundColor: 'blue',
    paddingLeft: 6,
    paddingRight: 6,
    marginBottom: 6,
    fontFamily: 'Inter_400Regular',
  },
})
