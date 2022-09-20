// import AsyncStorage from '@react-native-async-storage/async-storage';
// import * as storage from '../cookie';
// import {actionTypes} from './types';

// export const Init = () => {
//   return async dispatch => {
//     let token = await AsyncStorage.getItem('token');
//     if (token !== null) {
//       console.log('token fetched');
//     }
//     dispatch({
//       type: actionTypes.LOGIN,
//     });
//   };
// };
// export const Login = (email, password) => {
//   return async dispatch => {
//     await AsyncStorage.setItem('token', 'xuyasxguyashgc');
//     dispatch({
//       type: actionTypes.LOGIN,
//       token: 'xuyasxguyashgc',
//     });
//     console.log('token');
//   };
// };

// export const Logout = () => {
//   return async dispatch => {
//     await AsyncStorage.clear();
//     dispatch({type: actionTypes.LOGOUT});
//   };
// };

// export const Signup = (email, password) => {
//   const token = email + password;
//   return {
//     type: 'SIGNUP',
//     payload: token,
//   };
// };
