import { shallow } from 'enzyme';
import React from 'react';
import Choices from '../index';

describe('<Choices/>', () => {
  const props = {
    choices: {},
    voteQuestion: jest.fn(),
  };
  it('renders correctly', () => {
    const wrapper = shallow(<Choices {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
