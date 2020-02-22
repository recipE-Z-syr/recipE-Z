import 'react-native-gesture-handler';
import * as React from 'react';
import { Platform, SafeAreaView, Button, StyleSheet, Text, View, AppRegistry, Image, TextInput, Alert, ScrollView, Keyboard, TouchableOpacity, Component } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import defaultStyles from './stylesheet';


class SignupScreen extends React.Component {
  constructor(props) {
    super(props);


    this.state = { fullName: ''}
    this.state = { email: ''}
    this.state = { password: ''}
    this.state = { confirmPassword: ''}

    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
  }

  handleName(text) {
    this.setState({ text });
  }

  handleEmail(text) {
    this.setState({ text });
  }

  handlePassword(text) {
    this.setState({ text });
  }

  handleConfirmPassword(text) {
    this.setState({ text });
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
          onPress={() => navigation.navigate('Home')}
          underlayColor='#ed4848'>
          <Text style={defaultStyles.startText}>SIGN UP</Text>
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
