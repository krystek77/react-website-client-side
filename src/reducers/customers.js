import ActionTypes from '../constants/actionTypes';
const initialState = { isLoading: true, customers: [], customer: null };

export default function reducer(state = initialState, action) {
  if (state === undefined || state === null) return initialState;
  switch (action.type) {
    case ActionTypes.GET_CUSTOMERS:
      return { ...state, customers: action.payload };
    case ActionTypes.GET_CUSTOMER_BY_ID:
      return { ...state, customer: action.payload };
    case ActionTypes.START_LOADING_CUSTOMERS:
      return { ...state, isLoading: true };
    case ActionTypes.END_LOADING_CUSTOMERS:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
