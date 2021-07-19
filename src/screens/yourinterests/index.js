import React, { Component, useState, useEffect } from 'react';
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


import { theme } from '../../constants/theme';

import { Button, Overlay } from 'react-native-elements';
import { CheckBox } from 'react-native-elements';
import AnimatedLoader from 'react-native-animated-loader';
import { Actions } from '../../redux/actions/index';

import { connect } from 'react-redux';

import { ScrollView } from 'react-native-gesture-handler';
import { FastImageComponent } from '../../components/fastimage';
const Status = (props) => {
  //yhan data redux se utha loo kafi ha
  const data = props?.route?.params?.profileData;
  const editImages = props?.route?.params?.editImages;
  const token = props?.token;

  const [loader, setLoader] = useState(false);
  const company_name = data?.status == 'partner' ? true : false;

  const [state, setState] = useState({
    visible: false,
    visible1: false,
    settingStatus: false,
    interests: [],
    selectedInterests: props.allInterests,
    isVisible: false,
    noValues: true,
    loader: true,
    verifySelection: false,
    yourInterest: []
  });

  // useEffect(() => {
  //   // setState({ ...state, interests: props.allInterests, loader: false });

  //   // if (props.editSetting) {
  //   //   let value = props?.userData?.interests.map((item, i) => {
  //   //     // console.log("helo", item)
  //   //     return { ...item, selected: true, dataYes: true };
  //   //   });

  //   //   setState({
  //   //     ...state,
  //   //     yourInterest: value,
  //   //     loader: false,
  //   //     interests: value,
  //   //   });
  //   // }
  //   // else {
  //   //   setState({ ...state, interests: props.allInterests, loader: false });

  //   // }


  //   // if (props.editSetting) {

  //   //   let value = props?.allInterests.map((item, i) => {
  //   //     console.log("item", item.id)

  //   //     if (item.id == props?.userData?.interests.filter((item) => item.id)) {
  //   //       console.log("YHAN AYA")

  //   //       return { ...item, selected: true };

  //   //     }
  //   //     else {

  //   //       return { ...item, selected: false, }

  //   //     }

  //   //   });

  //   //   console.log("avalueeeeeeeeeee", value)
  //   //   setState({
  //   //     ...state,
  //   //     yourInterest: value,
  //   //     loader: false,
  //   //     interests: value,
  //   //   });
  //   // }
  //   // else {
  //   //   setState({ ...state, interests: props.allInterests, loader: false });

  //   // }


  // }, []);
  useEffect(() => {
    _Tesinting()

  }, []);
  // useEffect(() => {
  //   if (props.editSetting) {

  //     let value = props.allInterests.map((item, i) => {
  //       if (item?.id == props.userData?.interests[i]?.id) {
  //         return { ...item, selected: true }
  //       }
  //       else {
  //         return { ...item }
  //       }


  //     })
  //     setState({
  //       ...state,
  //       // isVisible: true,
  //       loader: false,
  //       interests: value,

  //       verifySelection: true,
  //     })
  //   }

  // }, [props.editSetting]);
  const _Tesinting = () => {

    if (props.editSetting) {

      let value = props.allInterests.map((item, i) => {
        if (item?.id == props.userData?.interests[i]?.id) {
          return { ...item, selected: true }
        }
        else {
          return { ...item }
        }


      })
      setState({
        ...state,
        // isVisible: true,
        loader: false,
        interests: value,

        verifySelection: true,
      })
    }
    else {
      // console.log(" props.allInterest", props.allInterests)
      setState({
        loader: false, interests: props.allInterests
      })
    }


  }

  const _UserRegister = async (value) => {
    console.log('company_name,', company_name);
    let data2 = company_name
      ? {
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
        interests: state.interests,
        images: data?.images,
        description: data?.description,
        latitude: data?.latitude,
        longitude: data?.longitude,
        address: 'Test Address',
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

        interests: state?.interests,
        images: data?.images,
        description: data?.description,
        latitude: '24.123244',
        longitude: '87.839483',
        address: 'Test Address',

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
    setLoader(true);


    if (props?.editSetting) {
      let user = data.userName.replace(/^\s+|.\s+$/gm, '');
      let formData = new FormData();
      company_name ? formData.append('data[company_name]', data2?.company_name) : null;
      editImages.length > 0 ? editImages.map((item) => {

        formData.append('data[images][]', item);
      })
        : null
      formData.append('data[username]', user);
      formData.append('data[description]', data2?.description);
      formData.append('data[first_name]', data?.firstName);
      formData.append('data[last_name]', data?.lastName);

      state.interests.filter((item, i) => item.selected == true ? formData.append(`data[interests][]`, item.id) : null)

      formData.append('data[status]', data2?.status);
      formData.append('data[city]', data?.city);
      formData.append('data[phone]', data2?.phone);
      formData.append('data[age]', data?.age);
      formData.append('data[country_id]', data2?.country_id);
      formData.append('data[weight]', data2?.weight);
      formData.append('data[height]', data2?.height);
      formData.append('data[eye_color]', data2?.eye_color);
      formData.append('type', 'profile');
      // console.log("formdata", formData)

      await props.UpdateCompleteProfile(
        formData,
        props.navigation,
        props?.userData?.id,
        company_name,
        token,
      );
      setLoader(false);

    } else {
      let testingValue = { ...data2, interests: value, images: props.userRegisterationImages };
      await props.Signup(testingValue, props.navigation, company_name);

      setLoader(false);
    }
    setLoader(false);
  };
  const _SelectInterests = (item, i) => {
    let value = state.interests.map((item, index) => {
      if (index == i) {
        return {
          ...item,
          selected: !item?.selected,
        };
      } else {
        return { ...item };
      }
    })
    setState({
      ...state,
      interests: value,
      noValues: false,
      selectedInterests: value,
    });

  }
  let filter = state?.interests?.filter((item, i) => item?.selected == true)
  console.log("filter", filter)

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
              onPress={() => props.navigation.goBack()}>
              {/* <Icon
                type="AntDesign"
                name="arrowleft"
                style={{ color: 'white', fontSize: 20 }}
              /> */}
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

                {state.interests &&
                  state.interests.map((val, i) =>
                    val?.selected ? (
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
                            <FastImageComponent
                              resizeMode="contain"
                              style={{ height: '100%', width: '100%' }}
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
                    ) : null,
                  )
                }
                {
                  filter?.length > 0 ? null :
                    <Text> No Interest Selected </Text>

                }

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
                onPress={() => {
                  if (props.editSetting) {

                    let value = props.allInterests.map((item, i) => {
                      if (item.id == props.userData?.interests[i]?.id) {
                        return { ...item, selected: true }
                      }
                      else {
                        return { ...item }
                      }


                    })
                    setState({
                      ...state,
                      isVisible: true,
                      // interests: props?.allInterests,
                      loader: false,
                      // interests: value,

                      verifySelection: true,
                    })
                  }

                  else {
                    setState({
                      ...state,
                      isVisible: true,
                      // interests: props?.allInterests,
                      loader: false,
                      // interests: value,

                      verifySelection: true,
                    })
                  }
                }

                }
              >
                {/* <Icon style={{ fontSize: 20 }} type="AntDesign" name="plus" /> */}
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => {
              if (!state.interests?.length > 0) {
                alert('please select Interests');
              }
              else {
                let value = state.interests.filter((item) => item?.selected == true)
                let testarray = value.map((val, index) => {
                  return val.id
                })
                // console.log("testarray", testarray)
                _UserRegister(testarray);
                // _UserRegister(value);
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
            <Text style={{ fontSize: 15, color: 'white' }}> Done</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      {/* {console.log("props.allInterests======", props.allInterests)} */}
      <Overlay
        isVisible={state.isVisible}
        onBackdropPress={() => setState({ ...state, isVisible: false })}
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
        <View style={{ height: '100%', width: '100%', alignItems: 'center' }}>
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
                console.log("Vaal===", val)




                // let checked = state.yourInterest[i]?.id == val.id ? true : false
                return (
                  <TouchableOpacity
                    key={i}
                    onPress={() => {

                      let value = state.interests.map((item, index) => {
                        if (index == i) {
                          return {
                            ...item,
                            selected: !item?.selected,
                          };
                        } else {
                          return { ...item };
                        }
                      })
                      setState({
                        ...state,
                        interests: value,
                        noValues: false,
                        selectedInterests: value,
                      });


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
                        checked={val?.selected}
                        onPress={() => {
                          let value = state.interests?.map((item, index) => {
                            if (index == i) {
                              return {
                                ...item,
                                selected: !item?.selected,
                              };
                            } else {
                              return { ...item };
                            }
                          });

                          setState({
                            ...state,
                            interests: value,
                            verifySelection: false,
                            noValues: false,
                            selectedInterests: value,
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
                        <FastImageComponent
                          resizeMode="contain"
                          style={{ height: '100%', width: '100%' }}
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
                            val?.selected ? 'blackColor' : 'greyColor'
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
                )
              })}
            {!state.interests?.length > 0 && !state.loader ? (
              <Text> Not Found </Text>
            ) : null}
          </ScrollView>
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => {
              // console.log("state", state.interests)

              props.UpdateInterests(state.interests)
              // console.log("state", state.interests.filter((item) => item?.selected == true))
              let value = state.interests.filter((item) => item?.selected == true)
              // let concat = [...state.yourInterest, ...value]
              // console.log(concat)
              setState({
                ...state,
                // yourInterest: concat,

                isVisible: false, verifySelection: false
              });
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
            <Text style={{ fontSize: 15, color: 'white' }}> Done</Text>
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
  token: state.reducers.token,
  editSetting: state.reducers.editSetting,
  loader: state.reducers.loader,
  allInterests: state.reducers.allInterests,
  userRegisterationImages: state.reducers.userRegisterationImages,
});
const mapDispatchToProps = {
  Signup: Actions.Signup,
  UpdateCompleteProfile: Actions.UpdateCompleteProfile,
  UpdateInterests: Actions.UpdateInterests,
};

export default connect(mapStateToProp, mapDispatchToProps)(Status);

const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100,
  },
});
