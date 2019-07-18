import actionTypes from './actionTypes.js';
import axios from 'axios';
import { QUESTIONS_ENDPOINT } from '../../constants';

export function postQuestion({ question, choices }) {
  return dispatch => {
    return axios
      .post(QUESTIONS_ENDPOINT, {
        question,
        choices,
        crossDomain: true,
      })
      .then(resp => {
        dispatch({
          type: actionTypes.QUESTION_POSTED,
          data: resp.data,
        });
      })
      .catch(error => {
        console.error('error:', error);
      });
  };
}
