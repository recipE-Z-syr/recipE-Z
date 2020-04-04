import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView, ScrollView, Keyboard, TouchableOpacity, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import defaultStyles from './stylesheet';

class HomeScreen extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={[defaultStyles.container, {backgroundColor:'#ffcece'}]}>
        <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
        <Button title="Upload Recipe" onPress={() => navigation.navigate('Upload')} />
        <Button title="Recipe Book" onPress={() => navigation.navigate('Recipe Book')} />
        <Button title="Search for Recipe" onPress={() => navigation.navigate('Search')} />

        <Image
          style={{width: 50, height: 50, top:-400}}
          source={require('../img/RecipeBook.png')}
          />

        <Image
          style={{width: 50, height: 50, left:-150, top:-450}}
          source={require('../img/profile1.png')}
          />

      </View>
   ); //end return
 }//end render
}//end class

export default HomeScreen;

const styles = StyleSheet.create({
});
