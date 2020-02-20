import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView, ScrollView, Keyboard, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

class RecipeScreen extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'coral' }}>
      </View>
   ); //end return

 }//end render
}//end class

export default RecipeScreen;

const styles = StyleSheet.create({
});
