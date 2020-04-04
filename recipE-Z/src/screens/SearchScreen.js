import React, { Component } from 'react';
import { Text, TextInput, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import defaultStyles from './stylesheet';
import Autocomplete from 'react-native-autocomplete-input';
import NavigationBar from './NavigationBar';

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
          style={[{width: 20, height: 20, zIndex: 2, marginTop: -60, marginLeft: -5}, {display: this.state.isClicked ? 'flex' : 'none'}]}
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
      exclusions: []
    };

    this.handleIngredients = this.handleIngredients.bind(this);
    this.handleQuery = this.handleQuery.bind(this); //query = dish (eg pasta)
    this.handleCuisine = this.handleCuisine.bind(this);
    this.handleAllergies = this.handleAllergies.bind(this);
    this.handleExclusions = this.handleExclusions.bind(this);
    //this.handleMaxCals = this.handleMaxCals.bind(this); //maxCals does not work when no value is input - it breaks the whole thing
    this.handleExclusions = this.handleExclusions.bind(this);
    this.suggestIngredient = this.suggestIngredient.bind(this);
    this.clear = this.clear.bind(this);

  }

  // Handler methods for text inputs
  handleQuery(text) {
    this.setState({ query: text });
  }

  handleCuisine(text) {
    this.setState({ cuisine: text });
  }

  handleAllergies(text) {
    this.setState({ allergies: [...this.state.allergies, text] });
  }

  handleExclusions(text) {
    this.setState({ exclusions: [...this.state.exclusions, text] });
  }

  handleIngredients(text) {
    if(!this.state.ingredients.includes(text)){
      this.setState({ ingredients: [...this.state.ingredients, text] });
      this.setState({ query: '' });
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
        <Image
        style={{height: 20, width:20, position: 'absolute', top: 217, right: 50, zIndex: 2}}
        source={require('../img/search.png')}
        />
        <Autocomplete
          containerStyle={defaultStyles.autocompleteContainer}
          inputContainerStyle={defaultStyles.acInputContainer}
          listStyle={{borderWidth: 0}}
          data={data}
          defaultValue={query}
          onChangeText={text => this.setState({ query: text })}
          renderItem={({ item, i }) => (
            <TouchableOpacity key={item} style={defaultStyles.acListStyle} onPress={() => {this.handleIngredients(item)}}>
              <Image
              style={{height: 18, width:18, marginRight: 8}}
              source={require('../img/plus.png')}
              />
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
            onPress ={() => this.props.navigation.navigate(
              'Results',
              { ingArray: this.state.ingredients })}
            >
            <Text style = {[defaultStyles.redButtonText, {color: '#ed4848'}]}>Find Recipes</Text>
          </TouchableOpacity>
        </View>
     </View>
   ); //end return
 }//end render
}//end class

export default SearchScreen;
