import * as actionTypes from '../actions/types';

const initialState = {
  userdata: '',
  details: {},
  Isloggedin: false,
  allShops: [],
  allShopsByCategory: [],
  serviceProviderDescription: {},
  serviceOrder: [],
  orderCreation: {},
  filterData: {},
  openFilterbottomSheet: false,
  loader: false,
  serviceCategory: [],
  userDetails: {},
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

    case actionTypes.LOGOUT:
      console.log('helloo beta ');
      return {
        ...state,
        ...initialState,
      };

    default:
      return state;
  }
}
