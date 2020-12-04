import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {theme} from '../../constants/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const App = ({isTransparent, text, isVisibleIcon, drawerIcon, navigation}) => {
  return (
    <View
      style={{
        height: 50,
        alignItems: 'center',
        width: '100%',
        flexDirection: 'row',
        elevation: 5,
        backgroundColor: isTransparent ? 'transparent' : theme.headerColor,
      }}>
      {isVisibleIcon && (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            width: '15%',
            padding: 5,
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor: 'pink'
          }}>
          <AntDesign
            name="arrowleft"
            size={20}
            color={theme.iconsColor.white}
          />
        </TouchableOpacity>
      )}
      {drawerIcon && (
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={{
            width: '15%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <FontAwesome name="bars" size={17} color={theme.iconsColor.white} />
        </TouchableOpacity>
      )}
      <View style={{flex: 1}}>
        {text && (
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              letterSpacing: 0.5,
              color: theme.textColors.white,
            }}>
            {text}
          </Text>
        )}
      </View>
    </View>
  );
};
export default App;
