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
      fetch('https://api.spoonacular.com/recipes/findByIngredients?ingredients='+ ingArr.ingArray +'&ranking=1&ignorePantry=true&number=1&apiKey='+ API_KEY +'', {
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
          <View style={{backgroundColor: '#ED8484', height: 1, flex: 1, bottom: 225, alignSelf: 'center'}} />
        </View>
      </View>
   ); //end return

 }//end render
}//end class

export default ResultsScreen;

const styles = StyleSheet.create({
});
