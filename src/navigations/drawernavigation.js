import React from 'react';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';

import DrawerContent from '../screens/customdrawer';

import { ProfileStack } from './stacknavigation';
import Match from '../screens/matches';
import matchprofile from '../screens/matches/matchedprofile';
import { createStackNavigator } from '@react-navigation/stack';
import allchat from '../screens/chat/innerchat';
import dashborad from '../screens/dashboard';
import Calender from '../screens/calendar';
import Search from '../screens/search';
import { theme } from '../constants/theme';
import Langauge from '../screens/language';
import Aboutus from '../aboutus';
import ContactUs from '../contactus';
import Privacypolicy from '../privacypolicy';

// console.log('App====', Homes);
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function MyDrawer(props) {
  return (
    <Drawer.Navigator
      drawerType="slide"
      // initialRouteName="Home"
      drawerStyle={{
        backgroundColor: theme.primaryColor,
        width: '100%',
        justifyContent: 'center',
      }}
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        options={{ headerShown: false, drawerLabel: false }}
        name="profilestack"
        component={ProfileStack}
      />
      <Drawer.Screen
        options={{ headerShown: false, drawerLabel: false }}
        name="Privacypolicy"
        component={Privacypolicy}
      />

      {/* <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
        drawerLabel={false}
      /> */}

      <Drawer.Screen
        options={{ headerShown: false, drawerLabel: false }}
        name="Calender"
        component={Calender}
      />
      <Drawer.Screen
        options={{ headerShown: false, drawerLabel: false }}
        name="Match"
        component={Matches}
      />
      <Drawer.Screen
        options={{ headerShown: false, drawerLabel: false }}
        name="Langauge"
        component={Langauge}
      />

      <Drawer.Screen
        options={{ headerShown: false, drawerLabel: false }}
        name="search"
        component={Search}
      />
      <Drawer.Screen
        options={{ headerShown: false, drawerLabel: false }}
        name="aboutus"
        component={Aboutus}
      />
      <Drawer.Screen
        options={{ headerShown: false, drawerLabel: false }}
        name="ContactUs"
        component={ContactUs}
      />
      {/* <Drawer.Screen
        options={{headerShown: false, drawerLabel: false}}
        name="offers"
        component={AlloffersStack}
      /> */}
      {/* <Drawer.Screen
        options={{ headerShown: false, drawerLabel: false }}
        name="adminscreens"
        component={adminscreens}
      /> */}
    </Drawer.Navigator>
  );
}
function Matches(props) {
  return (
    <Stack.Navigator initialRouteName={'Match'}>
      <Stack.Screen
        name="Match"
        component={Match}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="matchprofile"
        component={matchprofile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="allchat"
        component={allchat}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
function adminscreens(props) {
  return (
    <Stack.Navigator initialRouteName={'dashborad'}>
      <Stack.Screen
        name="dashborad"
        component={dashborad}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
export default MyDrawer;
