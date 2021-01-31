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
            onPress={() =>
              //   setState({...state, visible: !state.visible, visible1: false})
              props.navigation.goBack()
            }>
            <Icon
              type="AntDesign"
              name="arrowleft"
              style={{color: 'white', fontSize: 17}}
            />
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              backgroundColor: 'rgba(000, 000, 000, 0.8)',

              // backgroundColor: 'red',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              margin: 0,
              padding: 0,
            }}>
            <View
              style={{
                width: Dimensions.get('window').width / 1.2,
                // justifyContent: 'center',
                borderRadius: 40,
                backgroundColor: 'white',
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
            <View>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('profilePreivew')}
                style={{
                  backgroundColor: theme.secondaryColor,
                  paddingVertical: 8,
                  paddingHorizontal: 10,
                  alignSelf: 'center',
                  marginTop: 30,
                  width: 170,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 30,
                }}>
                <Text style={{color: theme.textColor.whiteColor}}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </CustomView>
    </>
  );
};

export default Status;
