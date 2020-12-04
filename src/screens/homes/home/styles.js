import {StyleSheet} from 'react-native';
import {theme} from '../../../constants/theme';
const styles = StyleSheet.create({
  // =============slider=============
  sliderMainView: {flex: 0.5, justifyContent: 'flex-end', width: '100%'},
  paginationBoxStyleS: {
    bottom: 0,
    padding: 0,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  imagecomponentstyles: {
    borderRadius: 15,
    backgroundColor: 'transparent',
    width: '100%',
    backgroundColor: 'white',
  },
  //   ==========text row===========
  rigtharrowview: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 50,
    marginLeft: 20,
  },
  TextrowText: {
    color: theme.textColors.orange,
    fontFamily: 'Roboto-Thin',
  },
  TextrowText2: {
    color: theme.textColors.orange,
    fontFamily: 'Roboto-Bold',
    fontSize: 25,
    // fontWeight: '900',
  },
  //   ================boxes==============

  BoxesMainview: {
    flexDirection: 'row',
    width: '85%',
    alignSelf: 'center',
    justifyContent: 'space-around',
  },
//   =========box1============
  touchBox1: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    height: 160,
    width: 140,
    backgroundColor: theme.secondaryColor,
  },
  touchbox1image: {height: 80, width: 80},
  touchbox1Text: {
    color: theme.textColors.white,
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    letterSpacing: 0.5,
    marginTop: 8,
  },
//   =============box2=============
touchbox2:{
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    height: 160,
    width: 140,
    backgroundColor: theme.primaryColor,
  },
  touchbox2image:{height: 80, width: 80},
  touchbox2text:{
    color: theme.textColors.white,
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    letterSpacing: 0.5,
    marginTop: 8,
  }



});
export default styles;
