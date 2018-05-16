import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from '../src/app';
import Header from '../src/app/header';

let wrapper;

describe('App Component - shallow', () => {
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  test('App component should render as expected - snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  test('should render Header component', () => {
    expect(wrapper.containsMatchingElement(<Header />)).toEqual(true);
  });
});
