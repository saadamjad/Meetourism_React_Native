import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import signin from '../screens/auth/signin';

import drawer from '../navigations/drawernavigation';
import splash from '../screens/tutorial';
import bottomtab, {AlloffersStack} from '../navigations/bottomtab';
import selectstatus from '../screens/home/status';
import allchats from '../screens/chat/allmessages';
import profilePreivew from '../screens/profile';

// import Dashboard from '../screens/dashboard';
// import Chat from '../screens/chat/allmessages';

import allresturant from '../screens/allresturant';
import Selectoffer from '../screens/alloffers/selectOffer';
import createOffer from '../screens/alloffers/createOffer';
import dealoffer1 from '../screens/alloffers/detailsOffer1';
import selectPaymentMethod from '../screens/selectPaymentMethod';
import AddPayment from '../screens/addPayment';
import PaymentDetails from '../screens/payment';
import detailsoffer from '../screens/alloffers/detailsOffer';
import Profile from '../screens/profile/home/home';
import history from '../screens/alloffers/history';
import offerUploadedSuccessfully from '../screens/offerUploaded';
import allProfile from '../screens/customdrawer/allProfile';
import followandBlock from '../screens/followandblock';
import Notification from '../screens/customdrawer/notification';
import innerchat from '../screens/livechat';
import SeeYourMatch from '../screens/matches';
import matchprofile from '../screens/matches/matchedprofile';

import userProfile from '../screens/profile';
import Search from '../screens/search';
const Stack = createStackNavigator();

function Auth() {
  return (
    <Stack.Navigator initialRouteName={'splash'}>
      <Stack.Screen
        name="signin"
        component={signin}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen name="otp" component={otp} options={{headerShown: false}} /> */}
      <Stack.Screen
        name="splash"
        component={splash}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
function HomeStack() {
  return (
    <Stack.Navigator initialRouteName={'selectstatus'}>
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
      <Stack.Screen
        name="innerchat"
        component={innerchat}
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
      {/* offers and create offers */}
      {/* <Stack.Screen
        name="Dashboard"
        component={Dashboard}
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
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
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
    </Stack.Navigator>
  );
}
export function Chat() {
  return (
    <Stack.Navigator initialRouteName={'selectstatus'}>
      <Stack.Screen
        name="allchats"
        component={allchats}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer headerMode="none" i>
      <Stack.Navigator initialRouteName={'Auth'}>
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeStack"
          component={HomeStack}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="search"
          component={Search}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="detailoffer"
          component={dealoffer1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="drawer"
          component={drawer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="allofferflow"
          component={AlloffersStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="bottomtab"
          component={bottomtab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Status"
          component={Status}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
