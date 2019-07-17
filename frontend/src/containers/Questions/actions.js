import actionTypes from './actionTypes.js';
import axios from 'axios';
import { QUESTIONS_ENDPOINT } from '../../constants';

export function fetchQuestions() {
  return dispatch => {
    return axios
      .get(QUESTIONS_ENDPOINT, { crossDomain: true })
      .then(resp => {
        dispatch({
          type: actionTypes.QUESTIONS_LOADED,
          questions: resp.data,
        });
      })
      .catch(error => {
        console.error('error:', error);
      });
  };
}

export function voteQuestion(choice) {
  return dispatch => {
    return axios
      .post(choice.url, { crossDomain: true })
      .then(resp => {
        dispatch({
          type: actionTypes.VOTE_LOADED,
          data: resp.data,
        });
      })
      .catch(error => {
        console.error('error:', error);
      });
  };
}
