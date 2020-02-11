import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView, ScrollView, Keyboard} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

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

/////////////////////////////////////////////
/// primary recipe search function and API integration
/// if your name is not will DON'T TOUCH THIS CODE >:(
/// if you do I will find you and... smile and be nice to u because you're all great people
///

function SearchResultsScreen({ navigation }) {
    return ( //TODO: find how to store results of input boxes in local variables
      //TODO: create a header that states everything is optional (besides one field lol)
      <ScrollView>
       <View style = {{ flex: 1, alignItems: 'left', justifyContent: 'left'}}>
        <TextInput
          placeholder = " Ingredient one"
          placeholderTextColor = "grey"
          style={{ height: 50, borderColor: 'black', borderWidth: 1 }}
        />
        <TextInput
          placeholder = " Ingredient two"
          placeholderTextColor = "grey"
          style={{ height: 50, borderColor: 'black', borderWidth: 1 }}
        />
        <TextInput
          placeholder = " Ingredient three"
          placeholderTextColor = "grey"
          style={{ height: 50, borderColor: 'black', borderWidth: 1 }}
        />
        <TextInput
          placeholder = " Ingredient four"
          placeholderTextColor = "grey"
          style={{ height: 50, borderColor: 'black', borderWidth: 1 }}
        />
        <TextInput
          placeholder = " Ingredient five"
          placeholderTextColor = "grey"
          style={{ height: 50, borderColor: 'black', borderWidth: 1 }}
        />
        <TextInput
          placeholder = " Cuisine"
          placeholderTextColor = "grey"
          style={{ height: 50, borderColor: 'black', borderWidth: 1 }}
        />
        <TextInput
          placeholder = " Calorie range"  ////maybe delete? complex. read docs
          placeholderTextColor = "grey"
          style={{ height: 50, borderColor: 'black', borderWidth: 1 }}
        />
        <TextInput
          placeholder = " Exclude these ingredients"
          placeholderTextColor = "grey"
          style={{ height: 50, borderColor: 'black', borderWidth: 1 }}
        />
        </View>
        </ScrollView>
  ); //end initial return

}//end func bracket

/////////////// END SEARCH
///////////////////////////////

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
        <Stack.Screen name="Search" component={SearchResultsScreen} />
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
});
