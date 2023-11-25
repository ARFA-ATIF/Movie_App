import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CustomCard = ({ movie }) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: movie.image_url }} // Replace with actual movie image URL
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.summary}>{movie.summary}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  summary: {
    fontSize: 14,
  },
});

export default CustomCard;
