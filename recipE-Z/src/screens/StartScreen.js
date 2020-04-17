import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView, ScrollView, Keyboard, TouchableOpacity, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { AsyncStorage } from 'react-native';
import { Stitch } from 'mongodb-stitch-react-native-sdk';
import defaultStyles from './stylesheet';


class StartScreen extends React.Component {
  constructor(props) {
    super(props);
    Stitch.initializeDefaultAppClient('recipe-z-pnqkt');
    // this.initialize();
    // this.checkLogin();
  }

  /*
  async checkLogin()
  {
    try {
      const value = await AsyncStorage.getItem('login');
      if (value !== null)
      {
        const { navigation } = this.props;
        navigation.navigate('Search');
      }
    }
    catch (error) {
      // Error saving data
    }
  }
  */

  /*
  async initialize()
  {
    var initialized = false;

    try {
      const value = await AsyncStorage.getItem('stitch');
      if (value !== null)
        alert(value);
        initialized = true;
    }
    catch (error) {
      // Error saving data
    }

    if (!initialized)
    {
      alert("not initialized");
      try {
        Stitch.initializeDefaultAppClient('recipe-z-pnqkt');
      }
      catch {
        // Error initializing
      }
      
      try {
        await AsyncStorage.setItem('stitch', 'recipe-z-pnqkt');
      }
      catch (error) {
        // Error saving data
      }
    }

    return 1;
  }
  */

  render() {
    const {navigation} = this.props;
    return (
        <SafeAreaView style={[defaultStyles.container, {backgroundColor:'#ffcece'}]}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <View style={defaultStyles.whiteContainer}>
              <Image
                style={{width: 155, height: 150, marginBottom: 10}}
                source={require('../img/logo.png')}
              />
              <Text style={defaultStyles.h1}>
              Welcome to recipE-Z
              </Text>
              <View style={{paddingTop: 10, paddingBottom: 10, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontFamily: 'nunito-regular'}}>
                Don’t know what to cook?
                </Text>
                <Text style={{fontFamily: 'nunito-regular'}}>
                Have stuff you don’t want to go to waste?
                </Text>
                <Text style={{fontFamily: 'nunito-regular'}}>
                Just enter the ingredients you have
                </Text>
                <Text style={{fontFamily: 'nunito-regular'}}>
                 and we’ll help you find a recipe.
                </Text>
                </View>
                <Text style={{color: '#ed4848', fontSize: 16, fontFamily: 'nunito-bold'}}>
                We put the E-Z in recipE-Z
                </Text>
              <TouchableOpacity
                style={[defaultStyles.redButton, {marginTop:15}]}
                onPress={() => navigation.navigate('Sign-Up')}
                underlayColor='#ed4848'>
                <Text style={defaultStyles.redButtonText}>LET'S GET STARTED</Text>
              </TouchableOpacity>
            </View>
        </View>
        </SafeAreaView>
   ); //end return
 }//end render
}//end class
/*
<Text style={{paddingTop: 10, color: '#ed4848', fontSize: 16, fontFamily: 'nunito-bold'}}>
  Already have an account? 
</Text>
<TouchableOpacity
  style={[defaultStyles.redButton, {marginTop:15}]}
  onPress={() => navigation.navigate('Log-In')}
  underlayColor='#ed4848'>
  <Text style={defaultStyles.redButtonText}>LOG IN</Text>
</TouchableOpacity>
*/

export default StartScreen;

// const styles = StyleSheet.create({
// });
