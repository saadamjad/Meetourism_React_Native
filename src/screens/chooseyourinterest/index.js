import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  TextInput,
  ScrollView,
  AsyncStorage,
} from 'react-native';
// import {Icon} from 'native-base';
// import Style from './style';
import CustomView from '../../components/customView';
import {theme} from '../../constants/theme';
import {Icon} from 'native-base';
import GlobalButton from '../../components/buttons/generalbutton';
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
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={{flex: 1, backgroundColor: '#241332'}}>
        <View
          style={{
            // flex: 0.1,
            backgroundColor: '#241332',
            paddingVertical: 10,
            paddingLeft: 20,
          }}>
          <TouchableOpacity
            style={{
              borderWidth: 0,

              alignSelf: 'flex-start',
            }}
            onPress={() => props.navigation.goBack()}>
            <Icon
              type="AntDesign"
              name="arrowleft"
              style={{color: 'white', fontSize: 17}}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            paddingBottom: 20,
            // borderWidth: 1,
            backgroundColor: '#241332',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              width: '90%',
              borderRadius: 40,
              backgroundColor: 'white',
              overflow: 'hidden',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: theme.secondaryColor,
                fontSize: 24,
                fontWeight: '700',
                paddingVertical: 10,
              }}>
              Subscribe
            </Text>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',

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
                }}>
                <Icon style={{fontSize: 20}} type="AntDesign" name="plus" />
              </View>
            </View>
            <View
              style={{
                width: '100%',
                paddingVertical: 5,
                backgroundColor: 'white',
                overflow: 'hidden',
                // borderWidth: 1,
                justifyContent: 'space-evenly',
                flex: 1,
                paddingHorizontal: 20,
              }}>
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

                  borderColor: theme.borderColor.inActiveBorderColor,
                }}
                multiline={true}
                placeholderTextColor={theme.borderColor.inActiveBorderColor}
                placeholder="Description 100 words Max"
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  // borderWidth: 1,
                }}>
                <TextInput
                  style={{
                    // width: '20%',
                    borderBottomWidth: 1,
                    height: 40,

                    borderColor: theme.borderColor.inActiveBorderColor,
                  }}
                  placeholderTextColor={theme.borderColor.inActiveBorderColor}
                  placeholder="Height"
                />
                <TextInput
                  style={{
                    // width: '20%',
                    borderBottomWidth: 1,
                    height: 40,

                    borderColor: theme.borderColor.inActiveBorderColor,
                  }}
                  placeholderTextColor={theme.borderColor.inActiveBorderColor}
                  placeholder="Shape"
                />
                <TextInput
                  style={{
                    // width: '20%',
                    borderBottomWidth: 1,
                    height: 40,

                    borderColor: theme.borderColor.inActiveBorderColor,
                  }}
                  placeholderTextColor={theme.borderColor.inActiveBorderColor}
                  placeholder="EyeColor"
                />
              </View>

              <View style={{overflow: 'hidden', marginVertical: 5}}>
                <GlobalButton
                  buttonText="Choose Your Interest"
                  onPress={() => props.navigation.navigate('yourinterests')}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Status;
