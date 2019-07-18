import { shallow } from 'enzyme';
import React from 'react';
import Choice from '../index';

describe('<Choice/>', () => {
  it('renders correctly', () => {
    const props = {
      url: '',
      choice: '',
      votes: 0,
      voteQuestion: jest.fn(),
    };
    const wrapper = shallow(<Choice {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
