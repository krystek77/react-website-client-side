import ActionTypes from '../constants/actionTypes';

const initialState = [];
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.CREATE_USER_ACCOUNT:
      return [...state, action.payload];
    default:
      return state;
  }
}
