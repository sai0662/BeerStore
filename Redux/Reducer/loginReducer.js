import {actionTypes} from '../Action/loginAction';
const initialState = {
  isLoading: true,
  userName: null,
  userToken: null,
  loader: false,
  active: true,
  showSplash: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        userName: action.id,
        userToken: action.token,
        showSplash: false,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        userName: null,
        userToken: null,
        showSplash: false,
      };
    case actionTypes.SET_LOADER:
      return {
        ...state,
        loader: action.value,
      };
    case actionTypes.RETRIEVE_TOKEN:
      return {
        ...state,
        userToken: action.token,
        showSplash: false,
      };
    case actionTypes.ACTIVE:
      return {
        ...state,
        active: action.active,
        showSplash: false,
      };
    default:
      return state;
  }
};

export default reducer;
