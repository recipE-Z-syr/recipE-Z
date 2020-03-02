import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView, Keyboard, TouchableOpacity, Image, Dimensions } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import defaultStyles from './stylesheet';
import NavigationBar from './NavigationBar';

class PageHeader extends React.Component {
	render () {
		const {title, trianglePosition} = this.props;
		return (
		<View style= {{position: 'absolute', top: 60}} >
		  <Image source={require('../img/header_triangle.png')} style={{width: 15, height: 10, right: trianglePosition}} />
		  <Image source={require('../img/header_rectangle.png')} style={{width: Dimensions.get('window').width, height: 60}} />
		  <Text style={{fontFamily: 'nunito-black', color: '#fff', fontSize: 28, top: -50, left: 15}}>{title}</Text>
		</View>
		);
	}
}

class UploadRecipeScreen extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style= {[defaultStyles.searchContainer]}>
      <NavigationBar navigation={this.props.navigation}/>
      <PageHeader title='Create Recipe' trianglePosition={-272} />
      </View>
   ); //end return
 }//end render
}//end class

export default UploadRecipeScreen;

const styles = StyleSheet.create({
});
