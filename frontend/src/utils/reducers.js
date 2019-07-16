import { combineReducers } from 'redux';
import { fetchQuestionsReducer } from '../containers/Questions/reducers';

const reducers = combineReducers({
  fetchQuestions: fetchQuestionsReducer,
});

export default reducers;
