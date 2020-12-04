import React from 'react';
import {Text, Image, TouchableOpacity, Linking} from 'react-native';
import {theme} from '../../../constants/theme';

const App = () => {
  return (
    <TouchableOpacity
    onPress={()=>Linking.openURL('https://www.google.com/')}
      style={{
        width: '45%',
        height: 45,
        backgroundColor: theme.googleButtonColor.background,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        elevation: 5,
      }}>
      <Image
        source={require('../../../assets/icons/google.png')}
        style={{height: 25, width: 20, resizeMode: 'contain'}}
      />
      <Text
        style={{
          fontWeight: '600',
          fontSize: 13,
          // fontWeight: 'bold',
          letterSpacing: 0.5,
          color: theme.googleButtonColor.textColor,
        }}>
        {' '}
        Google
      </Text>
    </TouchableOpacity>
  );
};
export default App;
