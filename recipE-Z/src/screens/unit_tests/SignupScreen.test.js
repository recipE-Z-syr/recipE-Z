//SignupScreen.test.js

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, ShallowWrapper } from "enzyme";

import SignupScreen from '../SignupScreen';

describe('<SignupScreen />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SignupScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should change state if name is entered', () => {
    const instanceOf = renderer.create(<SignupScreen />).getInstance();
    instanceOf.handleName('James Smith');
    expect(instanceOf.state.fullName).toEqual('James Smith');
  });
  it('should change state if email is entered', () => {
    const instanceOf = renderer.create(<SignupScreen />).getInstance();
    instanceOf.handleEmail('abc@gmail.com');
    expect(instanceOf.state.email).toEqual('abc@gmail.com');
  });
  it('should change state if password is entered', () => {
    const instanceOf = renderer.create(<SignupScreen />).getInstance();
    instanceOf.handlePassword('password123');
    expect(instanceOf.state.password).toEqual('password123');
  });
  it('should change confirmPassword to true if passwords match', () => {
    const instanceOf = renderer.create(<SignupScreen />).getInstance();
    instanceOf.handlePassword('password123');
    instanceOf.handleConfirmPassword('password123');
    expect(instanceOf.state.confirmPassword).toEqual(true);
  });
  it('should change confirmPassword to false if passwords have different cases', () => {
    const instanceOf = renderer.create(<SignupScreen />).getInstance();
    instanceOf.handlePassword('password123');
    instanceOf.handleConfirmPassword('PASSWORD123');
    expect(instanceOf.state.confirmPassword).toEqual(false);
  });
  it('should change confirmPassword to false if passwords have different values', () => {
    const instanceOf = renderer.create(<SignupScreen />).getInstance();
    instanceOf.handlePassword('password123');
    instanceOf.handleConfirmPassword('password456');
    expect(instanceOf.state.confirmPassword).toEqual(false);
  });
  it('should change confirmPassword to false if passwords have different values', () => {
    const instanceOf = renderer.create(<SignupScreen />).getInstance();
    instanceOf.handlePassword('password123');
    instanceOf.handleConfirmPassword('abc');
    expect(instanceOf.state.confirmPassword).toEqual(false);
    instanceOf.handlePassword('abc');
    instanceOf.handleConfirmPassword('password123');
    expect(instanceOf.state.confirmPassword).toEqual(false);
  });
});

const createTestProps = () => ({
  navigation: {
    navigate: jest.fn()
  }
});

test('Already have account navigates to Sign Up', () => {
  // const spy = jest.spyOn(navigation, 'navigate')
  let wrapper: ShallowWrapper;
  let props: any
  props = createTestProps();
  wrapper = shallow(<SignupScreen {...props} />);  

  const startButton = wrapper.find('TouchableOpacity').at(0)
  startButton.props().onPress()

  expect(props.navigation.navigate).toBeCalledWith('Log-In')
})
test('Sign Up navigates to Search Screen', () => {
  // const spy = jest.spyOn(navigation, 'navigate')
  let wrapper: ShallowWrapper;
  let props: any
  props = createTestProps();
  wrapper = shallow(<SignupScreen {...props} />);  

  const startButton = wrapper.find('TouchableOpacity').at(2)
  startButton.props().onPress()

  expect(props.navigation.navigate).toBeCalledWith('Search')
})