import React from 'react';
import 'react-native-gesture-handler';
import Stack from './src/navigations/stacknavigation';
// import BGcustom from './src/components/bgcustom';
import Toast from 'react-native-toast-message';
import Tutorial from './src/screens/tutorial';
import SignIn from './src/screens/auth/signin';
import Status from './src/screens/home/status';
const App = (props) => {
  return (
    <>
      {/* <BGcustom /> */}
      {/* <SignIn /> */}
      {/* <Stack navigation={props.navigation} /> */}
      <Status />
      {/* <Toast ref={(ref) => Toast.setRef(ref)} /> */}
    </>
  );
};

export default App;
