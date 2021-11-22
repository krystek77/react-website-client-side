import ActionTypes from '../constants/actionTypes';
export default function reducer(state = [], action) {
  console.log(action.payload)
  switch (action.type) {
    case ActionTypes.GET_POSTS:
      return action.payload;
    case ActionTypes.CREATE_POST:
      return [...state, action.payload];
    case ActionTypes.UPDATE_POST: 
      return state.map((post) => (post._id === action.payload._id ? action.payload : post));
    case ActionTypes.LIKE_POST:
      return state.map((post) => (post._id === action.payload._id ? action.payload : post));
    case ActionTypes.DELETE_POST:
      return state.filter((post) => post._id !== action.payload);
    default:
      return state;
  }
}
