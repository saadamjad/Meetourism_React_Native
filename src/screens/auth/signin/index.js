import React, {useState, useRef} from 'react';
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
import ForgotPassword from '../forgotpassword';
import CustomView from '../../../components/customView';
import {TabView, SceneMap} from 'react-native-tab-view';
import HoldOn from '../../holdOn';
import axios from 'axios';
import {bindActionCreators} from 'redux';
import AnimatedLoader from 'react-native-animated-loader';
import reducers from '../../../redux/reducers/reducers';
import {connect} from 'react-redux';

import * as Actions from '../../../redux/actions/index';
import Toast from '../../../components/toastmessage';
const App = (props) => {
  const [signupValues, setSignvalues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [signInValues, setSignINvalues] = useState({
    email: '',
    password: '',
  });
  const [state, setState] = useState({
    selectedIndex: 0,
    visible: false,

    routes: [
      {key: 'first', title: 'SignIn'},
      {key: 'second', title: 'SignUp'},
    ],
  });

  const [activeInput, setActiveInput] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirm] = useState('');
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
  const _SignIn = () => {
    if (signInValues.email == '' || signInValues.password == '') {
      Toast('Error', 'Please both inputs', 'error');
    } else {
      setLoaderMessage('In');

      _ApiCallSignIN();
    }
  };
  const _ApiCallSignIN = () => {
    setLoader(true);
    let header = {
      headers: {'Content-Type': 'application/json'},
    };
    let url = 'https://meetourism.deviyoinc.com/api/v1/auth/login';

    let data = {
      email: signInValues.email,
      password: signInValues.password,
    };

    axios
      .post(url, data, header)
      .then((res) => {
        let response = res.data;
        console.log('res.status_type', response);

        if (response.status_type === 'success') {
          console.log('res.status_type=======', response.data);
          Toast('Success', 'Successfully Login', 'success');
          setLoader(false);
          props.Login(response.data, props.navigation);
        } else {
          setLoader(false);
          console.log('ELSE', response);

          Toast('Error', 'You Entered a Wrong Email or Password', 'error');
        }
      })
      .catch((err) => {
        setLoader(false);

        let errResponse = err?.response?.data?.errors;
        if (errResponse.email) {
          // console.log('email', errResponse?.email[0]);
          Toast('Error', errResponse?.email[0], 'error');
        } else if (errResponse?.username) {
          Toast('Error', errResponse?.username[0], 'error');

          // console.log('username', errResponse?.username[0]);
        } else if (errResponse?.phone) {
          // console.log('phone', errResponse?.phone[0]);
          Toast('Error', errResponse?.phone[0], 'error');
        } else {
          let message = Object.values(errResponse);
          // console.log('message', message[0]);
          Toast('Error', message[0], 'error');
        }
      });
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
                  // borderBottomWidth: 1,
                }}
                onChangeText={(text) =>
                  i == 0
                    ? setSignINvalues({...signInValues, email: text})
                    : setSignINvalues({...signInValues, password: text})
                }
                placeholder={val.placeholder}
                keyboardType={val.keyboardType}
                secureTextEntry={val.isSecure}
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

      _ApiCallSingup();
    }
  };
  const _ApiCallSingup = () => {
    setLoader(true);
    let header = {
      headers: {'Content-Type': 'application/json'},
    };
    let url = 'https://meetourism.deviyoinc.com/api/v1/auth/check-exists';

    let data = {
      type: 'email',
      value: signupValues.email,
    };

    axios
      .post(url, data, header)
      .then((res) => {
        let response = res.data;
        console.log('res.status_type', response);
        if (response.status_type === 'success') {
          if (response.data.exists) {
            var str = signupValues.name;
            str = str.replace(/ +/g, '');
            console.log('exist nahi ha', str);
            Toast('Success', ' Successfully Created', 'success');

            setLoader(false);

            let value = {
              ...data,
              userName: str,
              password: signupValues.password,
              confirmPassword: signupValues.confirmPassword,
            };

            toggleOverlay(value);
          } else {
            setLoader(false);

            Toast('Error', 'Email Already Exist', 'error');
          }
        }
      })
      .catch((err) => {
        setLoader(false);

        let errResponse = err?.response?.data?.errors;
        if (errResponse?.email) {
          console.log('email', errResponse?.email[0]);
        } else if (errResponse?.username) {
          console.log('username', errResponse?.username[0]);
        } else if (errResponse?.phone) {
          console.log('phone', errResponse?.phone[0]);
        }
      });
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
            console.log('state', signupValues);
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

  const renderScene = SceneMap({
    first: signInRoute,
    second: signUpRoute,
  });
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
        visible={loader}
        overlayColor="rgba(255,255,255,0.6)"
        source={require('./loaders.json')}
        animationStyle={styles.lottie}
        speed={1}>
        <Text
          style={{
            color: theme.primaryColor,
            fontSize: 15,
            fontWeight: 'bold',
          }}>
          {`Signing ${loaderMessage}`}
        </Text>
      </AnimatedLoader>
      <HoldOn
        visible={state.visible}
        navigation={props.navigation}
        toggleOverlay={toggleOverlay}
        data={state.data}
      />
    </CustomView>
  );
};
// export default SignIn;

const mapStateToProp = (state) => ({
  userData: state.reducers.userData,
  loader: state.reducers.loader,
});
const mapDispatchToProps = {
  Signup: Actions.Signup,
  Login: Actions.Login,
};

export default connect(mapStateToProp, mapDispatchToProps)(App);
const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100,
  },
});
// const mapStateToProps = (state) => ({
//   // loader: state.reducers.loader,
// });

// const mapDispatchToProps = (dispatch) => ({
//   Actions: bindActionCreators(Actions, dispatch),
// });

// // export default connect(null, mapDispatchToProps)(App);
// export default connect(mapDispatchToProps, mapStateToProps)(App);
