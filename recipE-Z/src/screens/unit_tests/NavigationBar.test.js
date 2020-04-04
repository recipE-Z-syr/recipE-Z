//NavigationBar.test.js

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, ShallowWrapper } from "enzyme";

import NavigationBar from '../NavigationBar';

describe('<NavigationBar />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<NavigationBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

const createTestProps = () => ({
  navigation: {
    navigate: jest.fn()
  }
});

test('Navigates to Profile', () => {
  // const spy = jest.spyOn(navigation, 'navigate')
  let wrapper: ShallowWrapper;
  let props: any
  props = createTestProps();
  wrapper = shallow(<NavigationBar {...props} />);  

  const startButton = wrapper.find('TouchableOpacity').at(0)
  startButton.props().onPress()

  expect(props.navigation.navigate).toBeCalledWith('Profile')
})

test('Navigates to Go to RecipeBook', () => {
  // const spy = jest.spyOn(navigation, 'navigate')
  let wrapper: ShallowWrapper;
  let props: any
  props = createTestProps();
  wrapper = shallow(<NavigationBar {...props} />);  

  const startButton = wrapper.find('TouchableOpacity').at(1)
  startButton.props().onPress()

  expect(props.navigation.navigate).toBeCalledWith('RecipeBook')
})

test('Navigates to Go to Upload', () => {
  // const spy = jest.spyOn(navigation, 'navigate')
  let wrapper: ShallowWrapper;
  let props: any
  props = createTestProps();
  wrapper = shallow(<NavigationBar {...props} />);  

  const startButton = wrapper.find('TouchableOpacity').at(2)
  startButton.props().onPress()

  expect(props.navigation.navigate).toBeCalledWith('Upload')
})