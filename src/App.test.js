import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();
const store = mockStore({ questions: [] });

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    questions: [],
    voteQuestion: jest.fn(),
    fetchQuestions: jest.fn(),
  };
  ReactDOM.render(
    <Provider store={store}>
      <App {...props} />
    </Provider>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
