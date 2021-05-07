import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
  ImageBackground,
} from 'react-native';

import {theme} from '../../constants/theme';
import {Icon} from 'native-base';
import GlobalButton from '../../components/buttons/generalbutton';

import axios from 'axios';
const Status = (props) => {
  const data = props?.route?.params.profileData;
  let url = 'https://meetourism.deviyoinc.com/api/v1/countries';

  console.log('data choose your interest', data);

  const [state, setState] = useState({
    interests: [1, 2],
    selectCountry: '',
    images: [
      'user_images/user-image-608de193434244-74625999.jpg',
      'user_images/user-image-608de193434244-74625999.jpg',
    ],
  });

  useEffect(() => {
    _GetCities();
  }, []);
  const _GetCities = async () => {
    let headers = {
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${token}`,
      },
    };
    await axios
      .get(url)
      .then((res) => {
        // console.log('res', res.data.data);
        if (res.data.status_type === 'success') {
          // setState({...state, countries: res.data.data});
          setState({
            ...state,
            status: data.status,
            email: data.value,
            countries: res.data.data,
          });
        } else {
          setState({...state, status: data.status, email: data.value});
        }
      })
      .catch((error) => {
        console.log('error in catch _GetCities', error);
      });
  };
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <ImageBackground
        source={require('../../assets/images/statusbg.png')}
        style={{height: '100%', width: '100%'}}
        resizeMode="cover">
        <View style={{flex: 1, backgroundColor: 'rgba(00,00,00,0.8)'}}>
          <View
            style={{
              // flex: 0.1,
              // backgroundColor: '#241332',
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
              // backgroundColor: '#241332',
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
                elevation: 10,
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
                  value={state.firstName}
                  onChangeText={(text) => setState({...state, firstName: text})}
                  placeholderTextColor={theme.borderColor.inActiveBorderColor}
                  placeholder="First Name"
                />
                <TextInput
                  value={state.lastName}
                  style={{
                    width: '100%',
                    borderBottomWidth: 1,
                    height: 40,

                    borderColor: theme.borderColor.inActiveBorderColor,
                  }}
                  onChangeText={(text) => setState({...state, lastName: text})}
                  placeholderTextColor={theme.borderColor.inActiveBorderColor}
                  placeholder="Last Name"
                />
                <TextInput
                  value={data.value}
                  editable={false}
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
                  onChangeText={(text) => setState({...state, contact: text})}
                  value={state.contact}
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
                  onChangeText={(text) => setState({...state, age: text})}
                  value={state.age}
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
                  value={state.city}
                  onChangeText={(text) => setState({...state, city: text})}
                  style={{
                    width: '100%',
                    borderBottomWidth: 1,
                    height: 40,

                    borderColor: theme.borderColor.inActiveBorderColor,
                  }}
                  placeholderTextColor={theme.borderColor.inActiveBorderColor}
                  placeholder="City"
                />
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => setState({...state, open: !state.open})}
                  style={{
                    width: '100%',
                    borderBottomWidth: 1,
                    height: 40,
                    flexDirection: 'row',

                    borderColor: theme.borderColor.inActiveBorderColor,
                  }}>
                  <View style={{width: '80%', justifyContent: 'center'}}>
                    <Text>
                      {state.selectCountry
                        ? state.selectCountry
                        : 'Select Country'}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      width: '20%',
                      justifyContent: 'center',
                      alignItems: 'flex-end',
                    }}
                    // onPress={() => setState({...state, open: !state.open})}
                  >
                    <Text> arrow</Text>
                  </TouchableOpacity>
                </TouchableOpacity>
                {state.open ? (
                  <View
                    style={{
                      width: '100%',
                      // borderWidth: 0.3,
                      borderLeftWidth: 1,
                      borderRightWidth: 1,
                      // paddingVertical: 5,
                    }}>
                    {/* <ScrollView nestedScrollEnabled={true}> */}
                    {state.countries &&
                      state.countries.map((item, i) => {
                        console.log('item', item);
                        return (
                          <TouchableOpacity
                            style={{
                              borderBottomWidth: 1,
                              borderColor: 'gray',
                              paddingVertical: 6,
                            }}
                            onPress={() =>
                              setState({
                                ...state,
                                selectCountry: item.name,
                                countryId: item.id,
                                open: false,
                              })
                            }>
                            <Text> {item.name}</Text>
                          </TouchableOpacity>
                        );
                      })}
                    {/* </ScrollView> */}
                  </View>
                ) : null}

                <TextInput
                  onChangeText={(text) =>
                    setState({...state, description: text})
                  }
                  value={state.description}
                  maxLength={100}
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
                    onChangeText={(text) => setState({...state, height: text})}
                    value={state.height}
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
                    onChangeText={(text) => setState({...state, weight: text})}
                    value={state.weight}
                    style={{
                      // width: '20%',
                      borderBottomWidth: 1,
                      height: 40,

                      borderColor: theme.borderColor.inActiveBorderColor,
                    }}
                    placeholderTextColor={theme.borderColor.inActiveBorderColor}
                    placeholder="weight"
                  />
                  <TextInput
                    onChangeText={(text) =>
                      setState({...state, eyeColor: text})
                    }
                    value={state.eyeColor}
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
                    onPress={() =>
                      props.navigation.navigate('yourinterests', {
                        profileData: state,
                      })
                    }
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default Status;
