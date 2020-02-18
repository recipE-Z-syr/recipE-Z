import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView, ScrollView, Keyboard, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//TODO:
// have handleSendSearch transmit user inputs to the API and send request (maybe diff file?)

class SearchScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ing0: '' }
    this.state = { ing1: '' }
    this.state = { ing2: '' }
    this.state = { ing3: '' }
    this.state = { ing4: '' }
    this.state = { cuisine: '' }
    this.state = { allergies: '' }
    this.state = { exclusions: '' }

    this.handleIng0 = this.handleIng0.bind(this);
    this.handleIng1 = this.handleIng0.bind(this);
    this.handleIng2 = this.handleIng0.bind(this);
    this.handleIng3 = this.handleIng0.bind(this);
    this.handleIng4 = this.handleIng0.bind(this);
    this.handleCuisine = this.handleCuisine.bind(this);
    this.handleAllergies = this.handleAllergies.bind(this);
    this.handleExclusions = this.handleExclusions.bind(this);

    //this.handleSendSearch = this.handleSendSearch.bind(this);
  }

  handleIng0(text) { //handling state change of text in inputs
    this.setState({ text });
  }

  handleIng1(text) {
    this.setState({ text });
  }

  handleIng2(text) {
    this.setState({ text });
  }

  handleIng3(text) {
    this.setState({ text });
  }

  handleIng4(text) {
    this.setState({ text });
  }

  handleCuisine(text) {
    this.setState({ text });
  }

  handleAllergies(text) {
    this.setState({ text });
  }

  handleExclusions(text) {
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
          value = {this.state.ing0}
          onChangeText = {this.handleIng0}
        />
        <TextInput
          placeholder = "Ingredient 2 (optional)"
          placeholderTextColor = "grey"
          style={styles.textInput}
          onBlur = {Keyboard.dismiss}
          value = {this.state.ing1}
          onChangeText = {this.handleIng1}
        />
        <TextInput
          placeholder = "Ingredient 3 (optional)"
          placeholderTextColor = "grey"
          style={styles.textInput}
          onBlur = {Keyboard.dismiss}
          value = {this.state.ing2}
          onChangeText = {this.handleIng2}
        />
        <TextInput
          placeholder = "Ingredient 4 (optional)"
          placeholderTextColor = "grey"
          style={styles.textInput}
          onBlur = {Keyboard.dismiss}
          value = {this.state.ing3}
          onChangeText = {this.handleIng3}
        />
        <TextInput
          placeholder = "Ingredient 5 (optional)"
          placeholderTextColor = "grey"
          style={styles.textInput}
          onBlur = {Keyboard.dismiss}
          value = {this.state.ing4}
          onChangeText = {this.handleIng4}
        />
        <TextInput
          placeholder = "Cuisine (optional)"
          placeholderTextColor = "grey"
          style={styles.textInput}
          onBlur = {Keyboard.dismiss}
          value = {this.state.cuisine}
          onChangeText = {this.handleCuisine}
        />
        <TextInput
          placeholder = "Allergies / Intolerences (consult your doctor!) (optional)"  ////maybe delete? complex. read docs
          placeholderTextColor = "grey"
          style={styles.textInput}
          onBlur = {Keyboard.dismiss}
          value = {this.state.allergies}
          onChangeText = {this.handleAllergies}
        />
        <TextInput
          placeholder = "Exclude Ingredients (optional)"
          placeholderTextColor = "grey"
          style={styles.textInput}
          onBlur = {Keyboard.dismiss}
          value = {this.state.exclusions}
          onChangeText = {this.handleExclusions}
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
