import ActionTypes from '../constants/actionTypes';
const initialState = { isLoading: true, photos: [] };

export default function reducer(state = initialState, action) {
  // console.log('R:photos', state);
  if (state === undefined || state === null) {
    return initialState;
  }
  switch (action.type) {
    case ActionTypes.GET_PHOTOS:
      return { ...state, photos: action.payload };
    case ActionTypes.ADD_PHOTO: {
      const cloned = [...state.photos];
      cloned.splice(-1);
      return { ...state, photos: [action.payload, ...cloned] };
    }
    case ActionTypes.UPDATE_PHOTO:
      return { ...state, photos: state.photos.map((photo) => (photo._id === action.payload._id ? action.payload : photo)) };
    case ActionTypes.START_LOADING_PHOTOS:
      return { ...state, isLoading: true };
    case ActionTypes.END_LOADING_PHOTOS:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
