import 'react-native-gesture-handler';
import * as React from 'react';
import { Platform, SafeAreaView, Button, StyleSheet, Text, View, AppRegistry, Image, TextInput, Alert, ScrollView, Keyboard, TouchableOpacity, Component } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignupScreen from './SignupScreen';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = { email: ''}
    this.state = { password: ''}

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleEmail(text) {
    this.setState({ text });
  }

  handlePassword(text) {
    this.setState({ text });
  }

  render(){
    const { navigation } = this.props;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#ffcece' }}>
    <View style={{width: 334, height: 561, backgroundColor: 'white', position: 'absolute'}}/>
      <Text style={{color: '#ed4848', fontSize: 20, fontWeight: 'bold', top: 45}}>
      Welcome Back
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Sign-Up')}>
        <Text style={styles.accountSignup}>Don't have an account? Click here to sign up</Text>
      </TouchableOpacity>
      <Image
      style={{width: 90, height: 87, top:-80}}
      source={require('./logo1.png')}
      />
      <TextInput
      placeholder = "Email"
      style={{ width: 280, height: 50, borderColor: 'lightgrey', borderWidth: 1, paddingLeft: 15, backgroundColor: 'white', top: -35, opacity: .7, marginTop: 10 }}
      onBlur = {Keyboard.dismiss}
      value = {this.state.email}
      onChangeText = {this.handleEmail}
      />
      <TextInput
      placeholder = "Password"
      style={{ width: 280, height: 50, borderColor: 'lightgrey', borderWidth: 1, paddingLeft: 15, backgroundColor: 'white', top: -35, opacity: .7, marginTop: 15 }}
      onBlur = {Keyboard.dismiss}
      value = {this.state.password}
      onChangeText = {this.handlePassword}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Sign-Up')}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signinButton}
        onPress={() => navigation.navigate('Home')}
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
  },
  forgotPasswordText: {
    color: '#ed4848',
    textAlign: 'center',
    fontSize: 11,
    paddingBottom: 20
  },
  accountSignup: {
    color: '#ed4848',
    textAlign: 'center',
    fontSize: 11,
    top: 50
  }
})
