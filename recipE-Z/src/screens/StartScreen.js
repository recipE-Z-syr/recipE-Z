import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView, ScrollView, Keyboard, TouchableOpacity, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

class StartScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {navigation} = this.props;
    return (
        <SafeAreaView style={styles.container}>
          <View style={{alignItems: 'center', justifyContent: 'center', backgroundColor:'#ffcece' }}>
          <View style={{width: 334, height: 561, backgroundColor: 'white', position: 'absolute'}}/>
              <Image
                style={{width: 155, height: 150, top:-25}}
                source={require('../img/logo1.png')}
              />
              <Text style={{color: '#ed4848', fontSize: 24, fontWeight: 'bold'}}>
              Welcome to recipE-Z
              </Text>
              <Text>{"     "}</Text>
              <Text>{"     "}</Text>
              <Text>
              Don’t know what to cook?
              </Text>
              <Text>
              Have stuff you don’t want to go to waste?
              </Text>
              <Text>
              Just enter the ingredients you have
              </Text>
              <Text>
               and we’ll help you find a recipe.
              </Text>
              <Text>{"     "}</Text>
              <Text>{"     "}</Text>
              <Text style={{color: '#ed4848', fontSize: 16, fontWeight: 'bold'}}>
              We put the E-Z in recipE-Z
              </Text>
              <Text>{"     "}</Text>
              <Text>{"     "}</Text>
              <TouchableOpacity
                style={styles.startButton}
                onPress={() => navigation.navigate('Log-In')}
                underlayColor='#ed4848'>
                <Text style={styles.startText}>LET'S GET STARTED</Text>
              </TouchableOpacity>
        </View>
        </SafeAreaView>
   ); //end return
 }//end render
}//end class

export default StartScreen;

const styles = StyleSheet.create({
});
