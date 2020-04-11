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
          style={{width: 500, height: 250, bottom: -100}}
          source={{uri:'https:spoonacular.com/recipeImages/510790-312x231.jpg'}}
      />
      </View>
      <View style={{backgroundColor: '#ed4848', height: 170, width: 500, bottom:-15}} />
      <Text style={[defaultStyles.h1, {color: '#ffffff',fontSize: 20, bottom: 150, right: 40}]}>Buffalo Chicken Mac & Cheese</Text>
      <Image
        style={{width: 25, height: 25, bottom: 170, right: -150}}
        source={require('../img/favorite-white.png')}
        />
          <Text style={[defaultStyles.h1, {color: '#ffffff', fontSize: 14, bottom: 160, right: 125}]}>Time: 25 min</Text>
          <Text style={[defaultStyles.h1, {color: '#ffffff', fontSize: 14, bottom: 179, left: -2}]}>Servings: 7</Text>
          <Text style={[defaultStyles.h1, {color: '#ffffff', fontSize: 14, bottom: 198, left: 120}]}>Calories: 238</Text>
          <Text style={[defaultStyles.h1, {color: '#ffffff', fontSize: 14, bottom: 175, right: 115}]}>Mising Ingredients:</Text>
          <Text style={[defaultStyles.h1, {color: '#ffffff', fontSize: 10, bottom: 190, left: 70}]}>Franks Red Hot, Annie's Homegrown Shells and {"\n"} Real Aged Cheddar Macaroni and Cheese</Text>
          <Text style={[defaultStyles.h1, {color: '#ffffff', fontSize: 8, bottom: 175, right: 0}]}>A cheesy, spicy macaroni and cheese chock filled with chicken and hot sauce, that makes it taste like a chicken wing.</Text>
          <Text style={[defaultStyles.h1, {fontSize: 14, bottom: 150, right: 140}]}>Ingredients</Text>
          <Text style={[defaultStyles.h1, {color: '#000000', fontSize: 8, bottom: 145, right: 0}]}>- 2 6oz pkgs. of Annie's Homegrown Shells and Real Aged Cheddar Macaroni and Cheese</Text>
          <Text style={[defaultStyles.h1, {color: '#000000', fontSize: 8, bottom: 144, right: 143}]}>- 6 tbsp. milk</Text>
          <Text style={[defaultStyles.h1, {color: '#000000', fontSize: 8, bottom: 143, right: 81}]}>- 6 oz chicken, cooked, diced into small pieces</Text>
          <Text style={[defaultStyles.h1, {color: '#000000', fontSize: 8, bottom: 142, right: 126}]}>- 4 - 6 tbsp. hot sauce</Text>
          <Text style={[defaultStyles.h1, {fontSize: 14, bottom: 130, right: 140}]}>Instructions</Text>
          <Text style={[defaultStyles.h1, {color: '#000000', fontSize: 8, bottom: 128, right: 75}]}>1. Bring 12 cups of water to a boil, stir in pasta. </Text>
          <Text style={[defaultStyles.h1, {color: '#000000', fontSize: 8, bottom: 127, right: 137}]}>2. Drain Pasta. </Text>
          <Text style={[defaultStyles.h1, {color: '#000000', fontSize: 8, bottom: 126, right: 21}]}>3. Add 6 tablespoons of milk into a sauce pan and sprinkle cheese from each {"\n"}packet and hot sauce over milk, stir until combined. </Text>
          <Text style={[defaultStyles.h1, {color: '#000000', fontSize: 8, bottom: 125, right: 7}]}>4. Add cooked pasta and chicken, stir until pasta and chicken are completely coated.</Text>
          <Text style={[defaultStyles.h1, {fontSize: 14, bottom: 110, right: 156}]}>Notes</Text>
          <Text style={[defaultStyles.h1, {color: '#000000', fontSize: 8, bottom: 108, right: 50}]}>Calories per cup: 238, Fat: 4, Cholesterol: 22, Sodium: 1200, {"\n"}Potassium: 88, Carbs: 32,Fiber: 1.4, Sugar: 3.6, Protein: 14</Text>
      </View>
   ); //end return

 }//end render
}//end class

export default RecipeScreen;

const styles = StyleSheet.create({
});
