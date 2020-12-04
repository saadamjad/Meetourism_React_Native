import {StyleSheet} from 'react-native';
import {theme} from '../../../constants/theme';
const styles = StyleSheet.create({
  // =========flex 0.35=====
  flexView: {
    flex: 0.35,
    // backgroundColor: 'green',
    width: '90%',
    alignSelf: 'center',
  },
  //   name and textinputname========
  nameview: {
    borderBottomWidth: 1,
    width: '100%',
    alignSelf: 'center',
    marginTop: 20,
  },
  fullnametext: {color: theme.textColors.yellow},
  phonetext: {
    color: theme.textColors.lightYellow,
    marginTop: 20,
  },
  //   =====numberinput====
  numberinputView: {width: '100%', alignSelf: 'center', height: 70},
  containerstyle: {
    width: '100%',
    backgroundColor: 'transparent',
  },
  textcontainerstyle: {
    borderBottomWidth: 1,
    backgroundColor: 'transparent',
  },

  codetextstyle: {color: theme.textColors.placeholder},

  // ======globalbutton======
  globalbtview: {alignItems: 'center', marginVertical: 10},

  // ============const signin==========
  // ========90%view======
  viewcenter: {
    // flex: 0.2,
    // backgroundColor: 'blue',
    width: '90%',
    alignSelf: 'center',
  },
  signinphonetext: {
    color: theme.textColors.lightYellow,
    marginTop: 20,
  },
  //   =====numberinpu=======
  numberiunputview: {
    width: '100%',
    alignSelf: 'center',
    // height: 50,
    marginVertical: 20,
  },
  //   ========numberinput======
  signinnumberinputView: {
    width: '100%',
    alignSelf: 'center',
    // height: 50,
    marginVertical: 20,
  },

  signincontainerstyle: {
    width: '100%',
    color: theme.textColors.placeholder,
    backgroundColor: 'transparent',
  },
  signintextcontainer: {
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderColor: theme.bordersColor.borderColor,
    color: theme.textColors.placeholder,
  },
  signincodetext: {
    color: theme.textColors.placeholder,
  },

  //   =====globalbutton=====
  sigininbtview: {alignItems: 'center'},

  Ortext: {textAlign: 'center', marginVertical: 10, fontSize: 16},

  // =====socialbutton=====
  socialbtmainview: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },

  // ====forgotpassword=====
  forgotmainview: {
    marginVertical: 30,
    // backgroundColor: 'pink',
    width: '60%',
    alignItems: 'center',
  },
  forgottext: {fontFamily: 'Roboto-Bold'},

  // ======main=====
  mainimgbdview: {height: '100%', width: '100%', flex: 1},

  /* ======signin and signup touch==== */
  tapmainview: {
    flex: 0.6,
    justifyContent: 'flex-end',
    width: '90%',
    alignSelf: 'center',
    // backgroundColor: 'pink',
  },
  taprowview: {flexDirection: 'row', justifyContent: 'space-between'},
  //   ===tapsigin====
  tapsigintouch: {
    borderBottomWidth: 5,
    width: '47%',
  },
  tapsigintext: {
    fontSize: 17,
    fontFamily: 'Roboto-Regular',
    marginLeft: 5,
  },
  sigintoaccounttext: {fontSize: 22, fontFamily: 'Roboto-Bold', marginLeft: 5},
  // =====tapsiginUp=====

  tapsignuptouch: {borderBottomWidth: 5, width: '47%'},
  tapsignuptext: {fontSize: 17, fontFamily: 'Roboto-Regular'},
  signupcreateacc: {
    fontSize: 22,
    fontFamily: 'Roboto-Bold',
  },
});
export default styles;
