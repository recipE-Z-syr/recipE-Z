import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView, ScrollView, Keyboard, TouchableOpacity, Image, Dimensions } from 'react-native';
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
		  <Text style={{fontFamily: 'nunito-black', color: '#fff', fontSize: 28, top: -50, left: 25}}>{title}</Text>
		</View>
		);
	}
}


class ProfileScreen extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={[defaultStyles.container, {backgroundColor:'white'}]}>
      <NavigationBar navigation={this.props.navigation}/>
      <PageHeader title='Settings' trianglePosition={-364}/>
			<View style={{alignItems: 'flex-start', justifyContent: 'flex-start'}}>
				<Image source={require('../img/profilePicture.png')} style={{alignSelf: 'center', marginBottom: 55, marginTop: 35}}/>
				<View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 50, marginLeft: -25}}>
					<Image source={require('../img/Name.png')} style={{height: 20, width: 20, marginRight: 35}}/>
					<Text style={[defaultStyles.h1, {fontSize: 18}]}>John Doe</Text>
				</View>
				<View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 50, marginLeft: -25}}>
					<Image source={require('../img/Location.png')} style={{height: 20, width: 20, marginRight: 35}}/>
					<Text style={[defaultStyles.h1, {fontSize: 18}]}>San Francisco, CA</Text>
				</View>
				<View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 50, marginLeft: -25}}>
					<Image source={require('../img/email.png')} style={{height: 20, width: 20, marginRight: 35}}/>
					<Text style={[defaultStyles.h1, {fontSize: 18}]}>john.doe@mail.com</Text>
				</View>
				<View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 50, marginLeft: -25}}>
					<Image source={require('../img/password.png')} style={{height: 20, width: 20, marginRight: 35, marginBottom: 10}}/>
					<Text style={[defaultStyles.h1, {fontSize: 18}]}>●●●●●●●</Text>
				</View>
			<TouchableOpacity
        style={[defaultStyles.settingsButton]}
        onPress={() => navigation.navigate('Search')}
        underlayColor='#ed4848'>
        <Text style={defaultStyles.redButtonText}>SAVE</Text>
      </TouchableOpacity>
			</View>
			</View>
    ); //end return

 }//end render
}//end class

export default ProfileScreen;

const styles = StyleSheet.create({
});
