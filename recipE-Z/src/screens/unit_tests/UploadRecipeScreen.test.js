//UploadRecipeScreen.test.js

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, ShallowWrapper } from "enzyme";

import UploadRecipeScreen from '../UploadRecipeScreen';

describe('<UploadRecipeScreen />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<UploadRecipeScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should change state if title is entered', () => {
    const instanceOf = renderer.create(<UploadRecipeScreen />).getInstance();
    instanceOf.handleTitle('Some Title');
    expect(instanceOf.state.recipeTitle).toEqual('Some Title');
  });
  it('should change state if time is entered', () => {
    const instanceOf = renderer.create(<UploadRecipeScreen />).getInstance();
    instanceOf.handleTime('3 min');
    expect(instanceOf.state.time).toEqual('3 min');
  });
  it('should change state if servings is entered', () => {
    const instanceOf = renderer.create(<UploadRecipeScreen />).getInstance();
    instanceOf.handleServings('3');
    expect(instanceOf.state.servings).toEqual('3');
  });
  it('should change state if difficulty is entered', () => {
    const instanceOf = renderer.create(<UploadRecipeScreen />).getInstance();
    instanceOf.handleDifficulty('medium');
    expect(instanceOf.state.difficulty).toEqual('medium');
  });
  it('should change state if keywords are entered', () => {
    const instanceOf = renderer.create(<UploadRecipeScreen />).getInstance();
    instanceOf.handleKeywords('tex mex, fresh, easy, tacos');
    expect(instanceOf.state.keywords).toEqual(['tex mex', 'fresh', 'easy', 'tacos']);
  });
  it('should change state if additional notes are entered', () => {
    const instanceOf = renderer.create(<UploadRecipeScreen />).getInstance();
    instanceOf.handleAdditionalNotes('medium');
    expect(instanceOf.state.additionalNotes).toEqual('medium');
  });
});

const createTestProps = () => ({
  navigation: {
    navigate: jest.fn()
  }
});

test('Upload Recipe navigates to Search Screen', () => {
  // const spy = jest.spyOn(navigation, 'navigate')
  let wrapper: ShallowWrapper;
  let props: any
  props = createTestProps();
  wrapper = shallow(<UploadRecipeScreen {...props} />);  

  const addIngButton = wrapper.find('TouchableOpacity').at(3)
  addIngButton.props().onPress()

  expect(props.navigation.navigate).toBeCalledWith('Search')
})

test('Add another ingredient input', () => {
  // const spy = jest.spyOn(navigation, 'navigate')
  let wrapper: ShallowWrapper;
  let props: any
  props = createTestProps();
  wrapper = shallow(<UploadRecipeScreen {...props} />);  

  const addStepButton = wrapper.find('TouchableOpacity').at(0)
  addStepButton.props().onPress()

  expect(wrapper.state().addIng).toEqual(1)
})

test('Delete step input', () => {
  // const spy = jest.spyOn(navigation, 'navigate')
  let wrapper: ShallowWrapper;
  let props: any
  props = createTestProps();
  wrapper = shallow(<UploadRecipeScreen {...props} />);  

  const addIngButton = wrapper.find('TouchableOpacity').at(0)
  addIngButton.props().onPress()
  const deleteButton = wrapper.find('TouchableOpacity').at(0)
  deleteButton.props().onPress()

  expect(wrapper.state().addIng).toEqual(1)
  expect(wrapper.state().addIngKeys).toEqual([])
})

test('Add another step input', () => {
  // const spy = jest.spyOn(navigation, 'navigate')
  let wrapper: ShallowWrapper;
  let props: any
  props = createTestProps();
  wrapper = shallow(<UploadRecipeScreen {...props} />);  

  const addStepButton = wrapper.find('TouchableOpacity').at(1)
  addStepButton.props().onPress()
  const deleteButton = wrapper.find('TouchableOpacity').at(1)
  deleteButton.props().onPress()

  expect(wrapper.state().addStep).toEqual(1)
  expect(wrapper.state().addStepKeys).toEqual([])
})