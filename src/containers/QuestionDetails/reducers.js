import actionTypes from './actionTypes';

const initState = {
  data: null,
};
export function fetchQuestionDetailsReducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.QUESTION_DETAILS_LOADED: {
      return {
        data: action.questionDetails,
      };
    }
    default:
      return state;
  }
}

export function voteQuestionReducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.VOTE_LOADED: {
      return {
        data: action.data,
      };
    }
    default:
      return state;
  }
}
