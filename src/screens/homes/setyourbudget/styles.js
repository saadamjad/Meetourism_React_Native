import {StyleSheet} from "react-native"
import {theme} from "../../../constants/theme"
const styles= StyleSheet.create({

// ================width 85%=================
widthView:{
    flex: 0.9,
    width: '85%',
    alignSelf: 'center',
    // backgroundColor: 'pink',
  },
//   ================budget===============
iconView:{
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor:'red',
    backgroundColor: theme.iconsColor.darkOrange,
    width: 22,
    height: 22,
    borderRadius: 25,
  },
  whatBudgettext:{
    fontSize: 17,
    fontFamily: 'Roboto-Bold',
    color: theme.textColors.lightBlack,
  },
  offerView:{  marginTop: 10,
    borderBottomWidth: 1,},
    offerText:{
        color: theme.textColors.orange,
        fontSize: 15,
        fontFamily: 'Roboto-Regular',
      },

// ==============textinput================
Textinputbudget:{fontSize: 18, marginLeft: 5},

// ===============warning=============
warningView:{ alignItems: 'center',
marginVertical: 2,
borderRadius: 20,},
warningText:{color: 'red', fontSize: 12},
// ============= button 85%==============
ButtonwidthView:{flex: 0.1, width: '85%', alignSelf: 'center'},

// ============button main view================
buttonmainView:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // paddingTop: 10,
    // backgroundColor: 'blue',
  }

})
export default styles;