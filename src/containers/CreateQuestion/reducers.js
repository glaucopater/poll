import actionTypes from './actionTypes';

const initState = {
  data: null,
};
export function postQuestionsReducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.QUESTION_POSTED: {
      return {
        data: action.data,
      };
    }
    default:
      return state;
  }
}
