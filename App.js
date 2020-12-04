import React from 'react';
import 'react-native-gesture-handler';
import Stack from './src/navigations/stacknavigation';
import BGcustom from './src/components/bgcustom';
import Toast from 'react-native-toast-message';
const App = (props) => {
  return (
    // <BGcustom />
    <>
      <Stack navigation={props.navigation} />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </>
  );
};

export default App;
