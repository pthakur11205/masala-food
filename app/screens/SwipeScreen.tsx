import React, { useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Swiper from 'react-native-deck-swiper';

const sampleData = [
  { name: 'Oven-baked Chicken', prepTime: '20 min', image: 'https://via.placeholder.com/150' },
  { name: 'Grilled Salmon', prepTime: '30 min', image: 'https://via.placeholder.com/150' },
  // Add more sample data here
];

export default function SwipeScreen() {
  const [recipes, setRecipes] = useState(sampleData);

  const onSwipedRight = (index: number) => {
    // Add logic for saving/liking the recipe
    console.log('Liked:', recipes[index]);
  };

  const onSwipedLeft = (index: number) => {
    // Add logic for passing the recipe
    console.log('Passed:', recipes[index]);
  };

  return (
    <View style={styles.container}>
      <Swiper
        cards={recipes}
        renderCard={(card) => (
          <View style={styles.card}>
            <Image source={{ uri: card.image }} style={styles.image} />
            <Text style={styles.text}>{card.name}</Text>
            <Text style={styles.text}>Prep Time: {card.prepTime}</Text>
          </View>
        )}
        onSwipedRight={onSwipedRight}
        onSwipedLeft={onSwipedLeft}
        backgroundColor={'#f5f5f5'}
        cardIndex={0}
        stackSize={3}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  card: {
    flex: 1,
    width: 300, // Adjust width as needed
    height: 400, // Adjust height as needed
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  text: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
