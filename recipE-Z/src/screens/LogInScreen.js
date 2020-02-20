import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView, ScrollView, Keyboard, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

class LogInScreen extends React.Component {

  render() {
    const [value, onChangeText] = React.useState('   Email');
    const {navigation} = this.props;
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#ffcece' }}>
        <View style={{width: 334, height: 561, backgroundColor: 'white', position: 'absolute'}}/>

          <Text style={{color: '#ed4848', fontSize: 20, fontWeight: 'bold', top: -15}}>
          Welcome Back
          </Text>

          <Text style={{color: '#ed4848', fontSize: 10, top: -15}}>
          Don't have an account? Click here to sign up
          </Text>

          <Image
          style={{width: 80, height: 80, top:-150}}
          source={require('../img/logo1.png')}
          />

          <TextInput
          style={{ width: 280, height: 50, borderColor: 'lightgrey', borderWidth: 1, backgroundColor: 'white', top: -85, opacity: .5 }}
          onChangeText={text => onChangeText(text)}
          value={value}
          />

          <Button Style={styles.loginButton} title="Log-In" color="#ed4848" onPress={() => navigation.navigate('Home')} />
          <Button Style={styles.loginButton} title="sign up" color="#ed4848" onPress={() => navigation.navigate('Sign-Up')}/>
        </View>
   ); //end return
 }//end render
}//end class

export default LogInScreen;

const styles = StyleSheet.create({
});
