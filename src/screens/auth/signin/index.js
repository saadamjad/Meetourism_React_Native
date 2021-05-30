import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Dimensions,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
  StyleSheet,
} from 'react-native';
import {theme} from '../../../constants/theme';
// import styles from './styles';
import CustomView from '../../../components/customView';
import HoldOn from '../../holdOn';
import {connect} from 'react-redux';
import {Actions} from '../../../redux/actions/index';
import Toast from '../../../components/toastmessage';
import AnimatedLoader from '../../../components/loader';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import MapView, {Marker} from 'react-native-maps';

const App = (props) => {
  const [signupValues, setSignvalues] = useState({
    // name: '',
    // email: '',
    // password: '',
    // confirmPassword: '',
    name: 'saad amjad',
    email: 'saad402@gmail.com',
    password: '123456789',
    confirmPassword: '123456789',
  });
  const [signInValues, setSignINvalues] = useState({
    email: 'saad.amjad434@gmail.com',
    password: 'saad@12345',

    // email: '',
    // password: '',
  });
  const ref = useRef();

  useEffect(() => {
    ref.current?.setAddressText('Some Text blue');
  }, []);

  const [state, setState] = useState({
    selectedIndex: 0,
    visible: false,

    routes: [
      {key: 'first', title: 'SignIn'},
      {key: 'second', title: 'SignUp'},
    ],
  });

  const [loader, setLoader] = useState(false);
  const [loaderMessage, setLoaderMessage] = useState('');

  const toggleOverlay = (data) => {
    setState({...state, visible: !state.visible, data: data});
  };

  const [elements, setElemtns] = useState([
    {
      placeholder: 'Email',
      isSecure: false,
      keyboardType: 'email-address',
    },
    {placeholder: 'Password', isSecure: true, keyboardType: 'default'},
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
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{alignItems: 'center'}}>
        {elements.map((val, i) => {
          let email = i == 0 && signInValues.email.length > 0 ? true : false;
          let password =
            i == 1 && signInValues.password.length > 0 ? true : false;

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
                    ? setSignINvalues({...signInValues, email: text})
                    : setSignINvalues({...signInValues, password: text})
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
          <Text style={{color: theme.textColor.whiteColor}}>CONTINUE</Text>
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
    setSignvalues({...signupValues, [key]: text});
  };
  const _SocialIcons = () => {
    return (
      <View style={{flexDirection: 'row', marginTop: 20, borderWidth: 0}}>
        {[
          require('../../../assets/images/gmail.png'),
          require('../../../assets/images/instagram.png'),
          require('../../../assets/images/facebook.png'),
        ].map((val, ind) => (
          <Image
            resizeMode="contain"
            source={val}
            style={{height: 30, width: 30}}
            resizeMode="contain"
            key={ind}
          />
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
      <View style={{alignItems: 'center'}}>
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
          <Text style={{color: theme.textColor.whiteColor}}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    </>
  );

  return (
    <CustomView withBg={state.selectedIndex == 1} bg={'white'} scroll>
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
            onPress={() => setState({...state, selectedIndex: i})}
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
