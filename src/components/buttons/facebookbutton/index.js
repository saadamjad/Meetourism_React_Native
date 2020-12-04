import React from 'react';
import {Text, Image, TouchableOpacity, Linking} from 'react-native';
import {theme} from '../../../constants/theme';

const App = () => {
  return (
    <TouchableOpacity
      onPress={() => Linking.openURL('https://www.facebook.com/')}
      style={{
        width: '45%',
        height: 45,
        backgroundColor: theme.facebookButtonColor.background,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        elevation: 5,
      }}>
      <Image
        source={require('../../../assets/icons/f.png')}
        style={{height: 30, width: 25, resizeMode: 'contain'}}
      />

      <Text
        style={{
          fontWeight: '600',
          fontSize: 13,
          // fontWeight: 'bold',
          letterSpacing: 0.5,
          color: theme.facebookButtonColor.textColor,
        }}>
        Facebook
      </Text>
    </TouchableOpacity>
  );
};
export default App;
