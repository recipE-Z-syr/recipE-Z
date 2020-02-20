import 'react-native-gesture-handler';
import * as React from 'react';
import { Platform, SafeAreaView, Button, StyleSheet, Text, View, AppRegistry, Image, TextInput, Alert, ScrollView, Keyboard, TouchableOpacity, Component } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


class SignupScreen extends React.Component {
  render(){
    const { navigation } = this.props;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#ffcece' }}>
      <View style={{width: 334, height: 561, backgroundColor: 'white', position: 'absolute'}}/>
      <Text style={{color: '#ed4848', fontSize: 20, fontWeight: 'bold', top: 25}}>
      Create an Account
      </Text>
      <Text style={{color: '#ed4848', fontSize: 10, top: 25}}>
      Already have an account? Click here to login
      </Text>
      <Image
        style={{width: 80, height: 80, top:-90}}
        source={require('./logo1.png')}
        />
        <TextInput
        placeholder = "    Full Name"
        style={{ width: 280, height: 50, borderColor: 'lightgrey', borderWidth: 1, backgroundColor: 'white', top: -40, opacity: .7 }}
        //onChangeText={text => onChangeText(text)}
        //value={value}
        />
        <TextInput
        placeholder = "    Email"
        style={{ width: 280, height: 50, borderColor: 'lightgrey', borderWidth: 1, backgroundColor: 'white', top: -40, opacity: .7, marginTop: 10 }}
        //onChangeText={text => onChangeText(text)}
        //value={value}
        />
        <TextInput
        placeholder = "    Password"
        style={{ width: 280, height: 50, borderColor: 'lightgrey', borderWidth: 1, backgroundColor: 'white', top: -40, opacity: .7, marginTop: 10 }}
        //onChangeText={text => onChangeText(text)}
        //value={value}
        />
        <TextInput
        placeholder = "    Confirm Password"
        style={{ width: 280, height: 50, borderColor: 'lightgrey', borderWidth: 1, backgroundColor: 'white', top: -40, opacity: .7, marginTop: 10 }}
        //onChangeText={text => onChangeText(text)}
        //value={value}
        />
        <Text style={{color: '#ed4848', fontSize: 10, top: -20}}>
        By creating an account you agree to our
        </Text>
        <Text style={{color: '#ed4848', fontSize: 10, top: -20}}>
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
    color: 'white',
    width: 100,
    height: 50,
    bottom: 0,
    position: 'absolute'
  },
  loginButton: {
    backgroundColor: '#ed4848',
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
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
  }
})
