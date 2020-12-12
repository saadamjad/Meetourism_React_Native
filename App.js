import React from 'react';
import 'react-native-gesture-handler';
import Stack from './src/navigations/stacknavigation';
// import BGcustom from './src/components/bgcustom';
import Toast from 'react-native-toast-message';
import Tutorial from './src/screens/tutorial';
import SignIn from './src/screens/auth/signin';
import Status from './src/screens/home/status/index';
import Profile from './src/screens/profile';
import CreateOffer from './src/screens/alloffers/createOffer';
import SelectOffer from './src/screens/alloffers/selectOffer';
// import DetailOffer from './src/screens/alloffers/detailsOffer';
import DetailOffer1 from './src/screens/alloffers/detailsOffer1';
import History from './src/screens/alloffers/history';
const App = (props) => {
  return (
    <>
      {/* <BGcustom /> */}
      {/* <Profile /> */}
      {/* <Stack navigation={props.navigation} /> */}
      {/* <CreateOffer /> */}
      {/* <SelectOffer /> */}
      {/* <DetailOffer /> */}
      {/* <DetailOffer1 /> */}
      <History />{/* <Status /> */}
      {/* <Toast ref={(ref) => Toast.setRef(ref)} /> */}
    </>
  );
};

export default App;
