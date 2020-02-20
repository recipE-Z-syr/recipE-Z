import 'react-native-gesture-handler';
import * as React from 'react';
import { Platform, SafeAreaView, Button, StyleSheet, Text, View, AppRegistry, Image, TextInput, Alert, ScrollView, Keyboard, TouchableOpacity, Component } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignupScreen from './SignupScreen';

class LoginScreen extends React.Component {
  render(){
    const { navigation } = this.props;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#ffcece' }}>
    <View style={{width: 334, height: 561, backgroundColor: 'white', position: 'absolute'}}/>
      <Text style={{color: '#ed4848', fontSize: 20, fontWeight: 'bold', top: 25}}>
      Welcome Back
      </Text>
      <Text style={{color: '#ed4848', fontSize: 10, top: 25}}>
      Don't have an account? Click here to sign up
      </Text>
      <Image
      style={{width: 80, height: 80, top:-100}}
      source={require('./logo1.png')}
      />
      <TextInput
      placeholder = "    Email"
      style={{ width: 280, height: 50, borderColor: 'lightgrey', borderWidth: 1, backgroundColor: 'white', top: -50, opacity: .7, marginTop: 10 }}
      //onChangeText={text => onChangeText(text)}
      //value={value}
      />
      <TextInput
      placeholder = "    Password"
      style={{ width: 280, height: 50, borderColor: 'lightgrey', borderWidth: 1, backgroundColor: 'white', top: -50, opacity: .7, marginTop: 15 }}
      />
      <Text style={{color: '#ed4848', fontSize: 10, top: -20}}>
      Forgot Password?
      </Text>
      <TouchableOpacity
        style={styles.signinButton}
        onPress={() => navigation.navigate('Sign-Up')}
        underlayColor='#ed4848'>
        <Text style={styles.startText}>LOGIN</Text>
      </TouchableOpacity>
    </View>


  );
}
}



export default LoginScreen;

const styles = StyleSheet.create({
  signinButton: {
    backgroundColor: '#ed4848',
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 100,
    paddingRight: 100,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ed4848'
  },
  startText:{
    color: 'white',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontWeight: 'bold'
  }
})
