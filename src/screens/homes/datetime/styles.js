import {theme} from '../../../constants/theme'
import {StyleSheet} from 'react-native'
const styles=StyleSheet.create({
// ==============second view===========
mainView:{
    width: '85%',
    flex: 0.9,
    // justifyContent: 'center',
    // alignItems: 'center',
    alignSelf: 'center',
  },
// =============date and time row==========
datetimeRowview:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  setdatetimeText:{
    fontSize: 17,
    marginLeft: 10,
    fontFamily: 'Roboto-Bold',
    color: theme.textColors.lightBlack,
  },
// =============date and time code==========

datetimecodeMainView:{
    backgroundColor: theme.chooseDateBG,
    width: '100%',
    marginVertical: 12,
    borderRadius: 0,
    elevation: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

DropDownIcon:{
    justifyContent: 'center',
    padding: 10,
    // backgroundColor: 'pink',
  },

//   ========box row wrap===============

BoxRowwrapMainView:{
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  
  boxView:{  backgroundColor: theme.bgColorWhite,
    width: '48%',
    padding: 5,
    elevation: 2,
    borderRadius: 10,
    borderColor: theme.bordersColor.darkOrangeB,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
    // backgroundColor:'red'
  },
  ImageMap:{width: 55, height: 55},
  title1:{fontSize: 13, fontFamily: 'Roboto-Regular'},
  title2:{fontSize: 10, fontFamily: 'Roboto-Thin'},

//   ============button=============
ButtonVIew:{flex: 0.1, justifyContent: 'center'}

})
export default styles;