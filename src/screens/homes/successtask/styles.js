import {StyleSheet} from 'react-native'
import {theme} from '../../../constants/theme'
const styles=StyleSheet.create({

imgbackground:{width: '100%', height: 235},
// ==========mainView Flex1==============
mainViewflex:{
    flex: 1,
    //   backgroundColor: 'gray',
    width: '85%',
    justifyContent: 'center',
    alignSelf: 'center',
  },

//   =============centerview===============
centermainview:{
    flex: 0.5,
    //   backgroundColor: 'pink',
    alignItems: 'center',
    width: '85%',

    alignSelf: 'center',
  },
  successtext:{
    fontSize: 30,
    // fontWeight: 'bold',
    fontFamily: 'Roboto-Bold',
    color: theme.textColors.orange,
  },
//   ================thankyouview============

spacebtwn:{marginVertical: 10, marginBottom: 20},
thankyouText:{
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
    letterSpacing: 1,
    color: theme.textColors.black,
  },
//   ===============paragraph===============
parText:{
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Roboto-Thin',
    letterSpacing: 1,
    color: theme.textColors.black,
  },


//   ===========button view=================
buttonView:{
    alignItems: 'center',
    justifyContent: 'flex-end',
    //   backgroundColor: 'pink',
    flex: 0.3,
    marginVertical: 10,
  },
  


})
export default styles;