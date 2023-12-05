import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MasonryList from 'react-native-masonry-list';

const images = [
  { uri: 'https://source.unsplash.com/random?sig=', dimensions: { height: 100 } },
  { uri: 'https://source.unsplash.com/random?sig=0', dimensions: { height: 200 } },
  { uri: 'https://source.unsplash.com/random?sig=1', dimensions: { height: 100 } },
  { uri: 'https://source.unsplash.com/random?sig=2', dimensions: { height: 100 } },
  { uri: 'https://source.unsplash.com/random?sig=3', dimensions: { height: 200 } },
  { uri: 'https://source.unsplash.com/random?sig=4', dimensions: { height: 200 } },
  { uri: 'https://source.unsplash.com/random?sig=5', dimensions: { height: 100 } },
  { uri: 'https://source.unsplash.com/random?sig=6', dimensions: { height: 100 } },
  { uri: 'https://source.unsplash.com/random?sig=6', dimensions: { width: 200 } },
  { uri: 'https://source.unsplash.com/random?sig=7', dimensions: { width: 200 , height: 200 } },
  { uri: 'https://source.unsplash.com/random?sig=7', dimensions: { width: 100 , height: 100 } },
  { uri: require('../pictures/dog.jpg'), dimensions: { width: 100 , height: 100 } },
];

const ExploreScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <MasonryList
        images={images}
        columns={3}
        imageContainerStyle={styles.image}
        onPressImage={(item) => {
          navigation.navigate('Post', { image: item.uri });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    borderWidth: 0,
    borderColor: 'white',
  },
});

export default ExploreScreen;