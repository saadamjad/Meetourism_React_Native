/** @format */

import React, {useState} from 'react';
import {View, Text} from 'react-native';

// import styles from './styles';

import {Button, Overlay} from 'react-native-elements';

const App = ({toggleOverlay, visible, children}) => {
  return (
    <Overlay
      isVisible={visible}
      onBackdropPress={toggleOverlay}
      overlayStyle={{borderRadius: 50, backgroundColor: 'transparent'}}>
      {children}
      {/* <Text>Hello from Overlay!</Text> */}
    </Overlay>
  );
};

export default App;
