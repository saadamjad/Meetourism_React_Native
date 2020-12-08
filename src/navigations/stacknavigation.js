import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import signin from '../screens/auth/signin';
// import otp from '../screens/auth/otp';
// import home from '../screens/homes/home';
// import splash from '../screens/tutorial'
import drawer from '../navigations/drawernavigation';
import splash from '../screens/tutorial';
import bottomtab from '../navigations/bottomtab';
const Stack = createStackNavigator();

function Auth() {
  return (
    <Stack.Navigator initialRouteName={'splash'}>
      <Stack.Screen
        name="signin"
        component={signin}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen name="otp" component={otp} options={{headerShown: false}} /> */}
      <Stack.Screen
        name="splash"
        component={splash}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

// export function Homes() {
//   return (
//     <Stack.Navigator initialRouteName={'home'}>
//       <Stack.Screen
//         name="home"
//         component={home}
//         options={{headerShown: false}}
//       />
//     </Stack.Navigator>
//   );
// }

function App() {
  return (
    <NavigationContainer headerMode="none" i>
      <Stack.Navigator initialRouteName={'Auth'}>
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="drawer"
          component={drawer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="bottomtab"
          component={bottomtab}
          // options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
