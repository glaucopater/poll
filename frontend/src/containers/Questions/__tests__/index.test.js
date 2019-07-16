import { shallow } from 'enzyme';
import React from 'react';
import Questions from '../index';

describe('<Questions/>', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Questions />);
    expect(wrapper).toMatchSnapshot();
  });
});
