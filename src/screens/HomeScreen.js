import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
// import HTML from 'react-native-render-html';

const HomeScreen = ({ navigation }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => {
        setMovies(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const navigateToDetails = (selectedMovie) => {
    navigation.navigate('Details', { selectedMovie });
  };

  const renderMovieItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToDetails(item.show)}>
      <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.show.name}</Text>
        {/* <HTML source={{ html: item.show.summary }} /> */}
        
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.show.id.toString()}
        renderItem={renderMovieItem}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
