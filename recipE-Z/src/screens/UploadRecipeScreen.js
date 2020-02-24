import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView, ScrollView, Keyboard, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationBar from './NavigationBar';

class UploadRecipeScreen extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={[defaultStyles.container, {backgroundColor:'#FFFFFF'}]}>
      <NavigationBar navigation={this.props.navigation}/>
      </View>
   ); //end return
 }//end render
}//end class

export default UploadRecipeScreen;

const styles = StyleSheet.create({
});
