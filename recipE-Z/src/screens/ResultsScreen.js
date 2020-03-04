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
    var ingArray = route.params; //parameters recieved from the user's search

    this.state = {
      ingArray: ingArray, //calling ings from searchScreen
      api_response: [],
    };

    alert('current ingredients:'+JSON.stringify(ingArray)); // PASSES CORRECTLY! yay
    //console.log(this.state.api_response);
    this.getDataUsingGet = this.getDataUsingGet.bind(this); //binding api call to state
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleApiResponse = this.handleApiResponse.bind(this);

  }//end props constructor


  //invoke on launch
  componentDidMount() {
    this.getDataUsingGet();
    console.log(JSON.stringify(this.state.api_response));
    console.log(this.state.ingArray);
  }

  handleApiResponse(arr) {
    this.setState({ api_response: arr });
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
  ///// */// The implementation of this as of 3/3/2020 is NOT DONE, API call doesn't work and IDK why.
  // // // / You can probably implement the construction of the actual rendered screen regardless.

    getDataUsingGet() {
      var data = [];
      fetch('https://api.spoonacular.com/recipes/findByIngredients?ingredients='+ this.state.ingArray +'&ranking=1&ignorePantry=true&number=5&apiKey='+ API_KEY +'', {
        method: 'GET',
        headers: {
          Accept: "application/json",
          "Content-Type" : "application/json"
        }
      })
        .then((response) => response.json()) //success
        .then((responseJson) => {
          alert('works if appears:'+JSON.stringify((responseJson))); //do stuff with results of API call
          data.push((responseJson));
          //alert(data); //works if appears
          //responseJson is empty rn
          this.handleApiResponse(responseJson); //array of response objects stored in state
          //console.log(JSON.stringify(responseJson));
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
