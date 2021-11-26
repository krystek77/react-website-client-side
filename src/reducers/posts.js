import ActionTypes from '../constants/actionTypes';
const initialState = { isLoading: true, posts: [] };
export default function reducer(state = initialState, action) {
  // console.log(action.payload)
  if (state === undefined || state === null) return initialState;
  switch (action.type) {
    case ActionTypes.START_LOADING_POSTS:
      return { ...state, isLoading: true };
    case ActionTypes.GET_POSTS:
      return { ...state, posts: action.payload };
    case ActionTypes.END_LOADING_POSTS:
      return { ...state, isLoading: false };
    case ActionTypes.CREATE_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    case ActionTypes.UPDATE_POST:
      return { ...state, posts: state.map((post) => (post._id === action.payload._id ? action.payload : post)) };
    case ActionTypes.LIKE_POST:
      return { ...state, posts: state.map((post) => (post._id === action.payload._id ? action.payload : post)) };
    case ActionTypes.DELETE_POST:
      return { ...state, posts: state.filter((post) => post._id !== action.payload) };
    default:
      return state;
  }
}
