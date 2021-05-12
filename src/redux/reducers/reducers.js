import * as actionTypes from '../actions/types';

const initialState = {
  userData: {},
  loader: false,
  token: '',
  images_Interests: [],
  status: '',
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
      console.log('LOGINSUCCESS data', action.token);
      return {
        ...state,
        loader: false,
        userData: action.payload,
        token: action.token,
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
      console.log('reducer data=======', action.payload);
      return {
        ...state,
        images_Interests: action.payload,
      };

    case actionTypes.LOGOUT:
      console.log('helloo beta');
      return {...state, ...initialState};

    default:
      return state;
  }
}
