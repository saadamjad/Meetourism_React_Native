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
// import History from './src/screens/alloffers/history';
import HoldOn from './src/screens/holdOn';
import SelectPaymentMethod from './src/screens/selectPaymentMethod';
import AddPayment from './src/screens/addPayment';
import Notification from './src/screens/customdrawer/notification';
import AllProfiles from './src/screens/customdrawer/allProfile';
import Crushes from './src/screens/crushes';
import OfferUploaded from './src/screens/offerUploaded';
import Successfull from './src/screens/alloffers/detailsOffer';
import LiveChat from './src/screens/livechat';
import Allresturant from './src/screens/allresturant';
import Home from './src/screens/home';

const App = (props) => {
  return (
    <>
      {/* <BGcustom /> */}
      {/* <Profile /> */}
      <Stack navigation={props.navigation} />
      {/* <Home /> */}
      {/* <CreateOffer /> */}
      {/* <SelectOffer /> */}
      {/* <DetailOffer /> */}
      {/* <DetailOffer1 /> */}
      {/* <HoldOn /> */}
      {/* <SelectPaymentMethod /> */}
      {/* <AddPayment /> */}
      {/* <Status /> */}
      {/* <AllProfiles /> */}
      {/* <Crushes /> */}
      {/* <OfferUploaded /> */}
      {/* <Successfull /> */}
      {/* <Allresturant /> */}
      {/* <Toast ref={(ref) => Toast.setRef(ref)} /> */}
    </>
  );
};

export default App;
