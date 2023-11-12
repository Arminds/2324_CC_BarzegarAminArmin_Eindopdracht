import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { internalMutate } from 'swr/_internal';

const Stack = createNativeStackNavigator();

const home = require('../../assets/aiImages/4.jpeg');
const battles = require('../../assets/Icons/Battles.png');

export default function Learning({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.recommendation}>
        <Image
          style={{ width: '100%', height: '100%', borderRadius: 24, position: 'absolute'}}
          source={home}
        />
        <View style={styles.imageTextContainer}>
        <Text style={styles.body}>
          BEGINNERS GUIDE
        </Text>
        <Text style={styles.header}>
          HOW TO KNIT →
        </Text>
        </View>
      </View>

      <View style={styles.exercise}>
        <View style={styles.techniqueIcon}>
          <Image
            style={{ width: 20, height: 24, justifyContent: 'center', alignItems: 'center'}}
            source={battles}
          />
        </View>
        <View>
          <Text style={styles.header2}>
            Advanced Techniques
          </Text>
          <Text style={styles.body2}>
            Read the blog →
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
  recommendation: {
    backgroundColor: 'red',
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
    fontWeight: '900',
  },
  body: {
    color: 'white',
    fontSize: 12,
    backgroundColor: 'blue',
    paddingLeft: 6,
    paddingRight: 6,
    marginBottom: 6,
  },
  header2: {
    color: 'black',
    fontWeight: '900',
  },
  body2:{
    color: 'black',
  },
  exercise: {
    backgroundColor: 'white',
    margin: 20,
    width: '100%',
    padding: 12,
    paddingLeft: 0,
    borderRadius: 24,
    flexDirection: 'row', // horizontal grid
    alignItems:'center',
  },
  techniqueIcon: {
    width: 48,
    height: 48,
    backgroundColor: 'blue',
    borderRadius: 16,
    marginHorizontal: 16,
  }
  
});