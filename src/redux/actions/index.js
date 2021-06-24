import React from 'react';

import * as actionTypes from './types';
import Axios from 'axios';
import Toast from '../../components/toastmessage';
import baseUrl from '../../apis/constant';
import { Get, Post, Put } from '../../apicalls/index';

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
    // console.log('data', data, 'status', status);

    return async (dispatch) => {
      return await Post('auth/register', data)
        .then((res) => {
          if (res.status_type === 'success') {
            console.log('res', res.data);
            dispatch({
              type: actionTypes.SIGNUPUPSUCCESS,
              payload: res?.data,
              token: res?.data?.token,
              status: res?.data?.status,
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
            let response = res?.data;
            console.log('res===== USER DATA', response);
            dispatch({
              type: actionTypes.LOGINSUCCESS,
              payload: response,
              token: response?.token,
              status: response?.status,
            });
            // dispatch();
            navigation.replace(
              response?.status == 'partner' ? 'PartnerStack' : 'drawer',
            );

            return true;
          } else {
            console.log('ELSE in login', res.message);
            Toast('Error', 'You Entered Wrong Email or Password', 'error');
            return false;
          }
        })
        .catch((err) => {
          let errResponse = err?.response?.data?.errors;
          let type = 'signup';
          dispatch(this.ErrorsHandlingFucntion(errResponse, type));
          return false;
        });
    };
  };
  static ErrorsHandlingFucntion = (errResponse, type) => {
    console.log(`err in catch  ${type}`, errResponse);
    return async (dispatch) => {
      dispatch({ type: actionTypes.STOPLOADER });

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
        if (errResponse) {
          let message = Object.values(errResponse);
          return Toast('Error', message[0], 'error');
        }
      }
    };
  };
  static StoreData = (data, navigation, values) => {
    console.log('StoreData', data);

    return async (dispatch) => {
      dispatch({ type: actionTypes.IMAGESANDINTERESTS, payload: data });
    };
  };
  static profileData = (data, navigation, values) => {
    console.log('StoreData', data);

    return async (dispatch) => {
      console.log('data redux===>|sss|||', data);
      dispatch({ type: actionTypes.STARTLOADER });
    };
  };
  static GetMatchesData = (token, searchKey, navigation) => {
    console.log('serachhhh', searchKey);
    return async (dispatch) => {
      dispatch({ type: actionTypes.STARTLOADER });
      return Get(searchKey ? `matches?q=${searchKey}` : 'matches', token)
        .then((res) => {
          if (res.status_type === 'success') {
            let response = res?.data;
            // var newData = res?.data?.filter((item) => {
            //   console.log('valss', item.username);

            //   return item.username == searchKey;
            // });
            console.log('newDatanewData ++++', response);
            dispatch({
              type: actionTypes.GETMATCHESDATA,
              payload: response,
            });
            navigation.navigate('SeeYourMatch', {
              backToSearch: true,
            });
          } else {
            console.log('ELSE in login', res);
            dispatch({ type: actionTypes.GETMATCHESDATA, payload: [] });
          }
        })
        .catch((err) => {
          dispatch({ type: actionTypes.STOPLOADER });

          let errResponse = err?.response;
          let type = 'GetMatchesData';

          console.log('errResponse', errResponse);
          dispatch(this.ErrorsHandlingFucntion(errResponse, type));
        });
    };
  };
  static GetProfileData = (id, token) => {
    // console.log('id', id, 'token', token);
    return async (dispatch) => {
      dispatch({ type: actionTypes.STARTLOADER });
      return Get(`profile/${id}`, token)
        .then((res) => {
          if (res.status_type === 'success') {
            let response = res?.data;
            console.log('res', response);

            dispatch({ type: actionTypes.GETUSERPROFILEDATA });
            return response;
          } else {
            console.log('ELSE in login', res);
            dispatch({ type: actionTypes.GETUSERPROFILEDATA });
          }
        })
        .catch((err) => {
          dispatch({ type: actionTypes.STOPLOADER });

          let errResponse = err?.response?.data;
          let type = 'GetProfileData';
          dispatch(this.ErrorsHandlingFucntion(errResponse, type));
        });
    };
  };
  static GetLoggedInUserData = (id, token) => {
    // console.log('id', id, 'token', token);
    return async (dispatch) => {
      dispatch({ type: actionTypes.STARTLOADER });
      return Get(`profile/${id}`, token)
        .then((res) => {
          if (res.status_type === 'success') {
            let response = res?.data;
            console.log('res', response);

            dispatch({
              type: actionTypes.GETLOGGEDINUSERDATA,
              payload: response,
            });

            return response
          } else {
            console.log('ELSE in GetLoggedInUserData', res);
            dispatch({ type: actionTypes.GETLOGGEDINUSERDATA });
          }
        })
        .catch((err) => {
          dispatch({ type: actionTypes.STOPLOADER });

          let errResponse = err?.response?.data;
          let type = 'GetLoggedInUserData';
          dispatch(this.ErrorsHandlingFucntion(errResponse, type));
        });
    };
  };

  //create order
  static CreateOrder = (data, token, navigation) => {
    return async (dispatch) => {
      return await Post('orders', data, token)
        .then((res) => {
          if (res.status_type === 'success') {
            let response = res?.data;
            console.log('res', response);
            navigation.navigate('detailsoffer');
            dispatch({ type: actionTypes.CREATEORDER });
            return true;
          } else {
            console.log('ELSE in CreateOrder', res.message);
            dispatch({ type: actionTypes.STOPLOADER });

            return false;
          }
        })
        .catch((err) => {
          let errResponse = err?.response?.data?.errors;
          let type = 'CreateOrder';
          dispatch(this.ErrorsHandlingFucntion(errResponse, type));
          return false;
        });
    };
  };

  //save order details
  static SaveOrderData = (data, navigation, values) => {
    return async (dispatch) => {
      navigation.navigate('payment');

      dispatch({ type: actionTypes.SAVEORDERDATA, payload: data });
    };
  };
  static Logout = (navigation, values) => {
    console.log('Logout');

    return async (dispatch) => {
      dispatch({ type: actionTypes.LOGOUT, });
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
  static GetAllOffers = (id, token, status, navigation) => {
    console.log('Data', id);
    return async (dispatch) => {
      dispatch({ type: actionTypes.STARTLOADER });
      return Get(
        status === 'partner' ? `offers?user_id=${id}` : `offers`,
        token,
      )
        .then((res) => {
          if (res.status_type === 'success') {
            let response = res?.data;
            console.log('resss========', response);

            dispatch({ type: actionTypes.GETALLOFFERS, payload: response });
            return response;
          } else {
            console.log('ELSE in login', res);
            dispatch({ type: actionTypes.GETALLOFFERS, payload: [] });

            dispatch({ type: actionTypes.STOPLOADER });

            // Toast('Error', 'You Entered Wrong Email or Password', 'error');
          }
        })
        .catch((err) => {
          dispatch({ type: actionTypes.STOPLOADER });

          let errResponse = err?.response?.data;
          let type = 'GetAllOffers';
          dispatch(this.ErrorsHandlingFucntion(errResponse, type));
        });
    };
  };
  static GetAllCrushes = (data, token, searchKey, navigation) => {
    return async (dispatch) => {
      dispatch({ type: actionTypes.STARTLOADER });
      return Get(
        searchKey ? `me?only=${data}&q=${searchKey}` : `me?only=${data}`,
        token,
      )
        .then((res) => {
          if (res.status_type === 'success') {
            let response = res?.data;
            // var newData = response?.filter((item) => {
            //   return item.follower.username == searchKey;
            // });
            console.log('response GetAllCrushes', response);
            dispatch({ type: actionTypes.GETALLCRUSHES, payload: response }),
              navigation.goBack();
          } else {
            console.log('ELSE in login', res);

            // dispatch({type: actionTypes.STOPLOADER});
            dispatch({ type: actionTypes.GETALLCRUSHES, payload: [] });
          }
        })
        .catch((err) => {
          dispatch({ type: actionTypes.STOPLOADER });

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
            // console.log('resss========', response);
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
            // console.log('resss========', response);

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
  static FollowUser = (data, token, key, navigation) => {
    console.log('KEY', key);
    return async (dispatch) => {
      return Post(`profile/relation/${key}?user_id=${data}`, null, token)
        .then((res) => {
          if (res.status_type === 'success') {
            let response = res?.data;
            console.log(`${key}`, response);
          }
        })
        .catch((err) => {
          let errResponse = err?.response?.data;
          let type = `${key}`;
          dispatch(this.ErrorsHandlingFucntion(errResponse, type));
          return false;
        });
    };
  };

  static UpdateUserProfileData = (data, token, updateData, navigation) => {
    console.log('UpdateUserProfileData', updateData);
    return async (dispatch) => {
      return Post('me', data, token)
        .then((res) => {
          if (res.status_type === 'success') {
            let response = res;
            console.log('resss========', response);
            dispatch({
              type: actionTypes.UPDATEPROFILEDATA,
              payload: updateData,
            });

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
  static Block_Unblock = (data, token, key, navigation) => {
    console.log('KEY', key);
    return async (dispatch) => {
      return Post(`profile/relation/${key}?user_id=${data}`, null, token)
        .then((res) => {
          if (res.status_type === 'success') {
            let response = res?.data;
            console.log(`${key}`, response);
          }
        })
        .catch((err) => {
          let errResponse = err?.response?.data;
          let type = `${key}`;
          dispatch(this.ErrorsHandlingFucntion(errResponse, type));
          return false;
        });
    };
  };
  static GetCounties = () => {
    return async (dispatch) => {
      return Get('countries')
        .then((res) => {
          if (res.status_type === 'success') {
            let response = res.data;
            console.log('resss========', response);
            dispatch({
              type: actionTypes.GETCOUNTRIES,
              payload: response,
            });
          } else {
            console.log('ELSE in EditSetting', res);
          }
        })
        .catch((err) => {
          let errResponse = err?.response?.data;
          let type = 'GetCounties';
          console.log('ELSE in GetCounties', errResponse);

          // dispatch(this.ErrorsHandlingFucntion(errResponse, type));
        });

    };

  };
  static ReverseGeoCode = () => {
    console.log('ReverseGeoCode',);
    return async (dispatch) => {
      fetch('http://ip-api.com/json')
        .then((response) => response.json())
        .then((response) => {

          let data = {
            country: response?.country,
            city: response?.city,
            regionName: response?.regionName,
            countryCode: response?.countryCode,
          };
          dispatch({
            type: actionTypes.REVERSEGEOCODEDATA,
            payload: data,
          });

        })
        .catch((error) => {
          console.log(error);
        });


    };
  };
  // static GetInterests = (data) => {
  //   console.log('GetInterests', data);
  //   return async (dispatch) => {
  //     dispatch({
  //       type: actionTypes.GETINTERESTS,
  //       payload: data,
  //     });
  //   };
  // };
  static GetInterests = () => {

    return async (dispatch) => {
      dispatch({ type: actionTypes.STARTLOADER });
      return Get('interests')
        .then((res) => {
          if (res.status_type === 'success') {
            let response = res?.data;

            dispatch({
              type: actionTypes.GETINTERESTS,
              payload: response,
            });
          } else {
            console.log('ELSE in GetInterests', res);
            dispatch({
              type: actionTypes.GETINTERESTS,
              payload: [],
            });


          }
        })
        .catch((err) => {
          dispatch({ type: actionTypes.STOPLOADER });

          let errResponse = err?.response;
          let type = 'GetInterests';

          console.log('errResponse', errResponse);
          // dispatch(this.ErrorsHandlingFucntion(errResponse, type));
        });
    };
  };
  static UpdateInterests = (data) => {

    return async (dispatch) => {
      dispatch({ type: actionTypes.SAVEINTERESTS, payload: data });

    };
  };
  static EditSetting = (data) => {
    return async (dispatch) => {
      dispatch({
        type: actionTypes.EDITSETTING,
        payload: data,
      });
    };
  };
  static UpdateCompleteProfile = (data, navigation, status, token) => {
    // console.log('UpdateCompleteProfile', data);
    return async (dispatch) => {
      return Post('me', data, token)
        .then((res) => {
          if (res.status_type === 'success') {
            let response = res;
            console.log('resss========>>>>', response.data);
            dispatch({
              type: actionTypes.UPDATECOMPLETEPROFILE,
              payload: response,
            });

            // navigation.replace(status ? 'PartnerStack' : 'profilePreivew');
          }
        })
        .catch((err) => {
          // let errResponse = err?.response?.data;
          let errResponse = err;
          let type = 'UpdateCompleteProfile';
          console.log('ELSE in UpdateCompleteProfile', errResponse);

          // dispatch(this.ErrorsHandlingFucntion(errResponse, type));
        });
    };

    // return async (dispatch) => {
    //   dispatch({
    //     type: actionTypes.UPDATECOMPLETEPROFILE,
    //     payload: data,
    //   });
  };
  // static UpdateCompleteProfile = (data, navigation, status, token) => {
  //   console.log('UpdateCompleteProfile', data);
  //   return async (dispatch) => {
  //     return Post('me', data, token)
  //       .then((res) => {
  //         if (res.status_type === 'success') {
  //           let response = res;
  //           console.log('resss========', response);
  //           dispatch({
  //             type: actionTypes.UPDATECOMPLETEPROFILE,
  //             payload: data,
  //           });

  //           navigation.replace(status ? 'PartnerStack' : 'profilePreivew');
  //         } else {
  //           console.log('ELSE in UpdateCompleteProfile', res);
  //         }
  //       })
  //       .catch((err) => {
  //         let errResponse = err?.response?.data;
  //         let type = 'UpdateCompleteProfile';
  //         console.log('ELSE in UpdateCompleteProfile', errResponse);

  //         dispatch(this.ErrorsHandlingFucntion(errResponse, type));
  //       });
  //   };

  //   // return async (dispatch) => {
  //   //   dispatch({
  //   //     type: actionTypes.UPDATECOMPLETEPROFILE,
  //   //     payload: data,
  //   //   });
  // };

  static GetNotificaitons = (token, searchKey, navigation) => {
    console.log('GetNotificaitons', searchKey);
    return async (dispatch) => {
      dispatch({ type: actionTypes.STARTLOADER });
      return Get('notifications', token)
        .then((res) => {
          if (res.status_type === 'success') {
            let response = res?.data;

            console.log('GetNotificaitons ++++', response);
            dispatch({ type: actionTypes.STOPLOADER });

            return response;
          } else {
            console.log('ELSE in GetNotificaitons', res);
            dispatch({ type: actionTypes.STOPLOADER });

            return false;
          }
        })
        .catch((err) => {
          dispatch({ type: actionTypes.STOPLOADER });

          let errResponse = err?.response;
          let type = 'GetNotificaitons';

          console.log('errResponse', errResponse);
          // dispatch(this.ErrorsHandlingFucntion(errResponse, type));
        });
    };
  };
  static GetAllMessages = (token) => {
    // console.log('get-conversations', searchKey);
    return async (dispatch) => {
      dispatch({ type: actionTypes.STARTLOADER });
      return Get('get-conversations', token)
        .then((res) => {
          if (res.status_type === 'success') {
            let response = res?.data;

            console.log('GetAllMessages ++++', response);
            dispatch({ type: actionTypes.STOPLOADER });

            return response;
          } else {
            console.log('ELSE in GetAllMessages', res);
            dispatch({ type: actionTypes.STOPLOADER });

            return false;
          }
        })
        .catch((err) => {
          dispatch({ type: actionTypes.STOPLOADER });

          let errResponse = err?.response;
          let type = 'GetAllMessages';

          console.log('errResponse', errResponse);
          // dispatch(this.ErrorsHandlingFucntion(errResponse, type));
        });
    };
  };
  static GetPersonChat = (id, token) => {
    // console.log('get-conversations', searchKey);
    return async (dispatch) => {
      dispatch({ type: actionTypes.STARTLOADER });
      return Get(`get-messages/${id}`, token)
        .then((res) => {
          if (res.status_type === 'success') {
            let response = res?.data?.messages;

            console.log('GetPersonChat ', response);
            dispatch({ type: actionTypes.GETPERSONALCHATS, payload: response });
          } else {
            console.log('ELSE in GetPersonChat', res);
            dispatch({ type: actionTypes.STOPLOADER });
          }
        })
        .catch((err) => {
          dispatch({ type: actionTypes.STOPLOADER });

          let errResponse = err?.response;
          let type = 'GetPersonChat';

          console.log('errResponse', errResponse);
          // dispatch(this.ErrorsHandlingFucntion(errResponse, type));
        });
    };
  };
  static StartChat = (id, token) => {
    return async (dispatch) => {
      dispatch({ type: actionTypes.STARTLOADER });
      return Get(`start-conversation/${id}`, token)
        .then((res) => {
          if (res.status_type === 'success') {
            let response = res?.data;

            console.log('StartChat ++++', response);
            dispatch({ type: actionTypes.STOPLOADER });

            return response;
          } else {
            console.log('ELSE in StartChat', res);
            dispatch({ type: actionTypes.STOPLOADER });
            return false;
          }
        })
        .catch((err) => {
          dispatch({ type: actionTypes.STOPLOADER });

          let errResponse = err?.response;
          let type = 'StartChat';

          console.log('errResponse', errResponse);
          // dispatch(this.ErrorsHandlingFucntion(errResponse, type));
        });
    };
  };
  static SendMessage = (id, _data, token) => {
    return async (dispatch) => {
      dispatch({ type: actionTypes.STARTLOADER });
      return Post(`send-message/${id}`, _data, token)
        .then((res) => {
          if (res.status_type === 'success') {
            let response = res?.data;

            console.log('SendMessage /++++++', response);
            dispatch({ type: actionTypes.STOPLOADER });

            return response;
          } else {
            console.log('ELSE in SendMessage', res);
            dispatch({ type: actionTypes.STOPLOADER });
            return false;
          }
        })
        .catch((err) => {
          dispatch({ type: actionTypes.STOPLOADER });

          let errResponse = err?.response;
          let type = 'SendMessage';

          console.log('errResponse', errResponse);
          // dispatch(this.ErrorsHandlingFucntion(errResponse, type));
        });
    };
  };
  static ImageUploading = (param, token) => {


    let formData = new FormData();
    formData.append('image', { ...param, name: param.fileName });
    formData.append('image_type', 'user');

    return async (dispatch) => {
      dispatch({ type: actionTypes.STARTLOADER });
      return Post("images", formData, token)
        .then((res) => {
          if (res.status_type === 'success') {
            let response = res?.data;

            console.log('ImageUploading', response.url);
            dispatch({ type: actionTypes.USERREGISTERATIONIMAGES, payload: response.url });

            return response.url;
          } else {
            console.log('ELSE in ImageUploading', res);
            dispatch({ type: actionTypes.STOPLOADER });
            return false;
          }
        })
        .catch((err) => {
          dispatch({ type: actionTypes.STOPLOADER });

          let errResponse = err?.response;
          let type = 'ImageUploading';

          console.log('errResponse', errResponse);
          console.log('errrrr', err);
          // dispatch(this.ErrorsHandlingFucntion(errResponse, type));
        });
    };
  };
  static ImageUploadingGeneral = (param, token) => {


    let formData = new FormData();
    formData.append('image', { ...param, name: param.fileName });
    formData.append('image_type', 'user');

    return async (dispatch) => {
      dispatch({ type: actionTypes.STARTLOADER });
      return Post("images", formData, token)
        .then((res) => {
          if (res.status_type === 'success') {
            let response = res?.data;

            console.log('ImageUploadingGeneral', response.url);
            dispatch({ type: actionTypes.STOPLOADER, });

            return response.url;
          } else {
            console.log('ELSE in ImageUploadingGeneral', res);
            dispatch({ type: actionTypes.STOPLOADER });
            return false;
          }
        })
        .catch((err) => {
          dispatch({ type: actionTypes.STOPLOADER });

          let errResponse = err?.response;
          let type = 'ImageUploading';

          console.log('errResponse', errResponse);
          console.log('errrrr', err);
          // dispatch(this.ErrorsHandlingFucntion(errResponse, type));
        });
    };
  };
}

export { Actions };
