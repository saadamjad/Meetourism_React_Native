import {StyleSheet} from 'react-native';
import {theme} from '../../../constants/theme';
const styles = StyleSheet.create({
  // ================main container=============
  maincontainerview: {
    alignItems: 'center',
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  maincontainerText: {
    fontSize: 18,
    fontFamily: 'Roboto-Bold',
    // fontWeight: '900',
  },
  dropdown: {
    // backgroundColor: 'skyblue',
    width: '37%',
    // marginVertical: 50,
    // zIndex: 9999,
  },
  //   =================main elevation box===============
  touchableview: {
    elevation: 1.5,
    backgroundColor: theme.taskColors.bgColorWhite,
    width: '90%',
    borderRadius: 10,
    alignSelf: 'center',
    // height: 200,
    padding: 5,
    marginVertical: 10,
  },
  //   ===============profile main view===============

  profilemainview: {
    flexDirection: 'row',
    margin: 4,
    alignItems: 'center',
    width: '95%',
    justifyContent: 'space-between',
  },

  // =====================profile image view==============
  profileimgviewview: {flexDirection: 'row', margin: 5},
  profileIcon: {
    marginVertical: 5,
    backgroundColor: theme.taskColors.profileBG,
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  profileimgtext: {
    alignSelf: 'center',
    marginTop: 12,
    fontSize: 18,
    color: theme.globalButtonColor.textWhite,
  },
  //   ===============profile name view===============

  profiletext: {
    marginTop: 18,
    // fontWeight: 'bold',
    fontFamily: 'Roboto-Bold',
    color: theme.textColors.black,
  },
  requestText: {fontSize: 12, color: theme.textColors.darkGray},

  // ============price view==================

  priceText: {
    color: theme.textColors.orange,
    fontSize: 18,
    fontFamily: 'Roboto-Bold',
    //   fontWeight: 'bold',
  },
  heavyText: {
    fontSize: 12,
    paddingLeft: 5,
    fontFamily: 'Roboto-Thin',
    color: theme.textColors.black,
  },

  //   ==================yellow dot row=============

  view1: {
    width: '100%',
    marginBottom: 10,
  },

  view2: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
  },
  view3:{width: 40, alignItems: 'flex-end'},

  yellowDot:{
    width: 9,
    height: 9,
    backgroundColor: theme.taskColors.circleLight,
    borderRadius: 12,
  },
  yellowDottext:{
    marginLeft: 10,
    fontSize: 14,
    width: '100%',
    color: theme.textColors.black,
  },

//   ==========middle small border============

view4:{width: 46, alignItems: 'flex-end'},
view5:{
    width: 11,
    height: 14,
    borderLeftWidth: 0.3,
    marginLeft: 4,
    marginBottom: 2,
    borderColor: theme.taskColors.circleDark,
  },

//   ==========orange dot view===============

view6:{
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
  },
  view7:{width: 40, alignItems: 'flex-end'},
  view8:{
    width: 9,
    height: 9,
    backgroundColor: theme.bordersColor.orangeBorder,
    borderRadius: 12,
  },
orangedot:{
    marginLeft: 10,
    fontSize: 14,
    marginTop: 0,
    //   width: '100%',
    color: theme.textColors.black,
  },
//   ===============main view of date and time===========
datetimemainview1:{
    borderTopWidth: 0.4,
    borderColor: theme.bordersColor.borderColor,
    flexDirection: 'row',
    alignSelf: 'center',
    width: '90%',
    justifyContent: 'space-between',
    //   margin: 5,
  },
  datetimemainview2:{
    flexDirection: 'row',
    marginVertical: 7,
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  daytext:{
    fontSize: 12,
    padding: 5,
    color: theme.textColors.black,
  },
  iconview:{
    flexDirection: 'row',
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  datetext:{
    fontSize: 12,
    padding: 5,
    color: theme.textColors.black,
  },
  



  



});
export default styles;
