//ProfileScreen.test.js

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, ShallowWrapper } from "enzyme";

import ProfileScreen from '../ProfileScreen';

describe('<ProfileScreen />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ProfileScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

const createTestProps = () => ({
  navigation: {
    navigate: jest.fn()
  }
});

test('Navigates to Home', () => {
  // const spy = jest.spyOn(navigation, 'navigate')
  let wrapper: ShallowWrapper;
  let props: any
  props = createTestProps();
  wrapper = shallow(<ProfileScreen {...props} />);  

  const startButton = wrapper.find('TouchableOpacity').at(0)
  startButton.props().onPress()

  expect(props.navigation.navigate).toBeCalledWith('Search')
})
