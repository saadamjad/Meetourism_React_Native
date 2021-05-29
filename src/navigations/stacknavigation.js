import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import signin from '../screens/auth/signin';

import drawer from '../navigations/drawernavigation';
import splash from '../screens/tutorial';

import selectstatus from '../screens/home/status';
// import ChooseYourInterest from '../screens/home/status';
import allchats from '../screens/chat/allmessages';
import profilePreivew from '../screens/profile';
import Home from '../screens/home';

import allresturant from '../screens/allresturant';
import Selectoffer from '../screens/alloffers/selectOffer';
import createOffer from '../screens/alloffers/createOffer';
import dealoffer1 from '../screens/alloffers/detailsOffer1';
import offerdescriptions from '../screens/offerdescriptions';
import selectPaymentMethod from '../screens/selectPaymentMethod';
import AddPayment from '../screens/addPayment';
import PaymentDetails from '../screens/payment';
import detailsoffer from '../screens/alloffers/detailsOffer';
// import Profile from '../screens/profile/home/home';
import history from '../screens/alloffers/history';
import offerUploadedSuccessfully from '../screens/offerUploaded';
import allProfile from '../screens/customdrawer/allProfile';
import followandBlock from '../screens/followandblock';
import Notification from '../screens/customdrawer/notification';
import innerchat from '../screens/livechat';
import SeeYourMatch from '../screens/matches';
import matchprofile from '../screens/matches/matchedprofile';
import SelectPaymentType from '../screens/selectpaymenttype';
import location from '../screens/location';
import chooseyourinterest from '../screens/chooseyourinterest';
import yourinterests from '../screens/yourinterests';

import userProfile from '../screens/profile';
import Search from '../screens/search';
import Successful from '../screens/successful';
import Cruhes from '../screens/crushes';
import Friends from '../screens/friends';
import userorders from '../screens/userorders';

// ALL PARTNERS SCREENS
import Hillviewresturant from '../screens/allresturant';
import Createoffer from '../screens/alloffers/createOffer';
import PartnerHome from '../screens/partnerhome';
import SelectOffer from '../screens/alloffers/selectOffer';
import Createnewoffer from '../screens/alloffers/createnewoffer';
import confirmedoffers from '../screens/alloffers/confirmations';
import Gallery from '../components/gallery';
import ForgotPassword from '../screens/auth/forgotpassword';
import Splash2 from '../screens/auth/splash';
import applyfiltersresult from '../screens/applyfiltersresult';
const Stack = createStackNavigator();

function Auth() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash2"
        component={Splash2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="splash"
        component={splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="signin"
        component={signin}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="profilePreivew"
        component={profilePreivew}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen name="otp" component={otp} options={{headerShown: false}} /> */}
    </Stack.Navigator>
  );
}

export function Status() {
  return (
    <Stack.Navigator initialRouteName={'selectstatus'}>
      <Stack.Screen
        name="selectstatus"
        component={selectstatus}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Gallery"
        component={Gallery}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="chooseyourinterest"
        component={chooseyourinterest}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="yourinterests"
        component={yourinterests}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="profilePreivew"
        component={profilePreivew}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SeeYourMatch"
        component={SeeYourMatch}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="matchprofile"
        component={matchprofile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer headerMode="none">
      <Stack.Navigator initialRouteName={'Auth'}>
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="drawer"
          component={drawer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="statusstack"
          component={Status}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="userProfile"
          component={userProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PartnerStack"
          component={PartnerStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export function ProfileStack() {
  return (
    <Stack.Navigator initialRouteName={'Home'}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Gallery"
        component={Gallery}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Friends"
        component={Friends}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="userorders"
        component={userorders}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="SeeYourMatch"
        component={SeeYourMatch}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Cruhes"
        component={Cruhes}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="matchprofile"
        component={matchprofile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="detailoffer"
        component={dealoffer1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="offerdescriptions"
        component={offerdescriptions}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="allchats"
        component={allchats}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="innerchat"
        component={innerchat}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SelectPaymentType"
        component={SelectPaymentType}
        options={{headerShown: false}}
      />

      {/* //NOTIFICATION */}
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{headerShown: false}}
      />
      {/* //ALL PROFILE STACK */}
      <Stack.Screen
        name="allProfile"
        component={allProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="followandBlock"
        component={followandBlock}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="location"
        component={location}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="chooseyourinterest"
        component={chooseyourinterest}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="yourinterests"
        component={yourinterests}
        options={{headerShown: false}}
      /> */}

      <Stack.Screen
        name="history"
        component={history}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="offerUploadedSuccessfully"
        component={offerUploadedSuccessfully}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="Alloffers"
        component={allresturant}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="userProfile"
        component={userProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Selectoffer"
        component={Selectoffer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="createOffer"
        component={createOffer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="dealoffer1"
        component={dealoffer1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="payment"
        component={selectPaymentMethod}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="selectPaymentmethod"
        component={AddPayment}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PaymentDetails"
        component={PaymentDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="detailsoffer"
        component={detailsoffer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="search"
        component={Search}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="dealoffer"
        component={Successful}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export function PartnerStack() {
  return (
    <Stack.Navigator initialRouteName={'Hillviewresturant'}>
      <Stack.Screen
        name="Hillviewresturant"
        component={Hillviewresturant}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="applyfiltersresult"
        component={applyfiltersresult}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Gallery"
        component={Gallery}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="createnewoffer"
        component={Createnewoffer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="confirmedoffers"
        component={confirmedoffers}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="partnerhome"
        component={PartnerHome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SelectOffer"
        component={SelectOffer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="allchats"
        component={allchats}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="innerchat"
        component={innerchat}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="createOffer"
        component={createOffer}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
export default App;
