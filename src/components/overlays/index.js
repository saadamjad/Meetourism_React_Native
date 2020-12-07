/** @format */

import React, {useState} from 'react';
import {View, Text} from 'react-native';

// import styles from './styles';

import {Button, Overlay} from 'react-native-elements';

const App = (props) => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View>
      <Button title="Open Overlay" onPress={toggleOverlay} />

      <Overlay
      // isVisible={props.visible}
      // onBackdropPress={props.onBackdropPress}
      >
        {props.children}
        {/* <Text>Hello from Overlay!</Text> */}
      </Overlay>
    </View>
  );
};

export default App;
