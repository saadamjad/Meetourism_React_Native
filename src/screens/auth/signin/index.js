import React, {useState, useRef} from 'react';
import {
  View,
  Dimensions,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
} from 'react-native';
import {theme} from '../../../constants/theme';
// import styles from './styles';
import ForgotPassword from '../forgotpassword';
import CustomView from '../../../components/customView';
import {TabView, SceneMap} from 'react-native-tab-view';
import HoldOn from '../../holdOn';
import axios from 'axios';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as Actions from '../../../redux/actions/index';

const App = (props) => {
  const [signupValues, setSignvalues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
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

  const toggleOverlay = () => {
    setState({...state, visible: !state.visible});
  };

  const signInRoute = () => (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{alignItems: 'center'}}>
        {[
          {
            placeholder: 'Email',
            isSecure: false,
            keyboardType: 'email-address',
          },
          {placeholder: 'Password', isSecure: true, keyboardType: 'default'},
        ].map((val, i) => (
          <View
            style={{
              borderBottomColor:
                activeInput == i
                  ? theme.borderColor.activeBorderColor
                  : theme.borderColor.inActiveBorderColor,
              borderBottomWidth: activeInput == i ? 2 : 1,
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
              placeholder={val.placeholder}
              onFocus={() => {
                setActiveInput(i);
              }}
              onBlur={() => (activeInput == i ? false : true)}
              // onFocus={() => {
              //   setActiveInput(i);
              //   // console.log('ttext', ttext);
              // }}
              // showSoftInputOnFocus={true}
              // autoFocus={ }
              // onBlur={() => {
              //   setState({...state, activeInput: 3});
              // }}
              keyboardType={val.keyboardType}
              secureTextEntry={val.isSecure}
            />
          </View>
        ))}
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
          // onPress={() => props.navigation.navigate('drawer')}
          onPress={() =>
            // props.navigation.navigate('Status')}
            props.navigation.replace('drawer')
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
    _ApiCallSingup();

    // if (
    //   signupValues.name == '' ||
    //   signupValues.password == '' ||
    //   signupValues.password == ''
    // ) {
    //   alert('please enter inputs');
    // } else if (signupValues.password !== signupValues.confirmPassword) {
    //   alert('password and confirm password should be same');
    // } else {
    //   _ApiCallSingup();
    // }
  };
  const _ApiCallSingup = () => {
    let header = {
      headers: {'Content-Type': 'application/json'},
    };
    let url = 'https://meetourism.deviyoinc.com/api/v1/auth/register';
    let data = {
      first_name: 'First Name',
      last_name: 'Last Name',
      username: 'hsasrsissss',
      email: 'harsisssssss@yopmail.com',
      phone: '1234ss5ss6323239',
      password: '123456789',
      password_confirmation: '123456789',
      age: 20,
      country_id: 1,
      city: 'City',
      weight: 40,
      height: 6.2,
      eye_color: 'green',
      status: 'single',
      interests: [1, 2],
      images: ['user_images/user-image-608de193434244-74625999.jpg'],
    };
    props.Signup(data);

    axios
      .post(url, data, header)
      .then((res) => {
        console.log('res.status_type', res.status_type);
        if (res.data.status_type === 'success') {
          console.log('Res', res.data.data);
          // toggleOverlay();
        } else {
          console.log('res else ', res);
        }
      })
      .catch((err) => {
        let errResponse = err.response.data.errors;
        if (errResponse.email) {
          console.log('email', errResponse.email[0]);
        } else if (errResponse.username) {
          console.log('username', errResponse.username[0]);
        } else if (errResponse.phone) {
          console.log('phone', errResponse.phone[0]);
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
              value={signupValues.name}
              onChangeText={(text) => _onChangeText(text, 'name')}
              placeholder={'name'}
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
          onPress={() => _Signup()}
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
      <TabView
        navigationState={{index: state.selectedIndex, routes: state.routes}}
        renderScene={renderScene}
        renderTabBar={(props) => (
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
                  // borderWidth: 0.5,
                  // borderColor: 'gray',
                  elevation: state.selectedIndex == i ? 0 : 1,
                  // marginLeft: i == 1 && 20,
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
        )}
        onIndexChange={(ind) => {
          setState({...state, selectedIndex: ind});
        }}
        initialLayout={{
          width: Dimensions.get('window').width,
        }}
      />
      <HoldOn
        visible={state.visible}
        navigation={props.navigation}
        toggleOverlay={toggleOverlay}
      />
    </CustomView>
  );
};
// export default SignIn;

const mapStateToProp = (state) => ({
  // loader: state.HomeandBookingsReducer.loader,
});
const mapDispatchToProps = {
  Signup: Actions.Signup,
};

export default connect(mapStateToProp, mapDispatchToProps)(App);
// const mapStateToProps = (state) => ({
//   // loader: state.reducers.loader,
// });

// const mapDispatchToProps = (dispatch) => ({
//   Actions: bindActionCreators(Actions, dispatch),
// });

// // export default connect(null, mapDispatchToProps)(App);
// export default connect(mapDispatchToProps, mapStateToProps)(App);
