// SwipeScreen.tsx
import React, { useState } from 'react';
import { View, StyleSheet, Text, ImageBackground, Button } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  AddRecipe: undefined;
  SwipeScreen: undefined;
};

type SwipeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SwipeScreen'>;
type SwipeScreenRouteProp = RouteProp<RootStackParamList, 'SwipeScreen'>;

type Props = {
  navigation: SwipeScreenNavigationProp;
  route: SwipeScreenRouteProp;
};

const sampleData = [
  { name: 'Oven-baked Chicken', prepTime: '20 min', image: 'https://via.placeholder.com/150' },
  { name: 'Grilled Salmon', prepTime: '30 min', image: 'https://via.placeholder.com/150' },
  // Add more sample data here
];

const SwipeScreen: React.FC<Props> = ({ navigation }) => {
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
          <ImageBackground 
            source={require('../../assets/images/bakedchicken.png')}
            style={styles.card}
            imageStyle={styles.cardBackground}
          >
            <Text style={styles.text}>{card.name}</Text>
            <Text style={styles.text}>Prep Time: {card.prepTime}</Text>
          </ImageBackground>
        )}
        onSwipedRight={onSwipedRight}
        onSwipedLeft={onSwipedLeft}
        backgroundColor={'#E8AC3B'} //Orange
        cardIndex={0}
        stackSize={3}
        verticalSwipe={false}
        disableTopSwipe={true}
        disableBottomSwipe={true}
      />
      <Button
        title="Add Recipe"
        onPress={() => navigation.navigate('AddRecipe')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FA4643', //reddish
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  card: {
    flex: 1,
    width: 300,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  cardBackground: {
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#E8E8E8',
  },
  text: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SwipeScreen;
