import React from 'react';
import 'react-native-gesture-handler';
// import Stack from './src/navigations/stacknavigation';
// import BGcustom from './src/components/bgcustom';
// import Toast from 'react-native-toast-message';
import Tutorial from './src/screens/tutorial';
import {View} from 'react-native';
const App = (props) => {
  return (
    <View style={{flex: 1}}>
      <Tutorial />
    </View>
  );
};

export default App;
