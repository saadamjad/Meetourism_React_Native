import React, {useState, useRef} from 'react';
import {
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import {theme} from '../../../constants/theme';
import GlobalButton from '../../../components/buttons/globalbutton';
import FacebookButton from '../../../components/buttons/facebookbutton';
import GmailButton from '../../../components/buttons/gmailbutton';
import Header from '../../../components/header';
import Toastmessage from '../../../components/toastmessage';
import styles from './styles';
let path = '../../../assets/images/bg6.png';

const App = (props) => {
  function _SignInB() {
    if (value == '') {
      Toastmessage('Please Fill Inputs', '', 'info');
    } else if (value.length >= 1) {
      props.navigation.navigate('drawer');
    } else {
      Toastmessage('You enter wrong details', '', 'error');
    }
  }

  const [name, setname] = useState('');
  function _SignUpB() {
    // let dbName = 'Samad';
    if (name == '' || value == '') {
      Toastmessage('Please Fill Inputs', '', 'info');
    } else if (name.length >= 1 && value.length >= 1) {
      props.navigation.navigate('otp');
    } else {
      Toastmessage('You enter wrong details', '', 'error');
    }
  }

  // ==============PhoneInputs==============
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [isClicked, setClicked] = useState(false);
  const [color, setColor] = useState('');
  const phoneInput = useRef();

  const _CreateAccount = () => {
    return (
      <View style={styles.flexView}>
        {/* ==========name and textinputname========= */}
        <View
          style={{
            ...styles.nameview,
            borderColor: color
              ? theme.bordersColor.darkOrangeB
              : theme.bordersColor.borderColor,
          }}>
          <Text style={styles.fullnametext}>Full Name</Text>
          <TextInput
            placeholder={'Abdul Samad'}
            onChangeText={(nameText) => {
              setname(nameText);
            }}
            onFocus={() => setColor(true)}
            onBlur={() => setColor(false)}
          />
        </View>
        <Text style={styles.phonetext}>Phone Number</Text>
        {/* =========Number Input========= */}
        <View style={styles.numberinputView}>
          {showMessage && (
            <View>
              <Text>Value : {value}</Text>
              <Text>Formatted Value : {formattedValue}</Text>
              <Text>Valid : {valid ? 'true' : 'false'}</Text>
            </View>
          )}
          <PhoneInput
            defaultCode="PK"
            onChangeText={(text) => {
              setValue(text);
            }}
            value={value}
            containerStyle={styles.containerstyle}
            // textInputStyle={{}}
            placeholder="Enter the Number"
            textContainerStyle={{
              ...styles.textcontainerstyle,
              borderColor: color
                ? theme.bordersColor.darkOrangeB
                : theme.bordersColor.borderColor,
            }}
            codeTextStyle={styles.codetextstyle}
          />
        </View>

        {/* ==============Global Button============= */}

        <View style={styles.globalbtview}>
          <GlobalButton
            title={'Sign Up'}
            titleStyle={{fontSize: 13}}
            onPress={() => _SignUpB()}
          />
        </View>
      </View>
    );
  };

  // ================ Const SignIn =================
  const _SignIn = () => {
    return (
      <View style={styles.viewcenter}>
        <Text style={styles.signinphonetext}>Phone Number</Text>

        {/* =========Number Input========= */}

        <View style={styles.signinnumberinputView}>
          {/* {showMessage && (
            <View style={{}}>
              <Text>Value : {value}</Text>
              <Text>Formatted Value : {formattedValue}</Text>
              <Text>Valid : {valid ? 'true' : 'false'}</Text>
            </View>
          )} */}
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="DM"
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            withDarkTheme={false}
            // withShadow
            // autoFocus
            containerStyle={styles.signincontainerstyle}
            textContainerStyle={styles.signintextcontainer}
            codeTextStyle={styles.signincodetext}></PhoneInput>
        </View>
        {/* ==============Global Button============= */}

        <View style={styles.sigininbtview}>
          <GlobalButton
            title={'Sign In'}
            titleStyle={{fontSize: 13}}
            onPress={() => _SignInB()}
          />

          <Text style={styles.Ortext}>or</Text>

          {/* ==========Social Buttons========== */}

          <View style={styles.socialbtmainview}>
            <GmailButton />
            <FacebookButton />
          </View>
        </View>

        {/* ==========Forgot Password========== */}

        <View style={styles.forgotmainview}>
          <Text style={styles.forgottext}>Forgot Password ?</Text>
        </View>
      </View>
    );
  };
  // =======main=====
  return (
    <ImageBackground
      source={require(path)}
      style={styles.mainimgbdview}
      resizeMode={'cover'}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Header
          text={true}
          isTransparent={true}
          //  isVisibleIcon={true}
          // drawerIcon={true}
        />
        {/* ======signin and signup touch==== */}
        <View style={styles.tapmainview}>
          <View style={styles.taprowview}>
            {/* =======tap Sign In===== */}
            <TouchableOpacity
              onPress={() => setClicked(true)}
              style={{
                ...styles.tapsigintouch,
                borderColor: isClicked
                  ? theme.bordersColor.orangeBorder
                  : 'transparent',
              }}>
              <Text
                style={{
                  ...styles.tapsigintext,
                  color: isClicked
                    ? theme.textColors.lightBlack
                    : theme.textColors.lightGray,
                }}>
                Sign In
              </Text>
              <Text
                style={{
                  ...styles.sigintoaccounttext,
                  color: isClicked
                    ? theme.textColors.lightBlack
                    : theme.textColors.lightGray,
                }}>
                To Account
              </Text>
            </TouchableOpacity>

            {/* ==== tapSignUp==== */}

            <TouchableOpacity
              onPress={() => {
                setClicked(false);
                _CreateAccount(true);
              }}
              style={{
                ...styles.tapsignuptouch,
                borderColor: isClicked
                  ? 'transparent'
                  : theme.bordersColor.orangeBorder,
              }}>
              <Text
                style={{
                  ...styles.tapsignuptext,
                  color: isClicked
                    ? theme.textColors.lightGray
                    : theme.textColors.lightBlack,
                }}>
                Sign Up
              </Text>
              <Text
                style={{
                  ...styles.signupcreateacc,
                  color: isClicked
                    ? theme.textColors.lightGray
                    : theme.textColors.lightBlack,
                }}>
                Create Account
              </Text>
            </TouchableOpacity>
          </View>

          {isClicked ? _SignIn() : _CreateAccount()}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default App;
