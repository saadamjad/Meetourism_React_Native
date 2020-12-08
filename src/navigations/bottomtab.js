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
import Dashboard from '../screens/dashboard';
import Chat from '../screens/chat/allmessages';
import Alloffers from '../screens/alloffers';

const Tab = createBottomTabNavigator();

function MyDrawer(props) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="setting" component={Setting} />
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Alloffers" component={Alloffers} />
      {/* <Tab.Screen name="dashboard" component={dashboard} /> */}
    </Tab.Navigator>
  );
}
export default MyDrawer;
