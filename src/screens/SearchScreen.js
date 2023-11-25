import React, { useState } from 'react';
import { View, TextInput, Text, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
// import HTML from 'react-native-render-html';

const SearchScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    if (searchTerm.trim() === '') {
      return;
    }

    try {
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleMoviePress = (movie) => {
    navigation.navigate('Details', { selectedMovie: movie });
  };

  const renderMovieItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleMoviePress(item.show)}>
      <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.show.name}</Text>
        {/* <HTML source={{ html: item.show.summary }} /> */}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 10 }}>
        <TextInput
          placeholder="Search for a movie..."
          value={searchTerm}
          onChangeText={text => setSearchTerm(text)}
          onSubmitEditing={handleSearch}
          style={{ borderWidth: 1, borderColor: '#ccc', padding: 8 }}
        />
      </View>
      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.show.id.toString()}
        renderItem={renderMovieItem}
      />
    </SafeAreaView>
  );
};

export default SearchScreen;
