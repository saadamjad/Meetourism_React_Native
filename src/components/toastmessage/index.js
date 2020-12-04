import React from 'react';
import Toast from 'react-native-toast-message';

function Tost(text1, text2, type) {
  Toast.show({
    type: type,
    position: 'top',
    text1: text1,
    text2: text2,
    visibilityTime: 4000,
    autoHide: true,
    topOffset: 30,
    bottomOffset: 40,
  });
}
export default Tost;
