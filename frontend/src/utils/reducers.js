import { combineReducers } from 'redux';
import {
  fetchQuestionsReducer,
  voteQuestionReducer,
} from '../containers/Questions/reducers';

const reducers = combineReducers({
  fetchQuestions: fetchQuestionsReducer,
  voteQuestion: voteQuestionReducer,
});

export default reducers;
