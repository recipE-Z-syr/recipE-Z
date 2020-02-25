import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView, Keyboard, TouchableOpacity, Dimensions, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import defaultStyles from './stylesheet';
import Autocomplete from 'react-native-autocomplete-input';
import NavigationBar from './NavigationBar';
//TODO:
// finish the API query call with ALL Ingredients (handle ings)
// re implement dish (query), allergies, exclusions, and cuisine

// create string builder function stringToList that creates a comma
// - seperated list of strings for the ingredients query, and then bind it (perhaps unneeded? grab Cynthias code first)
// handle results and display, maybe in another file? navigate to results and call API

const API_KEY = "8a9b90f8b89e43efa982e629b09590b8" // My spoonacular API key

class IngredientItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isClicked: false};
  }

  render () {
    const {item, removeHandler} = this.props;
    return (
      <View>
        <TouchableOpacity style={defaultStyles.ingredient} onPress={() => {this.setState({isClicked: !this.state.isClicked})}}>
          <Text key={item} style={defaultStyles.ingredientText}>{item}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => removeHandler(item)}>
          <Image
          key={item}
          style={[{width: 20, height: 20, zIndex: 2, marginTop: -60, marginLeft: -5}, {display: this.state.isClicked ? 'block' : 'none'}]}
          source={require('../img/delete.png')}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

class SearchScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      ingredients: [],
      ingdata: ['eggs', 'milk', 'cheese', 'carrots', 'ice cream', 'cheddar', 'flour', 'macaroni', 'pasta', 'broth', 'chicken', 'beef', 'lettuce', 'peas'],
      query: '',
      cuisine: '',
      allergies: [],
      exclusions: [],
      ingredientsString: ''
    };

    this.handleIngredients = this.handleIngredients.bind(this);
    this.handleQuery = this.handleQuery.bind(this); //query = dish (eg pasta)
    this.handleCuisine = this.handleCuisine.bind(this);
    this.handleAllergies = this.handleAllergies.bind(this);
    this.handleExclusions = this.handleExclusions.bind(this);
    //this.handleMaxCals = this.handleMaxCals.bind(this); //maxCals does not work when no value is input - it breaks the whole thing
    this.getDataUsingGet = this.getDataUsingGet.bind(this);
    this.stringToList = this.stringToList.bind(this);
    this.handleExclusions = this.removeItem.bind(this);
    this.suggestIngredient = this.suggestIngredient.bind(this);
    this.clear = this.clear.bind(this);

  }

  // if you use complex search, includeIngredients is a comma-seperated list of strings.
  // if you just search by ingredients, it's even easier
  // api call also ignores null parameters
  // increase number from 5 when finished testing
  // https://spoonacular.com/food-api/docs#Search-Recipes
  getDataUsingGet() {
    fetch('https://api.spoonacular.com/recipes/complexSearch?query='+ this.state.query +'&cuisine='+ this.state.cuisine +'&fillIngredients=false&number=2&apiKey='+ API_KEY +'', {
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

  // Handler methods for text inputs
  handleQuery(text) {
    this.setState({ query: text });
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

  handleIngredients(text) {
    if(!this.state.ingredients.includes(text)){
      this.setState({ ingredients: [...this.state.ingredients, text] });
    }
  }

  removeItem(item) {
    // console.log(this.state.ingredients);
    var array = this.state.ingredients;
    var index = array.indexOf(item);
    if (index !== -1) array.splice(index, 1);
    this.setState({ingredients: array})
  }

  clear() {
    this.setState({ingredients: []});
  }

  suggestIngredient(text) {
    if (text === '') {
      return [];
    }
    const { ingdata } = this.state;
    const regex = new RegExp(`${text.trim()}`, 'i');
    return ingdata.filter(ing => ing.search(regex) >= 0);
  }

  stringToList() { //turns ingredients / Allergies / exclusions array into a comma seperated list
  }

  //////////// render block //////////////////

  render() {
    const {navigation} = this.props;
    const { query } = this.state;
    const data = this.suggestIngredient(query);
    return (
      <View style={{
        flex:1,
        height: Dimensions.get('window').height,
        backgroundColor:'#fff',
        alignItems: 'center',
        justifyContent: 'space-around'
      }}>
       <View style= {[defaultStyles.searchContainer]}>
       <NavigationBar navigation={this.props.navigation}/>
       <Image
        style={{width: 65, height: 65, marginBottom: 40}}
        source={require('../img/logo.png')}
        />
       <Text style={[defaultStyles.h1, {fontSize: 24}]}>Search for recipes</Text>
       <Text style={[defaultStyles.textLink, {textAlign: 'left', paddingTop: 5}]}>You can search by entering the ingredients you have</Text>
       <Text style={[defaultStyles.textLink, {textAlign: 'left', paddingBottom: 15}]}>or by typing in a recipe name</Text>
        <Autocomplete
          containerStyle={defaultStyles.autocompleteContainer}
          inputContainerStyle={defaultStyles.acInputContainer}
          listStyle={{borderWidth: 0}}
          data={data}
          defaultValue={query}
          onChangeText={text => this.setState({ query: text })}
          renderItem={({ item, i }) => (
            <TouchableOpacity style={defaultStyles.acListStyle} onPress={() => {this.handleIngredients(item)}}>
              <Text style={{color: '#ed4848'}}>{item}</Text>
            </TouchableOpacity>
          )}
        />
        </View>
        <View style = {[defaultStyles.inputContainer,]}>
          <Text style={[defaultStyles.h1, {fontSize: 24, color: "#fff", width: 350}]}>Ingredients:</Text>
          <TouchableOpacity onPress = {this.clear} style={{position: 'absolute', top: 30, right: 40}}>
            <Text style = {[defaultStyles.textLink, {fontSize: 14, color: '#fff'}]}>CLEAR</Text>
            </TouchableOpacity>
          <View style= {defaultStyles.ingredientsContainer}>
          {this.state.ingredients.map(item => (
            <IngredientItem item={item} removeHandler={this.removeItem.bind(this)}/>
          ))}
          </View>
          <TouchableOpacity
            style = {[defaultStyles.redButton, {backgroundColor: '#fff', width: 350}]}
            onPress = {this.getDataUsingGet} //calls API!
            >
            <Text style = {[defaultStyles.redButtonText, {color: '#ed4848'}]}>Find Recipes</Text>
            </TouchableOpacity>
        </View>
     </View>
   ); //end return
 }//end render
}//end class

// <TextInput
//   placeholder = "Cuisine (optional)"
//   placeholderTextColor = "grey"
//   style={defaultStyles.searchTextInput}
//   onBlur = {Keyboard.dismiss}
//   value = {this.state.cuisine}
//   onChangeText = {this.handleCuisine}
// />
// <TextInput
//   placeholder = "Allergies / Intolerences (consult your doctor!) (optional)"  ////maybe delete? complex. read docs
//   placeholderTextColor = "grey"
//   style={defaultStyles.searchTextInput}
//   onBlur = {Keyboard.dismiss}
//   value = {this.state.allergies}
//   onChangeText = {this.handleAllergies}
// />
// <TextInput
//   placeholder = "Exclude Ingredients (optional)"
//   placeholderTextColor = "grey"
//   style={defaultStyles.searchTextInput}
//   onBlur = {Keyboard.dismiss}
//   value = {this.state.exclusions}
//   onChangeText = {this.handleExclusions}
// />
export default SearchScreen;

// const styles = StyleSheet.create({
// });
