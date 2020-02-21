import 'react-native-gesture-handler';
import * as React from 'react';
import { Platform, SafeAreaView, Button, StyleSheet, Text, View, AppRegistry, Image, TextInput, Alert, ScrollView, Keyboard, TouchableOpacity, Component } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


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
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#ffcece' }}>
      <View style={{width: 334, height: 561, backgroundColor: 'white', position: 'absolute'}}/>
      <Text style={{color: '#ed4848', fontSize: 20, fontWeight: 'bold', top: 55}}>
      Create an Account
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Log-In')}>
        <Text style={styles.accountLogin}>Already have an account? Click here to login</Text>
      </TouchableOpacity>
      <Image
        style={{width: 90, height: 87, top:-70}}
        source={require('./logo1.png')}
        />
        <TextInput
        placeholder = "Full Name"
        style={{ width: 280, height: 50, borderColor: 'lightgrey', borderWidth: 1, backgroundColor: 'white', top: -20, opacity: .7, paddingLeft: 15 }}
        onBlur = {Keyboard.dismiss}
        value = {this.state.fullName}
        onChangeText = {this.handleName}
        />
        <TextInput
        placeholder = "Email"
        style={{ width: 280, height: 50, borderColor: 'lightgrey', borderWidth: 1, backgroundColor: 'white', top: -20, opacity: .7, marginTop: 10, paddingLeft: 15 }}
        onBlur = {Keyboard.dismiss}
        value = {this.state.email}
        onChangeText = {this.handleEmail}
        />
        <TextInput
        placeholder = "Password"
        style={{ width: 280, height: 50, borderColor: 'lightgrey', borderWidth: 1, backgroundColor: 'white', top: -20, opacity: .7, marginTop: 10, paddingLeft: 15 }}
        onBlur = {Keyboard.dismiss}
        value = {this.state.password}
        onChangeText = {this.handlePassword}
        />
        <TextInput
        placeholder = "Confirm Password"
        style={{ width: 280, height: 50, borderColor: 'lightgrey', borderWidth: 1, backgroundColor: 'white', top: -20, opacity: .7, marginTop: 10, paddingLeft: 15 }}
        onBlur = {Keyboard.dismiss}
        value = {this.state.confirmPassword}
        onChangeText = {this.handleConfirmPassword}
        />
        <Text style={{color: '#ed4848', fontSize: 10}}>
        By creating an account you agree to our
        </Text>
        <Text style={{color: '#ed4848', fontSize: 10}}>
        Terms of Service and Privacy Policy
        </Text>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('Home')}
          underlayColor='#ed4848'>
          <Text style={styles.startText}>SIGN UP</Text>
        </TouchableOpacity>

      </View>
    );

}
}


export default SignupScreen;

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: '#ed4848',
    marginRight: 40,
    marginLeft: 40,
    marginTop: 30,
    paddingTop: 10,
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
    paddingTop: 10,
    fontWeight: 'bold'
  },
  accountLogin: {
    color: '#ed4848',
    textAlign: 'center',
    fontSize: 11,
    top: 60
  }
})
