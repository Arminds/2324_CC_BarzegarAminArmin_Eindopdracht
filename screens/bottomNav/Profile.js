import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, ScrollView } from 'react-native';
import { useFonts, Inter_900Black, Inter_700Bold, Inter_400Regular, Inter_300Light } from '@expo-google-fonts/inter';

import * as authService from '../../components/authService';
import useNetwork from '../../data/Knitting';

export default function Profile({ navigation, route }) {
  const { data, isLoading, isError } = useNetwork();
  const authenticatedUser = authService.getAuthenticatedUser() || {};
  const { username } = authenticatedUser;

  let [fontsLoaded, fontError] = useFonts({
    Inter_900Black,
    Inter_700Bold,
    Inter_400Regular,
    Inter_300Light,
  });

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.container}>
        <Text>Error loading data</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

  const { Users } = data;
  const authenticatedUserData = Users.find((user) => user.Username === username);
  const profileImage = authenticatedUserData ? authenticatedUserData.ProfileImage : '';
  const rank = authenticatedUserData ? authenticatedUserData.Rank : '';
  const followers = authenticatedUserData ? authenticatedUserData.Followers : '0';
  const following = authenticatedUserData ? authenticatedUserData.Following : '0';

  console.log("Authenticated User:", authenticatedUser);
  console.log("Profile Image:", profileImage);
  console.log("Followers Count:", followers);
  console.log("Following Count:", following);

  const axearminimage = require('../../assets/axearmin.png');

  const ai1 = require('../../assets/aiImages/1.jpeg');
  const ai2 = require('../../assets/aiImages/2.jpeg');
  const ai3 = require('../../assets/aiImages/3.jpeg');
  const ai4 = require('../../assets/aiImages/4.jpeg');
  const ai5 = require('../../assets/aiImages/5.jpeg');
  const ai6 = require('../../assets/aiImages/6.jpeg');
  const ai7 = require('../../assets/aiImages/7.jpeg');
  const ai8 = require('../../assets/aiImages/8.jpeg');

  const starIcon = require('../../assets/star.png');

  const BASE_URL = 'https://armin.vaw.be/';

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Image
          style={styles.profilePicture}
          source={{ uri: BASE_URL + profileImage }}
        />
        <Text style={styles.header}>{username}</Text>
        <View style={styles.rank}>
          <View style={styles.gridRank}>
            <Image
              style={styles.iconRank}
              source={starIcon}
            />
          </View>
          <View style={styles.gridRank}>
            <Text style={styles.body}>{rank}</Text>
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
              <Text style={styles.body}>{followers}</Text>
              <Text style={styles.body2}>Followers</Text>
            </View>
          </View>
          <View style={styles.Divider}></View>
          <View>
            <View style={styles.gridItem}>
              <Text style={styles.body}>{following}</Text>
              <Text style={styles.body2}>Following</Text>
            </View>
          </View>
        </View>
        <StatusBar style="light" />
        <View style={styles.containerImage}>
          <Image style={styles.image2} source={ai1}/>
          <Image style={styles.image2} source={ai2}/>
          <Image style={styles.image2} source={ai3}/>
          <Image style={styles.image2} source={ai4}/>
          <Image style={styles.image2} source={ai5}/>
          <Image style={styles.image2} source={ai6}/>
          <Image style={styles.image2} source={ai7}/>
          <Image style={styles.image2} source={ai8}/>
          <Image style={styles.image2} source={ai1}/>
          <Image style={styles.image2} source={ai2}/>
          <Image style={styles.image2} source={ai3}/>
          <Image style={styles.image2} source={ai4}/>
          <Image style={styles.image2} source={ai5}/>
          <Image style={styles.image2} source={ai6}/>
          <Image style={styles.image2} source={ai7}/>
          <Image style={styles.image2} source={ai8}/>          
          <Image style={styles.image2} source={ai1}/>
          <Image style={styles.image2} source={ai2}/>
          <Image style={styles.image2} source={ai3}/>
          <Image style={styles.image2} source={ai4}/>
          <Image style={styles.image2} source={ai5}/>
          <Image style={styles.image2} source={ai6}/>
          <Image style={styles.image2} source={ai7}/>
          <Image style={styles.image2} source={ai8}/>


        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#000000', // Set the background color for the ScrollView
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'top',
    padding: 24,
    paddingTop: 72,
  },
  profilePicture: {
    width: 60,
    height: 60,
    margin: 0,
    marginBottom: 20,
    borderRadius: 100,
    backgroundColor: 'grey',
  },
  containerImage: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  image2: {
    width: '32%',
    height: '30%',
    margin: 2,
    aspectRatio: 1,
    backgroundColor: 'darkgrey',
  },
  header: {
    color: '#FFF',
    fontSize: 24,
    fontFamily: 'Inter_700Bold',
    textAlign: 'center',
  },
  iconRank: {
    width: 22,
    height: 22,
  },
  body: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    textAlign: 'center',
  },
  body2: {
    color: 'grey',
    fontSize: 12,
    fontFamily: 'Inter_400Regular',
    textAlign: 'center',
  },
  rank: {
    flexDirection: 'row',
    padding: 6,
    margin: 24,
    alignItems: 'center',
    borderRadius: 24,
    backgroundColor: 'blue',
  },
  gridRank: {
    marginHorizontal: 2,
  },
  profileInfo: {
    flexDirection: 'row',
    marginLeft: 20,
  },
  gridItem: {
    marginHorizontal: 24,
  },
  Divider: {
    width: 1,
    height: '100%',
    backgroundColor: '#2B2B2B',
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingBottom: 24,
  },
});
