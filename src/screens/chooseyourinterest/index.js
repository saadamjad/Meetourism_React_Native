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
// import * as Actions from '../../redux/actions/index';
import {connect} from 'react-redux';
import Geolocation from '@react-native-community/geolocation';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Actions} from '../../redux/actions/index';
import Geocoder from 'react-native-geocoding';
Geocoder.init('AIzaSyBh1a2_r8JqiIx9zpuSeEGcyR7XFfiwKlA', {language: 'en'}); // use a valid API key

import axios from 'axios';
const Status = (props) => {
  const data = props?.route?.params?.profileData
    ? props?.route?.params?.profileData
    : null;
  let url = 'https://meetourism.deviyoinc.com/api/v1/countries';

  const company_name = data?.status == 'partner' ? true : false;
  console.log('Data  your interets>>.=====', data?.userName);
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
    Location: false,
    company_name: '',
    geoCodeData: {},
  });

  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (props?.userData && props.editSetting) {
      let data = props?.userData;
      setState({
        ...state,
        interests: data?.interests,
        selectCountry: data?.selectCountry,
        images: data?.images,
        userName: data?.username,
        email: data?.email,
        height: Number(data?.height),
        weight: Number(data?.weight),
        eyeColor: data?.eye_color,
        contact: data?.phone,
        age: Number(data?.age),
        firstName: data?.first_name,
        lastName: data?.last_name,
        city: data?.city,
        description: data?.description,
        company_name: data?.company_name,
      });
    } else {
      console.log('else');
      _ReverseGeoCode();
    }
    _GetInterests();
  }, []);

  const _ReverseGeoCode = () => {
    fetch('http://ip-api.com/json')
      .then((response) => response.json())
      .then((response) => {
        // console.log("User's Location Data is ", response);
        // console.log("User's Country ", response?.country);

        let data = {
          country: response?.country,
          city: response?.city,
          regionName: response?.regionName,
          countryCode: response?.countryCode,
        };
        _GetCities(data);
        // setState({
        //   ...state,
        //   geoCodeData: {
        //     country: country,
        //     city: city,
        //     regionName: regionName,
        //     countryCode: countryCode,
        //   },
        // });
      })
      .catch((error) => {
        console.error(error);
      });
    _GetCities();
  };
  const _GetCities = async (geocodedata) => {
    await axios
      .get(url)
      .then((res) => {
        if (res?.data?.status_type === 'success') {
          setState({
            ...state,
            ...state.geoCodeData,
            status: data?.status,
            email: data?.value,
            userName: data?.userName,
            // countries: res.data?.data,
            confirmPassword: data?.confirmPassword,
            password: data?.password,
            geoCodeData: {
              country: geocodedata?.country,
              city: geocodedata?.city,
              regionName: geocodedata?.regionName,
              countryCode: geocodedata?.countryCode,
            },
          });
          props.GetCounties(res?.data?.data);
        } else {
          setState({
            ...state,

            status: data?.status,
            email: data?.value,
            // countries: [],
          });
          props.GetCounties([]);
        }
      })
      .catch((error) => {
        console.log('error in catch _GetCities', error);
      });
  };
  const _getCurrentLocation = () => {
    Geolocation.getCurrentPosition((info) => {
      console.log('getCurrentPosition', info.coords?.latitude),
        setState({
          ...state,
          latitude: info?.coords?.latitude,
          longitude: info?.coords?.longitude,
          Location: true,
        });
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
    launchImageLibrary(options, (res) => {
      if (res.didCancel) {
        console.log('User cancelled');
      } else if (res.error) {
        console.log('Camera Error: ');
      } else {
        console.log('res', res);
        let temp = state.images;
        temp.push(res.uri);
        setState({...state, ...geoCodeData, images: temp});
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
            props.StoreData(state.images);
            props.navigation.navigate('yourinterests', {
              profileData: state,
            });
          }}
        />
      </View>
    );
  };
  const _GetInterests = async () => {
    console.log('all interests');
    let url = 'https://meetourism.deviyoinc.com/api/v1/interests';

    await axios
      .get(url)
      .then((res) => {
        if (res.data.status_type === 'success') {
          let interest = res?.data?.data;

          props.GetInterests(interest);
        } else {
          console.log('else');

          props.GetInterests([]);
        }
      })
      .catch((error) => {
        console.log('error in catch _GetInterests', error);
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
                  state.images.map((val) => (
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
                  ))}
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
                {company_name ? (
                  <TextInput
                    style={{
                      width: '100%',
                      borderBottomWidth: 1,
                      height: 40,
                      borderColor: theme.borderColor.inActiveBorderColor,
                    }}
                    value={state.company_name}
                    onChangeText={(text) =>
                      setState({...state, company_name: text})
                    }
                    placeholderTextColor={theme.borderColor.inActiveBorderColor}
                    placeholder={'Enter Company Name'}
                  />
                ) : null}

                <View
                  style={{
                    width: '100%',
                    borderBottomWidth: 1,
                    height: 40,
                    overflow: 'hidden',
                    borderColor: theme.borderColor.inActiveBorderColor,
                  }}
                  // editable={false}
                >
                  {company_name ? (
                    <TouchableOpacity
                      onPress={() => _getCurrentLocation()}
                      style={{
                        width: '100%',
                        justifyContent: 'center',
                        borderBottomWidth: 1,
                        // borderWidth: 1,
                        height: '100%',
                        flexDirection: 'row',
                        alignItems: 'center',

                        borderColor: theme.borderColor.inActiveBorderColor,
                      }}>
                      <View
                        style={{
                          height: '100%',
                          justifyContent: 'center',
                          borderWidth: 0,
                          flex: 1,
                        }}>
                        {state.Location ? (
                          <Text>
                            {' '}
                            {state?.geoCodeData?.city +
                              '  ' +
                              state?.geoCodeData?.country +
                              ' , ' +
                              state?.geoCodeData?.countryCode +
                              '  ,  ' +
                              state?.geoCodeData?.regionName}
                          </Text>
                        ) : null}
                      </View>
                      <TouchableOpacity
                        onPress={() => _getCurrentLocation()}
                        style={{
                          height: '100%',
                          width: 100,
                          alignSelf: 'flex-end',
                          alignItems: 'flex-end',
                          justifyContent: 'center',
                        }}>
                        <MaterialIcons
                          name="my-location"
                          size={25}
                          color="red"
                        />
                      </TouchableOpacity>
                    </TouchableOpacity>
                  ) : null}
                </View>

                {console.log('state.userNamestate.userName', state.userName)}
                <TextInput
                  style={{
                    width: '100%',
                    borderBottomWidth: 1,
                    height: 40,
                    borderColor: theme.borderColor.inActiveBorderColor,
                  }}
                  // editable={false}
                  value={state.userName}
                  onChangeText={(text) => setState({...state, userName: text})}
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
                  value={state.email || data?.value}
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
                  value={String(state.age)}
                  style={{
                    width: '100%',
                    borderBottomWidth: 1,
                    height: 40,

                    borderColor: theme.borderColor.inActiveBorderColor,
                  }}
                  placeholderTextColor={theme.borderColor.inActiveBorderColor}
                  placeholder="Age"
                  keyboardType="number-pad"
                />
                <TextInput
                  value={String(state.city)}
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
                  onPress={() => setOpen(!open)}
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
                    onPress={() => setOpen(!open)}>
                    {open ? (
                      <Feather name="arrow-up-circle" size={18} />
                    ) : (
                      <Feather name="arrow-down-circle" size={18} />
                    )}
                  </TouchableOpacity>
                </TouchableOpacity>
                {open ? (
                  <View
                    style={{
                      width: '100%',
                      // borderWidth: 0.3,
                      borderLeftWidth: 1,
                      borderRightWidth: 1,
                      // paddingVertical: 5,
                    }}>
                    {props?.allCountries &&
                      props.allCountries.map((item, i) => {
                        return (
                          <TouchableOpacity
                            key={i}
                            style={{
                              borderBottomWidth: 1,
                              borderColor: 'gray',
                              paddingVertical: 6,
                            }}
                            onPress={async () => {
                              await setState({
                                ...state,
                                selectCountry: item.name,
                                countryId: item.id,
                              });
                              setOpen(false);
                            }}>
                            <Text> {item.name}</Text>
                          </TouchableOpacity>
                        );
                      })}
                    {/* </ScrollView> */}
                  </View>
                ) : null}

                {/* {props?.allCountries?.length < 0 && !props.loader ? (
                      <Text
                        style={{
                          color: 'red',
                          marginVertical: 10,
                          textAlign: 'center',
                        }}>
                        No countries found
                      </Text>
                    ) : null} */}
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
                    value={String(state.height)}
                    style={{
                      // width: '20%',
                      borderBottomWidth: 1,
                      height: 40,

                      borderColor: theme.borderColor.inActiveBorderColor,
                    }}
                    placeholderTextColor={theme.borderColor.inActiveBorderColor}
                    placeholder="Height"
                    keyboardType="number-pad"
                  />
                  <TextInput
                    onChangeText={(text) => setState({...state, weight: text})}
                    value={String(state.weight)}
                    style={{
                      // width: '20%',
                      borderBottomWidth: 1,
                      height: 40,

                      borderColor: theme.borderColor.inActiveBorderColor,
                    }}
                    placeholderTextColor={theme.borderColor.inActiveBorderColor}
                    placeholder="weight"
                    keyboardType="number-pad"
                  />
                  <TextInput
                    onChangeText={(text) =>
                      setState({...state, eyeColor: text})
                    }
                    value={state.eyeColor}
                    style={{
                      borderBottomWidth: 1,
                      height: 40,

                      borderColor: theme.borderColor.inActiveBorderColor,
                    }}
                    placeholderTextColor={theme.borderColor.inActiveBorderColor}
                    placeholder="EyeColor"
                  />
                </View>

                {_Buttons()}
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const mapStateToProp = (state) => ({
  userData: state.reducers.userData,
  loader: state.reducers.loader,
  images: state.reducers.images_Interests,
  editSetting: state.reducers.editSetting,
  allCountries: state.reducers.allCountries,
});
const mapDispatchToProps = {
  Signup: Actions.Signup,
  Logout: Actions.Logout,
  StoreData: Actions.StoreData,
  GetCounties: Actions.GetCounties,
  GetInterests: Actions.GetInterests,
};

export default connect(mapStateToProp, mapDispatchToProps)(Status);
