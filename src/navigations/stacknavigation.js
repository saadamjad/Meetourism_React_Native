import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import signin from '../screens/auth/signin';
import otp from '../screens/auth/otp';
import home from '../screens/homes/home';
import task from '../screens/homes/task';
import describepackage from '../screens/homes/describepackage';
import drawer from '../navigations/drawernavigation';
import datescreen from '../screens/homes/datetime';
import chooseroute from '../screens/homes/chooseroute';
import setyourbudget from '../screens/homes/setyourbudget';
import success from '../screens/homes/success';
import contactinfo from '../screens/homes/contactinfo';
import taskdetail from '../screens/homes/taskdetail';
import successtask from '../screens/homes/successtask';
import splash from '../screens/auth/splash';
const Stack = createStackNavigator();

function Auth() {
  return (
    <Stack.Navigator initialRouteName={'splash'}>
      <Stack.Screen
        name="signin"
        component={signin}
        options={{headerShown: false}}
      />
      <Stack.Screen name="otp" component={otp} options={{headerShown: false}} />
      <Stack.Screen
        name="splash"
        component={splash}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export function Homes() {
  return (
    <Stack.Navigator initialRouteName={'home'}>
      <Stack.Screen
        name="home"
        component={home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="task"
        component={task}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="describepackage"
        component={describepackage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="datescreen"
        component={datescreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="chooseroute"
        component={chooseroute}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="setyourbudget"
        component={setyourbudget}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="success"
        component={success}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="contactinfo"
        component={contactinfo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="taskdetail"
        component={taskdetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="successtask"
        component={successtask}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

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
          name="Homes"
          component={Homes}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="drawer"
          component={drawer}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
