import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView, ScrollView, Keyboard, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

class RecipeBookScreen extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'coral' }}>
        <Button title="Recipe" onPress={() => navigation.navigate('Recipe')} />
      </View>
   ); //end return

 }//end render
}//end class

export default RecipeBookScreen;

const styles = StyleSheet.create({
});
