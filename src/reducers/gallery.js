import ActionTypes from '../constants/actionTypes';
const initialState = { isloading: true, photos: [] };

export default function reducer(state = initialState, action) {
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
    default:
      return state;
  }
}
