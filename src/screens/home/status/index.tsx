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
  ]);
  const toggleOverlay = (i, item) => {
    console.log('0', item);
    console.log(typeof i);
    _UserType(i);
    if (i != 2) {
      props.navigation.navigate('chooseyourinterest');
    }

    // if (!state.visible == false) {
    //   setState({...state, visible: !state.visible, visible1: true});
    // } else {
    //   setState({...state, visible: !state.visible});
    // }
  };
  // useEffect(() => {
  //   console.log(
  //     '==================================================================',
  //   );

  //   if (props?.route?.params || props?.route?.params) {
  //     setState({...state, visible: true, settingStatus: true});
  //   }
  // }, []);

  const _UserType = async (i) => {
    let number = JSON.stringify(i);
    console.log('number beta', typeof number);
    try {
      await AsyncStorage.setItem('userStatus', number);
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
      <ImageBackground
        source={require('../../../assets/images/home.png')}
        style={{height: '100%', width: '100%'}}>
        <View
          style={{
            flex: 0.4,

            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            opacity: 0.8,
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
            justifyContent: 'space-between',
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
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  // borderWidth: 1,
                  borderBottomLeftRadius: 60,

                  alignItems: 'center',

                  borderBottomWidth: 1,
                  // borderWidth: 1,
                  borderLeftWidth: 1,
                  borderColor: '#D3D3D3',
                }}
                onPress={() => toggleOverlay(i, item)}>
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

export default Status;
