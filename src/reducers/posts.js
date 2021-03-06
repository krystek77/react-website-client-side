import ActionTypes from '../constants/actionTypes';
const initialState = { isLoading: true, posts: [], post: null, numberOfPages: 0, currentPostID: null };
export default function reducer(state = initialState, action) {

  if (state === undefined || state === null) return initialState;
  switch (action.type) {
    case ActionTypes.START_LOADING_POSTS:
      return { ...state, isLoading: true };
    case ActionTypes.GET_POSTS_BY_SEARCH:
      return { ...state, posts: action.payload };
    case ActionTypes.GET_POST_BY_ID:
      return { ...state, post: action.payload };
    case ActionTypes.GET_POSTS:
      return { ...state, posts: action.payload.posts, numberOfPages: action.payload.numberOfPages };
    case ActionTypes.END_LOADING_POSTS:
      return { ...state, isLoading: false };
    case ActionTypes.CREATE_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    case ActionTypes.UPDATE_POST:
      return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };
    case ActionTypes.LIKE_POST:
      return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)), post: action.payload };
    case ActionTypes.DELETE_POST:
      return { ...state, posts: state.posts.filter((post) => post._id !== action.payload), post: null };
    case ActionTypes.SET_CURRENT_POST_ID:
      return { ...state, currentPostID: action.payload };
    default:
      return state;
  }
}
