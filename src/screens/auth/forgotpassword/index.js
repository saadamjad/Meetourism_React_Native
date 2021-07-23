import React, { useState, useRef } from 'react';
import Header from '../../../components/header';

import {
  View,
  ScrollView,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
  StyleSheet,
} from 'react-native';
import { theme } from '../../../constants/theme';
import Toast from '../../../components/toastmessage';
import axios from 'axios';

import AnimatedLoader from 'react-native-animated-loader';

const App = (props) => {
  const [email, setEmail] = useState('');
  const [newpassword, setNewPassword] = useState(false);
  const [loader, setLoader] = useState(false);

  const _CheckEmail = () => {
    let value = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email,
    );
    if (value) {
      _ApiCallForgotPassword();
    } else {
      Toast('Error', 'Incorrect Email', 'error');
    }
  };
  const _ApiCallForgotPassword = () => {
    console.log("start loader")
    setLoader(true);
    let header = {
      headers: { 'Content-Type': 'application/json' },
    };
    let url = 'https://meetourism.com/api/v1/auth/forgot';

    let data = {
      email: email,
    };

    axios
      .post(url, data, header)
      .then((res) => {
        let response = res.data;
        console.log('res.status_type', response);

        if (response.status_type === 'success') {
          console.log('res.status_type', response);
          Toast('Sent', 'Verification Link Is Sent To Your Email  ', 'success');
          setLoader(false);
          props.navigation.goBack();
        } else {
          setLoader(false);
          console.log('ELSE', response);
        }
      })
      .catch((err) => {
        console.log("error in catch ", err.response)
        setLoader(false);

        let errResponse = err?.response?.data?.errors;
        if (errResponse?.email) {
          console.log('email', errResponse?.email[0]);
          Toast('Error', 'The Email You Entered Not Registered', 'error');
        } else if (errResponse?.username) {
          console.log('username');
          Toast('Error', errResponse?.username[0], 'error');
        } else if (errResponse?.phone) {
          console.log('phone', errResponse?.phone[0]);
          Toast('Error', errResponse?.phone[0], 'error');
        }
      });
  };
  const _NewPassword = () => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <View
          style={{
            justifyContent: 'center',
            marginTop: 30,
            alignItems: 'center',
          }}>
          <View
            style={{
              borderBottomColor: theme.borderColor.inActiveBorderColor,
              borderBottomWidth: 1,
              width: '80%',
              height: 40,
              marginTop: 20,
            }}>
            <TextInput
              onChangeText={(text) => setEmail(text)}
              style={{
                width: '100%',
                height: '100%',
                fontSize: 16,
                // borderBottomWidth: 1,
              }}
              placeholderTextColor={'black'}
              placeholder={'New Password'}
              keyboardType="email-address"
            />
          </View>
          <View
            style={{
              borderBottomColor: theme.borderColor.inActiveBorderColor,
              borderBottomWidth: 1,
              width: '80%',
              height: 40,
              marginTop: 20,
            }}>
            <TextInput
              onChangeText={(text) => setEmail(text)}
              style={{
                width: '100%',
                height: '100%',
                fontSize: 16,
                // borderBottomWidth: 1,
              }}
              placeholderTextColor={'black'}
              placeholder={'Confirm Password'}
              keyboardType="email-address"
            />
          </View>
          <TouchableOpacity
            disabled={email.length > 0 ? false : true}
            style={{
              backgroundColor: email.length > 0 ? theme.secondaryColor : 'gray',
              width: '80%',

              height: 50,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 50,
            }}
            onPress={() => props.navigation.goBack()}
            activeOpacity={0.75}>
            <Text style={{ color: theme.textColor.whiteColor }}>update</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const _EnterEmail = () => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <View
          style={{
            justifyContent: 'center',
            marginTop: 30,
            alignItems: 'center',
          }}>
          <View
            style={{
              borderBottomColor: theme.borderColor.inActiveBorderColor,
              borderBottomWidth: 1,
              width: '80%',
              height: 40,
              marginTop: 20,
            }}>
            <TextInput
              onChangeText={(text) => setEmail(text)}
              style={{
                width: '100%',
                height: '100%',
                fontSize: 16,
                // borderBottomWidth: 1,
              }}
              placeholderTextColor={'black'}
              placeholder={'Enter Email'}
              keyboardType="email-address"
            />
          </View>
          <TouchableOpacity
            disabled={email.length > 0 ? false : true}
            style={{
              backgroundColor:
                email.length > 0 ? theme.secondaryColor : '#D3D3D3',
              width: '80%',

              height: 50,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 50,
            }}
            onPress={() => {
              _CheckEmail();
            }}
            activeOpacity={0.75}>
            <Text
              style={{
                fontSize: 17,
                letterSpacing: 3,
                color: email.length > 0 ? theme.textColor.whiteColor : 'black',
              }}>
              CONTINUE
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
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
            {'Verifying'}
          </Text>
        </AnimatedLoader>
        <Header
          text={true}
          isTransparent={true}
          leftArrow={true}
          isVisibleIcon={true}
          navigation={props.navigation}
          //   drawerIcon={true}
          text={newpassword ? 'New Password' : ' Password Reset'}
          textColor={theme.secondaryColor}
        />
        {newpassword ? _NewPassword() : _EnterEmail()}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100,
  },
});
export default App;
