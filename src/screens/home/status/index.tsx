import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  TextInput,
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
  });
  const toggleOverlay = () => {
    if (!state.visible == false) {
      setState({...state, visible: !state.visible, visible1: true});
    } else {
      setState({...state, visible: !state.visible});
    }
  };
  const toggleOverlay1 = () => {
    if (state.selected !== 0.1) {
      setState({...state, visible: false, visible1: !state.visible1});
      // props.navigation.navigate('drawer')
      props.navigation.navigate('HomeStack');
    } else {
      alert('Please select one of them');
    }
  };
  return (
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
            // flex: 0.5,
            height: '60%',
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
            // shadowOpacity: 0.25,
            // shadowRadius: 3.84,

            elevation: 2,
          }}>
          <TouchableOpacity
            activeOpacity={1}
            style={{
              height: 150,
              backgroundColor: 'white',
              // borderTopLeftRadius: 80,
              justifyContent: 'space-around',
              borderBottomLeftRadius: 60,
              // elevation: 1,

              alignItems: 'center',

              borderBottomWidth: 1,
              borderLeftWidth: 1,
              borderColor: '#D3D3D3',
              // borderColor: 'transparent',
            }}
            onPress={() => toggleOverlay()}>
            <Text
              style={{
                color: theme.secondaryColor,
                fontSize: 24,
                fontWeight: '700',
              }}>
              Your Current Status?
            </Text>
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
                Single
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={{
              height: 150,
              backgroundColor: 'white',
              // borderTopLeftRadius: 80,
              // justifyContent: 'space-around',
              borderBottomLeftRadius: 60,
              justifyContent: 'center',
              // elevation: 1,
              flexDirection: 'row',

              alignItems: 'center',
              borderBottomWidth: 1,
              borderLeftWidth: 1,
              borderColor: '#D3D3D3',
              // borderBottomColor: 'lightgrey',
              // borderLeftColor: 'lightgrey',
              // borderWidth: 1,
              // borderBottomWidth: 1,
              // borderLeftWidth: 1,
              // borderColor: 'transparent',
            }}
            onPress={() => toggleOverlay()}>
            <Icon style={{fontSize: 18}} type="FontAwesome5" name="user-alt" />
            <Icon style={{fontSize: 18}} type="FontAwesome5" name="user-alt" />
            <Text
              style={{
                color: theme.textColor.blackColor,
                fontSize: 18,
                marginLeft: 5,
              }}>
              In a Relationship
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={1}
            style={{
              height: 150,
              // backgroundColor: 'blue',

              borderBottomLeftRadius: 60,
              justifyContent: 'center',
              flexDirection: 'row',

              alignItems: 'center',
              borderBottomWidth: 1,
              borderLeftWidth: 1,
              borderColor: '#D3D3D3',

              zIndex: 3,
            }}
            onPress={() => toggleOverlay()}>
            <Icon style={{fontSize: 18}} type="FontAwesome5" name="user-alt" />
            <Text
              style={{
                color: theme.textColor.blackColor,
                fontSize: 18,
                marginLeft: 5,
              }}>
              Partenaire
            </Text>
          </TouchableOpacity>

          <View
            style={{flex: 1, backgroundColor: 'white', marginTop: -100}}></View>
        </View>

        <Overlay toggleOverlay={toggleOverlay} visible={state.visible}>
          <TouchableOpacity
            style={{
              borderWidth: 0,
              paddingHorizontal: 15,
              paddingVertical: 10,
              alignSelf: 'flex-start',
            }}
            onPress={() =>
              setState({...state, visible: !state.visible, visible1: false})
            }>
            <Icon
              type="AntDesign"
              name="arrowleft"
              style={{color: 'white', fontSize: 17}}
            />
          </TouchableOpacity>
          <View
            style={{
              paddingHorizontal: 40,
              // marginVertical: 50,

              // height: '60%',
              paddingVertical: 20,
              // marginTop: 20,
              borderRadius: 50,
              backgroundColor: 'white',
              width: Dimensions.get('window').width / 1.2,
              justifyContent: 'center',
              alignItems: 'center',
              elevation: 0,
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
              {/* // <View
              //   style={{
              //     width: 40,
              //     marginLeft: 5,
              //     height: 40,
              //     borderRadius: 150,
              //     borderWidth: 1,
              //   }}></View> */}
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
                  source={require('../../../assets/images/girl.png')}
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
              onPress={() => toggleOverlay()}
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
        </Overlay>
        <Overlay toggleOverlay={toggleOverlay1} visible={state.visible1}>
          <View
            style={{
              flex: 1,
              // backgroundColor: 'rgba(255, 255, 255, 0.75)',

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
                            source={require('../../../assets/images/girl.png')}
                          />
                        </View>
                      </View>
                      <View style={{width: '70%', borderWidth: 0}}>
                        <Text
                          style={{
                            color:
                              theme.textColor[
                                state.selected == i ? 'blackColor' : 'greyColor'
                              ],
                            fontWeight: '700',
                            // marginLeft: 30,
                            fontSize: 22,
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
                onPress={() => toggleOverlay1()}
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
        </Overlay>
      </View>
    </CustomView>
  );
};

export default Status;
