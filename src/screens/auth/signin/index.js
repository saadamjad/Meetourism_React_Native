import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Dimensions,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
  StyleSheet,
  Platform,
  Linking,
} from 'react-native';

import { theme } from '../../../constants/theme';
import InstagramLogin from 'react-native-instagram-login';
// import styles from './styles';
import CustomView from '../../../components/customView';
import HoldOn from '../../holdOn';
import { connect } from 'react-redux';
import { Actions } from '../../../redux/actions/index';
import Toast from '../../../components/toastmessage';
import AnimatedLoader from '../../../components/loader';
import OneSignal from 'react-native-onesignal';

import {
  LoginManager,
  Settings,
  AccessToken,
  AuthenticationToken,
  LoginButton,
  Profile
} from 'react-native-fbsdk-next';
import { FastImageComponent } from '../../../components/fastimage';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
// GoogleSignin.configure()
GoogleSignin.configure({
  // scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile



  //new 
  // web client id 287091254475-s13uv3ferq136hvgt0qvd9dl8ukfbau8.apps.googleusercontent.com
  //client scret M5VIUk9G43FLJ7EJpqwdmwfX

  //Release web client id  287091254475-8h2jc50gvc72gcj0aamp596h6j0qmdlg.apps.googleusercontent.com

  webClientId:
    '287091254475-s13uv3ferq136hvgt0qvd9dl8ukfbau8.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
  offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  // hostedDomain: '', // specifies a hosted domain restriction
  // loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
  // forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
  // accountName: '', // [Android] specifies an account name on the device that should be used
  // iosClientId: '631241702922-pqn95r82fmfuthu5btrus4ufgfa1naur.apps.googleusercontent.com', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
});

import Geolocation from '@react-native-community/geolocation';
import { initReactI18next } from 'react-i18next';

const App = (props) => {
  // const { t, i18n } = useTranslation()
  const [instagramLogin, setInstagramLogin] = useState(useRef());

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setLoader(true)

      let _user = userInfo?.user;
      let data = {

        medium: "google",
        social_id: _user.id,
        email: _user.email,
        first_name: _user.givenName,
        last_name: _user.familyName,
        userName: _user.name,

        device_type: "android",
        device_token: state.deviceID

      }
      console.log("data", data)
      await props.SocialLoginAction(data, props.navigation, null, true, false, false)
      setLoader(false)



    } catch (error) {
      setLoader(false)

      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log("userinfo===", error)

        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log("userinfo===", error)

        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log("userinfo===", error)

        // play services not available or outdated
      } else {
        console.log("userinfo===", error)

        // some other error happened
      }
    }
  };


  const _GotDeviceId = () => {
    OneSignal.setLogLevel(6, 0);
    OneSignal.setAppId('7d35068c-2c86-4a49-bc6b-b8d38d5c2f05');
    OneSignal.getDeviceState().then((data) => {
      console.log("GOT THE DATA ! ", data.userId)
      setState({
        ...state, deviceID: data.userId
      })
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
  }

  const fbSignin = async () => {

    try {
      const result = await LoginManager.logInWithPermissions(
        ['public_profile', 'email'],
        'limited',
        'my_nonce',
      );
      // console.log("resulttttt,", result?.isCancelled);
      if (!result?.isCancelled) {

        if (Platform.OS === 'ios') {
          const result = await AuthenticationToken.getAuthenticationTokenIOS();
          console.log(result?.authenticationToken);
        } else {
          const result = AccessToken.getCurrentAccessToken().then((res1) => {
            console.log("res", res1)
            setLoader(true)

            _GraphApiGettingFacebookProfile(res1)



          }).catch((err) => {
            console.log("error in getCurrentAccessToken", err)
          })

        }
      }
    } catch (error) {
      console.log("eroror", error);
    }
  };






  const getLanguage = (language) => {
    if (language === 0) {
      console.log('English');
      return i18n.changeLanguage('en');
    } else if (language === 1) {
      return i18n.changeLanguage('zh');
    } else if (language === 2) {
      return i18n.changeLanguage('fr');
    }
  };

  const [signupValues, setSignvalues] = useState({
    // name: '',
    // email: '',
    // password: '',
    // confirmPassword: '',
    name: 'ok',
    email: 'ok@gmail.com',
    password: '123456789',
    confirmPassword: '123456789',
  });
  const [signInValues, setSignINvalues] = useState({
    email: 'ok@gmail.com',
    password: '123456789',

    // email: '',
    // password: '',
  });
  const ref = useRef();

  useEffect(() => {
    // console.log("1")
    Settings.initializeSDK();
    _GotDeviceId()

    ref.current?.setAddressText('Some Text blue');

    // _getCurrentLocation();
  }, []);

  const _getCurrentLocation = () => {
    Geolocation.getCurrentPosition((info) =>
      console.log('----', info.coords.latitude),
    );
  };
  const [state, setState] = useState({
    selectedIndex: 0,
    visible: false,
    userId: "",
    deviceID: "",
    routes: [
      { key: 'first', title: 'SignIn' },
      { key: 'second', title: 'SignUp' },
    ],
  });

  const [loader, setLoader] = useState(false);
  const [loaderMessage, setLoaderMessage] = useState('');

  const toggleOverlay = (data) => {
    setState({ ...state, visible: !state.visible, data: data });
  };

  const [elements, setElemtns] = useState([
    {
      placeholder: 'Email',
      isSecure: false,
      keyboardType: 'email-address',
    },
    { placeholder: 'Password', isSecure: true, keyboardType: 'default' },
  ]);
  const _SignIn = async (socialLogin) => {
    if (signInValues.email == '' || signInValues.password == '') {
      Toast('Error', 'Please both inputs', 'error');
    } else {
      setLoaderMessage('In');
      setLoader(socialLogin ? false : true);

      let data = {
        email: signInValues.email,
        password: signInValues.password,

        latitude: '25.0915',
        longitude: '67.9034',
        address: 'Test Address',
        device_token: state.deviceID

      };
      await props.Login(data, props.navigation, socialLogin);

      setLoader(false);
    }
  };



  const signInRoute = () => (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ alignItems: 'center' }}>
        {elements.map((val, i) => {
          return (
            <View
              style={{
                borderBottomColor:
                  i == 0 && signInValues.email.length > 0
                    ? theme.borderColor.activeBorderColor
                    : i == 1 && signInValues.password.length > 0
                      ? theme.borderColor.activeBorderColor
                      : theme.borderColor.inActiveBorderColor,
                borderBottomWidth: 1,
                width: '80%',
                height: 40,
                marginTop: 20,
              }}
              key={i}>
              <TextInput
                style={{
                  width: '100%',
                  height: '100%',
                  fontSize: 16,
                }}
                onChangeText={(text) =>
                  i == 0
                    ? setSignINvalues({ ...signInValues, email: text })
                    : setSignINvalues({ ...signInValues, password: text })
                }
                placeholder={val.placeholder}
                keyboardType={val.keyboardType}
                secureTextEntry={val.isSecure}
                value={i == 0 ? signInValues.email : signInValues.password}
              />
            </View>
          );
        })}
      </View>
      <View
        style={{
          justifyContent: 'flex-end',
          alignItems: 'center',
          flex: 1,
          paddingVertical: 40,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: theme.secondaryColor,
            width: '80%',
            height: 50,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={
            () => _SignIn()

            // props.navigation.navigate('Status')}
            // console.log('statee', signInValues)
            // props.navigation.replace('drawer')
          }
          activeOpacity={0.75}>
          <Text style={{ color: theme.textColor.whiteColor }}>CONTINUE</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            // backgroundColor: theme.secondaryColor,
            width: '80%',
            height: 50,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          activeOpacity={0.7}
          onPress={() => props.navigation.navigate('ForgotPassword')}>
          <Text
            style={{
              color: '#352641',
              fontSize: 12,
              fontWeight: 'bold',
            }}>
            FORGOT PASSWORD
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  const _onChangeText = (text, key) => {
    setSignvalues({ ...signupValues, [key]: text });
  };
  const _SocialIcons = () => {
    return (
      <View style={{ flexDirection: 'row', marginTop: 20, borderWidth: 0 }}>
        {[
          require('../../../assets/images/gmail.png'),
          require('../../../assets/images/instagram.png'),
          require('../../../assets/images/facebook.png'),
        ].map((val, ind) => (
          // <Image
          //   resizeMode="contain"
          //   source={val}
          //   style={{ height: 30, width: 30 }}
          //   resizeMode="contain"
          //   key={ind}
          // />
          <TouchableOpacity
            key={ind}
            // style={{}}
            onPress={() => {
              ind == 1
                ? instagramLogin.show()
                : ind == 2
                  ? fbSignin()
                  : signIn();
            }}>
            <FastImageComponent
              resizeMode="contain"
              source={val}
              style={{ height: 30, width: 30 }}
              resizeMode="contain"
              key={ind}
            />
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  const _Signup = async () => {
    let value =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        signupValues.email,
      );
    if (
      signupValues.name == '' ||
      signupValues.password == '' ||
      signupValues.confirmPassword == '' ||
      signupValues.email == ''
    ) {
      Toast('Error', 'please enter all inputs', 'error');
    } else if (!value) {
      Toast('Email Error', 'Please enter a valid email address', 'info');
    } else if (Number(signupValues.name)) {
      Toast('Username', 'Should Name Should Contain characters', 'info');
    } else if (signupValues.password.length <= 8) {
      Toast('Password', 'Password Should be more than 8 characters', 'info');
    } else if (signupValues.password !== signupValues.confirmPassword) {
      Toast(
        'Mismatched',
        'Password And Confirm Password Should Be Same',
        'info',
      );
    } else {
      setLoaderMessage('Up');
      let data = {
        type: 'email',
        value: signupValues.email,
      };
      _Api(data);
    }
  };
  const _Api = async (data) => {
    setLoader(true);

    let values = {
      name: signupValues.name,
      password: signupValues.password,
      confirmPassword: signupValues.confirmPassword,
      device_token: state.deviceID

    };
    console.log("BEFOREEEEEEEEEEEEEEee", values)
    let value = await props.CheckUser(data, props.navigation, values);
    if (!value) {
      setLoader(false);
    } else {
      console.log('resturn else', value);
      setLoader(false);

      toggleOverlay(value);
    }
  };

  const signUpRoute = () => (
    <>
      <View style={{ alignItems: 'center' }}>
        <View
          style={{
            backgroundColor: 'white',
            width: '90%',
            alignItems: 'center',
            borderRadius: 40,
            paddingVertical: 40,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}>
          <View
            style={{
              borderBottomColor: theme.borderColor.inActiveBorderColor,
              borderBottomWidth: 2,
              width: '80%',
              height: 40,
            }}>
            <TextInput
              style={{
                width: '100%',
                height: '100%',
                fontSize: 16,
              }}
              // value={email}
              value={signupValues.name}
              onChangeText={(text) => _onChangeText(text, 'name')}
              placeholder={'username'}
            />
          </View>
          <View
            style={{
              borderBottomColor: theme.borderColor.inActiveBorderColor,
              borderBottomWidth: 2,
              width: '80%',
              height: 40,
            }}>
            <TextInput
              style={{
                width: '100%',
                height: '100%',
                fontSize: 16,
              }}
              value={signupValues.email}
              onChangeText={(text) => _onChangeText(text, 'email')}
              placeholder={'email'}
            />
          </View>
          <View
            style={{
              borderBottomColor: theme.borderColor.inActiveBorderColor,
              borderBottomWidth: 2,
              width: '80%',
              height: 40,
            }}>
            <TextInput
              style={{
                width: '100%',
                height: '100%',
                fontSize: 16,
              }}
              value={signupValues.password}
              onChangeText={(text) => _onChangeText(text, 'password')}
              placeholder={'password'}
              secureTextEntry={true}
            />
          </View>
          <View
            style={{
              borderBottomColor: theme.borderColor.inActiveBorderColor,
              borderBottomWidth: 2,
              width: '80%',
              height: 40,
            }}>
            <TextInput
              style={{
                width: '100%',
                height: '100%',
                fontSize: 16,
              }}
              value={signupValues.confirmPassword}
              onChangeText={(text) => _onChangeText(text, 'confirmPassword')}
              placeholder={'confirm password'}
              secureTextEntry={true}
            />
          </View>
        </View>
        {_SocialIcons()}
      </View>
      <View
        style={{
          justifyContent: 'flex-end',
          alignItems: 'center',
          flex: 1,
          // height: '50%',
          paddingVertical: 40,
        }}>
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => {
            // props.Signup('helo');
            _Signup();
          }}
          style={{
            backgroundColor: theme.secondaryColor,
            width: '80%',
            height: 50,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{ color: theme.textColor.whiteColor }}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    </>
  );
  // const { t, i18n } = useTranslation()
  const _GraphApiGettingFacebookProfile = (res1) => {


    fetch('https://graph.facebook.com/v2.5/me?fields=email,first_name,last_name,friends&access_token=' + res1.accessToken)
      .then((response) => {
        response.json().then(async (json) => {
          console.log("json", json)

          var data = {
            medium: "facebook",
            social_id: res1.userID,
            first_name: json.first_name,
            last_name: json.last_name,
            userName: json.first_name + json.last_name,
            email: json.email,

            device_type: "android",
            device_token: state.deviceID

          }


          console.log("---data--- ", data);
          // console.log("---data--- " + Object(data));
          await props.SocialLoginAction(data, props.navigation, null, false, false, true)
          setLoader(false)


        })
      })
      .catch(() => {
        console.log('ERROR GETTING DATA FROM FACEBOOK')
      })
  }
  return (
    <CustomView withBg={state.selectedIndex == 1} bg={'white'} scroll>

      <View
        style={{
          width: '100%',
          height: 150,
          // backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        {['SIGN IN', 'SIGN UP'].map((val, i) => (
          <TouchableOpacity
            onPress={() => setState({ ...state, selectedIndex: i })}
            key={i}
            activeOpacity={0.7}
            style={{
              backgroundColor:
                state.selectedIndex == i ? theme.secondaryColor : 'white',
              width: 90,

              elevation: state.selectedIndex == i ? 0 : 1,
              height: 33,
              borderRadius: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color:
                  state.selectedIndex == i
                    ? theme.textColor.whiteColor
                    : theme.textColor.greyColor,
                fontSize: 12,
              }}>
              {val}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <InstagramLogin
        ref={(ref) => setInstagramLogin(ref)}
        appId="523961712184118"
        appSecret="faccaeb4a22f85b66af116ab98823bd6"
        redirectUrl="https://kindlelover.com/"
        // scopes={['public_profile']}
        scopes={['user_profile', 'user_media']}
        onLoginSuccess={(data) => {
          // console.log('GOT THE TOKEN!!', data);
          // props.navigation.replace('drawer');
          _SignIn()


        }}
        onLoginFailure={(data) => console.log(data)}
      />
      {/* <LoginButton
        publishPermissions={['publish_actions']}
        readPermissions={['public_profile']}
        onLoginFinished={(error, result) => {
          if (error) {
            console.log('login has error: ' + result.error);
          } else if (result.isCancelled) {
            console.log('login is cancelled.');
          } else {
            if (Platform.OS === 'ios') {
              AuthenticationToken.getAuthenticationTokenIOS().then((data) => {
                console.log(data?.authenticationToken);
              });
            } else {
              AccessToken.getCurrentAccessToken().then(async (data) => {
                console.log("response", data)
                console.log(data?.accessToken.toString());

                Profile.getCurrentProfile().then(res => {
                  console.log("ress", res)
                }
                  // function (currentProfile) {
                  //   // if (currentProfile) {
                  //   //   console.log("The current logged user is: " +
                  //   //     currentProfile.name
                  //   //     + ". His profile id is: " +
                  //   //     currentProfile.userID
                  //   //   );
                  //   // }
                  //   // else {
                  //   //   console.log("dont get it ")
                  //   // }
                  // }
                )
                // console.log("currentProfile", currentProfile)

              });
            }
          }
        }}
        onLogoutFinished={() => console.log('logout.')}
        loginTrackingIOS={'limited'}
        nonceIOS={'my_nonce'}
      /> */}


      {state.selectedIndex == '0' ? signInRoute() : signUpRoute()}
      <AnimatedLoader
        status={loader}
        loaderMessage={`Signing ${loaderMessage}`}
      />

      <HoldOn
        visible={state.visible}
        navigation={props.navigation}
        toggleOverlay={toggleOverlay}
        data={state.data}
      />
    </CustomView>
  );

};

const mapStateToProp = (state) => ({
  userData: state.reducers.userData,
  loader: state.reducers.loader,
});
const mapDispatchToProps = {
  CheckUser: Actions.CheckUser,
  Login: Actions.Login,
  SocialLoginAction: Actions.SocialLogin,
};

export default connect(mapStateToProp, mapDispatchToProps)(App);
