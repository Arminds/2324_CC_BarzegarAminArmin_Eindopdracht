import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';


const Stack = createNativeStackNavigator();
const others = require('../../assets/aiImages/3.jpeg');
const watch = require('../../assets/aiImages/1.jpeg');

const star = require('../../assets/star.png')



export default function Battles({navigation}) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <TouchableOpacity style={styles.bugfix2} onPress={() => {
        navigation.navigate('BattleOthers')
      }}>
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
      </TouchableOpacity>


        <Text style={{color: 'grey', margin: 20}}>OR</Text>

      <TouchableOpacity style={styles.bugfix2} onPress={() => {
        navigation.navigate('WatchOthers')
      }}>
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
      </TouchableOpacity>

      <TouchableOpacity style={styles.bugfix} onPress={() => {
        navigation.navigate('MyRank')
      }}>
      <View style={styles.exercise}>
        <View style={styles.techniqueIcon}>
          <Image
            style={{ width: 21, height: 20,}}
            source={star}
          />
          <Text style={styles.header3}>
            286
          </Text>
        </View>
        <View>
          <Text style={styles.header2}>
            My rank
          </Text>
          <Text style={styles.body2}>
            Your profile rank is based on the
          </Text>
        </View>
        <View style={styles.goTo}>
          <Text style={styles.goText}>
            →
          </Text>
        </View>
      </View>
      </TouchableOpacity>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'top',
    padding: 24,
    paddingTop: 12,
  },
  container: {
    backgroundColor: '#000000',
  },
  bigBox: {
    backgroundColor: 'grey',
    width: '100%',
    height: 240,
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

    width: '100%',
    padding: 8,
    paddingLeft: 0,
    borderRadius: 24,
    flexDirection: 'row', // horizontal grid
    alignItems:'center',
  },
  techniqueIcon: {
    backgroundColor: 'blue',
    borderRadius: 16,
    marginHorizontal: 10,
    width: 48,
    height: 48,
    justifyContent:'center',
    alignItems:'center',
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

  header3:{
    color: 'white',
    fontFamily: 'Inter_700Bold',
  },

  bugfix: {
    width: '100%',
    alignItems:'center',
    marginTop: 24,
  },

  bugfix2: {
    width: '100%',
  },
})
