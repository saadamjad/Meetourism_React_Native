import React from 'react';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
// import home from '../screens/homes/home';
import {Homes} from './stacknavigation';

console.log('App====', Homes);
const Drawer = createDrawerNavigator();

function MyDrawer(props) {
  return (
    <Drawer.Navigator
      drawerType="slide"
      // initialRouteName="Home"
      drawerStyle={{backgroundColor: '#ef6c00'}}>
      <Drawer.Screen
        options={{headerShown: false}}
        name="Home"
        component={Homes}
      />
    </Drawer.Navigator>
  );
}
export default MyDrawer;
