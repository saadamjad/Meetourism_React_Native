import React from 'react';
import 'react-native-gesture-handler';
import Stack from './src/navigations/stacknavigation';
// import BGcustom from './src/components/bgcustom';
import Toast from 'react-native-toast-message';
import Tutorial from './src/screens/tutorial';
import SignIn from './src/screens/auth/signin';
import Messages from './src/screens/home/messages';
const App = (props) => {
  return (
    <>
      {/* <BGcustom /> */}
      {/* <SignIn /> */}
      <Stack navigation={props.navigation} />
      {/* <Messages /> */}
      {/* <Toast ref={(ref) => Toast.setRef(ref)} /> */}
    </>
  );
};

export default App;
