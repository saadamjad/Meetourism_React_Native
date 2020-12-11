import React from 'react';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
// import home from '../screens/homes/home';
import {Homes} from './stacknavigation';
import DrawerContent from '../screens/customdrawer';
import Bottomtab from '../navigations/bottomtab';
import Match from '../screens/matches';
import {createStackNavigator} from '@react-navigation/stack';

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
    </Stack.Navigator>
  );
}
export default MyDrawer;
