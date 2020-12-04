import {StyleSheet} from "react-native"
import {theme} from '../../../constants/theme'
const styles=StyleSheet.create({
// ================img bacbkground==========
imgbackground:{height: '100%', width: '100%', flex: 1},

// ======otp=============
otpview:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  codeinputfieldstyle:{
    width: 65,
    height: 65,
    fontSize: 30,
    borderWidth: 1.5,
    borderRadius: 5,
    color: theme.textColors.black,}

})
export default styles;