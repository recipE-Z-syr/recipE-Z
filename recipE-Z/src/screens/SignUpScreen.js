import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView, ScrollView, Keyboard, TouchableOpacity, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const [value, onChangeText] = React.useState('Full Name');
    const {navigation} = this.props;
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#ffcece' }}>
        <View style={{width: 334, height: 561, backgroundColor: 'white', position: 'absolute'}}/>
        <Text style={{color: '#ed4848', fontSize: 20, fontWeight: 'bold', top: -50}}>
        Create an Account
        </Text>
        <Text style={{color: '#ed4848', fontSize: 10, top: -50}}>
        Already have an account? Click here to login
        </Text>
        <Button
        title="Log-In"
        onPress={() => navigation.navigate('Home')}
        />
        <Button
        title="Sign-Up"
        onPress={() => navigation.navigate('Sign-Up')}
        />
        <Image
          style={{width: 80, height: 80, top:-240}}
          source={require('../img/logo1.png')}
          />

          <TextInput
      style={{ width: 280, height: 50, borderColor: 'lightgrey', borderWidth: 1, backgroundColor: 'white', top: -175, opacity: .5 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
        </View>
   ); //end return
 }//end render
}//end class

export default SignUpScreen;

const styles = StyleSheet.create({
});
