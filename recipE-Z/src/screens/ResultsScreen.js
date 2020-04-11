import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView, ScrollView, Keyboard, TouchableOpacity, Image } from 'react-native';
import { Divider } from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import defaultStyles from './stylesheet';
import NavigationBar from './NavigationBar';

const API_KEY = "8a9b90f8b89e43efa982e629b09590b8" // My spoonacular API key

class ResultsScreen extends React.Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    const { route } = this.props;
    var ingArray = route.params; // parameters recieved from the user's search
    this.getDataUsingGet(ingArray); // call function on construction

    this.state = {
      ingArray: [], //calling ings from searchScreen
      api_response: [],
    };

    this.getDataUsingGet = this.getDataUsingGet.bind(this); //binding api call to state
    this.handleApiResponse = this.handleApiResponse.bind(this);
    this.setIngArray = this.setIngArray.bind(this);

  }//end props constructor

  handleApiResponse(arr) {
    this.setState({ api_response: arr });
  }

  setIngArray(text) {
    this.setState({ ingArray: text });
  }

  /////
  // Search By Ingredients:
  // api call ignores null parameters
  // increase number from 5 when finished testing
  // returns recipe objects
  // look here for an example response :
  // https://spoonacular.com/food-api/docs#Search-Recipes-by-Ingredients
  // Then, access inner components (like the segment shown below), do like so
  // [(this is an example response)
  /*  {
        "id": 73420,
        "image": "https://spoonacular.com/recipeImages/73420-312x231.jpg",
        "imageType": "jpg",
        "likes": 0,
        "missedIngredientCount": 3,
        "missedIngredients": [
            {
                "aisle": "Baking",
                "amount": 1.0,
                "id": 18371,

        // TO ACCESS: ex)   responseJson.id[0].ailse = 'Baking'
        // OR:        ex)   this.state.api_response.image[0] = image of the first recipe object
        //
  ///// *///
  //      // the API calls on start, and loads the response into state: api_response.
  //         increase number from 1 in production

    getDataUsingGet(ingArr) {
      var data = [];
      fetch('https://api.spoonacular.com/recipes/findByIngredients?ingredients='+ ingArr.ingArray +'&ranking=1&ignorePantry=true&number=5&apiKey='+ API_KEY +'', {
        method: 'GET',
        headers: {
          Accept: "application/json",
          "Content-Type" : "application/json"
        }
      })
        .then((response) => response.json()) //success
        .then((responseJson) => {
          //alert('works if appears:'+JSON.stringify((responseJson))); //testing alert
          data.push((responseJson));
          this.handleApiResponse(data); //array of response objects stored in state
          this.setIngArray(ingArr);
          //console.log(this.state.ingArray.ingArray); //checking if setIngArray works (it does)
          console.log(this.state.api_response); //testing (state storage works!)
        })
        //on fail
        .catch(error => {
          alert(JSON.stringify(error));
          console.error(error);
        });
    } //end getDataUsingGet

  render() {
    const { navigation } = this.props;
    const { route } = this.props;
    return (
      <View style={[defaultStyles.container, {backgroundColor:'#FFFFFF'}]}>
        <NavigationBar navigation={this.props.navigation}/>
        <Text style={[defaultStyles.h1, {fontSize: 24, position: 'absolute', top: 80, left: 20}]}>Results</Text>
        <View style={{flex: 1, flexDirection: 'row-reverse', position: 'absolute', top: 80, right: 30}}>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Image
              style={{width: 25, height: 25, marginLeft: 20}}
              source={require('../img/search.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Filter')}>
            <Image
              style={{width: 25, height: 25, marginLeft: 20}}
              source={require('../img/filter.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View style={{backgroundColor: '#ED8484', height: 1, flex: 1, bottom:-60, alignSelf: 'center'}} />
        </View>

        <View style={{flexDirection: 'row'}}>
          <Image
            style={{width: 150, height: 150, bottom: -60, right: 25}}
            source={{uri:'https:spoonacular.com/recipeImages/510790-312x231.jpg'}}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Recipe')}>
            <Text style={[defaultStyles.h1, {fontSize: 14, top: 80, right: 20}]}>Buffalo Chicken Mac & Cheese</Text>
        {/*    <Text style={[defaultStyles.h1, {fontSize: 14, top: 80, right: 20}]}>Time: 25 min</Text> */}
        {/*    <Text style={[defaultStyles.h1, {fontSize: 14, top: 80, right: 20}]}>Servings: 7</Text>*/}
        {/*   <Text style={[defaultStyles.h1, {fontSize: 14, top: 80, right: 20}]}>Mising Ingredients: Franks Red Hot, Annie's Homegrown Shells and Real Aged Cheddar Macaroni and Cheese</Text>*/}
        {/*    <Text style={[defaultStyles.h1, {fontSize: 14, top: 80, right: 20}]}>A cheesy, spicy macaroni and cheese chock filled with chicken and hot sauce, that makes it taste like a chicken wing.</Text>*/}
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{width: 150, height: 150, bottom: -60, right: 32}}
            source={{uri:'https://spoonacular.com/recipeImages/164332-312x231.jpg'}}
          />
          <Text style={[defaultStyles.h1, {fontSize: 14, top: 80, right: 25}]}>Chicken-Parmesan Potatoes</Text>
    {/*      <Text style={[defaultStyles.h1, {color: '#000000', fontSize: 8, top: 80, right: 25}]}>Time: 45 min </Text>*/}
    {/*      <Text style={[defaultStyles.h1, {color: '#000000', fontSize: 8, top: 80, right: 25}]}>Servings: 3</Text>*/}
    {/*      <Text style={[defaultStyles.h1, {color: '#000000', fontSize: 8, top: 80, right: 25}]}>Mising Ingredients: Frozen green beans, Potatoes</Text>*/}
    {/*      <Text style={[defaultStyles.h1, {color: '#000000', fontSize: 8, top: 80, right: 25}]}>This Baked Sheet Pan Chicken Parmesan with Roasted Italian Potatoes is a meal in one!</Text>*/}
        </View>

        <View style={{flexDirection: 'row'}}>
          <Image
            style={{width: 150, height: 150, bottom: -60, right: 55}}
            source={{uri:'https://spoonacular.com/recipeImages/921334-312x231.jpg'}}
          />
          <Text style={[defaultStyles.h1, {fontSize: 14, top: 80, right: 45}]}>Savory Rice Porridge</Text>
    {/*      <Text style={[defaultStyles.h1, {color: '#000000', fontSize: 8, top: 80, right: 45}]}>Time: 55 min</Text>*/}
    {/*      <Text style={[defaultStyles.h1, {color: '#000000', fontSize: 8, top: 80, right: 45}]}>Servings: 4</Text>*/}
    {/*      <Text style={[defaultStyles.h1, {color: '#000000', fontSize: 8, top: 80, right: 45}]}>Mising Ingredients: Rice, Cream Cheese,  Turmeric</Text>*/}
    {/*      <Text style={[defaultStyles.h1, {color: '#000000', fontSize: 8, top: 80, right: 45}]}>This silky, savory rice porridge is an everyday breakfast</Text>*/}
        </View>

        <View style={{flexDirection: 'row'}}>
          <Image
            style={{width: 150, height: 150, bottom: -60, right: 35}}
            source={{uri:'https://www.foodiecrush.com/wp-content/uploads/2017/10/Instant-Pot-Macaroni-and-Cheese-foodiecrush.com-019.jpg'}}
          />
          <Text style={[defaultStyles.h1, {fontSize: 14, top: 80, right: 25}]}>One Bowl Mac and Cheese</Text>
      {/*    <Text style={[defaultStyles.h1, {color: '#000000', fontSize: 8, top: 80, right: 25}]}>Time: 20 min</Text>*/}
      {/*    <Text style={[defaultStyles.h1, {color: '#000000', fontSize: 8, top: 80, right: 25}]}>Servings: 1</Text>*/}
      {/*    <Text style={[defaultStyles.h1, {color: '#000000', fontSize: 8, top: 80, right: 25}]}>Mising Ingredients: None</Text>*/}
      {/*    <Text style={[defaultStyles.h1, {color: '#000000', fontSize: 8, top: 80, right: 25}]}>A quick recipe for mac and cheese for one. Easy, cheesy, and oh so good.</Text>*/}
        </View>
    </View>
   ); //end return

 }//end render
}//end class

export default ResultsScreen;

const styles = StyleSheet.create({
});
