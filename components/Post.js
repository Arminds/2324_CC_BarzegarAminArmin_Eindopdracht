import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import useNetwork from '../data/Knitting';

const likeIcon = require('../assets/Like.png');
const commentIcon = require('../assets/Comment.png');
const shareIcon = require('../assets/Share.png');

const Post = () => {
  const {data, isLoading, isError} = useNetwork()
  //console.log("API DATA", data);

  if (isError) {
    return <Text>Error loading posts</Text>;
  }

  const BASE_URL = 'https://armin.vaw.be/';

  const joinedData = data?.BlogPosts.map((blogPost) => {
    const user = data.Users.find((user) => user.UserID === blogPost.UserID);
    return {
      ...blogPost,
      Username: user?.Username || 'Unknown',
      Email: user?.Email || 'Unknown',
      ProfileImage: user?.ProfileImage ? BASE_URL + user.ProfileImage : 'DefaultImageURL',
    };
  });

  const sortedData = joinedData?.sort((a, b) => b.PostID - a.PostID);

  return (
    <View style={styles.container}>
      {sortedData ? (
        <FlatList
          data={sortedData}
          renderItem={({ item }) => <Card item={item} />}
          keyExtractor={(item) => item.PostID}
          style={styles.flatList}
           showsVerticalScrollIndicator={false}
        />
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const Card = ({ item }) => (
  <View style={styles.card}>
    <View style={styles.flexer}>
      <Image source={{ uri: item.ProfileImage}} style={styles.avatar} />
      <Text style={styles.userName}>{item.Username}</Text>
    </View>

    <Image source={{ uri: 'https://armin.vaw.be/' + item.Media}} style={styles.postImage} />

    <View style={styles.flexer2}>
      <TouchableOpacity style={styles.blogButton} onPress={() => { navigation.navigate('BlogPost') }}>
        <Text style={styles.blogButtonText}>Read The Blog →</Text>
      </TouchableOpacity>

      <View style={styles.interactionBar}>
        <TouchableOpacity>
          <Image style={{ width: 20, height: 18 }} source={likeIcon} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image style={{ width: 20, height: 20 }} source={commentIcon} />
        </TouchableOpacity>
        
        <TouchableOpacity>
          <Image style={{ width: 18, height: 19 }} source={shareIcon} />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  card: {
    backgroundColor: '#141414',
    borderRadius: 6,
    marginBottom: 6,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 6,
    margin: 6,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
  postImage: {
    width: '100%',
    height: 200, // Adjust height accordingly
  },
  blogButton: {
    backgroundColor: 'black',
    padding: 12,
    margin: 6,
    borderRadius: 6,
  },
  blogButtonText: {
    color: 'white',
    fontSize: 16,
  },
  interactionBar: {
    flexDirection: 'row',
    backgroundColor: 'black',
    borderRadius: 6,
    gap: 20,
    padding: 12,
    margin: 6,
  },
  flexer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexer2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});

export default Post;
