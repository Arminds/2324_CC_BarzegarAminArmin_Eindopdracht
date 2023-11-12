import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, LogBox, ScrollView, Button, TouchableOpacity } from 'react-native';



export default function Profile({navigation}) {

  const axearminimage = require('../../assets/axearmin.png'); //constante voor foto
  const starIcon = require('../../assets/star.png'); //constante voor foto

  return (
    <View style={styles.container}>
      <Image
        style={styles.profilePicture}
        source={axearminimage}
      />
     <Text style={styles.header}>Lora Sylvia</Text>
     <View style={styles.rank}>
       <View style={styles.gridRank}>
        <Image
          style={styles.iconRank}
          source={starIcon}
        />
      </View>
      <View style={styles.gridRank}>
        <Text style={styles.body}>49</Text>
      </View>
     </View>


      <View style={styles.profileInfo}>

        <View>
          <View style={styles.gridItem}>
            <Text style={styles.body}>32</Text>
            <Text style={styles.body2}>Blogs</Text>
          </View>
        </View>

        <View style={styles.Divider}></View>

        <View>
          <View style={styles.gridItem}>
            <Text style={styles.body}>46</Text>
            <Text style={styles.body2}>Followers</Text>
          </View>
        </View>

        <View style={styles.Divider}></View>

        <View>
          <View style={styles.gridItem}>
            <Text style={styles.body}>126</Text>
            <Text style={styles.body2}>Following</Text>
          </View>
        </View>

      </View>

    <StatusBar style="auto" />
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
  profilePicture: { //pfp
    width: 60,
    height: 60,
    margin: 0,
    marginBottom: 20,
    borderRadius: 100,
    backgroundColor: 'grey',
  },
  header: { //nameUser
    color: '#FFF',
    fontSize: 24,
    fontFamily: 'Inter_900Black',
    textAlign:'center' // centers the necessary elements
  },

  // start usersRank ->
  iconRank: { //starIcon
    width: 22,
    height: 22,
  },
  body: { //body font
    color: '#FFF',
    fontSize: 16,
    //fontFamily: 'Inter_300Light', // Doesnt work???????????????????
    textAlign:'center' // centers the necessary elements
  },
  body2: { //body font
    color: 'grey',
    fontSize: 12,
    //fontFamily: 'Inter_300Light', // Doesnt work???????????????????
    textAlign:'center' // centers the necessary elements
  },
  rank: {
    flexDirection: 'row', // horizontal grid
    padding: 6,
    margin: 24,
    alignItems:'center',
    borderRadius: 24,
    backgroundColor:'blue'
  },
  gridRank: {
    marginHorizontal: 2, // Adjust margin as needed
  },
  // end usersRank <-

  // start userInfo (blogs followers following) ->
  profileInfo: {
    flexDirection: 'row',
  },
  gridItem: {
    marginHorizontal: 24, // Adjust margin as needed
  },
  Divider: {
    width: 1,
    height: '100%',
    backgroundColor:'#2B2B2B'
  }
  // end userInfo (blogs followers following) <-
});
