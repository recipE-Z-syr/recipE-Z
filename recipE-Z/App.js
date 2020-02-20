import 'react-native-gesture-handler';
import * as React from 'react';
import { Platform, SafeAreaView, Button, StyleSheet, Text, View, AppRegistry, Image, TextInput, Alert, ScrollView, Keyboard, TouchableOpacity, Component } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Constants from 'expo-constants';
import * as Font from 'expo-font';

function Separator() {
  return <View style={styles.separator}/>;
}

//imports of screens

import StartScreen from './src/screens/StartScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import LogInScreen from './src/screens/LogInScreen';
import UploadRecipeScreen from './src/screens/UploadRecipeScreen';
import RecipeBookScreen from './src/screens/RecipeBookScreen';
import SearchScreen from './src/screens/SearchScreen';
import RecipeScreen from './src/screens/RecipeScreen';

/////////////////////

const Stack = createStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Start">
          <Stack.Screen name="Start" component={StartScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Sign-Up" component={SignUpScreen} />
          <Stack.Screen name="Log-In" component={LogInScreen} />
          <Stack.Screen name="Upload" component={UploadRecipeScreen} />
          <Stack.Screen name="Recipe Book" component={RecipeBookScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="Recipe" component={RecipeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffcece',
    alignItems: 'center',
    justifyContent: 'center',
  },
  startButton: {
    backgroundColor: '#ed4848',
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 50,
    paddingRight: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ed4848'
  },
  startText:{
    color: 'white',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontWeight: 'bold'
  },
  loginButton: {
    backgroundColor: '#ed4848',
    color: 'white',
    width: 100,
    height: 50,
    bottom: 0,
    position: 'absolute'
  },
  textInput: {
    borderColor: 'red',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20,
  },
  scrollView: {
    borderColor: 'red',
    marginHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  inputContainer: {
    paddingTop: 15,
  },
  sendButton: {
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: 'red',
    padding: 15,
    margin: 5,
  },
  sendButtonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  },
  header: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default App;
