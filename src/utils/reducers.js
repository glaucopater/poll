import { combineReducers } from 'redux';
import { fetchQuestionsReducer } from '../containers/Questions/reducers';
import {
  fetchQuestionDetailsReducer,
  voteQuestionReducer,
} from '../containers/QuestionDetails/reducers';

const reducers = combineReducers({
  fetchQuestions: fetchQuestionsReducer,
  fetchQuestionDetails: fetchQuestionDetailsReducer,
  voteQuestion: voteQuestionReducer,
});

export default reducers;
