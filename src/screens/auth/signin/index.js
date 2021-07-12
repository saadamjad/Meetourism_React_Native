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
// import styles from './styles';
import CustomView from '../../../components/customView';
import HoldOn from '../../holdOn';
import { connect } from 'react-redux';
import { Actions } from '../../../redux/actions/index';
import Toast from '../../../components/toastmessage';
import AnimatedLoader from '../../../components/loader';
import { FastImageComponent } from '../../../components/fastimage'
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
// GoogleSignin.configure()
GoogleSignin.configure({
  // scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile

  webClientId: '631241702922-pqn95r82fmfuthu5btrus4ufgfa1naur.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
  offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  // hostedDomain: '', // specifies a hosted domain restriction
  // loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
  // forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
  // accountName: '', // [Android] specifies an account name on the device that should be used
  // iosClientId: '631241702922-pqn95r82fmfuthu5btrus4ufgfa1naur.apps.googleusercontent.com', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
});

import Geolocation from '@react-native-community/geolocation';
import { initReactI18next } from 'react-i18next'




const App = (props) => {
  // const { t, i18n } = useTranslation()


  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      // console.log("userinfo===", userInfo)
      let user = userInfo?.user
      setSignvalues({ ...signupValues, name: user?.name, email: user?.email })
      // this.setState({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };


  // console.log("t", t, i18n)
  const getLanguage = (language) => {
    if (language === 0) {
      console.log("English")
      return i18n.changeLanguage('en')
    }
    else if (language === 1) {
      return i18n.changeLanguage('zh')

    }
    else if (language === 2) {
      return i18n.changeLanguage('fr')
    }
  }

  const [signupValues, setSignvalues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    // name: 'ok',
    // email: 'ok@gmail.com',
    // password: '123456789',
    // confirmPassword: '123456789',
  });
  const [signInValues, setSignINvalues] = useState({
    email: 'sitgo4@gmail.com',
    password: '123456789',

    // email: '',
    // password: '',
  });
  const ref = useRef();


  useEffect(() => {
    // console.log("1")


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
  const _SignIn = async () => {
    if (signInValues.email == '' || signInValues.password == '') {
      Toast('Error', 'Please both inputs', 'error');
    } else {
      setLoaderMessage('In');
      setLoader(true);

      let data = {
        email: signInValues.email,
        password: signInValues.password,

        latitude: '25.0915',
        longitude: '67.9034',
        address: 'Test Address',
      };

      let value = await props.Login(data, props.navigation);
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
              signIn()
            }}
          >

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
    let value = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
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
    };
    let value = await props.CheckUser(data, props.navigation, values);
    if (!value) {
      setLoader(false);
    } else {
      console.log('resturn else');
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


  return (
    <CustomView withBg={state.selectedIndex == 1} bg={'white'} scroll>

      <TouchableOpacity
        onPress={() => signIn()}
        style={{ height: 40, width: 100, borderWidth: 1 }}
      >
        <Text> LGOIN </Text>
      </TouchableOpacity>



      {/* <Text> {state?.test?.city} </Text>
      <Text> {state?.test?.regionName} </Text> */}
      {/* <GooglePlacesAutocomplete
        ref={ref}
        placeholder="Enter Location"
        minLength={2}
        autoFocus={true}
        // returnKeyType={'default'}
        fetchDetails={true}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log('sssss', data, details);
        }}
        onChangeText={(text) => console.log('Heo', text)}
        styles={{
          textInputContainer: {
            backgroundColor: 'grey',
          },
          textInput: {
            height: 38,
            color: '#5d5d5d',
            fontSize: 16,
          },
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
        }}
      /> */}
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

  //  );
};

const mapStateToProp = (state) => ({
  userData: state.reducers.userData,
  loader: state.reducers.loader,
});
const mapDispatchToProps = {
  CheckUser: Actions.CheckUser,
  Login: Actions.Login,
};

export default connect(mapStateToProp, mapDispatchToProps)(App);
