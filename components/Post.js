import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import useNetwork from '../data/networkKnit'; // Update the path based on your project structure


const likeIcon = require('../assets/Like.png');
const commentIcon = require('../assets/Comment.png');
const shareIcon = require('../assets/Share.png');



const data = [
  {
    id: '1',
    userName: 'Armin_ds',
    userAvatar: require('../assets/axearmin.png'), // Replace with your local image
    image: require('../assets/aiImages/1.jpeg'), // Replace with your local image
    blogText: 'Read the blog →',
    isLiked: true,
  },
  {
    id: '2',
    userName: 'Lora Sylvia',
    userAvatar: require('../assets/axearmin.png'), // Replace with your local image
    image: require('../assets/aiImages/2.jpeg'), // Replace with your local image
    blogText: 'Read the blog →',
    isLiked: true,
  },
  {
    id: '3',
    userName: 'Yunginn',
    userAvatar: require('../assets/axearmin.png'), // Replace with your local image
    image: require('../assets/aiImages/3.jpeg'), // Replace with your local image
    blogText: 'Read the blog →',
    isLiked: true,
  },
  {
    id: '4',
    userName: 'Yunginn',
    userAvatar: require('../assets/axearmin.png'), // Replace with your local image
    image: require('../assets/aiImages/4.jpeg'), // Replace with your local image
    blogText: 'Read the blog →',
    isLiked: true,
  },
  // ... other posts
];

const Card = ({ item }) => (
    <View style={styles.card}>
        <View style={styles.flexer}>
            <Image source={item.userAvatar} style={styles.avatar} />
            <Text style={styles.userName}>{item.userName}</Text>
        </View>

        <Image source={item.image} style={styles.postImage} />

        <View style={styles.flexer2}>
            <TouchableOpacity style={styles.blogButton} onPress={() => { navigation.navigate('BlogPost') }}>
                <Text style={styles.blogButtonText}>{item.blogText}</Text>
            </TouchableOpacity>

            <View style={styles.interactionBar}>
                <TouchableOpacity>
                <Image
                    style={{width:20, height:18,}}
                    source={likeIcon}
                />
                </TouchableOpacity>
                
                <TouchableOpacity>
                <Image
                    style={{width:20, height:20,}}
                    source={commentIcon}
                />
                </TouchableOpacity>
                <TouchableOpacity>
                <Image
                    style={{width:18, height:19,}}
                    source={shareIcon}
                />
                </TouchableOpacity>
            </View>
        </View>
    </View>
);

const Post = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Card item={item} />}
      keyExtractor={item => item.id}
      style={styles.container}
    />
    // Add your bottom navigation bar here
  );
};

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
    backgroundColor:'black',
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
  // Add styles for the bottom navigation bar
});

export default Post;