import actionTypes from './actionTypes.js';
import axios from 'axios';
import { QUESTION_DETAILS_ENDPOINT } from '../../constants';

export function fetchQuestionDetails(questionId) {
  return dispatch => {
    return axios
      .get(`${QUESTION_DETAILS_ENDPOINT}/${questionId}`, { crossDomain: true })
      .then(resp => {
        dispatch({
          type: actionTypes.QUESTION_DETAILS_LOADED,
          questionDetails: resp.data,
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
