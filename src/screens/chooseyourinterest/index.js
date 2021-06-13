import React, { Component, useState, useEffect } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Toast from '../../components/toastmessage';


import { theme } from '../../constants/theme';
import { Icon } from 'native-base';
import GlobalButton from '../../components/buttons/generalbutton';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Feather from 'react-native-vector-icons/Feather';
// import * as Actions from '../../redux/actions/index';
import { connect } from 'react-redux';
import Geolocation from '@react-native-community/geolocation';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Actions } from '../../redux/actions/index';
import Geocoder from 'react-native-geocoding';
Geocoder.init('AIzaSyBh1a2_r8JqiIx9zpuSeEGcyR7XFfiwKlA', { language: 'en' }); // use a valid API key

import axios from 'axios';
const Status = (props) => {
  let dataRedux = props?.userData;

  const data = props?.route?.params?.profileData
    ? props?.route?.params?.profileData
    : dataRedux;

  const company_name = data?.status == 'partner' ? true : false;
  console.log('Data  your interets>>.=========', company_name);
  const [state, setState] = useState({
    // interests: [1, 2],
    // selectCountry: '',
    // images: [],
    // userName: '',
    // email: '',
    // height: '',
    // weight: '',
    // eyeColor: '',
    // contact: '',
    // age: '',
    // firstName: '',
    // lastName: '',
    // city: '',
    // description: '',
    // Location: false,
    // company_name: '',
    // geoCodeData: {},
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
    countryId: '',
    geoCodeData: props.reverseGeoCodeData,
    latitude: '24.9180',
    longitude: '67.0971',
  });

  const [open, setOpen] = useState(false);
  useEffect(() => {

    // console.log("props?.userDataprops?.userData", props?.userData.selectCountry)
    if (props?.userData && props.editSetting) {
      setState({
        ...state,
        interests: dataRedux?.interests,
        selectCountry: dataRedux?.selectCountry,
        images: props.images,
        userName: dataRedux?.username,
        email: dataRedux?.email,
        height: Number(dataRedux?.height),
        weight: Number(dataRedux?.weight),
        eyeColor: dataRedux?.eye_color,
        contact: dataRedux?.phone,
        age: Number(dataRedux?.age),
        firstName: dataRedux?.first_name,
        lastName: dataRedux?.last_name,
        city: dataRedux?.city,
        status: data?.status || dataRedux.status,
        description: dataRedux?.description,
        company_name: dataRedux?.company_name,
        Location: true

      });
    } else {
      setState({
        ...state,
        status: data?.status,
        email: data?.value,
        userName: data?.userName,
        confirmPassword: data?.confirmPassword,
        password: data?.password,
      });
    }
    props.GetCounties()
    props.ReverseGeoCode()
    props.GetInterests()

  }, []);



  const _getCurrentLocation = () => {
    Geolocation.getCurrentPosition((info) => {
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
        console.log("teemmmm", temp)
        setState({ ...state, images: temp });
      }
    });

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

  const _Buttons = () => {

    return (


      <View style={{ overflow: 'hidden', marginVertical: 5 }}>
        <GlobalButton
          buttonText="Choose Your Interest"
          onPress={async () => {
            if (
              state.userName == "" ||
              state.height == "" ||
              state.weight == "" ||
              state.eyeColor == "" ||
              state.contact == "" ||
              state.age == "" ||
              state.firstName == "" ||
              state.lastName == "" ||
              state.city == "" ||
              state.description == "") {

              Toast('Error', ' Please fill all inputs correctly', 'error');

            }

            else if (company_name && state.company_name == "") {
              Toast('Error', ' Please fill Company Name', 'error');

            }
            else if ((state.countryId == "" || state.selectCountry == '') && !props.editSetting) {
              Toast('Error', ' Please Select Country', 'error');

            }
            else {
              props.StoreData(state.images);
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
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      {/* {console.log("images",props.userData.interests)} */}

      <ImageBackground
        source={require('../../assets/images/statusbg.png')}
        style={{ height: '100%', width: '100%' }}
        resizeMode="cover">
        <View style={{ flex: 1, backgroundColor: 'rgba(00,00,00,0.8)' }}>
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
                style={{ color: 'white', fontSize: 17 }}
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
                  state.images.map((val, i) => (
                    console.log("valeee", val),
                    <View
                      key={i}
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
                        source={val || val.image_path ? { uri: val } : require('../../assets/icons/girls.png')}
                      // source={ val.image_path
                      //   ? {uri: val.image_path}
                      //   : require('../../assets/icons/girls.png')}

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
                  <Icon style={{ fontSize: 20 }} type="AntDesign" name="plus" />
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
                      setState({ ...state, company_name: text })
                    }
                    placeholderTextColor={theme.borderColor.inActiveBorderColor}
                    placeholder={'Enter Company Name'}
                  />
                ) : null}
                {/* {company_name ? (
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
                        {state.Location && state.geoCodeData ? (

                          <Text>
                            {' '}
                            {props.reverseGeoCodeData?.city +
                              '  ' +
                              props.reverseGeoCodeData?.country +
                              ' , ' +
                              props.reverseGeoCodeData?.countryCode +
                              '  ,  ' +
                              props.reverseGeoCodeData?.regionName}
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
                  </View>
                ) : null} */}

                <TextInput
                  style={{
                    width: '100%',
                    borderBottomWidth: 1,
                    height: 40,
                    borderColor: theme.borderColor.inActiveBorderColor,
                  }}
                  // editable={false}
                  value={state.userName}
                  onChangeText={(text) =>
                    setState({
                      ...state,
                      userName: text,
                    })
                  }
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
                  onChangeText={(text) => setState({ ...state, firstName: text })}
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
                  onChangeText={(text) => setState({ ...state, lastName: text })}
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
                  onChangeText={(text) => setState({ ...state, contact: text })}
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
                  onChangeText={(text) => setState({ ...state, age: text })}
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
                  onChangeText={(text) => setState({ ...state, city: text })}
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
                  <View style={{ width: '80%', justifyContent: 'center' }}>
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
                    setState({ ...state, description: text })
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
                    onChangeText={(text) => setState({ ...state, height: text })}
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
                    onChangeText={(text) => setState({ ...state, weight: text })}
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
                      setState({ ...state, eyeColor: text })
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
  reverseGeoCodeData: state.reducers.reverseGeoCodeData,
});
const mapDispatchToProps = {
  Signup: Actions.Signup,
  Logout: Actions.Logout,
  StoreData: Actions.StoreData,
  GetCounties: Actions.GetCounties,
  GetInterests: Actions.GetInterests,
  ReverseGeoCode: Actions.ReverseGeoCode,
};

export default connect(mapStateToProp, mapDispatchToProps)(Status);
