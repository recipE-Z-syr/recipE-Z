import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView, ScrollView, Keyboard, TouchableOpacity, Alert } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//TODO:
// finish the API query call with ALL Ingredients
// create string builder function stringToList that creates a comma
// - seperated list of strings for the ingredients query, and then bind it (perhaps unneeded? grab Cynthias code first)
// handle results and display, maybe in another file? navigate to results and call API

//USEFUL API STUFF: :)
// it comes with a sort parameter!
// declare constants before class

const API_KEY = "8a9b90f8b89e43efa982e629b09590b8" // My spoonacular API key

class SearchScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      dish: '',
      ing0: '',
      ing1: '',
      ing2: '',
      ing3: '',
      ing4: '',
      maxCals: '',
      cuisine: '',
      allergies: '',
      exclusions: '',
      ingredientsString: ''
    };

    this.handleDish = this.handleDish.bind(this);
    this.handleIng0 = this.handleIng0.bind(this);
    this.handleIng1 = this.handleIng1.bind(this);
    this.handleIng2 = this.handleIng2.bind(this);
    this.handleIng3 = this.handleIng3.bind(this);
    this.handleIng4 = this.handleIng4.bind(this);
    this.handleMaxCals = this.handleMaxCals.bind(this); //maxCals does not work when no value is input - it breaks the whole thing
    this.handleCuisine = this.handleCuisine.bind(this);
    this.handleAllergies = this.handleAllergies.bind(this);
    this.handleExclusions = this.handleExclusions.bind(this);
    this.getDataUsingGet = this.getDataUsingGet.bind(this);
    this.stringToList = this.stringToList.bind(this);

  } //close constructor

  // if you use complex search, includeIngredients is a comma-seperated list of strings.
  // if you just search by ingredients, it's even easier
  // api call also ignores null parameters
  // increase number from 5 when finished testing
  // https://spoonacular.com/food-api/docs#Search-Recipes
  getDataUsingGet() {
    fetch('https://api.spoonacular.com/recipes/complexSearch?query='+ this.state.dish +'&cuisine='+ this.state.cuisine +'&fillIngredients=false&number=2&apiKey='+ API_KEY +'', {
      method: 'GET',
      headers: {
        Accept: "application/json",
        "Content-Type" : "application/json"
      }
    })
      .then(response => response.json()) //success
      .then(responseJson => {
        alert(JSON.stringify(responseJson)); //do stuff with results of API call
        console.log(responseJson);
      })
      //on fail
      .catch(error => {
        alert(JSON.stringify(error));
        console.error(error);
      });
  } //end getDataUsingGet

  // POST method for data retrieval (remove if unused, also API calls are placeholders) UNUSED AS OF NOW
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
  handleDish(text) {
    this.setState({ dish: text });
    //console.log(this.state.dish);
  }

  handleIng0(text) { //handling state change of text in inputs
    this.setState({ ing0: text });
  }

  handleIng1(text) {
    this.setState({ ing1: text });
  }

  handleIng2(text) {
    this.setState({ ing2: text });
  }

  handleIng3(text) {
    this.setState({ ing3: text });
  }

  handleIng4(text) {
    this.setState({ ing4: text });
  }

  handleMaxCals(text) {
    this.setState({ maxCals: text })
  }

  handleCuisine(text) {
    this.setState({ cuisine: text });
  }

  handleAllergies(text) {
    this.setState({ allergies: text });
  }

  handleExclusions(text) {
    this.setState({ exclusions: text });
  }

  stringToList() { //turns ingredients / Allergies array into a comma seperated list

  }

  //////////// render block //////////////////

  render() {
    return (
      <ScrollView keyboardShouldPersistTaps = 'always'>
       <ScrollView style = {styles.scrollView}>
       <TextInput
         placeholder = "Dish (e.g. pasta)"
         placeholderTextColor = "grey"
         style={styles.textInput}
         onBlur = {Keyboard.dismiss}
         value = {this.state.dish}
         onChangeText = {this.handleDish}
       />
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
          placeholder = "maxCals (doesn't work, unused)"
          placeholderTextColor = "grey"
          style={styles.textInput}
          onBlur = {Keyboard.dismiss}
          value = {this.state.maxCals}
          onChangeText = {this.handleMaxCals}
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
            onPress = {this.getDataUsingGet} //change this
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
