import actionTypes from './actionTypes';

const initState = {
  data: null,
};
export function fetchQuestionsReducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.QUESTIONS_LOADED: {
      return {
        data: action.questions,
      };
    }
    default:
      return state;
  }
}
