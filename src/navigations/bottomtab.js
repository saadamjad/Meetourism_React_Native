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
import allresturant from '../screens/allresturant';
import Selectoffer from '../screens/alloffers/selectOffer';
import createOffer from '../screens/alloffers/createOffer';
import {ImageBackground, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();

function MyDrawer(props) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        inactiveTintColor: 'gray',
        activeTintColor: 'black',
        showLabel: false,
      }}
      initialRouteName="Dashboard">
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
        name="Dashboard"
        component={Dashboard}
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
        component={Chat}
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
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" size={20} color={color} />
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
            // <Fontisto name="player-settings" size={20} color={'#2E2323'} />
            <Image
              source={require('../assets/icons/Setting.png')}
              style={{height: 18, width: 18, tintColor: color}}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tab.Navigator>
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
      {/* <offersStack.Screen
        name="createOffer"
        component={createOffer}
        options={{headerShown: false}}
      /> */}
    </offersStack.Navigator>
  );
}
export default MyDrawer;
