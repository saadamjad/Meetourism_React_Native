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
      props.navigation.navigate('drawer')
    } else {
      alert('Please select one of them');
    }
  };
  return (
    <CustomView scroll image={require('../../../assets/images/background.png')}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(rgba(255, 255, 255, 0.8))',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            height: '50%',
            // backgroundColor: 'white',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            resizeMode="contain"
            source={require('../../../assets/images/logo.png')}
            style={{height: 150, width: 150}}
          />
        </View>
        <View
          style={{
            height: '50%',
            width: '100%',
          }}>
          <TouchableOpacity
            activeOpacity={1}
            style={{
              height: 150,
              backgroundColor: 'white',
              // elevation: 5,
              borderTopLeftRadius: 100,
              // borderBottomLeftRadius: 100,
              justifyContent: 'space-around',
              alignItems: 'center',
              borderBottomColor: 'lightgrey',
              borderLeftColor: 'lightgrey',
              // borderWidth: 1,
              borderColor: 'transparent',
              zIndex: 3,
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
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
              // elevation: 2,
              //   borderTopLeftRadius: 100,
              // borderBottomLeftRadius: 100,
              borderBottomColor: 'lightgrey',
              borderLeftColor: 'lightgrey',
              // borderWidth: 1,
              borderColor: 'transparent',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginTop: -60,
              zIndex: 2,
            }}>
            <Text
              style={{
                color: theme.secondaryColor,
                fontSize: 22,
                fontWeight: '700',
              }}></Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon
                style={{fontSize: 18}}
                type="FontAwesome5"
                name="user-alt"
              />
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
                In a Relationship
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={{
              height: 150,
              backgroundColor: 'white',
              // elevation: 2,
              //   borderTopLeftRadius: 100,
              // borderBottomLeftRadius: 100,
              borderBottomColor: 'lightgrey',
              borderLeftColor: 'lightgrey',
              // borderWidth: 1,
              borderColor: 'transparent',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginTop: -60,
              zIndex: 1,
            }}>
            <Text
              style={{
                color: theme.secondaryColor,
                fontSize: 22,
                fontWeight: '700',
              }}></Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon
                style={{fontSize: 18}}
                type="FontAwesome5"
                name="user-alt"
              />
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
                In a Relationship
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{flex: 1, backgroundColor: 'white', marginTop: -100}}></View>
        </View>
      </View>
      <Overlay toggleOverlay={toggleOverlay} visible={state.visible}>
        <View
          style={{
            paddingHorizontal: 40,
            paddingVertical: 40,
            borderRadius: 30,
            backgroundColor: 'white',
            width: Dimensions.get('window').width / 1.2,
            justifyContent: 'center',
            alignItems: 'center',
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
                  width: 46,
                  marginLeft: 5,
                  height: 46,
                  borderRadius: 150,
                  // borderWidth: 1,
                }}
                resizeMode="contain"
                source={require('../../../assets/images/girl.png')}
              />
            ))}
            <View
              style={{
                marginLeft: 5,
                width: 46,
                height: 46,
                borderRadius: 150,
                backgroundColor: theme.textColor.lightWhiteColor,
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
            width: Dimensions.get('window').width / 1.2,
            justifyContent: 'center',
            borderRadius: 30,
            backgroundColor: 'white',
            alignItems: 'center',
          }}>
          <View style={{paddingHorizontal: 80}}>
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
                marginTop: 50,
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
                    width: '100%',
                    flexDirection: 'row',
                    marginTop: 10,
                    // justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Image
                    resizeMode="contain"
                    style={{height: 60, width: 60}}
                    source={require('../../../assets/images/girl.png')}
                  />
                  <Text
                    style={{
                      color:
                        theme.textColor[
                          state.selected == i ? 'blackColor' : 'greyColor'
                        ],
                      fontWeight: '700',
                      marginLeft: 40,
                      fontSize: 24,
                      // width: '85%',
                      textAlign: 'center',
                    }}>
                    {val.name}
                  </Text>
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
            }}>
            <View
              style={{
                marginLeft: 5,
                width: 40,
                height: 40,
                borderRadius: 150,
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
              paddingVertical: 10,
              paddingHorizontal: 10,
              alignSelf: 'center',
              marginTop: 40,
              width: 150,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 30,
            }}>
            <Text style={{color: theme.textColor.whiteColor}}>Done</Text>
          </TouchableOpacity>
        </View>
      </Overlay>
    </CustomView>
  );
};

export default Status;
