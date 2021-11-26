import ActionTypes from '../constants/actionTypes';
const initialState = { authData: null };

const reducer = (state = initialState, action) => {
  // console.log(action.payload)
  switch (action.type) {
    case ActionTypes.SIGNIN:
      localStorage.setItem('userProfile', JSON.stringify(action.payload));
      return { ...state, authData: action.payload };
    case ActionTypes.SIGNUP:
      localStorage.setItem('userProfile', JSON.stringify(action.payload));
      return { ...state, authData: action.payload };
    case ActionTypes.LOGOUT:
      localStorage.removeItem('userProfile');
      return { ...state, authData: null };
    default:
      return state;
  }
};

export default reducer;
