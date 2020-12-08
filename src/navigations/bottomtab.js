// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import Setting from '../screens/setting';
// import dashboard from '../screens/dashboard';
// // import setting from '../screens/profile/'
// const Tab = createBottomTabNavigator();

// function bottomtab() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="setting" component={Setting} />
//       {/* <Tab.Screen name="dashboard" component={dashboard} /> */}
//     </Tab.Navigator>
//   );
// }

// export default {bottomtab};

import React from 'react';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Setting from '../screens/setting';
import Profile from '../screens/profile/home/home';

import Dashboard from '../screens/dashboard';
import Chat from '../screens/chat/allmessages';
import Alloffers from '../screens/alloffers';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Tab = createBottomTabNavigator();

function MyDrawer(props) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#e91e63',
        showLabel: false,
      }}>
      <Tab.Screen
        name="alloffers"
        component={Alloffers}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="local-offer" size={20} color={'#2E2323'} />
          ),
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-multiple"
              size={20}
              color={'#2E2323'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Entypo name="chat" size={20} color={'#2E2323'} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account"
              size={20}
              color={'#2E2323'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="setting"
        component={Setting}
        options={{
          headerShown: false,
          tabBarLabel: 'Find Plans',
          tabBarIcon: ({color, size}) => (
            <Fontisto name="player-settings" size={20} color={'#2E2323'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default MyDrawer;
