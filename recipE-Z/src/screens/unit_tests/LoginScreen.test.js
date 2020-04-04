//LoginScreen.test.js

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, ShallowWrapper } from "enzyme";

import LoginScreen from '../LoginScreen';

describe('<LoginScreen />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<LoginScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should change state if email is entered', () => {
  	const instanceOf = renderer.create(<LoginScreen />).getInstance();
  	instanceOf.handleEmail('abc@gmail.com');
  	expect(instanceOf.state.email).toEqual('abc@gmail.com');
  });
  it('should change state if password is entered', () => {
  	const instanceOf = renderer.create(<LoginScreen />).getInstance();
  	instanceOf.handleEmail('password123');
  	expect(instanceOf.state.email).toEqual('password123');
  });
});

const createTestProps = () => ({
  navigation: {
    navigate: jest.fn()
  }
});

test('No account navigates to Sign Up', () => {
  // const spy = jest.spyOn(navigation, 'navigate')
  let wrapper: ShallowWrapper;
  let props: any
  props = createTestProps();
  wrapper = shallow(<LoginScreen {...props} />);  

  const startButton = wrapper.find('TouchableOpacity').at(0)
  startButton.props().onPress()

  expect(props.navigation.navigate).toBeCalledWith('Sign-Up')
})

test('Login navigates to Search Screen', () => {
  // const spy = jest.spyOn(navigation, 'navigate')
  let wrapper: ShallowWrapper;
  let props: any
  props = createTestProps();
  wrapper = shallow(<LoginScreen {...props} />);  

  const startButton = wrapper.find('TouchableOpacity').at(2)
  startButton.props().onPress()

  expect(props.navigation.navigate).toBeCalledWith('Search')
})