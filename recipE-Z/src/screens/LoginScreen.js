import 'react-native-gesture-handler';
import * as React from 'react';
import { Platform, SafeAreaView, Button, StyleSheet, Text, View, AppRegistry, Image, TextInput, Alert, ScrollView, Keyboard, TouchableOpacity, Component } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import defaultStyles from './stylesheet';


class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = { email: '', password: ''}

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleEmail(text) {
    this.setState({ email: text });
  }

  handlePassword(text) {
    this.setState({ passowrd: text });
  }

  render(){
    const { navigation } = this.props;
  return (
    <View style={[defaultStyles.container, {backgroundColor:'#ffcece'}]}>
    <View style={defaultStyles.whiteContainer}>
      <Image
      style={{width: 90, height: 87}}
      source={require('../img/logo.png')}
      />
      <View style={{alignItems: 'center', justifyContent: 'space-around'}}>
        <Text style={defaultStyles.h1}>
        Welcome Back
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Sign-Up') } >
          <Text style={[defaultStyles.textLink]}>Don't have an account? Click here to sign up</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
        placeholder = "Email"
        style={defaultStyles.textInput}
        onBlur = {Keyboard.dismiss}
        value = {this.state.email}
        onChangeText = {this.handleEmail}
        />
        <TextInput
        placeholder = "Password"
        style={defaultStyles.textInput}
        onBlur = {Keyboard.dismiss}
        value = {this.state.password}
        onChangeText = {this.handlePassword}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Sign-Up')}>
        <Text style={defaultStyles.textLink}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[defaultStyles.redButton, {}]}
        onPress={() => navigation.navigate('Search')}
        underlayColor='#ed4848'>
        <Text style={defaultStyles.redButtonText}>LOGIN</Text>
      </TouchableOpacity>
      </View>
    </View>


  );
}
}



export default LoginScreen;

// const styles = StyleSheet.create({
// })
