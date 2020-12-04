import {StyleSheet} from 'react-native';
import {theme} from '../../../constants/theme';
const styles = StyleSheet.create({
  // ===========border color change=========

  borderView: {
    flex: 0.9,
    width: '85%',
    alignSelf: 'center',
    // backgroundColor: 'pink',
  },

  // ==============describe package===========
  describepackageViewrow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  describeviewText: {
    fontSize: 17,
    color: theme.textColors.lightBlack,
    fontFamily: 'Roboto-Bold',
    marginLeft: 8,
  },
  describeTextinput: {
    fontSize: 14,
    color: theme.textColors.black,
    marginBottom: 20,
  },
  describeborder: {borderWidth: 0.5, marginVertical: 2},

  describewarningView: {
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: 10,
  },
  warningText: {color: 'red', fontSize: 12},

  //   =========package weight row============
  packageweightMainview: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    marginTop: 25,
  },

  packageweightText: {
    fontSize: 17,
    color: theme.textColors.lightBlack,
    fontFamily: 'Roboto-Bold',
    marginLeft: 8,
  },

  //   ============package box row===============

  packageboxMainview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  //   ============box1=============
  touchableimage: {
    width: '30%',
    // height: 130,
    padding: 15,
    backgroundColor: theme.bgColorWhite,
    elevation: 0.5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: theme.bordersColor.darkOrangeB,
  },

  touchableimages: {
    width: 62,
    height: 62,
  },
  touchableTextview: {alignItems: 'center', justifyContent: 'center'},
  TouchableText:{
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
  },



//   =============button==============

ButtonMainview:{
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.1,
    marginVertical: 10,
  },
  
});
export default styles;
