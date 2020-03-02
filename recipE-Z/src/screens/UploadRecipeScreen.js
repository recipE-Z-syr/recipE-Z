import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView, Keyboard, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
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
	constructor(props) {
	super(props)

	this.state = {
	  recipeTitle: '',
	  ingredientsMeas: [],
	  steps: [],
	  time: '',
	  servings: '',
	  difficulty: '',
	  keywords: [],
	  additionalNotes: '',
	  picture: '',
	  addIng: 0,
	  addIngKeys:[],
	  ingredients: {},
	  addStep: 0,
	  addStepKeys: [],
	  steps: {}
	};

	this.addIngredientInput = this.addIngredientInput.bind(this);
	this.addStepInput = this.addStepInput.bind(this);
	}

	addIngredientInput() {
		let inputs = []
		this.state.addIngKeys.forEach( i => {
			inputs.push(
			<View key={'ing'+i} style={{flexDirection: 'row', alignItems: 'center'}} >
			<TextInput
			style={{ width: '92%', height: 40, borderColor: '#ccc', borderWidth: 1, paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5, marginTop: 8 }}
			onChangeText={text => {
			 let o = {}; o[i] = text;
			 this.setState(
			  (prevState) => ({
			    ingredients: Object.assign({}, prevState.ingredients, o)
			  }));
			}}
			/>
			<TouchableOpacity
			onPress={e => {
				var array = this.state.addIngKeys;
			    var index = array.indexOf(i);
			    if (index !== -1) array.splice(index, 1);
				this.setState({addIngKeys: array});
				let o = {}; o[i] = undefined;
				 this.setState(
				  (prevState) => ({
				    ingredients: Object.assign({}, prevState.ingredients, o)
				  }));
				}
			}>
			<Text style={{ marginLeft: 10, fontSize: 30, fontFamily: 'nunito-extrabold', color: '#ed4848', zIndex: 2}}>x</Text>
			</TouchableOpacity>
			</View>
			);
		});
		return inputs;
	}

	addStepInput() {
		let inputs = []
		this.state.addStepKeys.forEach( i => {
			inputs.push(
			<View key={'ing'+i} style={{flexDirection: 'row', alignItems: 'center'}} >
			<TextInput
			style={{ width: '92%', height: 40, borderColor: '#ccc', borderWidth: 1, paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5, marginTop: 8 }}
			onChangeText={text => {
			 let o = {}; o[i] = undefined;
			 this.setState(
			  (prevState) => ({
			    steps: Object.assign({}, prevState.steps, o)
			  }));
			}}
			/>
			<TouchableOpacity
			onPress={e => {
				var array = this.state.addStepKeys;
			    var index = array.indexOf(i);
			    if (index !== -1) array.splice(index, 1);
				this.setState({addStepKeys: array})
				}
			}>
			<Text style={{ marginLeft: 10, fontSize: 30, fontFamily: 'nunito-extrabold', color: '#ed4848', zIndex: 2}}>x</Text>
			</TouchableOpacity>
			</View>
			);
		});
		return inputs;
	}

	render() {
	const {navigation} = this.props;
	return (
	  <View style= {[defaultStyles.searchContainer]}>
	  <NavigationBar navigation={this.props.navigation}/>
	  <PageHeader title='Create Recipe' trianglePosition={-272} />
	    <ScrollView style= {{width: '100%', top: 150}} showsVerticalScrollIndicator={false}>
	      <View style={{marginBottom: 20}}>
		      <Text style={{fontFamily:'nunito-semibold', fontSize:15, color:'#ed4848', marginBottom: 8}}>Recipe Name</Text>
		      <TextInput
		      style={{ height: 40, borderColor: '#ccc', borderWidth: 1, paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5 }}
		      onChangeText={text => this.setState({recipeTitle: text})}
		      placeholder='Required'
		      />
	      </View>
	      <View style={{marginBottom: 20}}>
		      <Text style={{fontFamily:'nunito-semibold', fontSize:15, color:'#ed4848', marginBottom: 8}}>Ingredients with Measurements</Text>
		      <TextInput
		      style={{ height: 40, borderColor: '#ccc', borderWidth: 1, paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5 }}
		      placeholder='Required'
		      />
		      {this.addIngredientInput()}
		      <TouchableOpacity style={{flexDirection:'row', alignItems:'center', marginTop: 8}}
		      	onPress = {e => this.setState({addIngKeys: [...this.state.addIngKeys, this.state.addIng], addIng: this.state.addIng +1})}
		      >
		      <Image 
              style={{height: 15, width:15, marginRight: 8}}
              source={require('../img/plus.png')}
              />
		      <Text style={{fontFamily:'nunito-semibold', fontSize:15, color:'#ed4848'}}>Click to add another ingredient</Text>
              </TouchableOpacity>
	      </View>
	      <View style={{marginBottom: 20}}>
		      <Text style={{fontFamily:'nunito-semibold', fontSize:15, color:'#ed4848', marginBottom: 8}}>Step-by-step Instructions</Text>
		      <TextInput
		      style={{ height: 40, borderColor: '#ccc', borderWidth: 1, paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5 }}
		      placeholder='Required'
		      />
		      {this.addStepInput()}
		      <TouchableOpacity style={{flexDirection:'row', alignItems:'center', marginTop: 8}}
		      	onPress = {e => this.setState({addStepKeys: [...this.state.addStepKeys, this.state.addStep], addStep: this.state.addStep +1})}
		      >
		      <Image 
              style={{height: 15, width:15, marginRight: 8}}
              source={require('../img/plus.png')}
              />
		      <Text style={{fontFamily:'nunito-semibold', fontSize:15, color:'#ed4848'}}>Click to add another step</Text>
              </TouchableOpacity>
	      </View>
	      <View style={{marginBottom: 20}}>
		      <Text style={{fontFamily:'nunito-semibold', fontSize:15, color:'#ed4848', marginBottom: 8}}>Total Time</Text>
		      <TextInput
		      style={{ height: 40, borderColor: '#ccc', borderWidth: 1, paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5 }}
		      onChangeText={text => this.setState({time: text})}
		      placeholder='Optional'
		      />
	      </View>
	      <View style={{marginBottom: 20}}>
		      <Text style={{fontFamily:'nunito-semibold', fontSize:15, color:'#ed4848', marginBottom: 8}}>Servings</Text>
		      <TextInput
		      style={{ height: 40, borderColor: '#ccc', borderWidth: 1, paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5 }}
		      onChangeText={text => this.setState({servings: text})}
		      placeholder='Optional'
		      />
	      </View>
	      <View style={{marginBottom: 20}}>
		      <Text style={{fontFamily:'nunito-semibold', fontSize:15, color:'#ed4848', marginBottom: 8}}>Difficulty</Text>
		      <TextInput
		      style={{ height: 40, borderColor: '#ccc', borderWidth: 1, paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5 }}
		      onChangeText={text => this.setState({difficulty: text})}
		      placeholder='Optional'
		      />
	      </View>
	      <View style={{marginBottom: 20}}>
		      <Text style={{fontFamily:'nunito-semibold', fontSize:15, color:'#ed4848', marginBottom: 8}}>Keywords (separate by commas)</Text>
		      <TextInput
		      style={{ height: 40, borderColor: '#ccc', borderWidth: 1, paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5 }}
		      onChangeText={text => this.setState({keywords: text.split(',').forEach(w => w.trim())})}
		      placeholder='Optional'
		      />
	      </View>
	      <View>
		      <Text style={{fontFamily:'nunito-semibold', fontSize:15, color:'#ed4848', marginBottom: 8}}>Additonal Notes</Text>
		      <TextInput
		      multiline
		      style={{ height: 40, borderColor: '#ccc', borderWidth: 1, paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5, height: 100 }}
		      onChangeText={text => this.setState({additionalNotes: text})}
		      placeholder='Optional'
		      />
	      </View>
	      <Text style={{fontFamily:'nunito-semibold', fontSize:15, color:'#ed4848', marginTop: 20}}>Upload a Picture of Your Dish (Optional)</Text>
	      <TouchableOpacity style={{marginTop: 8, height: 60, width: 60}} >
	      <Image style={{height: 60, width: 60}} source={require('../img/uploadPicture.png')}/>
	      </TouchableOpacity>
	      <TouchableOpacity
	        style={[defaultStyles.redButton, {alignSelf: 'center', marginTop: 30, marginBottom: 200}]}
	        onPress={() => navigation.navigate('Search')}
	        underlayColor='#ed4848'>
	        <Text style={defaultStyles.redButtonText}>SAVE</Text>
	      </TouchableOpacity>
	  	</ScrollView>
	  </View>
	); //end return
 }//end render
}//end class

export default UploadRecipeScreen;
