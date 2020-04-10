import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { Text, View, Component } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Constants from 'expo-constants';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

//imports of screens

import StartScreen from './src/screens/StartScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SignupScreen from './src/screens/SignupScreen';
import LoginScreen from './src/screens/LoginScreen';
import UploadRecipeScreen from './src/screens/UploadRecipeScreen';
import RecipeBookScreen from './src/screens/RecipeBookScreen';
import SearchScreen from './src/screens/SearchScreen';
import RecipeScreen from './src/screens/RecipeScreen';
import ResultsScreen from './src/screens/ResultsScreen';

function Separator() {
  return <View style={styles.separator}/>;
}

const fetchFonts = () => {
  return Font.loadAsync({
  'nunito-black': require('./assets/fonts/Nunito-Black.ttf'),
  'nunito-blackitalic': require('./assets/fonts/Nunito-BlackItalic.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  'nunito-bolditalic': require('./assets/fonts/Nunito-BoldItalic.ttf'),
  'nunito-extrabold': require('./assets/fonts/Nunito-ExtraBold.ttf'),
  'nunito-extrabolditalic': require('./assets/fonts/Nunito-ExtraBoldItalic.ttf'),
  'nunito-italic': require('./assets/fonts/Nunito-Italic.ttf'),
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-semibold': require('./assets/fonts/Nunito-SemiBold.ttf'),
  'nunito-semibolditalic': require('./assets/fonts/Nunito-SemiBoldItalic.ttf')
  });
};

const Stack = createStackNavigator();

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'nunito-black': require('./assets/fonts/Nunito-Black.ttf'),
      'nunito-blackitalic': require('./assets/fonts/Nunito-BlackItalic.ttf'),
      'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
      'nunito-bolditalic': require('./assets/fonts/Nunito-BoldItalic.ttf'),
      'nunito-extrabold': require('./assets/fonts/Nunito-ExtraBold.ttf'),
      'nunito-extrabolditalic': require('./assets/fonts/Nunito-ExtraBoldItalic.ttf'),
      'nunito-italic': require('./assets/fonts/Nunito-Italic.ttf'),
      'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
      'nunito-semibold': require('./assets/fonts/Nunito-SemiBold.ttf'),
      'nunito-semibolditalic': require('./assets/fonts/Nunito-SemiBoldItalic.ttf')
    });
    this.setState({ fontLoaded: true });
  }

  render() {
  return (
    this.state.fontLoaded ? (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Sign-Up" component={SignupScreen} />
        <Stack.Screen name="Log-In" component={LoginScreen} />
        <Stack.Screen name="Upload" component={UploadRecipeScreen} />
        <Stack.Screen name="RecipeBook" component={RecipeBookScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Recipe" component={RecipeScreen} />
        <Stack.Screen name="Results" component={ResultsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    ) : null
  );}
}
