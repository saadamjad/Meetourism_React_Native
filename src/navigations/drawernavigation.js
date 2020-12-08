import React from 'react';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
// import home from '../screens/homes/home';
import {Homes} from './stacknavigation';
import DrawerContent from '../screens/customdrawer';
import Bottomtab from '../navigations/bottomtab';

console.log('App====', Homes);
const Drawer = createDrawerNavigator();

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
    </Drawer.Navigator>
  );
}
export default MyDrawer;
