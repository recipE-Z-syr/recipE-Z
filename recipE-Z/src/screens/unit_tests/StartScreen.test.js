//StartScreen.test.js

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, ShallowWrapper } from "enzyme";

import StartScreen from '../StartScreen';

describe('<StartScreen />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<StartScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

const createTestProps = () => ({
  navigation: {
    navigate: jest.fn()
  }
});

test('Navigates to Sign-Up', () => {
  // const spy = jest.spyOn(navigation, 'navigate')
  let wrapper: ShallowWrapper;
  let props: any
  props = createTestProps();
  wrapper = shallow(<StartScreen {...props} />);  

  const startButton = wrapper.find('TouchableOpacity').at(0)
  startButton.props().onPress()

  expect(props.navigation.navigate).toBeCalledWith('Sign-Up')
})