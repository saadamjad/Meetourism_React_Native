import React from 'react';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Setting from '../screens/setting';
// import Profile from '../screens/profile/home/home';

import Dashboard from '../screens/dashboard';
import Chat from '../screens/chat/allmessages';
import Alloffers from '../screens/alloffers';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import allresturant from '../screens/allresturant';
import Selectoffer from '../screens/alloffers/selectOffer';
import createOffer from '../screens/alloffers/createOffer';
import {ImageBackground, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import dealoffer1 from '../screens/alloffers/detailsOffer1';
import selectPaymentMethod from '../screens/selectPaymentMethod';
import AddPayment from '../screens/addPayment';
import PaymentDetails from '../screens/payment';
import detailsoffer from '../screens/alloffers/detailsOffer';
import Profile from '../screens/profile/home/home';
import history from '../screens/alloffers/history';
import offerUploadedSuccessfully from '../screens/offerUploaded';
import profile from '../screens/profile';
import allProfile from '../screens/customdrawer/allProfile';
import followandBlock from '../screens/followandblock';
import Notification from '../screens/customdrawer/notification';
import innerchat from '../screens/livechat';
import SeeYourMatch from '../screens/matches';
import matchprofile from '../screens/matches/matchedprofile';
import userhome from '../screens/customdrawer';
import Cruhes from '../screens/crushes';
import userProfile from '../screens/profile';

import Home from '../screens/home';
import DealOffer from '../screens/alloffers/detailsOffer';
import Successful from '../screens/successful';

const Tab = createBottomTabNavigator();

function MyDrawer(props) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        inactiveTintColor: 'gray',
        activeTintColor: 'black',
        showLabel: false,
      }}
      initialRouteName="DashboardStack">
      <Tab.Screen
        name="alloffers"
        // component={Alloffers}
        component={AlloffersStack}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            console.log('===========', color),
            (
              // <MaterialIcons name="local-offer" size={20} color={'#2E2323'} />
              <Image
                source={require('../assets/icons/path.png')}
                style={{height: 18, width: 18, tintColor: color}}
                resizeMode="contain"
              />
            )
          ),
        }}
      />
      <Tab.Screen
        name="DashboardStack"
        component={DashboardStack}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-multiple"
              size={20}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatMainStack}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/icons/Chat.png')}
              style={{height: 18, width: 18, tintColor: color}}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={CrushesMainStack}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" size={20} color={color} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="setting"
        component={null}
        options={{
          headerShown: false,
          tabBarLabel: 'Find Plans',
          tabBarIcon: ({color, size}) => (
            // <Fontisto name="player-settings" size={20} color={'#2E2323'} />
            <Image
              source={require('../assets/icons/Setting.png')}
              style={{height: 18, width: 18, tintColor: color}}
              resizeMode="contain"
            />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}

const CrushesStack = createStackNavigator();
export function CrushesMainStack() {
  return (
    <CrushesStack.Navigator initialRouteName={'Cruhes'}>
      <CrushesStack.Screen
        name="Cruhes"
        component={Cruhes}
        options={{headerShown: false}}
      />
      <CrushesStack.Screen
        name="followandBlock"
        component={followandBlock}
        options={{headerShown: false}}
      />
      <CrushesStack.Screen
        name="innerchat"
        component={innerchat}
        options={{headerShown: false}}
      />
    </CrushesStack.Navigator>
  );
}

const userhomeStack = createStackNavigator();
export function UserHomeMainStack() {
  return (
    <userhomeStack.Navigator initialRouteName={'userhome'}>
      <userhomeStack.Screen
        name="userhome"
        component={userhome}
        options={{headerShown: false}}
      />
    </userhomeStack.Navigator>
  );
}

const chatStack = createStackNavigator();
export function ChatMainStack() {
  return (
    <chatStack.Navigator initialRouteName={'selectstatus'}>
      <chatStack.Screen
        name="Chat"
        component={Chat}
        options={{headerShown: false}}
      />
      <chatStack.Screen
        name="innerchat"
        component={innerchat}
        options={{headerShown: false}}
      />
    </chatStack.Navigator>
  );
}
const offersStack = createStackNavigator();
export function AlloffersStack() {
  return (
    <offersStack.Navigator initialRouteName={'selectstatus'}>
      <offersStack.Screen
        name="Alloffers"
        component={allresturant}
        options={{headerShown: false}}
      />
      <offersStack.Screen
        name="Selectoffer"
        component={Selectoffer}
        options={{headerShown: false}}
      />
      <offersStack.Screen
        name="createOffer"
        component={createOffer}
        options={{headerShown: false}}
      />
      <offersStack.Screen
        name="dealoffer1"
        component={dealoffer1}
        options={{headerShown: false}}
      />
      {/* <offersStack.Screen
        name="dealoffer"
        component={DealOffer}
        options={{headerShown: false}}
      /> */}
      <offersStack.Screen
        name="dealoffer"
        component={Successful}
        options={{headerShown: false}}
      />
      <offersStack.Screen
        name="payment"
        component={selectPaymentMethod}
        options={{headerShown: false}}
      />
      <offersStack.Screen
        name="selectPaymentmethod"
        component={AddPayment}
        options={{headerShown: false}}
      />
      <offersStack.Screen
        name="PaymentDetails"
        component={PaymentDetails}
        options={{headerShown: false}}
      />
      <offersStack.Screen
        name="detailsoffer"
        component={detailsoffer}
        options={{headerShown: false}}
      />
    </offersStack.Navigator>
  );
}
const dashboardStack = createStackNavigator();
export function DashboardStack() {
  return (
    <offersStack.Navigator initialRouteName={'Home'}>
      {/* //SEE matches */}
      <dashboardStack.Screen
        name="SeeYourMatch"
        component={SeeYourMatch}
        options={{headerShown: false}}
      />
      <dashboardStack.Screen
        name="Chat"
        component={Chat}
        options={{headerShown: false}}
      />

      <dashboardStack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <dashboardStack.Screen
        name="matchprofile"
        component={matchprofile}
        options={{headerShown: false}}
      />
      <dashboardStack.Screen
        name="innerchat"
        component={innerchat}
        options={{headerShown: false}}
      />
      {/* //NOTIFICATION */}
      <dashboardStack.Screen
        name="Notification"
        component={Notification}
        options={{headerShown: false}}
      />
      {/* //ALL PROFILE STACK */}
      <dashboardStack.Screen
        name="allProfile"
        component={allProfile}
        options={{headerShown: false}}
      />
      <dashboardStack.Screen
        name="followandBlock"
        component={followandBlock}
        options={{headerShown: false}}
      />
      {/* offers and create offers */}
      {/* <dashboardStack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      /> */}
      <dashboardStack.Screen
        name="history"
        component={history}
        options={{headerShown: false}}
      />
      <dashboardStack.Screen
        name="offerUploadedSuccessfully"
        component={offerUploadedSuccessfully}
        options={{headerShown: false}}
      />
      <dashboardStack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <dashboardStack.Screen
        name="Alloffers"
        component={allresturant}
        options={{headerShown: false}}
      />
      <dashboardStack.Screen
        name="userProfile"
        component={userProfile}
        options={{headerShown: false}}
      />
      <dashboardStack.Screen
        name="Selectoffer"
        component={Selectoffer}
        options={{headerShown: false}}
      />
      <dashboardStack.Screen
        name="createOffer"
        component={createOffer}
        options={{headerShown: false}}
      />
      <dashboardStack.Screen
        name="dealoffer1"
        component={dealoffer1}
        options={{headerShown: false}}
      />
      <dashboardStack.Screen
        name="payment"
        component={selectPaymentMethod}
        options={{headerShown: false}}
      />
      <dashboardStack.Screen
        name="selectPaymentmethod"
        component={AddPayment}
        options={{headerShown: false}}
      />
      <dashboardStack.Screen
        name="PaymentDetails"
        component={PaymentDetails}
        options={{headerShown: false}}
      />
      <dashboardStack.Screen
        name="detailsoffer"
        component={detailsoffer}
        options={{headerShown: false}}
      />
    </offersStack.Navigator>
  );
}
const profileStack = createStackNavigator();
export function profileMainStack() {
  return (
    <profileStack.Navigator initialRouteName={'selectstatus'}>
      <profileStack.Screen
        name="Alloffers"
        component={allresturant}
        options={{headerShown: false}}
      />
      <profileStack.Screen
        name="Selectoffer"
        component={Selectoffer}
        options={{headerShown: false}}
      />
      <profileStack.Screen
        name="createOffer"
        component={createOffer}
        options={{headerShown: false}}
      />
      <profileStack.Screen
        name="dealoffer1"
        component={dealoffer1}
        options={{headerShown: false}}
      />
      <profileStack.Screen
        name="payment"
        component={selectPaymentMethod}
        options={{headerShown: false}}
      />
      <profileStack.Screen
        name="selectPaymentmethod"
        component={AddPayment}
        options={{headerShown: false}}
      />
      <profileStack.Screen
        name="PaymentDetails"
        component={PaymentDetails}
        options={{headerShown: false}}
      />
      <profileStack.Screen
        name="detailsoffer"
        component={detailsoffer}
        options={{headerShown: false}}
      />
    </profileStack.Navigator>
  );
}

export default MyDrawer;
