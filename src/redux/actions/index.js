import React from 'react';

import * as actionTypes from './types';
// import Axios from 'axios';
// import Toast from '../../components/toastmessage';
// import baseUrl from '../../apis/constant';

export const Signup = (data, navigation, status) => async (dispatch) => {
  console.log('SIGNUPUP reux', data);
  dispatch({
    type: actionTypes.SIGNUPUPSUCCESS,
    payload: data,
    token: data?.token,
    status: data?.status,
  });
  navigation.replace(status ? 'PartnerStack' : 'profilePreivew');
};
export const Login = (data, navigation) => async (dispatch) => {
  console.log('data redux===>|sss|||', data.status);
  dispatch({type: actionTypes.LOGINSUCCESS, payload: data, token: data.token});
  // navigation.replace('drawer');
  navigation.replace(data.status == 'partner' ? 'PartnerStack' : 'drawer');
};
export const profileData = (data, navigation) => async (dispatch) => {
  console.log('data redux===>|sss|||', data);
  dispatch({type: actionTypes.STARTLOADER});
};
export const StoreData = (data, navigation) => async (dispatch) => {
  console.log('StoreData', data);
  dispatch({type: actionTypes.IMAGESANDINTERESTS, payload: data});
};
export const Logout = (navigation) => async (dispatch) => {
  dispatch({type: actionTypes.LOGOUT});
  navigation.navigate('Auth', {
    screen: 'signin',
  });

  // dispatch({type: actionTypes.login, paylaod: data});
};
