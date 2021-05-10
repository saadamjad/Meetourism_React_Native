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
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Feather from 'react-native-vector-icons/Feather';
import axios from 'axios';
const Status = (props) => {
  const data = props?.route?.params.profileData;
  let url = 'https://meetourism.deviyoinc.com/api/v1/countries';

  // console.log('data choose your interest========+++++', data);

  const [state, setState] = useState({
    interests: [1, 2],
    selectCountry: '',
    images: [],
    userName: '',
    email: '',
    height: '',
    weight: '',
    eyeColor: '',
    contact: '',
    age: '',
    firstName: '',
    lastName: '',
    city: '',
    description: '',
  });

  const [value, setValue] = useState(false);
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
            userName: data.userName,
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
  const _Imageupload = () => {
    var options = {
      title: 'Select Image',
      mediaType: 'photo',
      base64: true,
      noData: false,
      quality: 0.1,
    };
    launchCamera(options, (res) => {
      if (res.didCancel) {
        console.log('User cancelled');
      } else if (res.error) {
        console.log('Camera Error: ');
      } else {
        console.log('res', res);
        let temp = state.images;
        temp.push(res.uri);
        setState({...state, images: temp});
        // imageUpload(res);
      }
    });
    // ImagePicker.openPicker({
    //   width: 300,
    //   height: 400,
    //   cropping: true,
    // })
    //   .then((image) => {
    //     console.log('image response===', image);
    //     setImageData(image);
    //     // _ApiCallImageupload(image.path, image.mime);
    //     // _ApiCallImageupload();
    //   })
    //   .catch((error) => {
    //     console.log('error', error);
    //   });
  };
  const imageUpload = (res) => {
    const base_url = 'https://haosaudi-server.herokuapp.com/image';
    console.log('res.fileName', res.fileName);

    let formData = new FormData();
    formData.append('photo', {...res, name: res.fileName});
    // console.log('BODY', formData, {...imageData, name: imageData.fileName});
    return axios
      .post(`${base_url}`, formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      })
      .then(({data}) => {
        if (data?.success) {
          console.log('DATA IS THERE JUST CHECK IT OUT!', data.data.location);
          settempImage(data.data.location);
          let data2 = {
            photo: data.data.location,
          };

          props.Updateprofilepic(data2, props.token);
        }
      })
      .catch((err) => {
        console.log('THERE IS ERROR WHEN IMAGE IS UPLOADING!!', err);
      });
  };
  const _Buttons = () => {
    return (
      <View style={{overflow: 'hidden', marginVertical: 5}}>
        <GlobalButton
          buttonText="Choose Your Interest"
          onPress={async () => {
            var newArrayDataOfOjbect = Object.values(state);
            var value2 = false;
            newArrayDataOfOjbect.map((item, i) => {
              console.log('item=b', item.length);
              if (item.length == 0) {
                console.log('values AGYA');

                setValue(true);
              } else {
                setValue(false);
              }
            });

            console.log('values', value);
            if (value) {
              alert('please fill  All inputs');
            } else {
              // console.log('donee', value);

              props.navigation.navigate('yourinterests', {
                profileData: state,
              });
            }
          }}
        />
      </View>
    );
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
                {state.images &&
                  state.images.map(
                    (val) => (
                      console.log('valuee====', val),
                      (
                        <View
                          style={{
                            width: 50,
                            marginLeft: 5,
                            height: 50,
                            overflow: 'hidden',
                            borderRadius: 50,
                          }}>
                          <Image
                            style={{
                              width: '100%',
                              height: '100%',
                            }}
                            resizeMode="cover"
                            source={{uri: val}}
                          />
                        </View>
                      )
                    ),
                  )}
                <TouchableOpacity
                  style={{
                    backgroundColor: '#998FA2',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 50,
                    marginLeft: 10,
                    height: 50,
                    overflow: 'hidden',
                    borderRadius: 50,
                  }}
                  onPress={() => {
                    _Imageupload();
                  }}>
                  <Icon style={{fontSize: 20}} type="AntDesign" name="plus" />
                </TouchableOpacity>
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
                  editable={false}
                  value={data.userName}
                  placeholderTextColor={theme.borderColor.inActiveBorderColor}
                  placeholder="Username"
                />
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
                    onPress={() => setState({...state, open: !state.open})}>
                    {state.open ? (
                      <Feather name="arrow-up-circle" size={18} />
                    ) : (
                      <Feather name="arrow-down-circle" size={18} />
                    )}
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

                {<_Buttons />}
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default Status;
