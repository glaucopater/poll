import { shallow } from 'enzyme';
import React from 'react';
import QuestionDetails from '../index';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();
const store = mockStore({});

describe('<QuestionDetails/>', () => {
  const props = {
    choices: {},
    voteQuestion: jest.fn(),
  };

  it('renders correctly', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <QuestionDetails {...props} />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
