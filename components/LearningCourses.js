import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import useNetwork from '../data/Knitting';

const trophy = require('../assets/restIcon/trophy.png');

const Learning = () => {
  const { data, isLoading, isError } = useNetwork();

  if (isError) {
    return <Text>Error loading learning data</Text>;
  }

  return (
    <View style={styles.container}>
      {data?.LearningCourses ? (
        <FlatList
          data={data.LearningCourses}
          renderItem={({ item }) => <Card item={item}/>}
          keyExtractor={(item) => item.CourseID.toString()}
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
  <View style={styles.container}>
    <TouchableOpacity style={styles.exercise2} onPress={(navigate ) => {}}>
      <View style={styles.exercise}>
        <View style={styles.techniqueIcon}>
          <Image style={{ width: 21, height: 20, margin: 16 }} source={trophy} />
        </View>
        <View>
          <Text style={styles.header2}>{item.Title}</Text>
          <Text style={styles.body2}>Rank {item.Difficulty} or above</Text>
        </View>
        <View style={styles.goTo}>
          <Text style={styles.goText}>→</Text>
        </View>
      </View>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#000000',
  },
  header2: {
    color: 'black',
    left: 12,
    fontFamily: 'Inter_700Bold',
  },
  body2: {
    color: 'black',
    fontWeight: '400',
    left: 12,
    fontFamily: 'Inter_400Regular',
  },
  exercise: {
    backgroundColor: 'white',
    margin: 20,
    width: '100%',
    padding: 8,
    paddingLeft: 0,
    borderRadius: 24,
    flexDirection: 'row', // horizontal grid
    alignItems: 'center',
    marginBottom: 0,
  },
  exercise2: {
    width: '100%',
    alignItems: 'center',
  },
  techniqueIcon: {
    backgroundColor: 'blue',
    borderRadius: 16,
    marginHorizontal: 10,
  },
  goTo: {
    backgroundColor: 'blue',
    borderRadius: 16,
    position: 'absolute',
    right: 10,
  },
  goText: {
    paddingTop: 8,
    paddingBottom: 8,
    padding: 4,
    color: 'white',
    fontFamily: 'Inter_700Bold',
  },
  flatList: {
    width: '100%',
  },
});

export default Learning;
