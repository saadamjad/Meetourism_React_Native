import React from 'react';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
// import home from '../screens/homes/home';
import {Homes} from './stacknavigation';
import DrawerContent from '../screens/customdrawer';
// import DrawerContent from '../screens/';

console.log('App====', Homes);
const Drawer = createDrawerNavigator();

function MyDrawer(props) {
  return (
    <Drawer.Navigator
      drawerType="slide"
      // initialRouteName="Home"
      drawerStyle={{backgroundColor: '#ef6c00'}}
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        options={{headerShown: false}}
        name="Home"
        component={DrawerContent}
      />
      {/* <Drawer.Screen
        options={{headerShown: false}}
        name="Home"
        component={DrawerContent}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name="Home"
        component={DrawerContent}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name="Home"
        component={DrawerContent}
      /> */}
    </Drawer.Navigator>
  );
}
export default MyDrawer;
