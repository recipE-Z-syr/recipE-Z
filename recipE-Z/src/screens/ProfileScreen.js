import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView, ScrollView, Keyboard, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import defaultStyles from './stylesheet';

class ProfileScreen extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={[defaultStyles.container, {backgroundColor:'#ffcece'}]}>
      <NavigationBar/>
      </View>
    ); //end return

 }//end render
}//end class

export default ProfileScreen;

const styles = StyleSheet.create({
});