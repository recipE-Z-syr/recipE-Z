import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView, ScrollView, Keyboard, TouchableOpacity, Image } from 'react-native';
import { Divider } from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import defaultStyles from './stylesheet';
import NavigationBar from './NavigationBar';

class ResultsScreen extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={[defaultStyles.container, {backgroundColor:'#FFFFFF'}]}>
        <NavigationBar navigation={this.props.navigation}/>
        <Text style={[defaultStyles.h1, {fontSize: 24, position: 'absolute', top: 80, left: 20}]}>Results</Text>
        <View style={{flex: 1, flexDirection: 'row-reverse', position: 'absolute', top: 80, right: 30}}>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Image
              style={{width: 25, height: 25, marginLeft: 20}}
              source={require('../img/search.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Filter')}>
            <Image
              style={{width: 25, height: 25, marginLeft: 20}}
              source={require('../img/filter.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{backgroundColor: '#ED8484', height: 1, flex: 1, bottom: 225, alignSelf: 'center'}} />
        </View>
      </View>
   ); //end return

 }//end render
}//end class

export default ResultsScreen;

const styles = StyleSheet.create({
});
