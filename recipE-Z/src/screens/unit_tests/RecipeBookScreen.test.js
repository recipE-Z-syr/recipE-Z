//RecipeBookScreen.test.js

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, ShallowWrapper } from "enzyme";

import RecipeBookScreen from '../RecipeBookScreen';

describe('<RecipeBookScreen />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<RecipeBookScreen />).toJSON();
    expect(tree).toMatchSnapshot();
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
  wrapper = shallow(<RecipeBookScreen {...props} />);  

  const startButton = wrapper.find('TouchableOpacity').at(0)
  startButton.props().onPress()

  expect(props.navigation.navigate).toBeCalledWith('Recipe')
})