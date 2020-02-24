import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView, ScrollView, Keyboard, TouchableOpacity, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

class NavigationBar extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('RecipeBook')}>
          <Image
            style={{width: 22, height: 22, top: -5, left: 200}}
            source={require('../img/favorites.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Upload')}>
          <Image
            style={{width: 22, height: 22, top: -26, left: 245}}
            source={require('../img/create.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            style={{width: 22, height: 22, top: -48, left: 285}}
            source={require('../img/profile-color.png')}
          />
        </TouchableOpacity>
      </View>
   ); //end return
 }//end render
}//end class

export default NavigationBar;

const styles = StyleSheet.create({
});
