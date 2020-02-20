import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView, ScrollView, Keyboard, TouchableOpacity, Alert } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//TODO:
// call API with inputted user info! rather than placeholders
// handle results and display, maybe in another file? navigate to results and call API?

//USEFUL API STUFF:
// it comes with a sort parameter!

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
    this.state = { test: ' '} //doesn't do anything but the code doesn't work without it

    this.handleIng0 = this.handleIng0.bind(this);
    this.handleIng1 = this.handleIng0.bind(this);
    this.handleIng2 = this.handleIng0.bind(this);
    this.handleIng3 = this.handleIng0.bind(this);
    this.handleIng4 = this.handleIng0.bind(this);
    this.handleCuisine = this.handleCuisine.bind(this);
    this.handleAllergies = this.handleAllergies.bind(this);
    this.handleExclusions = this.handleExclusions.bind(this);
    this.handleTest = this.handleTest.bind(this); // ditto

  } //close constructor

  // GET method for data retreival
  getDataUsingGet() {
    fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=8a9b90f8b89e43efa982e629b09590b8?query=cuisine&number=5', {
      method: 'GET',
    })
      .then(response => response.json()) //success
      .then(responseJson => {
        alert(JSON.stringify(responseJson));
        console.log(responseJson);
      })
      //on fail
      .catch(error => {
        alert(JSON.stringify(error));
        console.error(error);
      });
  } //end getDataUsingGet

  // POST method for data retrieval (remove if unused, also API calls are placeholders)
  getDataUsingPost() {
    //POST json
    var dataToSend = { title: 'foo', body: 'bar', userId: 1 };

    //making data to send on server
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    //POST request
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST', //Request Type
      body: formBody, //post body
      headers: {
        //Header Defination
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then(response => response.json())
      //If response is in json then in success
      .then(responseJson => {
        alert(JSON.stringify(responseJson));
        console.log(responseJson);
      })
      //If response is not in json then in error
      .catch(error => {
        alert(JSON.stringify(error));
        console.error(error);
      });
  }

  // Handler methods for text inputs

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

  handleTest(text) {
    this.setState({ text });
  }

// begin render block. all rules OUT THE WINDOW

  render() {
    return (
      <ScrollView keyboardShouldPersistTaps = 'always'>
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
            onPress = {this.getDataUsingGet}
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
