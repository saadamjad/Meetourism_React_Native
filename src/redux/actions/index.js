import React from 'react';

import * as actionTypes from './types';
import Axios from 'axios';
import Toast from '../../components/toastmessage';
import baseUrl from '../../apis/constant';
import {Get, Post, Put} from '../../apicalls/index';

class Actions {
  static CheckUser = (data, navigation, values) => {
    console.log('data', data);

    return async (dispatch) => {
      return await Post('auth/check-exists', data)
        .then((res) => {
          if (res.status_type === 'success') {
            if (res.data.exists) {
              console.log('welcome');
              var str = values.name;
              str = str.replace(/ +/g, '');
              Toast('Success', ' Successfully Created', 'success');

              let value = {
                ...data,
                userName: str,
                password: values.password,
                confirmPassword: values.confirmPassword,
              };

              return value;
            } else {
              Toast('Error', 'Already Exist', 'error');

              return false;
            }
          } else {
            console.log('not axist', res.message);
            return false;
          }
        })
        .catch((err) => {
          let errResponse = err?.response?.data?.errors;
          console.log('err in catch check CheckUser   ', errResponse);

          if (errResponse?.email) {
            let email = errResponse?.email[0];
            Toast('Error', email, 'error');
          } else if (errResponse?.username) {
            let username = errResponse?.username[0];
            Toast('Error', username, 'error');
          } else if (errResponse?.phone) {
            let phone = errResponse?.phone[0];
            Toast('Error', phone, 'error');
          } else {
            console.log('esle');
            // Toast('Error', errResponse, 'error');
            let message = Object.values(errResponse);
            console.log('message', message[0]);
            Toast('Error', message[0], 'error');
          }
          return false;
        });
    };
  };
  static Signup = (data, navigation, status) => {
    console.log('data', data, 'status', status);

    return async (dispatch) => {
      return await Post('auth/register', data)
        .then((res) => {
          if (res.status_type === 'success') {
            console.log('res', res.data);
            dispatch({
              type: actionTypes.SIGNUPUPSUCCESS,
              payload: res.data,
              token: res.data?.token,
              status: res.data?.status,
            });
            navigation.replace(status ? 'PartnerStack' : 'profilePreivew');
            return true;
          } else {
            console.log('ELSE in signup', res.message);
            Toast('Error', 'something went wrong', 'error');
            return true;
          }
        })
        .catch((err) => {
          let errResponse = err?.response?.data?.errors;
          let type = 'Login';
          dispatch(this.ErrorsHandlingFucntion(errResponse, type));
        });
    };
  };
  static Login = (data, navigation, status) => {
    console.log('data', data, 'status', status);

    return async (dispatch) => {
      return await Post('auth/login', data)
        .then((res) => {
          if (res.status_type === 'success') {
            console.log('res', res.data);
            let response = res?.data;
            dispatch({
              type: actionTypes.LOGINSUCCESS,
              payload: response,
              token: response?.token,
              status: response?.status,
            });
            navigation.replace(
              response?.status == 'partner' ? 'PartnerStack' : 'drawer',
            );

            return;
          } else {
            console.log('ELSE in login', res.message);
            Toast('Error', 'You Entered Wrong Email or Password', 'error');
            return;
          }
        })
        .catch((err) => {
          let errResponse = err?.response?.data?.errors;
          let type = 'signup';
          dispatch(this.ErrorsHandlingFucntion(errResponse, type));
        });
    };
  };
  static ErrorsHandlingFucntion = (errResponse, type) => {
    console.log(`err in catch  ${type}`, errResponse);
    return async (dispatch) => {
      dispatch({type: actionTypes.STOPLOADER});

      if (errResponse?.email) {
        let email = errResponse?.email[0];
        return Toast('Error', email, 'error');
      } else if (errResponse?.username) {
        let username = errResponse?.username[0];
        return Toast('Error', username, 'error');
      } else if (errResponse?.phone) {
        let phone = errResponse?.phone[0];
        return Toast('Error', phone, 'error');
      } else {
        console.log('esle');
        let message = Object.values(errResponse);
        return Toast('Error', message[0], 'error');
      }
    };
  };
  static StoreData = (data, navigation, values) => {
    console.log('StoreData', data);

    return async (dispatch) => {
      dispatch({type: actionTypes.IMAGESANDINTERESTS, payload: data});
    };
  };
  static profileData = (data, navigation, values) => {
    console.log('StoreData', data);

    return async (dispatch) => {
      console.log('data redux===>|sss|||', data);
      dispatch({type: actionTypes.STARTLOADER});
    };
  };
  static GetMatchesData = (data, token, values) => {
    // console.log('GetMatchesData', data);

    return async (dispatch) => {
      dispatch({type: actionTypes.STARTLOADER});
      return Get('offers', token)
        .then((res) => {
          if (res.status_type === 'success') {
            let response = res?.data;
            console.log('resss========', response);

            dispatch({type: actionTypes.GETMATCHESDATA, payload: response});
          } else {
            console.log('ELSE in login', res);
            dispatch({type: actionTypes.GETMATCHESDATA, payload: []});

            dispatch({type: actionTypes.STOPLOADER});
          }
        })
        .catch((err) => {
          dispatch({type: actionTypes.STOPLOADER});

          let errResponse = err?.response?.data;
          let type = 'GetMatchesData';
          dispatch(this.ErrorsHandlingFucntion(errResponse, type));
        });
    };
  };
  static Logout = (navigation, values) => {
    console.log('Logout');

    return async (dispatch) => {
      dispatch({type: actionTypes.LOGOUT});
      navigation.navigate('Auth', {
        screen: 'signin',
      });
    };
  };

  //PARTNER ACTIONS

  // static AddOffers = (data, navigation) => {
  //   return async (dispatch) => {
  //     dispatch({type: actionTypes.ADDOFFER});
  //     console.log('given data', data);
  //     Post('offers', data)
  //       .then((res) => {
  //         console.log('resss', res);
  //         // if (res.status_type === 'success') {
  //         //   console.log('res offers', res.data);
  //         //   let response = res?.data;
  //         // } else {
  //         //   console.log('ELSE in login', res);
  //         //   Toast('Error', 'You Entered Wrong Email or Password', 'error');
  //         // }
  //       })
  //       .catch((err) => {
  //         // console.log('error');
  //         let errResponse = err?.response?.data;
  //         let type = 'Addoffer';
  //         console.log('Error in catch', errResponse);
  //         // dispatch(this.ErrorsHandlingFucntion(errResponse, type));
  //       });
  //   };
  // };
  static GetAllOffers = (data, token, navigation) => {
    return async (dispatch) => {
      dispatch({type: actionTypes.STARTLOADER});
      return Get('offers', token)
        .then((res) => {
          if (res.status_type === 'success') {
            let response = res?.data;
            console.log('resss========', response);

            dispatch({type: actionTypes.GETALLOFFERS, payload: response});
            return response;
          } else {
            console.log('ELSE in login', res);
            dispatch({type: actionTypes.GETALLOFFERS, payload: []});

            dispatch({type: actionTypes.STOPLOADER});

            // Toast('Error', 'You Entered Wrong Email or Password', 'error');
          }
        })
        .catch((err) => {
          dispatch({type: actionTypes.STOPLOADER});

          let errResponse = err?.response?.data;
          let type = 'GetAllOffers';
          dispatch(this.ErrorsHandlingFucntion(errResponse, type));
        });
    };
  };
  static GetAllCrushes = (data, token, navigation) => {
    return async (dispatch) => {
      dispatch({type: actionTypes.STARTLOADER});
      return Get(`me?only=${data}`, token)
        .then((res) => {
          if (res.status_type === 'success') {
            let response = res.data;
            console.log('resss GetAllCrushes', response);
            dispatch({type: actionTypes.STOPLOADER});

            // dispatch({type: actionTypes.GETALLCRUSHES, payload: response});
            return response;
          } else {
            console.log('ELSE in login', res);
            // dispatch({type: actionTypes.GETALLCRUSHES});

            dispatch({type: actionTypes.STOPLOADER});
          }
        })
        .catch((err) => {
          dispatch({type: actionTypes.STOPLOADER});

          let errResponse = err?.response?.data;
          let type = 'GetAllCrushes';
          dispatch(this.ErrorsHandlingFucntion(errResponse, type));
        });
    };
  };
  static ApplyFilter = (data, token, navigation) => {
    console.log('offers?', data);
    return async (dispatch) => {
      return Get(`offers?${data}`, token)
        .then((res) => {
          if (res.status_type === 'success') {
            let response = res?.data;
            console.log('resss========', response);
            // navigation.navigate('applyfiltersresult', {
            //   data: response,
            // });
            return response;
          } else {
            console.log('ELSE in login', res);
          }
        })
        .catch((err) => {
          let errResponse = err?.response?.data;
          let type = 'applyfilter';
          dispatch(this.ErrorsHandlingFucntion(errResponse, type));
        });
    };
  };

  static DeleteOffer = (data, token, navigation) => {
    console.log('DeleteOffer', data);
    return async (dispatch) => {
      return Post('offers', data, token)
        .then((res) => {
          if (res.status_type === 'success') {
            let response = res?.data;
            console.log('resss========', response);

            return response;
          } else {
            console.log('ELSE in login', res);
          }
        })
        .catch((err) => {
          let errResponse = err?.response?.data;
          let type = 'DeleteOffer';
          dispatch(this.ErrorsHandlingFucntion(errResponse, type));
        });
    };
  };
  static UpdateUserProfileData = (data, token, navigation) => {
    console.log('UpdateUserProfileData', data);
    return async (dispatch) => {
      return Post('me', data, token)
        .then((res) => {
          if (res.status_type === 'success') {
            let response = res;
            console.log('resss========', response);

            return response;
          } else {
            console.log('ELSE in login', res);
          }
        })
        .catch((err) => {
          let errResponse = err?.response?.data;
          let type = 'UpdateUserProfileData';
          dispatch(this.ErrorsHandlingFucntion(errResponse, type));
        });
    };
  };
}
export {Actions};
