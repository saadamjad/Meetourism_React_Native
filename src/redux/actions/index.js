import React from 'react';

import * as actionTypes from './types';
// import Axios from 'axios';
// import Toast from '../../components/toastmessage';
// import baseUrl from '../../apis/constant';

export const Signup = (data, navigation) => async (dispatch) => {
  console.log('data redux===>|sss|||', data);
  // dispatch({type: actionTypes.STARTLOADER});
};
export const profileData = (data, navigation) => async (dispatch) => {
  console.log('data redux===>|sss|||', data);
  dispatch({type: actionTypes.STARTLOADER});
};
export const Logout = (navigation) => async (dispatch) => {
  console.log('props======', navigation);
  dispatch({type: actionTypes.LOGOUT});
  navigation.navigate('AuthStack');

  // dispatch({type: actionTypes.login, paylaod: data});
};
