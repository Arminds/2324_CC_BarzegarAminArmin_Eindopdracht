import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, LogBox, ScrollView, Button, TouchableOpacity } from 'react-native';

import * as authService from '../components/authService';
import useNetwork from '../data/Knitting';

export default function MyRank({navigation}) {
  const { data, isLoading, isError } = useNetwork();
  const authenticatedUser = authService.getAuthenticatedUser() || {};
  const { username } = authenticatedUser;

  const { Users } = data;
  const authenticatedUserData = Users.find((user) => user.Username === username);
  const rank = authenticatedUserData ? authenticatedUserData.Rank : '';

  console.log("Authenticated User:", authenticatedUser);

  return (
      
      <View style={styles.container}>


        <Text style={styles.explainTitle}>
          My rank
        </Text>
        <Text style={styles.explain}>
          Your profile rank is based on the amount blogs you post, battles you participate in & more!
        </Text>

        <View style={styles.boxBig}>
          <View style={styles.box2}>
            <Text style={styles.bigText}>
              38
            </Text>
            <Text style={styles.description}>
              Total Battles Played
            </Text>
          </View>
        </View>

        <View style={styles.boxBig}>
          <View style={styles.box}>
            <Text style={styles.bigText}>
              26
            </Text>
            <Text style={styles.description}>
              Battles won
            </Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.bigText}>
              117
            </Text>
            <Text style={styles.description}>
              Battles watched (in minutes)
            </Text>
          </View>
        </View>

        <View style={styles.boxBig}>
          <View style={styles.box2}>
            <Text style={styles.bigText}>
              32
            </Text>
            <Text style={styles.description}>
              Blogs posted
            </Text>
          </View>
        </View>

        <View style={styles.boxBig}>
          <View style={styles.box}>
            <Text style={styles.bigText}>
              78
            </Text>
            <Text style={styles.description}>
              Blogs shared
            </Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.bigText}>
              {rank}
            </Text>
            <Text style={styles.description}>
              Total score
            </Text>
          </View>
        </View>
        <StatusBar style="auto"/>
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
  box: {
    backgroundColor: '#232732',
    width: 158,
    height: 130,  
    marginHorizontal: 12,
    borderRadius: 20
  },
  box2: {
    backgroundColor: '#232732',
    width: 340,
    height: 130,  
    borderRadius: 20
  },
  boxBig: {
    flexDirection: 'row',
    marginVertical: 6,
  },

  bigText:{
    color: 'white',
    marginTop: 36,
    marginBottom: 6,
    marginLeft: 12,
    fontSize: 38,
    fontFamily: 'Inter_700Bold',
  },

  description:{
    color: 'white',
    marginLeft: 12,
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    position: 'absolute',
    bottom: 12,
  },

  explain: {
    color: '#999',
    width: '100%',
    marginBottom: 12
  },
  explainTitle: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Inter_700Bold',
    width: '100%',
    marginBottom: 6
  },
});