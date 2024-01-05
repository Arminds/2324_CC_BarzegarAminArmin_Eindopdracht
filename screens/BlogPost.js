import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, ScrollView } from 'react-native';
import useNetwork from '../data/Knitting';

export default function BlogPost({ route }) {
  const { Title, Content, Datum, Media, Username } = route.params;
  const BASE_URL = 'https://armin.vaw.be/';

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.body2}>{Username}</Text>
          <Text style={styles.body2}>{Datum}</Text>
        </View>
        <Image source={{ uri: BASE_URL + Media }} style={styles.postImage} />

        <Text style={styles.title}>{Title}</Text>
        <Text style={styles.content}>{Content}</Text>

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#000000',
  },
  scrollViewContainer: {
    flexGrow: 1,
    paddingBottom: 120, // Add some padding at the bottom
  },
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 24,
    paddingTop: 12,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#141414',
    padding: 6,
    borderRadius: 6,
  },
  postImage: {
    width: '100%',
    height: 320,
    marginVertical: 12,
    borderRadius: 6,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  content: {
    color: 'white',
    fontSize: 16,
  },
  body2: {
    color: 'grey',
    fontSize: 16,
  },
});
