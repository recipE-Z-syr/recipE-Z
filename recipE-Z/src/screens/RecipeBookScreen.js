import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView, ScrollView, Keyboard, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import defaultStyles from './stylesheet';
import NavigationBar from './NavigationBar';

class RecipeBookScreen extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={[defaultStyles.container, {backgroundColor:'#ffcece'}]}>
      <NavigationBar navigation={this.props.navigation}/>
      <Button title="Recipe" onPress={() => navigation.navigate('Recipe')} />
      </View>
   ); //end return

 }//end render
}//end class

export default RecipeBookScreen;

const styles = StyleSheet.create({
});
