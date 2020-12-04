import {StyleSheet} from 'react-native';
import {theme} from '../../../constants/theme';
const styles = StyleSheet.create({
  // =========Main View========

  mainView: {
    flex: 0.9,
    alignItems: 'center',
    padding: 10,
    width: '87%',
    alignSelf: 'center',
    // backgroundColor: 'pink',
  },

  // =====pickup location========
  flexrowView: {flexDirection: 'row', alignItems: 'center'},
  pickuptextstyle: {
    fontSize: 17,
    color: theme.textColors.lightBlack,
    fontFamily: 'Roboto-Bold',
    marginLeft: 8,
  },
  enteradressText: {
    color: theme.textColors.orange,
    fontSize: 15,
    fontFamily: 'Roboto-Thin',
    marginTop: 7,
  },

  iconpickupViews: {
    justifyContent: 'center',
    width: '10%',
    alignItems: 'center',
  },

  BordercolorPickup: {
    borderBottomWidth: 1,
    //   marginTop: 10,
    // width: '90%',
  },
  warningPickupView: {
    alignItems: 'center',
    marginVertical: 2,
    width: '100%',
    borderRadius: 20,
  },
  warningtext: {color: 'red', fontSize: 12},

  // ================package destination=============
  borderPackageView: {borderBottomWidth: 1, marginTop: 20},
  packagerowView: {flexDirection: 'row', alignItems: 'center'},
  packagedestinationText: {
    fontSize: 17,
    color: theme.textColors.lightBlack,
    fontFamily: 'Roboto-Bold',
    marginLeft: 8,
  },
  enteradressText: {
    color: theme.textColors.orange,
    fontSize: 12,
    fontFamily: 'Roboto-Thin',
    marginTop: 7,
  },
  icondestinationView: {
    justifyContent: 'center',
    width: '10%',
    alignItems: 'center',
  },
  warningdestination: {
    alignItems: 'center',
    marginVertical: 2,
    borderRadius: 20,
    width: '100%',
  },
  warningtext: {color: 'red', fontSize: 12},

  // ============button====================

  buttonView: {
    flex: 0.1,
    justifyContent: 'flex-end',
    marginVertical: 10,
    // backgroundColor: 'red',
  },
});
export default styles;
