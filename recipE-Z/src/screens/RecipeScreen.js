import React, { Component } from 'react';
import { Button, StyleSheet, Text, Image, TextInput, View, SafeAreaView, ScrollView, Keyboard, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import defaultStyles from './stylesheet';
import NavigationBar from './NavigationBar';

class RecipeScreen extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={[defaultStyles.container, {backgroundColor:'#FFFFFF'}]}>
      <NavigationBar navigation={this.props.navigation}/>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{width: 500, height: 250, top: -50}}
          source={{uri:'https:spoonacular.com/recipeImages/510790-312x231.jpg'}}
      />
      </View>
      <View style={{backgroundColor: '#ed4848', height: 175, width: 500, bottom:125}} />
      <Text style={[defaultStyles.h1, {color: '#ffffff',fontSize: 20, bottom: 290, right: 40}]}>Buffalo Chicken Mac & Cheese</Text>
      <Image
        style={{width: 25, height: 25, bottom: 315, right: -150}}
        source={require('../img/favorite-white.png')}
        />
        //  <Text style={[defaultStyles.h1, {fontSize: 14, top: 80, right: 20}]}>Time: 25 min</Text>
      //    <Text style={[defaultStyles.h1, {fontSize: 14, top: 80, right: 20}]}>Servings: 7</Text>
      //    <Text style={[defaultStyles.h1, {fontSize: 14, top: 80, right: 20}]}>Mising Ingredients: Franks Red Hot, Annie's Homegrown Shells and Real Aged Cheddar Macaroni and Cheese</Text>
      //    <Text style={[defaultStyles.h1, {fontSize: 14, top: 80, right: 20}]}>A cheesy, spicy macaroni and cheese chock filled with chicken and hot sauce, that makes it taste like a chicken wing.</Text>
      //    <Text style={[defaultStyles.h1, {fontSize: 14, top: 80, right: 20}]}>Ingredients</Text>
      //    <Text style={[defaultStyles.h1, {fontSize: 14, top: 80, right: 20}]}>- 2 6oz pkgs. of Annie's Homegrown Shells and Real Aged Cheddar Macaroni and Cheese</Text>
      //    <Text style={[defaultStyles.h1, {fontSize: 14, top: 80, right: 20}]}>- 6 tbsp. milk</Text>
      //    <Text style={[defaultStyles.h1, {fontSize: 14, top: 80, right: 20}]}>- 6 oz chicken, cooked, diced into small pieces</Text>
      //    <Text style={[defaultStyles.h1, {fontSize: 14, top: 80, right: 20}]}>- 4 - 6 tbsp. hot sauce</Text>
      //    <Text style={[defaultStyles.h1, {fontSize: 14, top: 80, right: 20}]}>Instructions</Text>
      //    <Text style={[defaultStyles.h1, {fontSize: 14, top: 80, right: 20}]}>1. Bring 12 cups of water to a boil, stir in pasta. </Text>
      //    <Text style={[defaultStyles.h1, {fontSize: 14, top: 80, right: 20}]}> Drain Pasta. </Text>
      //    <Text style={[defaultStyles.h1, {fontSize: 14, top: 80, right: 20}]}> Add 6 tablespoons of milk into a sauce pan and sprinkle cheese from each packet and hot sauce over milk, stir until combined. </Text>
      //    <Text style={[defaultStyles.h1, {fontSize: 14, top: 80, right: 20}]}> Add cooked pasta and chicken, stir until pasta and chicken are completely coated.</Text>
      //    <Text style={[defaultStyles.h1, {fontSize: 14, top: 80, right: 20}]}>Notes</Text>
      //    <Text style={[defaultStyles.h1, {fontSize: 14, top: 80, right: 20}]}>Calories per cup: 238, Fat: 4, Cholesterol: 22, Sodium: 1200, Potassium: 88, Carbs: 32, Fiber: 1.4, Sugar: 3.6, Protein: 14</Text>
      </View>
   ); //end return

 }//end render
}//end class

export default RecipeScreen;

const styles = StyleSheet.create({
});
