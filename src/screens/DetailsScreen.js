import React from 'react';
import { View, Text, Image, Button } from 'react-native';

const DetailsScreen = ({ route, navigation }) => {
  const { movie } = route.params;

  const handleBack = () => {
    // Navigate back to the previous screen (Home or Search)
    navigation.goBack();
  };

  return (
    <View>
      <Image source={{ uri: movie.image.medium }} />
      <Text>{movie.name}</Text>
      {/* Display other movie details as needed */}
      <Button title="Go Back" onPress={handleBack} />
    </View>
  );
};

export default DetailsScreen;
