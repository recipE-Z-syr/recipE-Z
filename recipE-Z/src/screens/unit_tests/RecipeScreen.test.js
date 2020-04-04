//RecipeScreen.test.js

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, ShallowWrapper } from "enzyme";

import RecipeScreen from '../RecipeScreen';

describe('<RecipeScreen />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<RecipeScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});