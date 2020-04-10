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
      </View>
   ); //end return

 }//end render
}//end class

export default RecipeScreen;

const styles = StyleSheet.create({
});
