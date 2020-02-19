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
function StartScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems: 'center', justifyContent: 'center', backgroundColor:'#ffcece' }}>
      <View style={{width: 334, height: 561, backgroundColor: 'white', position: 'absolute'}}/>
          <Image
            style={{width: 155, height: 150, top:-25}}
            source={require('./logo1.png')}
          />
          <Text style={{color: '#ed4848', fontSize: 24, fontWeight: 'bold'}}>
          Welcome to recipE-Z
          </Text>
          <Text>{"     "}</Text>
          <Text>{"     "}</Text>
          <Text>
          Don’t know what to cook?
          </Text>
          <Text>
          Have stuff you don’t want to go to waste?
          </Text>
          <Text>
          Just enter the ingredients you have
          </Text>
          <Text>
           and we’ll help you find a recipe.
          </Text>
          <Text>{"     "}</Text>
          <Text>{"     "}</Text>
          <Text style={{color: '#ed4848', fontSize: 16, fontWeight: 'bold'}}>
          We put the E-Z in recipE-Z
          </Text>
          <Text>{"     "}</Text>
          <Text>{"     "}</Text>
          <TouchableOpacity
            style={styles.startButton}
            onPress={() => navigation.navigate('Log-In')}
            underlayColor='#ed4848'>
            <Text style={styles.startText}>LET'S GET STARTED</Text>
          </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
}


//imports of screens

import SearchScreen from './src/screens/SearchScreen';

/////////////////////

function LogInScreen({ navigation }) {
  const [value, onChangeText] = React.useState('   Email');
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#ffcece' }}>
    <View style={{width: 334, height: 561, backgroundColor: 'white', position: 'absolute'}}/>
      <Text style={{color: '#ed4848', fontSize: 20, fontWeight: 'bold', top: -15}}>
      Welcome Back
      </Text>
      <Text style={{color: '#ed4848', fontSize: 10, top: -15}}>
      Don't have an account? Click here to sign up
      </Text>
      <Image
      style={{width: 80, height: 80, top:-150}}
      source={require('./logo1.png')}
      />
      <TextInput
      style={{ width: 280, height: 50, borderColor: 'lightgrey', borderWidth: 1, backgroundColor: 'white', top: -85, opacity: .5 }}
      onChangeText={text => onChangeText(text)}
      value={value}
      />
      <Button Style={styles.loginButton} title="Log-In" color="#ed4848" onPress={() => navigation.navigate('Home')} />
      <Button Style={styles.loginButton} title="sign up" color="#ed4848" onPress={() => navigation.navigate('Sign-Up')}/>
    </View>


  );
}

function SignUpScreen({ navigation }) {
  const [value, onChangeText] = React.useState('Full Name');
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#ffcece' }}>
    <View style={{width: 334, height: 561, backgroundColor: 'white', position: 'absolute'}}/>
    <Text style={{color: '#ed4848', fontSize: 20, fontWeight: 'bold', top: -50}}>
    Create an Account
    </Text>
    <Text style={{color: '#ed4848', fontSize: 10, top: -50}}>
    Already have an account? Click here to login
    </Text>
    <Button
    title="Log-In"
    onPress={() => navigation.navigate('Home')}
    />
    <Button
    title="Sign-Up"
    onPress={() => navigation.navigate('Sign-Up')}
    />
    <Image
      style={{width: 80, height: 80, top:-240}}
      source={require('./logo1.png')}
      />

      <TextInput
  style={{ width: 280, height: 50, borderColor: 'lightgrey', borderWidth: 1, backgroundColor: 'white', top: -175, opacity: .5 }}
  onChangeText={text => onChangeText(text)}
  value={value}
/>
    </View>
  );
}
function HomeScreen({ navigation }) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'coral' }}>
      <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
      <Button title="Upload Recipe" onPress={() => navigation.navigate('Upload')} />
      <Button title="Recipe Book" onPress={() => navigation.navigate('Recipe Book')} />
      <Button title="Search for Recipe" onPress={() => navigation.navigate('Search')} />
      <Image
        style={{width: 50, height: 50, top:-400}}
        source={require('./RecipeBook.png')}
        />
      <Image
        style={{width: 50, height: 50, left:-150, top:-450}}
        source={require('./profile1.png')}
        />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'coral' }}>
    </View>
  );
}

function UploadRecipeScreen({ navigation }) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'coral' }}>
    </View>
  );
}

function RecipeBookScreen({ navigation }) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'coral' }}>
      <Button title="Recipe" onPress={() => navigation.navigate('Recipe')} />
    </View>
  );
}

function SearchResultsScreen({ navigation, props }) {
  return (
    <View style = {styles.container}>
      <Button title="Recipe" onPress={() => navigation.navigate('Recipe')} />
      <View>
        <Text style = {styles.header}>Search</Text>
      </View>
    </View>
  );

}

function RecipeScreen({ navigation }) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'coral' }}>
    </View>
  );
}


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
