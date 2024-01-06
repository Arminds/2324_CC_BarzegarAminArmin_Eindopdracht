import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, ScrollView } from 'react-native';
import useNetwork from '../data/Knitting';

export default function BlogPost({ route }) {
  const { Title, Content, Datum, Media, Username, Comments } = route.params;
  const BASE_URL = 'https://armin.vaw.be/';
  const { data: userData } = useNetwork(); // Assuming you have access to user data from your API

  console.log({ Comments })

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
        {Comments.length > 0 && (
          <View>
            <Text style={styles.Title2}>Comments:</Text>
            {Comments.map((comment, index) => (
              <View key={index}>
                <View style={styles.commentContainer}>
                  <View style={styles.commentUserContainer}>
                    <Text style={styles.body2}>
                      {userData?.Users.find((user) => user.UserID === comment.UserID)?.Username || 'Unknown User'}
                    </Text>
                    <Text style={styles.body2}>{comment.Datum}</Text>
                  </View>
                  <Text style={styles.content}>{comment.Comment}</Text>
                </View>
              </View>
            ))}
          </View>
        )}
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
    alignContent: 'center',
  },
  commentContainer: {
    gap: 12,
    backgroundColor: '#141414',
    padding: 6,
    borderRadius: 6,
    marginBottom: 12,
  },
  commentUserContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  Title2: {
    color: 'grey',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 48,
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
