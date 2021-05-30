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
        signupData: {...signupData, ...action.payload},
      };
    case actionTypes.LOGINSUCCESS:
      console.log('LOGINSUCCESS data', action.payload);
      return {
        ...state,
        loader: false,
        userData: action.payload,
        token: action.token,
        status: action.status,
      };
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
      return {...state, alloffers: action.payload, loader: false};
    case actionTypes.EDITSETTING:
      return {...state, loader: false, editSetting: action.payload};

    case actionTypes.GETUSERPROFILEDATA:
      return {...state, loader: false};
    case actionTypes.GETALLCRUSHES:
      return {...state, loader: false, allCrushes: action.payload};
    case actionTypes.GETCOUNTRIES:
      return {...state, loader: false, allCountries: action.payload};
    case actionTypes.GETINTERESTS:
      return {...state, loader: false, allInterests: action.payload};
    case actionTypes.UPDATECOMPLETEPROFILE:
      console.log('action.payloadaction.payload', action.payload);
      return {
        ...state,
        loader: false,
        userData: action.payload,
        editSetting: false,
      };
    case actionTypes.SAVEORDERDATA:
      console.log('action.payloadaction.payload', action.payload);
      return {
        ...state,
        loader: false,
        orderData: action.payload,
      };
    case actionTypes.CREATEORDER:
      console.log('action.payloadaction.payload', action.payload);
      return {
        ...state,
        loader: false,
        orderData: {},
      };

    case actionTypes.LOGOUT:
      return {...state, ...initialState};
    default:
      return state;
  }
}
