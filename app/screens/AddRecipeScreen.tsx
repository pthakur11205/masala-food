// AddRecipe.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase'; 


type RootStackParamList = {
  AddRecipe: undefined;
  SwipeScreen: undefined;
};

type AddRecipeNavigationProp = StackNavigationProp<RootStackParamList, 'AddRecipe'>;
type AddRecipeRouteProp = RouteProp<RootStackParamList, 'AddRecipe'>;

type Props = {
  navigation: AddRecipeNavigationProp;
  route: AddRecipeRouteProp;
};

const AddRecipe: React.FC<Props> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [prepTime, setPrepTime] = useState('');
  const [image, setImage] = useState('');

  const handleSave = async () => {
    // Save the recipe to Firestore
    try {
      await setDoc(doc(db, 'recipes', name), {
        name,
        prepTime,
        image,
      });
      alert('Recipe saved successfully');
      navigation.goBack();
    } catch (error) {
      console.error('Error saving recipe: ', error);
    }
    console.log('Saving...')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Recipe Name</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <Text style={styles.label}>Prep Time</Text>
      <TextInput style={styles.input} value={prepTime} onChangeText={setPrepTime} />
      <Text style={styles.label}>Image URL</Text>
      <TextInput style={styles.input} value={image} onChangeText={setImage} />
      <Button title="Save Recipe" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
});

export default AddRecipe;
