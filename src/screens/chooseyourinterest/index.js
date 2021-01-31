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
import CustomView from '../../components/customView';
import {theme} from '../../constants/theme';
import {Icon} from 'native-base';
// import Overlay from '../../../components/overlays';
// import {ScrollView} from 'react-native-gesture-handler';
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
    if (!state.visible == false) {
      setState({...state, visible: !state.visible, visible1: true});
    } else {
      setState({...state, visible: !state.visible});
    }
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

  return (
    <>
      <CustomView
        bg={'transparent'}
        scroll
        image={require('../../assets/images/home.png')}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'black',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{
              borderWidth: 0,
              paddingHorizontal: 15,
              paddingVertical: 10,
              alignSelf: 'flex-start',
            }}
            onPress={() => props.navigation.goBack()}>
            <Icon
              type="AntDesign"
              name="arrowleft"
              style={{color: 'white', fontSize: 17}}
            />
          </TouchableOpacity>
          <View
            style={{
              paddingHorizontal: 40,

              paddingVertical: 20,
              // marginTop: 20,
              borderRadius: 50,
              backgroundColor: 'white',
              width: Dimensions.get('window').width / 1.2,
              justifyContent: 'center',
              alignItems: 'center',
              //   elevation: 0,
            }}>
            <Text
              style={{
                color: theme.secondaryColor,
                fontSize: 24,
                fontWeight: '700',
              }}>
              Subscribe
            </Text>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                marginTop: 20,
                justifyContent: 'center',
                // alignItems: 'space-around',
              }}>
              {[0, 1, 2, 3].map((val) => (
                <Image
                  style={{
                    width: 40,
                    marginLeft: 5,
                    height: 40,
                    borderRadius: 40,
                    // borderWidth: 1,
                  }}
                  resizeMode="contain"
                  source={require('../../assets/images/girl.png')}
                />
              ))}
              <View
                style={{
                  marginLeft: 5,
                  width: 40,
                  height: 40,
                  borderRadius: 40,
                  backgroundColor: '#998FA2',
                  justifyContent: 'center',
                  alignItems: 'center',
                  // borderWidth: 1,
                }}>
                <Icon style={{fontSize: 20}} type="AntDesign" name="plus" />
              </View>
            </View>
            <View style={{width: '100%', paddingVertical: 20}}>
              <TextInput
                style={{
                  width: '100%',
                  borderBottomWidth: 1,
                  height: 40,
                  borderColor: theme.borderColor.inActiveBorderColor,
                }}
                placeholderTextColor={theme.borderColor.inActiveBorderColor}
                placeholder="First Name"
              />
              <TextInput
                style={{
                  width: '100%',
                  borderBottomWidth: 1,
                  height: 40,
                  marginTop: 20,
                  borderColor: theme.borderColor.inActiveBorderColor,
                }}
                placeholderTextColor={theme.borderColor.inActiveBorderColor}
                placeholder="Last Name"
              />
              <TextInput
                style={{
                  width: '100%',
                  borderBottomWidth: 1,
                  height: 40,
                  marginTop: 20,
                  borderColor: theme.borderColor.inActiveBorderColor,
                }}
                placeholderTextColor={theme.borderColor.inActiveBorderColor}
                placeholder="Email"
              />
              <TextInput
                style={{
                  width: '100%',
                  borderBottomWidth: 1,
                  height: 40,
                  marginTop: 20,
                  borderColor: theme.borderColor.inActiveBorderColor,
                }}
                placeholderTextColor={theme.borderColor.inActiveBorderColor}
                placeholder="Contact"
              />
              <TextInput
                style={{
                  width: '100%',
                  borderBottomWidth: 1,
                  height: 40,
                  marginTop: 20,
                  borderColor: theme.borderColor.inActiveBorderColor,
                }}
                placeholderTextColor={theme.borderColor.inActiveBorderColor}
                placeholder="Age"
              />
              <TextInput
                style={{
                  width: '100%',
                  borderBottomWidth: 1,
                  height: 40,
                  marginTop: 20,
                  borderColor: theme.borderColor.inActiveBorderColor,
                }}
                placeholderTextColor={theme.borderColor.inActiveBorderColor}
                placeholder="City"
              />
              <TextInput
                style={{
                  width: '100%',
                  borderBottomWidth: 1,
                  height: 40,
                  marginTop: 20,
                  borderColor: theme.borderColor.inActiveBorderColor,
                }}
                multiline={true}
                placeholderTextColor={theme.borderColor.inActiveBorderColor}
                placeholder="Description 100 words Max"
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <TextInput
                  style={{
                    width: '20%',
                    borderBottomWidth: 1,
                    height: 40,
                    marginTop: 20,
                    borderColor: theme.borderColor.inActiveBorderColor,
                  }}
                  placeholderTextColor={theme.borderColor.inActiveBorderColor}
                  placeholder="Height"
                />
                <TextInput
                  style={{
                    width: '20%',
                    borderBottomWidth: 1,
                    height: 40,
                    marginTop: 20,
                    borderColor: theme.borderColor.inActiveBorderColor,
                  }}
                  placeholderTextColor={theme.borderColor.inActiveBorderColor}
                  placeholder="Shape"
                />
                <TextInput
                  style={{
                    width: '20%',
                    borderBottomWidth: 1,
                    height: 40,
                    marginTop: 20,
                    borderColor: theme.borderColor.inActiveBorderColor,
                  }}
                  placeholderTextColor={theme.borderColor.inActiveBorderColor}
                  placeholder="EyeColor"
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('yourinterests')}
              style={{
                backgroundColor: theme.secondaryColor,
                paddingVertical: 10,
                paddingHorizontal: 10,
                borderRadius: 30,
              }}>
              <Text style={{color: theme.textColor.whiteColor}}>
                Choose Your Interest
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </CustomView>
    </>
  );
};

export default Status;
