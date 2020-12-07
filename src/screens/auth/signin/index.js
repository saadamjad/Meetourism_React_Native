import React, {useState, useRef} from 'react';
import {
  View,
  ScrollView,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import {theme} from '../../../constants/theme';
// import styles from './styles';
import CustomView from '../../../components/customView';
import {TabView, SceneMap} from 'react-native-tab-view';
const SignIn = () => {
  const [state, setState] = useState({
    selectedIndex: 0,
    activeInput: 3,
    routes: [
      {key: 'first', title: 'SignIn'},
      {key: 'second', title: 'SignUp'},
    ],
  });
  const signInRoute = () => (
    <View style={{flex: 1}}>
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
                state.activeInput == i
                  ? theme.borderColor.activeBorderColor
                  : theme.borderColor.inActiveBorderColor,
              borderBottomWidth: state.activeInput == i ? 2 : 1,
              width: '80%',
              height: 40,
              marginTop: 20,
            }}>
            <TextInput
              style={{width: '100%', height: '100%', fontSize: 16}}
              placeholder={val.placeholder}
              onFocus={() => {
                setState({...state, activeInput: i});
              }}
              onBlur={() => {
                setState({...state, activeInput: 3});
              }}
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
          }}>
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
          }}>
          <Text
            style={{
              color: theme.textColor.blackColor,
              fontSize: 12,
              fontWeight: '500',
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
              style={{
                borderBottomColor:
                  state.activeInput == i
                    ? theme.borderColor.activeBorderColor
                    : theme.borderColor.inActiveBorderColor,
                borderBottomWidth: state.activeInput == i ? 2 : 1,
                width: '80%',
                height: 40,
                // marginTop: i !== 0 && 20,
              }}>
              <TextInput
                style={{
                  width: '100%',
                  height: '100%',
                  fontSize: 16,
                }}
                placeholder={val.placeholder}
                onFocus={() => {
                  setState({...state, activeInput: i});
                }}
                onBlur={() => {
                  setState({...state, activeInput: 3});
                }}
                keyboardType={val.keyboardType}
                secureTextEntry={val.isSecure}
              />
            </View>
          ))}
        </View>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          {[0, 1, 2].map((val, ind) => (
            <View
              style={{
                height: 45,
                width: 45,
                borderRadius: 15,
                borderWidth: 1,
                borderColor: theme.secondaryColor,
              }}></View>
          ))}
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
    <CustomView withBg={state.selectedIndex == 1} bg={theme.bgColor} scroll>
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
                style={{
                  backgroundColor:
                    state.selectedIndex == i
                      ? theme.secondaryColor
                      : 'transparent',
                  width: 90,
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
    </CustomView>
  );
};
export default SignIn;
