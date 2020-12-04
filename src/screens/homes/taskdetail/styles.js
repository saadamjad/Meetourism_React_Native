import {StyleSheet} from "react-native"
import{theme} from "../../../constants/theme"
const styles=StyleSheet.create({


    mainview:{
        flex: 0.22,
        // backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
      },
    //   ================first row profile==============
    firstrowview1:{
        flexDirection: 'row',
        width: '90%',
        marginBottom: 10,
      },
      textView:{
        backgroundColor: theme.secondaryColor,
        width: 70,
        height: 70,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
      },
      profiletext:{
        color: theme.textColors.white,
        fontSize: 20,
        fontFamily: 'Roboto-Bold',
      },
      profilenameview:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 10,
      },
      profileText:{
        fontSize: 17,
        // fontWeight: 'bold',
        fontFamily: 'Roboto-Bold',
        color: theme.textColors.black,
      },
      requesttext:{
        fontSize: 14,
        color: theme.textColors.gray,
        fontFamily: 'Roboto-Thin',
      },

    //   ===========dots view============
    dotmainview:{
        width: '90%',
        marginVertical: 10,
        borderBottomWidth: 1,
        borderColor: theme.bordersColor.lightBorder,
      },
    //   ===========yellow===============
    yellowdot:{
        width: 10,
        height: 10,
        backgroundColor: theme.bordersColor.lightYellow,
        borderRadius: 10,
      },
    //   ======yellow dot text======
    yellowdottext:{
        paddingLeft: 10,
        fontSize: 14,
        marginTop: -5,
        fontFamily: 'Roboto-Regular',
        color: theme.textColors.black,
      },
    //   =====small border======
    borderView:{
        width: 11,
        height: 14,
        borderLeftWidth: 0.3,
        marginLeft: 4,
        marginBottom: 2,
        borderColor: theme.bordersColor.borderColor,
      },
    //   =====orange dot ==========
    orangedot:{
        width: 10,
        height: 10,
        backgroundColor: theme.bordersColor.orangeBorder,
        borderRadius: 10,
      },
    //   ===orange text=============
    orangetext:{
        paddingLeft: 10,
        fontSize: 14,
        marginTop: -5,
        color: theme.textColors.black,
        fontFamily: 'Roboto-Regular',
      },
      packagedes:{color: theme.textColors.black, fontFamily: 'Roboto-Bold'},
      weightdes:{
        color: theme.textColors.orange,
        marginVertical: 6,
        fontFamily: 'Roboto-Bold',
      },
    //   ============prargraph voiew=============
paraview:{width: '90%', marginVertical: 10},
packagedescription:{
    color: theme.textColors.darkGray,
    fontFamily: 'Roboto-Regular',
  },
//   ==========offerview============
offerview1:{
    width: '90%',
    backgroundColor: theme.bgColorWhite,
    alignItems: 'center',
    elevation: 2,
    borderRadius: 12,
    marginVertical: 5,
    overflow: 'hidden',
  },
  makeofferview:{ width: '100%',
  alignItems: 'center',
},
makeoffertext:{
    borderTopStartRadius: 12,
    padding: 5,
  
    fontFamily: 'Roboto-Regular',
  },
  offertextinput:{fontSize: 20, height: 60, fontWeight: 'bold'},
//   ==============warning=============
warningview:{ alignItems: 'center',
// marginBottom: 10,
borderRadius: 20,
width: '80%',},
warningtext:{color: 'red', fontSize: 12},

// =======lastbutton view================
buttonview:{
    alignItems: 'center',
    justifyContent: 'flex-end',
    //   backgroundColor: 'pink',
    flex: 0.9,
    marginVertical: 10,
  },

















})
export default styles;