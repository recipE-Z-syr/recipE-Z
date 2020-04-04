import 'react-native-gesture-handler';
import * as React from 'react';
import { Platform, SafeAreaView, Button, StyleSheet, Text, View, AppRegistry, Image, TextInput, Alert, ScrollView, Keyboard, TouchableOpacity, Component } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Stitch, RemoteMongoClient, UserPasswordAuthProviderClient, UserPasswordCredential} from 'mongodb-stitch-browser-sdk'
import defaultStyles from './stylesheet';


class SignupScreen extends React.Component {
  constructor(props) {
    super(props);
    /* var initialized = false;

    _retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem('stitch');
        if (value !== null)
          initialized = true;
      }
      catch (error) {
        // Error saving data
      }
    }

    if (!initialized)
    {
      Stitch.initializeDefaultAppClient('recipe-z-pnqkt');
      _storeData = async () => {
        try {
          await AsyncStorage.setItem('stitch', 'recipe-z-pnqkt');
        }
        catch (error) {
          // Error saving data
        }
      }
    }
    */


    this.client = Stitch.defaultAppClient;
    this.state = { fullName: ''}
    this.state = { email: ''}
    this.state = { password: ''}
    this.state = { confirmPassword: ''}
    //this.state = { login_status: '' }

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
    this.setState({ confirmPassword: text });
  }

  async create_account()
  {
    var status = "";
    const email = this.state.email;
    const password = this.state.password;
    const password2 = this.state.confirmPassword;

    if (password === undefined || password2 === undefined)
      alert("Cannot leave password blank!");

    else if (password != password2)
      alert("Passwords do not match!");
      // password must be between 6 and 128 characters
      // Name already in use
      // Invalid username/password
      // Register error but no login error
      // set more checks here
    else
    {
      const client = this.client;

      const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('users');

      const app = client

      const emailPasswordClient = app.auth.getProviderClient(UserPasswordAuthProviderClient.factory);

      await emailPasswordClient.registerWithEmail(email, password)
        .then(() => console.log("Successfully sent account confirmation email!"))
        .catch(err => {
                        console.error("Error registering new user:");
                        status = "register_error";
                        alert(err.message.charAt(0).toUpperCase() + err.message.substring(1) + '.');
                      });

      const credential = new UserPasswordCredential(email, password)
      await app.auth.loginWithCredential(credential)
        // Returns a promise that resolves to the authenticated user
        .then(authedUser => console.log("Successfully logged in with id: ${authedUser.id}"))
        .catch(err => {
                        console.error("Login failed with error:", err);
                        if (status != "")
                          status = status + ", login_error";
                        else
                          status = "login_error";
                        alert(err.message.charAt(0).toUpperCase() + err.message.substring(1) + '.');
                      })
      if (status === "")
        status = "success";

    }
    //this.state.login_status = status

    /*
    client.auth.loginWithCredential(new AnonymousCredential()).then(user =>
      db.collection('user_info').updateOne({owner_id: client.auth.user.id}, {$set:{number:42}}, {upsert:true})
    ).then(() =>
      db.collection('user_info').find({owner_id: client.auth.user.id}, { limit: 100}).asArray()
    ).then(docs => {
        console.log("Found docs", docs);
        console.log("[MongoDB Stitch] Connected to Stitch");
    }).catch(err => {
        console.error(err);
    });
    */
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
          value = {this.state.confirmPassword}
          onChangeText = {this.handleConfirmPassword}
          />
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
                              navigation.navigate('Home');
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
