import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView, ScrollView, Keyboard, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//have app.js call this screen when navigated to
//have this import app.js as to link them

class SearchScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = { text: '' }

    this.handleTextChange = this.handleTextChange.bind(this);
    //this.handleSendSearch = this.handleSendSearch.bind(this);
  }

  handleTextChange(text) { //handle state change of text
    this.setState({ text });
  }

  /* handleSendSearch() {
    recipeSearch(this.state); //calls search! integrate API before using
  } */

  render() {
    return (
      <ScrollView>
       <ScrollView style = {styles.scrollView}>
        <TextInput
          placeholder = "Ingredient 1"
          placeholderTextColor = "grey"
          style={styles.textInput}
          onBlur = {Keyboard.dismiss}
          value = {this.state.text}
          onChangeText = {this.handleTextChange}
        />
        <TextInput
          placeholder = "Ingredient 2"
          placeholderTextColor = "grey"
          style={styles.textInput}
          onBlur = {Keyboard.dismiss}
        />
        <TextInput
          placeholder = "Ingredient 3"
          placeholderTextColor = "grey"
          style={styles.textInput}
          onBlur = {Keyboard.dismiss}
        />
        <TextInput
          placeholder = "Ingredient 4"
          placeholderTextColor = "grey"
          style={styles.textInput}
          onBlur = {Keyboard.dismiss}
        />
        <TextInput
          placeholder = "Ingredient 5"
          placeholderTextColor = "grey"
          style={styles.textInput}
          onBlur = {Keyboard.dismiss}
        />
        <TextInput
          placeholder = "Cuisine"
          placeholderTextColor = "grey"
          style={styles.textInput}
          onBlur = {Keyboard.dismiss}
        />
        <TextInput
          placeholder = "Allergies / Intolerences (consult your doctor!)"  ////maybe delete? complex. read docs
          placeholderTextColor = "grey"
          style={styles.textInput}
          onBlur = {Keyboard.dismiss}
        />
        <TextInput
          placeholder = "Exclude Ingredients"
          placeholderTextColor = "grey"
          style={styles.textInput}
          onBlur = {Keyboard.dismiss}
        />
        <View style = {styles.inputContainer}>
          <TouchableOpacity
            style = {styles.sendButton}
            //onPress = {this.handleSendSearch}
            >
            <Text style = {styles.sendButtonText}>Search</Text>
            </TouchableOpacity>
        </View>
       </ScrollView>
     </ScrollView>
   ); //end return
 }//end render
}//end class

export default SearchScreen;

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
});
