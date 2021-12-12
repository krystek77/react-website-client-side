import ActionTypes from '../constants/actionTypes';
const initialState = { isLoading: true, photos: [] };

export default function reducer(state = initialState, action) {
  console.log("R:photos")
  if (state === undefined || state === null) {
    return initialState;
  }
  switch (action.type) {
    case ActionTypes.GET_PHOTOS:
      return { ...state, photos: action.payload };
    case ActionTypes.ADD_PHOTO:
      return { ...state, photos: [...state.photos, action.payload] };
    case ActionTypes.UPDATE_PHOTO:
      return state;
    case ActionTypes.START_LOADING_PHOTOS:
      return { ...state, isLoading: true };
    case ActionTypes.END_LOADING_PHOTOS:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
