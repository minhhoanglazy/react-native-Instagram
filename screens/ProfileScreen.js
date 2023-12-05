import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const data = [
    'https://source.unsplash.com/random?sig=',
    'https://source.unsplash.com/random?sig=0',
    'https://source.unsplash.com/random?sig=1',
    'https://source.unsplash.com/random?sig=-1',
    'https://source.unsplash.com/random?sig=-2',
    'https://source.unsplash.com/random?sig=-3',
    'https://source.unsplash.com/random?sig=n',
];

const ProfileScreen = () => {
  const renderItem = ({ item }) => (
    <Image style={styles.image} source={{ uri: item }} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.profilePic} source={{uri: 'https://source.unsplash.com/random?sig='}} />
        <View style={styles.header}>
          <Text style={styles.details}>13 Posts</Text>
          <Text style={styles.details}>3 Followers</Text>
          <Text style={styles.details}>5 Following</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.profileSetting}>Profile Settings</Text>
      </TouchableOpacity>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginLeft: 10,
  },
  details: {
    paddingHorizontal: 24,
  },
  button: {
    backgroundColor: '#0492c2',
    padding: 12,
    margin: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  profileSetting: {
    fontWeight: 'bold',
    color: 'white',
  },
  image: {
    width: '33.33%',
    height: 170,
    borderWidth: 1,
    borderColor: 'white',
  },
});

export default ProfileScreen;
