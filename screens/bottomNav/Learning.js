import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { internalMutate } from 'swr/_internal';

import useNetwork from '../../data/Knitting.js'
import LearningCourses from '../../components/LearningCourses.js'

const recommendationImage = require('../../assets/aiImages/4.jpeg');


const Stack = createNativeStackNavigator();

//const recommendationImage = require('../../assets/aiImages/4.jpeg');

//const trophy = require('../../assets/restIcon/trophy.png');

export default function Learning({ navigation }) {

  const {network, isLoading, isError} = useNetwork()
  //console.log(armin_expert);

  return (
    <View style={styles.container}>
      <View style={styles.recommendation}>
      <Image style={{ width: '100%', height: '100%', borderRadius: 24, position: 'absolute' }} source={recommendationImage} />
      <View style={styles.imageTextContainer}>
        <Text style={styles.body}>BEGINNERS GUIDE</Text>
        <Text style={styles.header}>HOW TO KNIT →</Text>
      </View>
    </View>
      <LearningCourses/>
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
    paddingTop: 12,
  },
  recommendation: {
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
  header2: {
    color: 'black',
    left: 12,
    fontFamily: 'Inter_700Bold',
  },
  body2:{
    color: 'black',
    fontWeight: '400',
    left: 12,
    fontFamily: 'Inter_400Regular',

  },
  exercise: {
    backgroundColor: 'white',
    margin: 20,
    width: '100%',
    padding: 8,
    paddingLeft: 0,
    borderRadius: 24,
    flexDirection: 'row', // horizontal grid
    alignItems:'center',
    marginBottom: 0,
  },

  exercise2: {
    width: '100%',
    alignItems:'center',
  },


  techniqueIcon: {
    backgroundColor: 'blue',
    borderRadius: 16,
    marginHorizontal: 10,
  },
  goTo: {
    backgroundColor: 'blue',
    borderRadius: 16,
    position: 'absolute',
    right: 10
  },
  goText: {
    paddingTop: 8,
    paddingBottom: 8,
    padding: 4,
    color: 'white',
    fontFamily: 'Inter_700Bold',
  },


  //test
  tekstje:{
    color:'white',
    backgroundColor: 'blue',
    padding: 12,
  }
});

/*

      <View style={styles.recommendation}>
        <Image
          style={{ width: '100%', height: '100%', borderRadius: 24, position: 'absolute'}}
          source={recommendationImage}
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


      <TouchableOpacity style={styles.exercise2} onPress={() => {
        navigation.navigate('Exercise')
      }}>
      <View style={styles.exercise}>
        <View style={styles.techniqueIcon}>
          <Image
            style={{ width: 21, height: 20, margin: 16}}
            source={trophy}
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
        <View style={styles.goTo}>
          <Text style={styles.goText}>
            →
          </Text>
        </View>
      </View>
      </TouchableOpacity>
      

      <View style={styles.exercise}>
        <View style={styles.techniqueIcon}>
          <Image
            style={{ width: 21, height: 20, margin: 16}}
            source={trophy}
          />
        </View>
        <View>
          <Text style={styles.header2}>
            Upper your level
          </Text>
          <Text style={styles.body2}>
            Read the blog →
          </Text>
        </View>
        <View style={styles.goTo}>
          <Text style={styles.goText}>
            →
          </Text>
        </View>
      </View>

      <View style={styles.exercise}>
        <View style={styles.techniqueIcon}>
          <Image
            style={{ width: 21, height: 20, margin: 16}}
            source={trophy}
          />
        </View>
        <View>
          <Text style={styles.header2}>
            Next Level
          </Text>
          <Text style={styles.body2}>
            Read the blog →
          </Text>
        </View>
        <View style={styles.goTo}>
          <Text style={styles.goText}>
            →
          </Text>
        </View>
      </View>

      
*/