import 'react-native-gesture-handler';
import * as React from 'react';
import { Platform, SafeAreaView, Button, StyleSheet, Text, View, AppRegistry, Image, TextInput, Alert, ScrollView, Keyboard, TouchableOpacity, Component } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Stitch, UserPasswordAuthProviderClient, UserPasswordCredential} from 'mongodb-stitch-react-native-sdk'
import defaultStyles from './stylesheet';


class SignupScreen extends React.Component {
  constructor(props) {
    super(props);

    this.client = Stitch.defaultAppClient;

    this.state = { fullName: '', email: '', password: '', confirmPassword: false}

    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
    this.create_account = this.create_account.bind(this);
  }

  handleName(text) {
    this.setState({ fullName: text });
  }

  handleEmail(text) {
    this.setState({ email: text });
  }

  handlePassword(text) {
    this.setState({ password: text });
  }

  handleConfirmPassword(text) {
    if(text != this.state.password)
      this.setState({ confirmPassword: false });

    else 
      this.setState({ confirmPassword: true });
  }

  async create_account()
  {
    var status = "";

    var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

    const email = this.state.email;
    const password = this.state.password;
    const confirmPassword = this.state.confirmPassword;

    if (this.state.fullName === '')
      alert("Cannot leave name blank!");

    else if (email === '')
      alert("Cannot leave email blank!");

    else if (!re.test(email))
      alert("Invalid email!")

    else if (password === '')
      alert("Cannot leave password blank!");

    else if (!confirmPassword)
      alert("Passwords do not match!");
    
    else if (password.length < 6 || password.length > 128)
      alert("Password must be between 6 and 128 characters!");
    else
    {
      const client = this.client;

      // const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('users');

      const app = client

      const emailPasswordClient = app.auth.getProviderClient(UserPasswordAuthProviderClient.factory);

      await emailPasswordClient.registerWithEmail(email, password)
        .then(() => console.log("Successfully sent account confirmation email!"))
        .catch(err => {
                        console.error("Error registering new user:");
                        status = "register_error";
                        var message = err.message.charAt(0).toUpperCase() + err.message.substring(1) + '.';
                        if (message === "Name already in use.")
                          alert("Account with this email already exists.");
                        else
                          alert(message);
                      });

      if (status != "register_error")
      {
        const credential = new UserPasswordCredential(email, password)
        await app.auth.loginWithCredential(credential)
          // Returns a promise that resolves to the authenticated user
          .then(authedUser => console.log("Successfully logged in with id: ${authedUser.id}"))
          .catch(err => {
                          console.error("Login failed with error:", err);
                          status = "login_error";
                          alert(err.message.charAt(0).toUpperCase() + err.message.substring(1) + '.');
                        })
      }

      if (status === "")
        status = "success";

    }
    return status;
  }


  render(){
    const { navigation } = this.props;
    return (
      <View style={[defaultStyles.container, {backgroundColor:'#ffcece'}]}>
      <View style={[defaultStyles.whiteContainer, {paddingTop: 0, paddingBottom: 0}]}/>
        <Image
        style={{width: 90, height: 87, marginBottom: 10}}
        source={require('../img/logo.png')}
        />
        <View style={{alignItems: 'center'}}>
        <Text style={defaultStyles.h1}>
        Create an Account
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Log-In')}>
          <Text style={defaultStyles.textLink}>Already have an account? Click here to login</Text>
        </TouchableOpacity>
        </View>
        <View style={{marginTop: 15, marginBottom: 10}}>
          <TextInput
          placeholder = "Full Name"
          style={defaultStyles.textInput}
          onBlur = {Keyboard.dismiss}
          value = {this.state.fullName}
          onChangeText = {this.handleName}
          />
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
          <TextInput
          placeholder = "Confirm Password"
          style={defaultStyles.textInput}
          onBlur = {Keyboard.dismiss}
          onChangeText = {this.handleConfirmPassword}
          />
          <Text style={{color: '#ed4848', fontSize: 12, textAlign: 'center', display: this.state.confirmPassword ? 'none' : 'flex'}}>
          The passwords you entered do not match.
          </Text>
        </View>
        <TouchableOpacity style={{alignItems: 'center', marginTop: 5, marginBottom: 20}}>
          <Text style={{color: '#ed4848', fontSize: 10}}>
          By creating an account you agree to our
          </Text>
          <Text style={{color: '#ed4848', fontSize: 10}}>
          Terms of Service and Privacy Policy
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[defaultStyles.redButton]}
          onPress={async () =>  {
                            var status = await this.create_account();
                            if(status === "success") 
                              navigation.navigate('Search');
                          }
                  }
          underlayColor='#ed4848'>
          <Text style={defaultStyles.redButtonText}>SIGN UP</Text>
        </TouchableOpacity>

      </View>
    );

  }
}


export default SignupScreen;

// const styles = StyleSheet.create({
//   loginButton: {
//     backgroundColor: '#ed4848',
//     marginRight: 40,
//     marginLeft: 40,
//     marginTop: 30,
//     paddingTop: 10,
//     paddingBottom: 20,
//     paddingLeft: 100,
//     paddingRight: 100,
//     borderRadius: 5,
//     borderWidth: 1,
//     borderColor: '#ed4848'
//   },
//   startText:{
//     color: 'white',
//     textAlign: 'center',
//     paddingLeft: 10,
//     paddingRight: 10,
//     paddingTop: 10,
//     fontWeight: 'bold'
//   },
//   accountLogin: {
//     color: '#ed4848',
//     textAlign: 'center',
//     fontSize: 11,
//     top: 60
//   }
// })
