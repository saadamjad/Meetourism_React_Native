import {StyleSheet} from "react-native"
import{theme} from '../../../constants/theme'
const styles=StyleSheet.create({


// ============textview==============
textmainView:{
    flex: 0.8,
    //backgroundColor: 'pink',
    alignItems: 'center',
    width: '85%',

    alignSelf: 'center',
  },
SuccessText:{
    fontSize: 30,
    fontWeight: 'bold',
    color: theme.textColors.orange,
  },

  spacebetween:{marginVertical: 10, marginBottom: 20},
  thankyouText:{
    fontSize: 19,
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
    color: theme.textColors.black,
  },
  detailText:{
    fontSize: 17,
    textAlign: 'center',
    //   fontWeight: 'bold',
    color: theme.textColors.black,
  },
//   ===============button==================
ButtonView:{
    flex: 0.3,
    //   backgroundColor: 'yellow',
    alignItems: 'center',
    width: '85%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 10,
  }



})
export default styles;
