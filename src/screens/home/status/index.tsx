import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  TextInput,
  AsyncStorage,
  ImageBackground,
} from 'react-native';

import {theme} from '../../../constants/theme';
import {Icon} from 'native-base';
import {connect} from 'react-redux';
import * as ReduxActions from '../../../redux/actions';
const App = (props) => {
  const data = props?.route?.params?.profileData;
  console.log('data', data);
  const [state, setState] = useState({
    visible: false,
    visible1: false,
    selected: 0.1,
    settingStatus: false,
  });
  const comeFromProfileStatus = props?.route?.params?.comeFromProfileStatus;
  // console.log('comeFromProfileStatus', props.loader);

  const [allStatus, setAllStatus] = useState(
    comeFromProfileStatus
      ? [
          {
            name: 'single',
            navigateTo: 'chooseyourinterest',
          },
          {
            name: 'In a relationship',
            navigateTo: 'chooseyourinterest',
          },
        ]
      : [
          {
            name: 'single',
            navigateTo: 'chooseyourinterest',
          },
          {
            name: 'In a relationship',
            navigateTo: 'chooseyourinterest',
          },
          {
            name: 'partner',
            navigateTo: '',
          },
        ],
  );

  const toggleOverlay = async (i, item) => {
    const data2 = {...data, status: item};
    console.log('state==', data2);
    _UserType(i);
    props.navigation.navigate('chooseyourinterest', {
      profileData: data2,
    });
  };

  const _UserType = async (i) => {
    let number = JSON.stringify(i);
    try {
      await AsyncStorage.setItem('userStatus', number);
    } catch (error) {
      // Error saving data
    }
  };

  return (
    <>
      <ImageBackground
        source={require('../../../assets/images/statusbg.png')}
        style={{height: '100%', width: '100%'}}>
        <View
          style={{
            flex: 0.4,

            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor: 'white',
            // opacity: 0.8,
          }}>
          <View
            style={{
              height: 150,
              width: 150,
              // borderWidth: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              resizeMode="contain"
              source={require('../../../assets/images/logo.png')}
              style={{height: 120, width: 130}}
            />
          </View>
        </View>
        <View
          style={{
            flex: 0.6,
            width: '100%',
            paddingVertical: 5,
            borderTopLeftRadius: 60,
            overflow: 'hidden',
            backgroundColor: 'white',
            // justifyContent: 'space-between',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },

            elevation: 2,
          }}>
          <Text
            style={{
              color: theme.secondaryColor,
              fontSize: 24,
              paddingVertical: 20,
              textAlign: 'center',
              fontWeight: '700',
            }}>
            Your Current Status?
          </Text>

          {allStatus.map((item, i) => {
            // console.log('item,', i);
            return (
              <TouchableOpacity
                activeOpacity={1}
                style={{
                  height: 100,
                  // backgroundColor: 'blue',
                  justifyContent: 'center',
                  // borderWidth: 1,
                  borderBottomLeftRadius: 60,

                  alignItems: 'center',

                  borderBottomWidth: 1,
                  // borderWidth: 1,
                  borderLeftWidth: 1,
                  borderColor: '#D3D3D3',
                }}
                onPress={() => toggleOverlay(i, item.name)}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    // borderWidth: 1,
                  }}>
                  <Icon
                    style={{fontSize: 18}}
                    type="FontAwesome5"
                    name="user-alt"
                  />
                  <Text
                    style={{
                      color: theme.textColor.blackColor,
                      fontSize: 18,
                      marginLeft: 5,
                    }}>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ImageBackground>
    </>
  );
};

const mapStateToProps = (state) => ({
  // loader: state.AuthReducer.loader,
  loader: state.reducers.loader,
});
const mapDispatchToProps = {
  Signup: ReduxActions.Signup,
  profileData: ReduxActions.profileData,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default Status;
