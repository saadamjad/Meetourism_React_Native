/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Slider from '../../../src/components/slider';
import {Actions} from '../../redux/actions/index';
import {connect} from 'react-redux';
import {TextInput} from 'react-native-gesture-handler';
import {theme} from '../../constants/theme';
import AnimatedLoader from '../../components/loader';

// import { LoginManager, LoginButton } from "react-native-fbsdk-next";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import axios from 'axios';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {FastImageComponent} from '../../components/fastimage';
const App = (props) => {
  const token = props.token;
  const [userData, setUserData] = useState({
    edit: false,
    changeTextInput: false, //this state is only   get to know which input data is update or not
  });

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      // this.setState({ user: null }); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error('error', error);
    }
  };
  const FacebookLogout = async () => {
    <LoginButton
      onLoginFinished={(error, result) => {
        if (error) {
          console.log('login has error: ' + result.error);
        } else if (result.isCancelled) {
          console.log('login is cancelled.');
        } else {
          AccessToken.getCurrentAccessToken().then((data) => {
            console.log(data.accessToken.toString());
          });
        }
      }}
      onLogoutFinished={() => console.log('logout.')}
    />;
  };

  const _GetLoggedInUserData = async () => {
    // console.log('props.userData.id', props.userData.id);
    // props.GetLoggedInUserData(props.userData.id, token);

    console.log('props.userData.id', props?.userData?.id);
    let value = await props.GetLoggedInUserData(props?.userData?.id, token);
    setState({...state, loader: false});
  };

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      // The screen is focused
      // Call any action
      _GetLoggedInUserData();
    });
    _GetLoggedInUserData();
    // let data = props?.userData;
    // setUserData({...userData, data});
    return unsubscribe;
  }, []);
  useEffect(() => {
    let data = props?.userData;
    setUserData({...userData, data});
  }, [props.userData]);
  const [allStatus, setStatus] = useState([
  
    {
      name: 'My offers ',
      navigation: 'SelectOffer',
      // image: <FontAwesome name="user" size={20} color="black" />,
      image: require('../../assets/images/burgerDrink.png'),
    },
    {
      name: 'Create New Offers',
      navigation: 'createnewoffer',
      image: <Feather name="plus" size={20} color="#AAB1B5" />,
    },
    {
      name: 'Logout',
      navigation: 'Auth',
      image: <MaterialCommunityIcons name="logout" size={20} color="#AAB1B5" />,
    },
  ]);
  const [select, setSelected] = useState(2);
  const [state, setState] = useState({
    loader: true,
    message: 'Loading...',
  });

  const UpdateProfile = async (param) => {
    setUserData({...userData, edit: !userData.edit});
    if (userData.changeTextInput) {
      let formData = new FormData();
      formData.append('data[company_name]', userData?.data?.company_name);
      formData.append('data[description]', userData?.data?.description);
      formData.append('type', 'profile');
      let value = await props.UpdateUserProfileData(
        formData,
        token,
        userData,
        props.navigation,
      );
      setUserData({...userData, edit: false, changeTextInput: false});
    } else {
      console.log('else not change');
    }
  };
  let imageUrl = userData?.data?.profile_url;
  var checkUrl = imageUrl?.search('https://dev.meetourism.com');
  let image1WithUrl = `https://dev.meetourism.com/storage/${imageUrl}`;
  checkUrl === -1 ? true : false;
  console.log('partner home', checkUrl);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#241332',
      }}>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flex: 0.4,
            borderWidth: 1,
            borderColor: '#423050',
            borderBottomLeftRadius: 80,
            overflow: 'hidden',
          }}>
          <ImageBackground
            source={
              imageUrl
                ? {
                    uri: checkUrl ? image1WithUrl : imageUrl,
                  }
                : require('../../../src/assets/images/profile.png')
            }
            // source={
            //   props?.image?.length > 0
            //     ? { uri: props.image[0] }
            //     : require('../../../src/assets/images/r3.png')
            // }
            style={{height: '100%', width: '100%'}}
            resizeMode="cover">
            <View
              style={{
                // height: 125,
                backgroundColor: 'white',
                // borderWidth:1,
                borderBottomLeftRadius: 75,
                flexDirection: 'row',
                overflow: 'hidden',
                // elevation: 1,
                // borderWidth: 1,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  // borderWidth: 1,
                  justifyContent: 'space-between',
                  // alignItems: '',
                  paddingHorizontal: 20,
                }}>
                {allStatus.map((item, i) => {
                  return (
                    <View
                      style={{
                        alignItems: 'center',
                        paddingTop: 20,
                        width: '33.33%',
                      }}>
                      <TouchableOpacity
                        style={{
                          height: 50,
                          overflow: 'hidden',
                          width: 50,
                          borderWidth: 0.6,
                          borderRadius: 50,
                          marginHorizontal: 15,
                          borderColor: '#AAB1B5',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                        onPress={() => {
                          if (item.name == 'Logout') {
                            props.Logout(props.navigation);
                            props.socialLogin ? signOut() : props.facebook ?
                              FacebookLogout() : null
                          }
                          else {
                            item.navigation &&
                            props.navigation.navigate(item.navigation);
                          }
                        }}>
                        {i == 0 ? (
                          <FastImageComponent
                            // source={item.image}
                            source={
                              imageUrl
                                ? {
                                    uri: checkUrl ? image1WithUrl : imageUrl,
                                  }
                                : require('../../assets/images/profile.png')
                            }
                            style={{height: '100%', width: '100%'}}
                            resizeMode="cover"
                          />
                        ) : (
                          item.image
                        )}
                      </TouchableOpacity>
                      <Text
                        style={{
                          color: '#8F989D',
                          fontSize: 11,
                          marginTop: 7,
                          textAlign: 'center',
                          fontWeight: 'bold',
                        }}>
                        {item.name}
                      </Text>
                      {i == 1 ? (
                        <TouchableOpacity>
                          <MaterialIcons
                            // name="keyboard-arrow-down"
                            size={25}
                            color={'gray'}
                          />
                        </TouchableOpacity>
                      ) : null}
                    </View>
                  );
                })}
              </View>
            </View>

            <View
              style={{
                alignItems: 'flex-end',
                flex: 1,

                flexDirection: 'row',
              }}>
              <View
                style={{
                  height: 60,
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    width: '80%',
                    paddingLeft: 40,
                    justifyContent: 'center',
                    // backgroundColor: 'blue',
                  }}>
                  <TextInput
                    maxLength={25}
                    onChangeText={(text) => {
                      setUserData({
                        ...userData,
                        changeTextInput: true,

                        data: {...userData.data, company_name: text},
                      });
                    }}
                    editable={userData.edit}
                    style={{
                      fontSize: 22,
                      borderColor: 'white',
                      borderBottomWidth: userData.edit ? 1 : 0,

                      color: 'white',
                      fontWeight: 'bold',
                    }}
                    // {/* Hill View Resturant */}
                    value={userData?.data?.company_name}
                  />
                </View>

                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{
                    width: '20%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => {
                    userData.edit
                      ? UpdateProfile()
                      : setUserData({...userData, edit: !userData.edit});
                  }}>
                  <View
                    style={{
                      padding: 7,
                      borderRadius: 30,
                      borderWidth: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderColor: userData.edit
                        ? 'white'
                        : theme.secondaryColor,
                      backgroundColor: userData.edit
                        ? 'white'
                        : theme.secondaryColor,
                    }}>
                    <SimpleLineIcons
                      name={userData.edit ? 'pencil' : 'pencil'}
                      size={16}
                      color={userData.edit ? 'black' : 'white'}
                    />
                  </View>
                  {/* <Image
                    source={require('../../assets/icons/edit.png')}
                    resizeMode="contain"
                    style={{
                      height: 30,
                      width: 30,
                      borderWidth: 0,
                      borderRadius: 30,
                    }}
                  /> */}
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={{flex: 0.6, borderWidth: 0}}>
          <View
            style={{
              height: 150,
              borderWidth: 0,
              flexDirection: 'row',
              borderBottomLeftRadius: 45,
              shadowColor: 'white',

              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              overflow: 'hidden',
              borderColor: '#423050',
              borderBottomWidth: 1,
              borderLeftWidth: 1,
              // elevation: 1,
            }}>
            <TouchableOpacity
              style={{
                width: '50%',
                // borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => props.navigation.navigate('allchats')}>
              <View
                style={{
                  borderRightWidth: 0.5,
                  borderColor: '#423050',

                  width: '100%',
                  alignItems: 'center',
                }}>
                <Feather name="mail" size={35} color={'white'} />
                <Text style={{color: 'white', fontSize: 10, marginTop: 10}}>
                  Messages
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '50%',
                borderWidth: 0,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => props.navigation.navigate('Notification')}>
              {/* <Feather name="mail" size={40} color={'white'}/> */}
              <FastImageComponent
                source={require('../../assets/icons/alerts.png')}
                style={{height: 40, width: 40}}
                resizeMode="contain"
              />
              <Text style={{color: 'white', fontSize: 10, marginTop: 10}}>
                {' '}
                Notifications{' '}
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              height: 150,
              borderWidth: 0,
              flexDirection: 'row',
              borderBottomLeftRadius: 45,
              overflow: 'hidden',

              borderColor: 'white',
              paddingTop: 20,
              borderColor: '#423050',
              borderBottomWidth: 1,
              borderLeftWidth: 1,
              paddingLeft: 20,
            }}>
            <View>
              <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
                About the Bussiness
              </Text>
              <TextInput
                editable={userData.edit}
                multiline={true}
                value={userData?.data?.description}
                onChangeText={(text) =>
                  setUserData({
                    ...userData,
                    changeTextInput: true,
                    data: {...userData.data, description: text},
                  })
                }
                style={{
                  color: '#9599B3',
                  padding: 0,
                  margin: 0,
                  fontSize: 12,
                  marginTop: 2,
                  borderBottomWidth: userData.edit ? 1 : 0,
                  borderColor: userData.edit ? 'white' : theme.secondaryColor,
                }}
              />
            </View>
            <View style={{flex: 1, borderWidth: 0, alignItems: 'flex-end'}}>
              {/* <Image
                source={require('../../assets/icons/edit.png')}
                resizeMode="contain"
                style={{
                  height: 30,
                  width: 30,
                  borderWidth: 0,
                  borderRadius: 30,
                }}
              /> */}
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          height: 60,
          // borderWidth: 1,
          width: '100%',
          position: 'absolute',
          backgroundColor: 'white',
          flexDirection: 'row',
          bottom: 0,
          justifyContent: 'space-around',
        }}>
        {[
          {
            navigateTo: 'SelectOffer',
            color: 'black',
            icons: (
              <FastImageComponent
                source={require('../../assets/icons/path.png')}
                style={{
                  height: 18,
                  width: 18,
                  tintColor: select == 0 ? 'black' : 'black',
                }}
                resizeMode="contain"
              />
            ),
          },
          // {
          //   navigateTo: 'SeeYourMatch',
          //   dashboard: false,
          //   icons: (
          //     <MaterialCommunityIcons
          //       name="account-multiple"
          //       size={20}
          //       color={'gray'}
          //     />
          //   ),
          // },
          {
            navigateTo: 'allchats',
            color: 'black',

            icons: (
              <FastImageComponent
                source={require('../../assets/icons/Chat.png')}
                style={{
                  height: 18,
                  width: 18,
                  tintColor: select == 1 ? 'black' : 'black',
                }}
                resizeMode="contain"
              />
            ),
          },
          {
            navigateTo: 'partnerhome',
            color: 'black',

            icons: (
              <MaterialCommunityIcons
                name="account"
                size={20}
                color={select == 2 ? 'black' : 'black'}
              />
            ),
          },
          {
            navigateTo: 'statusstack',
            color: 'black',

            icons: (
              <MaterialIcons
                name="settings"
                size={20}
                color={select == 3 ? 'black' : 'black'}
              />
            ),
          },
        ].map((val, i) => (
          <TouchableOpacity
            style={{
              // flex: 1,
              width: '20%',
              justifyContent: 'center',
              alignItems: 'center',
              // backgroundColor: 'red',

              padding: 10,
            }}
            onPress={() => {
              if (val.navigateTo === 'statusstack') {
                props.EditSetting(true);

                props.navigation.navigate(val.navigateTo, {
                  screen: 'chooseyourinterest',

                  settingStatus: true,
                  dashboard: false,
                });
              } else {
                props.navigation.navigate(val.navigateTo, {
                  // screen: 'chooseyourinterest',

                  settingStatus: true,
                  dashboard: false,
                });
              }
            }}
            activeOpacity={1}>
            {val.icons}
          </TouchableOpacity>
        ))}
      </View>
      <AnimatedLoader
        status={state.loader}
        loaderStyle={true}
        loaderMessage={state.message}
      />
    </View>
  );
};
const mapStateToProp = (state) => ({
  userData: state.reducers.userData,
  image: state.reducers.images_Interests,
  token: state.reducers.token,
  socialLogin: state.reducers.socialLogin,
  facebook: state.reducers.facebook,

  loader: state.reducers.loader,
});
const mapDispatchToProps = {
  Logout: Actions.Logout,
  UpdateUserProfileData: Actions.UpdateUserProfileData,
  GetLoggedInUserData: Actions.GetLoggedInUserData,
  EditSetting: Actions.EditSetting,
};

export default connect(mapStateToProp, mapDispatchToProps)(App);
