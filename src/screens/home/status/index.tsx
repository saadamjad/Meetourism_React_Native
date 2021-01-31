import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  TextInput,
  AsyncStorage,
} from 'react-native';
// import {Icon} from 'native-base';
// import Style from './style';
import CustomView from '../../../components/customView';
import {theme} from '../../../constants/theme';
import {Icon} from 'native-base';
import Overlay from '../../../components/overlays';
import {ScrollView} from 'react-native-gesture-handler';
// import Header from '../../../components/header/longheader';
// import LongHeader from '../../../components/header/longheader';
const Status = (props) => {
  const [state, setState] = useState({
    visible: false,
    visible1: false,
    selected: 0.1,
    settingStatus: false,
  });

  const [allStatus, setAllStatus] = useState([
    {
      name: 'single',
    },
    {
      name: 'In a relationship',
    },
    {
      name: 'partner',
    },
  ]);
  const toggleOverlay = (i) => {
    console.log(typeof i);
    _UserType(i);
    props.navigation.navigate('chooseyourinterest');

    // if (!state.visible == false) {
    //   setState({...state, visible: !state.visible, visible1: true});
    // } else {
    //   setState({...state, visible: !state.visible});
    // }
  };
  useEffect(() => {
    console.log(
      '==================================================================',
    );

    if (props?.route?.params || props?.route?.params) {
      setState({...state, visible: true, settingStatus: true});
    }
  }, []);

  const _UserType = async (i) => {
    let number = JSON.stringify(i);
    console.log('number beta', typeof number);
    try {
      await AsyncStorage.setItem('userType', number);
    } catch (error) {
      // Error saving data
    }
  };

  const toggleOverlay1 = () => {
    if (state.selected !== 0.1) {
      // _UserType();
      setState({...state, visible: false, visible1: !state.visible1});
      // props.navigation.navigate('drawer')
      state.settingStatus
        ? props.navigation.navigate('profilePreivew')
        : props.navigation.navigate('HomeStack');
    } else {
      alert('Please select one of them');
    }
  };
  return (
    <>
      <CustomView
        bg={'transparent'}
        scroll
        image={require('../../../assets/images/home.png')}>
        <View style={{flex: 1, backgroundColor: 'rgba(255, 255, 255, 0.75)'}}>
          <View
            style={{
              height: '40%',
              // flex: 0.5,
              // borderWidth: 1,
              // backgroundColor: 'white',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 150,
                width: 150,
                // borderWidth: 1,
                alignItems: 'center',
                // zIndex: -5000,
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
              flex: 1,
              // height: '60%',
              width: '100%',
              // backgroundColor
              borderTopLeftRadius: 60,
              overflow: 'hidden',
              backgroundColor: 'white',
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
                textAlign: 'center',
                fontWeight: '700',
              }}>
              Your Current Status?
            </Text>
            {allStatus.map((item, i) => {
              console.log('item,', i);
              return (
                <TouchableOpacity
                  activeOpacity={1}
                  style={{
                    height: 100,
                    backgroundColor: 'white',
                    // borderTopLeftRadius: 80,
                    justifyContent: 'space-around',
                    borderBottomLeftRadius: 60,
                    // elevation: 1,

                    alignItems: 'center',

                    borderBottomWidth: 1,
                    borderWidth: 1,
                    borderLeftWidth: 1,
                    borderColor: '#D3D3D3',
                    // borderColor: 'transparent',
                  }}
                  onPress={() => toggleOverlay(i)}>
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
                      {/* Single */}
                      {item.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </CustomView>
    </>
  );
};

export default Status;
