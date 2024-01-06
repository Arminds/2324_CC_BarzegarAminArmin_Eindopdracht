import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import useNetwork from '../data/Knitting';

const BASE_URL = 'https://armin.vaw.be/';

const UsersBattlesWatch = () => {
  const { data, isLoading, isError } = useNetwork();

  if (isError) {
    return <Text>Error loading data</Text>;
  }

  const sortedUsers = data?.Users.sort((a, b) => b.Rank - a.Rank);

  return (
    <View style={styles.container}>
      {sortedUsers ? (
        <FlatList
          data={sortedUsers}
          renderItem={({ item }) => <UserCard user={item} />}
          keyExtractor={(item) => item.UserID.toString()}
          style={styles.flatList}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const UserCard = ({ user }) => {
  return (
    <View style={styles.card}>
        <View style={styles.techniqueIcon}>
            <Image
                style={styles.techniqueIcon}
                source={{ uri: user.ProfileImage ? BASE_URL + user.ProfileImage : 'DefaultImageURL' }}
            />
        </View>
        <View>
            <Text style={styles.header}>
                {user.Username}
            </Text>
            <Text style={styles.body}>
                Rank: {user.Rank}
            </Text>
        </View>
        <TouchableOpacity style={styles.goTo}>
            <Text style={styles.goText}>
                Watch others →
            </Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingBottom: 80,
  },
  header: {
    color: 'black',
    fontFamily: 'Inter_700Bold',
  },
  body:{
    color: 'black',
    fontWeight: '400',
    fontFamily: 'Inter_400Regular',
  },
  card: {
    backgroundColor: 'white',
    padding: 8,
    paddingLeft: 0,
    borderRadius: 24,
    flexDirection: 'row', // horizontal grid
    alignItems:'center',
    marginBottom: 6,
  },
  techniqueIcon: {
    borderRadius: 16,
    marginHorizontal: 10,
    width: 48,
    height: 48,
    alignItems:'center',
  },
  goTo: {
    backgroundColor: 'blue',
    borderRadius: 6,
    paddingHorizontal: 6,
    position: 'absolute',
    right: 10
  },
  goText: {
    paddingTop: 8,
    paddingBottom: 8,
    color: 'white',
    fontFamily: 'Inter_700Bold',
  },

});

export default UsersBattlesWatch;
