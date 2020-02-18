import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView, ScrollView, Keyboard, TouchableOpacity, Component } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//imports of screens

import SearchScreen from './src/screens/SearchScreen';

/////////////////////

function LogInScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
      title="Log-In"
      onPress={() => navigation.navigate('Home')}
      />
      <Button
      title="Sign-Up"
      onPress={() => navigation.navigate('Sign-Up')}
      />
    </View>
  );
}

function SignUpScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    </View>
  );
}
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
      <Button title="Upload Recipe" onPress={() => navigation.navigate('Upload')} />
      <Button title="Recipe Book" onPress={() => navigation.navigate('Recipe Book')} />
      <Button title="Search for Recipe" onPress={() => navigation.navigate('Search')} />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    </View>
  );
}

function UploadRecipeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    </View>
  );
}

function RecipeBookScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Recipe" onPress={() => navigation.navigate('Recipe')} />
    </View>
  );
}

function SearchResultsScreen({ navigation, props }) {
  return (
    <View style = {styles.container}>
      <View>
        <Text style = {styles.header}>Search</Text>
      </View>
    </View>
  );

}

function RecipeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Log-In">
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

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
