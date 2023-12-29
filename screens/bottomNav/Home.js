import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, LogBox, ScrollView, Button, TouchableOpacity } from 'react-native';

import LikeIconSvg from '../../assets/Like.svg'

import useNetwork from '../../data/network'
import Post from '../../components/Post.js'


export default function Home({ navigation }) {
  //dbData = ()=>{fetch('http://2a02:1810:c31:5800:69b5:3593:275a:d2fb/endpoint.php')} 

  const likeIcon = require('../../assets/Like.png');
  const commentIcon = require('../../assets/Comment.png');
  const shareIcon = require('../../assets/Share.png');

  const likeIconSvg = require('../../assets/Like.svg')

  const [likeColor, setLikeColor] = useState('white'); // Initial color of LikeIconSvg

  const handleLikePress = () => {
    // Toggle the color when LikeIconSvg is pressed
    const newColor = likeColor === 'white' ? 'red' : 'white';
    setLikeColor(newColor);

    // You can perform additional actions here when the LikeIconSvg is pressed
  };

  const {network, isLoading, isError} = useNetwork()
  console.log(network);

  return (
    <View style={styles.container}>
      <Post/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'top',
    padding: 24,
    paddingTop: 12,
  },
  readTheBlogBox: {
    backgroundColor: 'black',
    padding: 12,
    paddingLeft: 24,
    paddingRight: 24,
    borderRadius: 24,
    position: 'absolute',
    right: 12,
    top: 600,
  },
  readTheBlog: {
    color: 'white',
  },
  interactives:{
    backgroundColor: 'black',
    padding: 12,
    paddingLeft: 24,
    paddingRight: 24,
    borderRadius: 24,
    position: 'absolute',
    right: 24,
    top: 610,
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider:{
    backgroundColor: '#333',
    width: 1,
    height: 20,
    marginHorizontal: 4,
  }
});

/*
      <TouchableOpacity onPress={() => {
        navigation.navigate('BlogPost')
      }}>
        <View style={styles.readTheBlogBox}>
          <Text style={styles.readTheBlog}>
            Read The Blog →
          </Text>
        </View>
      </TouchableOpacity>

      <View style={styles.interactives}>

        <TouchableOpacity onPress={handleLikePress}>
          <LikeIconSvg
            width={20}
            height={19}
            fill={likeColor} // Set the fill color dynamically based on state
          />
        </TouchableOpacity>

        <Image
          style={{width:20, height:20,
            marginHorizontal: 12,}}
          source={commentIcon}
        />
        <View style={styles.divider}>

        </View>
        <Image
          style={{width:18, height:19,
            marginHorizontal: 0,
            marginLeft:8}}
          source={shareIcon}
        />
      </View>
*/