import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView, ScrollView, Keyboard, TouchableOpacity, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1, flexDirection: 'row-reverse', position: 'absolute', top: 30, right: 30}}>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Image
          style={{width: 25, height: 25, marginLeft: 20}}
          source={require('../img/profile-color.png')}
        />
      </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('RecipeBook')}>
          <Image
            style={{width: 25, height: 25, marginLeft: 20}}
            source={require('../img/favorites.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Upload')}>
          <Image
            style={{width: 25, height: 25, marginLeft: 20}}
            source={require('../img/create.png')}
          />
        </TouchableOpacity>


      </View>
   ); //end return
 }//end render
}//end class

export default NavigationBar;

const styles = StyleSheet.create({
});
