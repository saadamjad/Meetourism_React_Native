import React, {useState, useRef} from 'react';
import {
  View,
  ScrollView,
  ImageBackground,
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
const SignIn = (props) => {
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
          {[
            {
              placeholder: 'Name',
              isSecure: false,
              keyboardType: 'default',
            },
            {
              placeholder: 'Email',
              isSecure: false,
              keyboardType: 'email-address',
            },
            {placeholder: 'Password', isSecure: true, keyboardType: 'default'},
          ].map((val, i) => (
            <View
              key={i}
              style={{
                borderBottomColor:
                  state.activeInput == i
                    ? theme.borderColor.activeBorderColor
                    : theme.borderColor.inActiveBorderColor,
                borderBottomWidth: state.activeInput == i ? 2 : 1,
                width: '80%',
                height: 40,
                marginTop: i !== 0 ? 40 : 0,
              }}>
              <TextInput
                style={{
                  width: '100%',
                  height: '100%',
                  fontSize: 16,
                }}
                placeholder={val.placeholder}
                keyboardType={val.keyboardType}
                secureTextEntry={val.isSecure}
              />
            </View>
          ))}
        </View>
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
          {/* <View
              style={{
                height: 45,
                width: 45,
                borderRadius: 15,
                borderWidth: 1,
                borderColor: theme.secondaryColor,
              }}></View> */}
        </View>
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
          onPress={() => toggleOverlay()}
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
export default SignIn;
