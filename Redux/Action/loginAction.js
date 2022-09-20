import * as storage from '../../Service/cookie';
export const actionTypes = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  RETRIEVE_TOKEN: 'RETRIEVE_TOKEN',
  SET_LOADER: 'SET_LOADER',
  ACTIVE: 'ACTIVE',
};

export const setLogin = () => {
  return async dispatch => {
    await storage.setItem('userToken', 'xuyasxguyashgc');
    dispatch({
      type: actionTypes.LOGIN,
      token: 'xuyasxguyashgc',
    });
  };
};

export const logout = () => {
  return async dispatch => {
    await storage.removeData('userToken');
    dispatch({type: actionTypes.LOGOUT});
  };
};

export const setToken = token => {
  return {
    type: actionTypes.RETRIEVE_TOKEN,
    token: token,
  };
};

export const setActive = isActive => {
  return {
    type: actionTypes.ACTIVE,
    active: isActive,
  };
};
