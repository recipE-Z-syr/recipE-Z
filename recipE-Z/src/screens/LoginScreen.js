import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Text, View, Image, TextInput, Keyboard, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { AsyncStorage } from 'react-native';
import {Stitch, UserPasswordCredential} from 'mongodb-stitch-react-native-sdk'
import defaultStyles from './stylesheet';


class LoginScreen extends Component {
  constructor(props) {
    super(props);

    //this.checkLogin();

    this.client = Stitch.defaultAppClient;

    this.state = { email: '', password: ''}

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleEmail(text) {
    this.setState({ email: text });
  }

  handlePassword(text) {
    this.setState({ password: text });
  }

  /*
  async checkLogin()
  {
    try {
      const value = await AsyncStorage.getItem('login');
      if (value !== null)
      {
        alert("You are already logged in.")
        const { navigation } = this.props;
        navigation.navigate('Search');
      }
    }
    catch (error) {
      // Error saving data
    }
  }
  */

  async login()
  {
    var status = "";
    var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

    const email = this.state.email;
    const password = this.state.password;

    if (this.state.fullName === '')
      alert("Cannot leave name blank!");

    else if (email === '')
      alert("Cannot leave email blank!");

    else if (!re.test(email))
      alert("Invalid email!")

    else if (password === '')
      alert("Cannot leave password blank!");
    else
    {
      const client = this.client;

      const app = client

      var user;

      const credential = new UserPasswordCredential(email, password)
      await app.auth.loginWithCredential(credential)
        // Returns a promise that resolves to the authenticated user
        .then(authedUser => {
          console.log("Successfully logged in with id: ${authedUser.id}");
          user = authedUser.id;
        })
        .catch(err => {
          console.error("Login failed with error:", err);
          status = "login_error";
          alert(err.message.charAt(0).toUpperCase() + err.message.substring(1) + '.');
        })

      if (status === "")
      {
        status = "success";
        try {
          await AsyncStorage.setItem('login', user);
        }
        catch (error) {
          // Error saving data
        }
      }

    }
    return status;
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
        onPress={async () =>  {
                            var status = await this.login();
                            if(status === "success") 
                              navigation.navigate('Search');
                          }
                }
        underlayColor='#ed4848'>
        <Text style={defaultStyles.redButtonText}>LOGIN</Text>
      </TouchableOpacity>
      </View>
    </View>


  );
}
}



export default LoginScreen;
