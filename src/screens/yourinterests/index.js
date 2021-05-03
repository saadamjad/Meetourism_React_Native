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
import {theme} from '../../constants/theme';

import {Icon} from 'native-base';
let statusValue = 0;
const Status = (props) => {
  const data = props?.route?.params?.profileData;
  console.log('Data all interests', data);

  const [state, setState] = useState({
    visible: false,
    visible1: false,
    selected: 0.1,
    settingStatus: false,
  });

  useEffect(() => {
    _UserType();

    if (props?.route?.params || props?.route?.params) {
      setState({...state, visible: true, settingStatus: true});
    }
  }, []);

  const _UserType = async () => {
    let value = await AsyncStorage.getItem('userStatus');
    console.log(value);
    statusValue = value;
  };

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(000, 000, 000, 0.9)',

          // backgroundColor: 'red',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ImageBackground
          source={require('../../assets/images/statusbg.png')}
          style={{
            height: '100%',
            width: '100%',
          }}>
          <View
            style={{
              flex: 1,
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(000, 000, 000, 0.7)',
            }}>
            <View style={{width: '100%', paddingLeft: 20, paddingBottom: 30}}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  // borderWidth: 1,

                  paddingHorizontal: 12,
                  // paddingVertical: 10,
                  alignSelf: 'flex-start',
                }}
                onPress={() =>
                  //   setState({...state, visible: !state.visible, visible1: false})
                  props.navigation.goBack()
                }>
                <Icon
                  type="AntDesign"
                  name="arrowleft"
                  style={{color: 'white', fontSize: 20}}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: Dimensions.get('window').width / 1.2,
                // justifyContent: 'center',
                borderRadius: 40,
                backgroundColor: 'white',
                elevation: 2,
                alignItems: 'center',
                overflow: 'hidden',
              }}>
              <View
                style={{
                  paddingHorizontal: 0,
                  // borderWidth: 1,
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: theme.secondaryColor,
                    fontSize: 30,
                    fontWeight: '700',
                    marginTop: 50,
                  }}>
                  Your Interests
                </Text>
                <View
                  style={{
                    width: '100%',
                    marginTop: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    // borderWidth: 1,
                    paddingHorizontal: 25,
                  }}>
                  {[
                    {name: 'Yoga'},
                    {name: 'Health'},
                    {name: 'Music'},
                    {name: 'Sports'},
                    {name: 'Learning'},
                  ].map((val, i) => (
                    <TouchableOpacity
                      onPress={() => {
                        setState({...state, selected: i});
                      }}
                      style={{
                        width: '80%',
                        flexDirection: 'row',
                        marginTop: 20,
                        // borderWidth: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <View
                        style={{
                          // height: '100%',
                          width: '30%',
                          // borderWidth: 1,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <View
                          style={{
                            height: 36,
                            width: 36,
                            borderRadius: 36,
                            // borderWidth: 1,
                          }}>
                          <Image
                            resizeMode="contain"
                            style={{height: '100%', width: '100%'}}
                            source={require('../../assets/images/girl.png')}
                          />
                        </View>
                      </View>
                      <View
                        style={{
                          width: '70%',
                          borderWidth: 0,
                          paddingLeft: 10,
                        }}>
                        <Text
                          style={{
                            color:
                              theme.textColor[
                                state.selected == i ? 'blackColor' : 'greyColor'
                              ],
                            fontWeight: '700',
                            // marginLeft: 30,
                            fontSize: 20,
                            // width: '85%',
                          }}>
                          {val.name}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
              <View
                style={{
                  width: '100%',
                  paddingVertical: 20,
                  paddingHorizontal: 20,
                  alignItems: 'flex-end',
                  // borderWidth: 1,
                }}>
                <View
                  style={{
                    // marginLeft: 5,

                    width: 35,
                    marginTop: 25,
                    height: 35,
                    borderRadius: 35,
                    backgroundColor: theme.textColor.lightWhiteColor,
                    justifyContent: 'center',
                    alignItems: 'center',
                    // borderWidth: 1,
                  }}>
                  <Icon style={{fontSize: 20}} type="AntDesign" name="plus" />
                </View>
              </View>
            </View>

            <TouchableOpacity
              activeOpacity={0.75}
              onPress={() => {
                console.log(statusValue);

                if (statusValue == 0) {
                  // alert('user');
                  props.navigation.navigate('profilePreivew');
                } else if (statusValue == 1) {
                  // alert('relationship');
                  props.navigation.navigate('userProfile', {
                    status: 1,
                  });
                } else if (statusValue == 2) {
                  // alert('partner');

                  props.navigation.navigate('PartnerStack');
                }
              }}
              style={{
                height: 40,
                marginVertical: 20,
                overflow: 'hidden',
                backgroundColor: theme.secondaryColor,
                elevation: 2,
                width: '50%',
                borderRadius: 30,
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 15, color: 'white'}}> Done</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

export default Status;
