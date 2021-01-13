import React from 'react';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
// import home from '../screens/homes/home';
import {Homes} from './stacknavigation';
import DrawerContent from '../screens/customdrawer';
import Bottomtab from '../navigations/bottomtab';
import Match from '../screens/matches';
import matchprofile from '../screens/matches/matchedprofile';
import {createStackNavigator} from '@react-navigation/stack';
import allchat from '../screens/chat/innerchat';
import dashborad from '../screens/dashboard';
import {NavigationContainer} from '@react-navigation/native';
import Calender from '../screens/calendar';

console.log('App====', Homes);
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function MyDrawer(props) {
  return (
    <Drawer.Navigator
      drawerType="slide"
      // initialRouteName="Home"
      drawerStyle={{
        backgroundColor: '#241332',
        width: '100%',
        justifyContent: 'center',
      }}
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        options={{headerShown: false, drawerLabel: false}}
        name="setting"
        component={Bottomtab}
      />
      <Drawer.Screen
        options={{headerShown: false, drawerLabel: false}}
        name="Match"
        component={Matches}
      />
      <Drawer.Screen
        options={{headerShown: false, drawerLabel: false}}
        name="Calender"
        component={Calender}
      />
      <Drawer.Screen
        options={{headerShown: false, drawerLabel: false}}
        name="adminscreens"
        component={adminscreens}
      />
    </Drawer.Navigator>
  );
}
function Matches(props) {
  return (
    <Stack.Navigator initialRouteName={'Match'}>
      <Stack.Screen
        name="Match"
        component={Match}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="matchprofile"
        component={matchprofile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="allchat"
        component={allchat}
        options={{headerShown: false}}
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
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
export default MyDrawer;
