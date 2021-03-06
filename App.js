import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import Stack from './src/navigations/stacknavigation';
// import BGcustom from './src/components/bgcustom';
import Toast from 'react-native-toast-message';
import Tutorial from './src/screens/tutorial';
import SignIn from './src/screens/auth/signin';
import Status from './src/screens/home/status/index';
import Profile from './src/screens/profile';
import CreateOffer from './src/screens/alloffers/createOffer';
import SelectOffer from './src/screens/alloffers/selectOffer';
// import DetailOffer from './src/screens/alloffers/detailsOffer';
import DetailOffer1 from './src/screens/alloffers/detailsOffer1';
// import History from './src/screens/alloffers/history';

import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store';
import {Provider} from 'react-redux';
// import { translate } from 'react-i18next';
import {withTranslation} from 'react-i18next';
import OneSignal from 'react-native-onesignal';
// import './src/I18n'

const App = (props) => {
  const _Stack = () => {
    return <Stack navigation={props.navigation} />;
  };
  useEffect(() => {
    OneSignal.setLogLevel(6, 0);
    OneSignal.setAppId('7d35068c-2c86-4a49-bc6b-b8d38d5c2f05');
    OneSignal.getDeviceState().then((data) => {
      console.log("GOT THE DATA ! " ,data)
    })
    //END OneSignal Init Code

    //Prompt for push on iOS
    // OneSignal.promptForPushNotificationsWithUserResponse((response) => {
    //   console.log('Prompt response:', response);
    // });

    //Method for handling notifications received while app in foreground
    OneSignal.setNotificationWillShowInForegroundHandler(
      (notificationReceivedEvent) => {
        console.log(
          'OneSignal: notification will show in foreground:',
          notificationReceivedEvent,
        );
        let notification = notificationReceivedEvent.getNotification();
        console.log('notification: ', notification);
        const data = notification.additionalData;
        console.log('additionalData: ', data);
        // Complete with null means don't show a notification.
        notificationReceivedEvent.complete(notification);
      },
    );

    //Method for handling notifications opened
    OneSignal.setNotificationOpenedHandler((notification) => {
      console.log('OneSignal: notification opened:', notification);
    });
  }, []);
  // const ReloadAppOnLanguageChange = withTranslation('translation', {
  //   bindI18n: 'languageChanged',
  //   bindStore: false,
  // })(_Stack);
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {/* <ReloadAppOnLanguageChange /> */}
          {_Stack()}
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;

// import React from 'react';
// import {translate } from 'react-i18next';
// import i18n from './src/I18n/index';
// import { createStackNavigator } from 'react-navigation';
// import Home from './src/screens/Home';
// import Page2 from './src/screens/Page2';

// const Stack = createStackNavigator({
//   Home: { screen: Home },
//   Page2: { screen: Page2 }
// });

// // Wrapping a stack with translation hoc asserts we get new render on language change
// // the hoc is set to only trigger rerender on languageChanged
// const WrappedStack = ({t}) => {
//   return <Stack screenProps={{ t }} />;
// };
// const ReloadAppOnLanguageChange = translate('common', {
//   bindI18n: 'languageChanged',
//   bindStore: false,
// })(WrappedStack);

// // The entry point using a react navigation stack navigation
// // gets wrapped by the I18nextProvider enabling using translations
// // https://github.com/i18next/react-i18next#i18nextprovider
// export default class App extends React.Component {
//   render() {
//       return (
//             <ReloadAppOnLanguageChange />
//       );
//   }
// }
