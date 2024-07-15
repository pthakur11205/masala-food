import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SwipeScreen from './screens/SwipeScreen';
import AddRecipe from './screens/AddRecipeScreen';

type RootStackParamList = {
  SwipeScreen: undefined;
  AddRecipe: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SwipeScreen">
        <Stack.Screen name="SwipeScreen" component={SwipeScreen} />
        <Stack.Screen name="AddRecipe" component={AddRecipe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
