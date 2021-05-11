import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  TextInput,
  AsyncStorage,
  StyleSheet,
  ImageBackground,
} from 'react-native';
// import {Icon} from 'native-base';
// import Style from './style';
import Toast from '../../components/toastmessage';

import {theme} from '../../constants/theme';

import {Icon} from 'native-base';
import {Button, Overlay} from 'react-native-elements';
import {CheckBox} from 'react-native-elements';
import axios from 'axios';
import AnimatedLoader from 'react-native-animated-loader';

import {connect} from 'react-redux';

import * as Actions from '../../redux/actions/index';
import {ScrollView} from 'react-native-gesture-handler';
let statusValue = 0;
const Status = (props) => {
  const data = props?.route?.params?.profileData;
  const [loader, setLoader] = useState(false);
  console.log('Data  your interets>>.', data?.company_name);
  const company_name = data?.status == 'partner' ? true : false;
  console.log(' data.userName');

  const [state, setState] = useState({
    visible: false,
    visible1: false,
    settingStatus: false,
    interests: [],
    selectedInterests: [],
    isVisible: false,
    noValues: true,
  });

  useEffect(() => {
    _UserType();
    _GetInterests();

    // if (props?.route?.params || props?.route?.params) {
    //   setState({...state, visible: true, settingStatus: true});
    // }
  }, []);

  const _UserType = async () => {
    let value = await AsyncStorage.getItem('userStatus');
    console.log(value);
    statusValue = value;
  };
  const _UserRegister = async () => {
    let data2 = company_name
      ? {
          company_name: data?.company_name,
          first_name: data?.firstName,
          last_name: data?.lastName,
          username: data?.userName,
          email: data?.email,
          phone: data?.contact,
          password: data?.password,
          password_confirmation: data?.confirmPassword,
          age: Number(data?.age),
          country_id: data?.countryId,
          city: data?.city,
          weight: Number(data?.weight),
          height: Number(data?.height),
          eye_color: data?.eyeColor,
          status: data?.status,
          interests: data?.interests,
          images: data?.images,
          description: data?.description,
          // company_name: data.company_name,
          // first_name: 'First Name',
          // last_name: 'Last Name',
          // username:
          //   'usersskskskksksksssjsjsjssadshshhsjdjdsjsjsdjsjddsfdasdsfkjjjjsname',
          // email:
          //   'emassdddskskskskasssdfsksksksdjdjxnnxanajajjanxdjdkdsaddil@yosssspmail.com',
          // phone: '12345ssdskskksasdsssksjsjsjsshsjsjsjshshjssjsjssssasdsdddds6',
          // password: 'password12',
          // password_confirmation: 'password12',
          // description: 'ssssssssssssssssssssssssssssss',
          // age: 20,
          // country_id: 1,
          // city: 'City',
          // weight: 40,
          // height: 6.2,
          // eye_color: 'green',
          // status: data?.status,
          // interests: [1, 2],
          // images: ['user_images/user-image-608de193434244-74625999.jpg'],
        }
      : {
          first_name: data?.firstName,
          last_name: data?.lastName,
          username: data?.userName,
          email: data?.email,
          phone: data?.contact,
          password: data?.password,
          password_confirmation: data?.confirmPassword,
          age: Number(data?.age),
          country_id: data?.countryId,
          city: data?.city,
          weight: Number(data?.weight),
          height: Number(data?.height),
          eye_color: data?.eyeColor,
          status: data?.status,
          interests: data?.interests,
          images: data?.images,
          description: data?.description,

          // first_name: 'First Name',
          // last_name: 'Last Name',
          // username: 'userssksssadsfdasdsfkjjjjsname',
          // email: 'emassdddasssdfdsaddil@yosssspmail.com',
          // phone: '12345ssdasdsssssasdsdddds6',
          // password: 'password12',
          // password_confirmation: 'password12',
          // description: 'ssssssssssssssssssssssssssssss',
          // age: 20,
          // country_id: 1,
          // city: 'City',
          // weight: 40,
          // height: 6.2,
          // eye_color: 'green',
          // status: 'single',
          // interests: [1, 2],
          // images: ['user_images/user-image-608de193434244-74625999.jpg'],
        };
    console.log('data', data2);

    _ApiCall(data2);
  };
  const _ApiCall = (data2) => {
    setLoader(true);
    let _url = 'https://meetourism.deviyoinc.com/api/v1/auth/register';
    let header = {
      headers: {Accept: 'application/json'},
    };
    axios
      .post(_url, data2, header)
      .then((res) => {
        let response = res.data;
        if (response.status_type === 'success') {
          setLoader(false);
          console.log(
            'res.status_type================================================',
            response.data,
          );

          console.log('successully regisetered');
          Toast('Success', 'successully regisetered', 'success');

          // _Navigation();
          props.Signup(response?.data, props?.navigation, company_name);
        } else {
          console.log('res==  ,', response?.data);
          Toast('Error', 'something went wrong', 'error');

          setLoader(false);
        }
      })
      .catch((err) => {
        let errResponse = err?.response?.data?.errors;
        console.log('err ', errResponse);
        setLoader(false);

        if (errResponse?.email) {
          let email = errResponse?.email[0];
          Toast('Error', email, 'error');
        } else if (errResponse?.username) {
          let username = errResponse?.username[0];
          Toast('Error', username, 'error');
        } else if (errResponse?.phone) {
          let phone = errResponse?.phone[0];
          Toast('Error', phone, 'error');
        } else {
          console.log('esle');
          // Toast('Error', errResponse, 'error');
          let message = Object.values(errResponse);
          console.log('message', message[0]);
          Toast('Error', message[0], 'error');
        }
      });
  };

  const _Navigation = () => {
    // props.navigation.navigate('PartnerStack');
    props.Signup(data, props.navigation);

    // if (statusValue == 0) {
    //   // alert('user');
    //   props.navigation.navigate('profilePreivew');
    // } else if (statusValue == 1) {
    //   // alert('relationship');
    //   props.navigation.navigate('userProfile', {
    //     status: 1,
    //   });
    // } else if (statusValue == 2) {
    //   // alert('partner');

    //   props.navigation.navigate('PartnerStack');
    // }
  };

  const _GetInterests = async () => {
    console.log('all interests');
    let url = 'https://meetourism.deviyoinc.com/api/v1/interests';
    let headers = {
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${token}`,
      },
    };
    await axios
      .get(url)
      .then((res) => {
        if (res.data.status_type === 'success') {
          console.log('res', res.data.data);
          setState({
            ...state,

            interests: res.data.data,
          });
        } else {
          console.log('else');
          setState({
            ...state,

            interests: [],
          });
        }
      })
      .catch((error) => {
        console.log('error in catch _GetInterests', error);
      });
  };

  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <>
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
            backgroundColor: 'rgba(000, 000, 000, 0.7)',
          }}>
          <View
            style={{
              width: '100%',
              paddingLeft: 20,
              height: 50,
              justifyContent: 'center',
            }}>
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
              flex: 1,
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
                {state.interests.length > 0
                  ? state.interests.map((val, i) =>
                      val.selected ? (
                        <TouchableOpacity
                          style={{
                            width: '80%',
                            flexDirection: 'row',
                            marginTop: 20,
                            // borderWidth: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                          key={i}>
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
                                    state.selected == i
                                      ? 'blackColor'
                                      : 'greyColor'
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
                      ) : (
                        val.selected
                      ),
                    )
                  : null}
                {state.noValues ? <Text> No Interest Selected </Text> : null}
              </View>
            </View>
            <View
              style={{
                paddingHorizontal: 20,
                height: 100,
                position: 'absolute',
                bottom: 0,

                justifyContent: 'center',
                alignSelf: 'flex-end',
              }}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  width: 45,
                  height: 45,
                  borderRadius: 45,
                  backgroundColor: theme.textColor.lightWhiteColor,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => setState({...state, isVisible: true})}>
                <Icon style={{fontSize: 20}} type="AntDesign" name="plus" />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => {
              console.log(statusValue);

              _UserRegister();
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

      <Overlay
        isVisible={state.isVisible}
        onBackdropPress={() => setState({...state, isVisible: false})}
        overlayStyle={{
          // borderRadius: 50,
          alignItems: 'center',
          justifyContent: 'center',
          width: '90%',
          padding: 0,
          borderRadius: 10,
          margin: 0,
          height: '86%',
        }}>
        <View style={{height: '100%', width: '100%', alignItems: 'center'}}>
          <Text
            style={{
              color: theme.secondaryColor,
              fontSize: 26,
              fontWeight: '700',
              paddingVertical: 7,
            }}>
            Select Your Interests
          </Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            {state.interests &&
              state.interests.map((val, i) => {
                return (
                  <TouchableOpacity
                    key={i}
                    onPress={() => {
                      let value = state.interests.map((item, index) => {
                        if (index == i) {
                          return {
                            ...item,
                            selected: !item.selected,
                          };
                        } else {
                          return {...item};
                        }
                      });

                      setState({...state, interests: value, noValues: false});
                    }}
                    style={{
                      width: '100%',
                      flexDirection: 'row',
                      marginTop: 20,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <View
                      style={{
                        height: 50,
                        width: '20%',
                        alignItems: 'center',
                      }}>
                      <CheckBox
                        checkedColor={theme.secondaryColor}
                        // checkedIcon={
                        //   <Image source={require('../checked.png')} />
                        // }
                        // uncheckedIcon={
                        //   <Image source={require('../unchecked.png')} />
                        // }
                        checked={val.selected ? true : false}
                        onPress={() => {
                          let value = state.interests.map((item, index) => {
                            if (index == i) {
                              return {
                                ...item,
                                selected: !item.selected,
                              };
                            } else {
                              return {...item};
                            }
                          });

                          setState({
                            ...state,
                            interests: value,
                            noValues: false,
                          });
                        }}
                      />
                    </View>
                    <View
                      style={{
                        // height: '100%',
                        width: '20%',
                        // borderWidth: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                      }}>
                      <View
                        style={{
                          height: 30,
                          width: 30,
                          borderRadius: 30,
                          overflow: 'hidden',
                          borderWidth: 1,
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
                        // width: '70%',
                        flex: 1,
                        borderWidth: 0,
                        paddingLeft: 10,
                        paddingLeft: 20,
                      }}>
                      <Text
                        style={{
                          color:
                            theme.textColor[
                              val.selected ? 'blackColor' : 'greyColor'
                            ],
                          fontWeight: '700',
                          // marginLeft: 30,
                          fontSize: 24,
                          // width: '85%',
                        }}>
                        {val.name}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
          </ScrollView>
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => {
              setState({...state, isVisible: false});
            }}
            style={{
              height: 40,
              marginVertical: 10,
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
      </Overlay>

      <AnimatedLoader
        visible={loader}
        overlayColor="rgba(255,255,255,0.6)"
        source={require('./loaders.json')}
        animationStyle={styles.lottie}
        speed={1}>
        <Text
          style={{
            color: theme.primaryColor,
            fontSize: 15,
            fontWeight: 'bold',
          }}>
          Creating Profile Please Wait
        </Text>
      </AnimatedLoader>
    </>
  );
};

const mapStateToProp = (state) => ({
  userData: state.reducers.userData,
  loader: state.reducers.loader,
});
const mapDispatchToProps = {
  Signup: Actions.Signup,
  Login: Actions.Login,
};

export default connect(mapStateToProp, mapDispatchToProps)(Status);

const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100,
  },
});
