import * as actionTypes from '../actions/types';

const initialState = {
  userData: {},
  loader: false,
  token: '',
  images_Interests: [],
  status: '',
  alloffers: [],
  matchesData: [],
  allCrushes: [],
  editSetting: false,
  allCountries: [],
  allInterests: [],
  orderData: {},
  personalChatData: [],
  reverseGeoCodeData: {},
  userRegisterationImages: [],
  socialLogin: false,
  facebook: false,
  deviceId: "hello",
  allOrders:[]
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.STARTLOADER:
      // console.log('loader start');
      return {
        ...state,
        loader: true,
      };
    case actionTypes.STOPLOADER:
      console.log('loader STOP');
      return {
        ...state,
        loader: false,
      };
    case actionTypes.SIGNUPDATA:
      console.log('SIGNUPDATA data');
      return {
        ...state,
        loader: false,
        signupData: { ...signupData, ...action.payload },
      };
    case actionTypes.LOGINSUCCESS:
      console.log('LOGINSUCCESS dat========================action.facebook++', action.facebook);
      return {
        ...state,
        loader: false,
        userData: action.payload,
        token: action.token,
        status: action.status,
        socialLogin: action.socialLogin,
        facebook: action.facebook
      };
    case actionTypes.SAVEDEVICETOKEN:
      console.log('SAVEDEVICETOKEN ', action.deviceId);
      return {
        ...state,
        loader: false,
        deviceId: action.deviceId
      };
    // case actionTypes.DELETEIMAGE_SUCCESS:
    //   console.log('SAVEDEVICETOKEN ', action.deviceId);
    //   return {
    //     ...state,
    //     loader: false,
    //     deviceId: action.deviceId
    //   };
    case actionTypes.SIGNUPUPSUCCESS:
      // console.log('reducer data', action.status);
      return {
        ...state,
        loader: false,
        userData: action.payload,
        token: action.token,
        status: action.status,
      };
    case actionTypes.IMAGESANDINTERESTS:
      // console.log('reducer data=======', action.payload);
      return {
        ...state,
        images_Interests: action.payload,
      };

    case actionTypes.GETMATCHESDATA:
      return {
        ...state,
        loader: false,
        matchesData: action.payload,
      };

    case actionTypes.GETALLOFFERS:
      return { ...state, alloffers: action.payload, loader: false };
    case actionTypes.EDITSETTING:
      return { ...state, loader: false, editSetting: action.payload };

    case actionTypes.GETUSERPROFILEDATA:
      return { ...state, loader: false };
    case actionTypes.GETALLCRUSHES:
      return { ...state, loader: false, allCrushes: action.payload };
    case actionTypes.GETCOUNTRIES:
      return { ...state, loader: false, allCountries: action.payload };
    case actionTypes.GETINTERESTS:
      return { ...state, loader: false, allInterests: action.payload };
    case actionTypes.SAVEINTERESTS:
      return { ...state, loader: false, allInterests: action.payload };
    case actionTypes.UPDATECOMPLETEPROFILE:
      // console.log('action.payloadaction.payload', action.payload);
      return {
        ...state,
        loader: false,
        userData: { ...state.userData, ...action.payload },
        // editSetting: false,
      };
    case actionTypes.SAVEORDERDATA:
      // console.log('action.payloadaction.payload', action.payload);
      return {
        ...state,
        loader: false,
        orderData: action.payload,
      };
    case actionTypes.CREATEORDER:
      // console.log('action.payloadaction.payload', action.payload);
      return {
        ...state,
        loader: false,
        orderData: {},
      };
    case actionTypes.GETORDERSUCCESS:
      // console.log('action.payloadaction.payload', action.payload);
      return {
        ...state,
        loader: false,
        allOrders: action.payload,
      };
    case actionTypes.UPDATEPROFILEDATA:
      // console.log('action.payloadaction.payload', action.payload);
      return {
        ...state,
        loader: false,
        // userData: {...state.userData, ...action.payload},
      };
    case actionTypes.GETLOGGEDINUSERDATA:
      return {
        ...state,
        userData: action.payload,
        loader: false,
      };
    case actionTypes.GETPERSONALCHATS:
      return {
        ...state,
        personalChatData: action.payload,
        loader: false,
      };
    case actionTypes.REVERSEGEOCODEDATA:
      return {
        ...state,
        reverseGeoCodeData: action.payload,
        loader: false,
      };
    case actionTypes.USERREGISTERATIONIMAGES:
      return {
        ...state,
        userRegisterationImages: [...state.userRegisterationImages, action.payload],
        loader: false,
      };

    case actionTypes.LOGOUT:
      // navigation.navigate('Auth', {
      //   screen: 'signin',
      // });
      return { ...state, ...initialState };
    default:
      return state;
  }
}
