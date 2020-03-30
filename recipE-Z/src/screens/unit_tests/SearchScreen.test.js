//SearchScreen.test.js

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, ShallowWrapper } from "enzyme";

import SearchScreen from '../SearchScreen';

describe('<SearchScreen />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SearchScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should change state if query is entered', () => {
  	const instanceOf = renderer.create(<SearchScreen />).getInstance();
  	instanceOf.handleQuery('someQuery');
  	expect(instanceOf.state.query).toEqual('someQuery');
  });
  it('should change state if cuisine is entered', () => {
  	const instanceOf = renderer.create(<SearchScreen />).getInstance();
  	instanceOf.handleCuisine('someCuisine');
  	expect(instanceOf.state.cuisine).toEqual('someCuisine');
  });
  it('should change state if allergies is entered', () => {
  	const instanceOf = renderer.create(<SearchScreen />).getInstance();
  	instanceOf.handleAllergies('someAllergy1');
  	expect(instanceOf.state.allergies).toContain('someAllergy1');
  	instanceOf.handleAllergies('someAllergy2');
  	expect(instanceOf.state.allergies).toContain('someAllergy2');
  });
  it('should change state if exclusions is entered', () => {
  	const instanceOf = renderer.create(<SearchScreen />).getInstance();
  	instanceOf.handleExclusions('someExclusion1');
  	expect(instanceOf.state.exclusions).toContain('someExclusion1');
  	instanceOf.handleExclusions('someExclusion2');
  	expect(instanceOf.state.exclusions).toContain('someExclusion2');
  });
  it('should change state if ingredients is entered', () => {
  	const instanceOf = renderer.create(<SearchScreen />).getInstance();
  	instanceOf.handleIngredients('someIng1');
  	expect(instanceOf.state.ingredients).toContain('someIng1');
  	expect(instanceOf.state.query).toEqual('');
  	instanceOf.handleIngredients('someIng2');
  	expect(instanceOf.state.ingredients).toContain('someIng2');
  	expect(instanceOf.state.query).toEqual('');
  });
  it('should not change state if duplicate ingredient is entered', () => {
  	const instanceOf = renderer.create(<SearchScreen />).getInstance();
  	instanceOf.handleIngredients('someIng1');
  	expect(instanceOf.state.ingredients).toContain('someIng1');
  	expect(instanceOf.state.query).toEqual('');
  	instanceOf.handleIngredients('someIng1');
  	expect(instanceOf.state.ingredients).toContain('someIng1');
  });
  it('should not change state if duplicate ingredient is entered', () => {
  	const instanceOf = renderer.create(<SearchScreen />).getInstance();
  	instanceOf.handleIngredients('abc');
  	expect(instanceOf.state.ingredients).toContain('abc');
  	expect(instanceOf.state.query).toEqual('');
  });
  it('should remove ingredient', () => {
  	const instanceOf = renderer.create(<SearchScreen />).getInstance();
  	instanceOf.handleIngredients('item1');
  	instanceOf.removeItem('item1');
  	expect(instanceOf.state.ingredients).toEqual([]);
  });
  it('should not remove ingredient if not in state', () => {
  	const instanceOf = renderer.create(<SearchScreen />).getInstance();
  	instanceOf.handleIngredients('item1');
  	instanceOf.handleIngredients('item2');
  	instanceOf.removeItem('item3');
  	expect(instanceOf.state.ingredients).toEqual(['item1', 'item2']);
  });
  it('should remove only one ingredient', () => {
  	const instanceOf = renderer.create(<SearchScreen />).getInstance();
  	instanceOf.handleIngredients('item1');
  	instanceOf.handleIngredients('item2');
  	instanceOf.handleIngredients('item3');
  	instanceOf.removeItem('item2');
  	expect(instanceOf.state.ingredients).toEqual(['item1', 'item3']);
  });
  it('should clear ingredients', () => {
  	const instanceOf = renderer.create(<SearchScreen />).getInstance();
  	instanceOf.clear();
  	expect(instanceOf.state.ingredients).toEqual([]);
  });
  it('should suggest ingredients containing letter', () => {
  	const instanceOf = renderer.create(<SearchScreen />).getInstance();
  	expect(instanceOf.suggestIngredient('m')).toEqual(['milk', 'ice cream', 'macaroni']);
  });
  it('should suggest ingredients containing phrase', () => {
  	const instanceOf = renderer.create(<SearchScreen />).getInstance();
  	expect(instanceOf.suggestIngredient('che')).toEqual(['cheese', 'cheddar']);
  });
  it('should suggest no ingredients if empty', () => {
  	const instanceOf = renderer.create(<SearchScreen />).getInstance();
  	expect(instanceOf.suggestIngredient('')).toEqual([]);
  });
  it('should suggest no ingredients if not in list', () => {
  	const instanceOf = renderer.create(<SearchScreen />).getInstance();
  	expect(instanceOf.suggestIngredient('notInList')).toEqual([]);
  });
});

const createTestProps = () => ({
  navigation: {
    navigate: jest.fn()
  }
});

// test('Navigates to Home', () => {
//   // const spy = jest.spyOn(navigation, 'navigate')
//   let wrapper: ShallowWrapper;
//   let props: any
//   props = createTestProps();
//   wrapper = shallow(<SearchScreen {...props} />);  

//   const startButton = wrapper.find('TouchableOpacity').at(0)
//   startButton.props().onPress()

//   expect(props.navigation.navigate).toBeCalledWith('Search')
// })
