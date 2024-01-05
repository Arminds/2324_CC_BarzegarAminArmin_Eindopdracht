import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import useNetwork from '../data/Knitting';
import LikeIconSvg from '../assets/Like.svg';

const commentIcon = require('../assets/Comment.png');
const shareIcon = require('../assets/Share.png');

const Post = ({ navigation }) => {
  const { data, isLoading, isError } = useNetwork();

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
          renderItem={({ item }) => <Card item={item} navigation={navigation} />}
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

const Card = ({ item, navigation }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikePress = () => {
    setIsLiked(!isLiked);
    // Additional logic for handling like press
  };

  return (
    <View style={styles.card}>
      <View style={styles.flexer}>
        <Image source={{ uri: item.ProfileImage }} style={styles.avatar} />
        <Text style={styles.userName}>{item.Username}</Text>
      </View>

      <Image source={{ uri: 'https://armin.vaw.be/' + item.Media }} style={styles.postImage} />

      <View style={styles.flexer2}>
        <TouchableOpacity style={styles.blogButton} onPress={() => { 
          navigation.navigate('BlogPost', 
          {Username: item.Username ,
          Title: item.Title , 
          Content: item.Content , 
          Datum: item.Datum ,
          Likes: item.Likes ,
          Media: item.Media },
          )}}>

          <Text style={styles.blogButtonText}>Read The Blog →</Text>

        </TouchableOpacity>

        <View style={styles.interactionBar}>
          <TouchableOpacity onPress={handleLikePress}>
            {isLiked ? (
              <LikeIconSvg width={20} height={19} fill="red" />
            ) : (
              <LikeIconSvg width={20} height={19} fill="white" />
            )}
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingBottom: 80, // Add some padding at the bottom

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
  },
  flatList: {
    // Add any additional styles for FlatList if needed
  },
});

export default Post;
