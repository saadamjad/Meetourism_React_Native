import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const App = (props) => {
  return (
    <View
      style={{
        height: 100,
        width: '100%',
        borderWidth: 1,
        backgroundColor: 'blue',
      }}>
      <Text> Inner mesages  </Text>
    </View>
  );
};
export default App;
