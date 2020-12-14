import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {theme} from '../../constants/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

// allPRops
//   // textAlign={'flex-end'}
//   leftArrow={true}
//   text="sss"
//   navigation={props.navigation}
//   searchIcon={true}
const App = (
  {
    isTransparent,
    text,
    textAlign,
    leftArrow,
    drawerIcon,
    searchIcon,
    navigation,
    textColor,
  },
  props,
) => {
  return (
    <View
      style={{
        height: 50,
        alignItems: 'center',
        width: '100%',
        flexDirection: 'row',
        elevation: 0,
        backgroundColor: isTransparent ? 'transparent' : 'white',
      }}>
      {leftArrow && (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            width: '15%',
            // padding: 5,
            // borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor: 'pink'
          }}>
          <Ionicons name="arrow-back" size={20} color={'white'} />
        </TouchableOpacity>
      )}

      <View
        style={{
          flex: 1,
          // borderWidth: 1,

          alignItems: textAlign ? textAlign : 'center',
        }}>
        {text && (
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              letterSpacing: 0.5,

              color: textColor ? textColor : '#ED1C24',
            }}>
            {text}
          </Text>
        )}
      </View>
      <View
        style={{
          width: '15%',
          // borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity>
          {searchIcon && <Ionicons name="search" size={20} color={'#241332'} />}
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default App;
