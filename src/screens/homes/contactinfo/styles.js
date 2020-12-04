import {theme} from '../../../constants/theme';
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  // ====================2nd flex=============
  secondflexView: {
    flex: 0.9,
    // backgroundColor: 'green',
    width: '85%',
    alignSelf: 'center',
  },
  reciverIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  recieverText: {
    fontSize: 17,
    marginLeft: 5,
    color: theme.textColors.lightBlack,
    fontFamily: 'Roboto-Bold',
  },
  recieverborder: {borderBottomWidth: 1, marginBottom: 2},
  recievernameText: {
    color: theme.textColors.orange,
    fontFamily: 'Roboto-Thin',
    fontSize: 15,
  },
  Textinputuser: {fontSize: 14, marginLeft: 5},
  warningborder: {borderRadius: 20, alignItems: 'center', marginBottom: 10},
  warningtext: {color: 'red', fontSize: 12},
  //   ================phone number===============

  phonenumberBorder: {
    borderBottomWidth: 1,
    // backgroundColor: 'red',
    marginVertical: 2,
  },
  phonenumberText: {
    color: theme.textColors.orange,
    fontFamily: 'Roboto-Thin',
    fontSize: 14,
    marginTop: 10,
  },
  phonenumberTextinput: {fontSize: 14, marginLeft: 5},
  warningPhonenumerView: {
    alignItems: 'center',
    marginBottom: 10,
    // backgroundColor: isError2 ? '#ffeeee' : null,
    borderRadius: 20,
  },
  warningphonenumberText: {color: 'red', fontSize: 12},
  //   =====================button====================
  buttonview: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginVertical: 10,
    // backgroundColor: 'pink',
  },
});
export default styles;
