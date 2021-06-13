import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
} from 'react-native';
import AnimatedLoader from '../../components/loader';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Slider from '../../../src/components/slider';
import {theme} from '../../constants/theme';
import Entypo from 'react-native-vector-icons/Entypo';
import {Actions} from '../../redux/actions/index';
import {connect} from 'react-redux';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const App = (props) => {
  const token = props.token;
  const [select, setSelected] = useState(3);
  const [state, setState] = useState({
    loader: true,
  });
  const [userData, setUserData] = useState({
    edit: false,
    changeTextInput: false,
  });

  const [allStatus, setStatus] = useState([
    {
      name: 'you',
      image: require('../../assets/icons/row.png'),
    },
    {
      name: 'status',
      navigation: 'statusstack',
      image: <FontAwesome name="user" size={20} color="black" />,
    },
  ]);
  const UpdateProfile = async (param) => {
    setUserData({...userData, edit: !userData.edit});
    if (userData.changeTextInput) {
      let formData = new FormData();
      formData.append('data[description]', userData?.data?.description);
      formData.append('data[username]', userData?.data?.username);
      formData.append('type', 'profile');
      props.UpdateUserProfileData(formData, token, userData, props.navigation);
      setUserData({...userData, edit: false, changeTextInput: false});
    } else {
      console.log('else not change');
    }
  };

  const _GetLoggedInUserData = async () => {
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

    // console.log('userData', userData);
    return unsubscribe;
  }, []);
  useEffect(() => {
    let data = props?.userData;
    setUserData({...userData, data});
  }, [props.userData]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.primaryColor,
      }}>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 0.4,
            // borderWidth: 1,
            borderBottomLeftRadius: 75,
            overflow: 'hidden',
          }}>
          <ImageBackground
            source={
              props?.image[0]
                ? {uri: props.image[0]}
                : require('../../assets/icons/girls.png')
            }
            style={{height: '100%', width: '100%', borderBottomLeftRadius: 80}}
            resizeMode="cover">
            <View
              style={{
                height: 125,
                backgroundColor: 'white',
                // borderWidth: 1,
                elevation: 1,
                borderBottomLeftRadius: 85,
                flexDirection: 'row',
                overflow: 'hidden',
                // elevation: 1,
                // borderWidth: 1,
              }}>
              <TouchableOpacity
                style={{
                  width: '20%',
                  paddingBottom: 20,
                  // borderWidth: 1,
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => props.navigation.openDrawer()}>
                <Image
                  source={require('../../assets/icons/drawer.png')}
                  style={{height: 30, width: 30, tintColor: '#ED1C24'}}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              {/* {
                console.log(" props.image[0] props.image[0]", props.image[0])
              } */}
              <View style={{flexDirection: 'row'}}>
                {allStatus.map((item, i) => {
                  return (
                    <View
                      key={i}
                      style={{
                        alignItems: 'center',
                        paddingHorizontal: 10,
                        paddingTop: 20,
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
                          props.EditSetting(true);

                          item.navigation &&
                            props.navigation.navigate('statusstack', {
                              screen: 'selectstatus',
                              params: {comeFromProfileStatus: true},
                            });
                        }}>

                        {i == 0 ? (
                          <Image
                            // source={  item.image}
                            source={
                              props?.image[0]
                                ? {uri: props.image[0]}
                                : item.image
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
                          fontSize: 12,
                          marginTop: 7,
                        }}>
                        {item.name}
                      </Text>
                      {i == 1 ? (
                        <TouchableOpacity>
                          <MaterialIcons
                            name="keyboard-arrow-down"
                            size={25}
                            color={'#AAB1B5'}
                          />
                        </TouchableOpacity>
                      ) : null}
                    </View>
                  );
                })}

                <View
                  style={{
                    alignItems: 'center',
                    // borderWidth: 1,
                    paddingHorizontal: 10,
                    paddingTop: 20,
                  }}>
                  {/* <TouchableOpacity
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
                    onPress={() => props.Logout(props.navigation)}>
                    <Entypo name="log-out" size={20} />
                  </TouchableOpacity>
                  <Text
                    style={{
                      color: '#8F989D',
                      fontSize: 12,
                      marginTop: 7,
                    }}>
                    Log Out
                  </Text> */}
                </View>
              </View>
            </View>

            <View
              style={{
                height: 120,
                paddingVertical: 20,
                // borderWidth: 1,
                alignItems: 'flex-end',
                flexDirection: 'row',
                // paddingRight: 5,
                paddingLeft: 20,
              }}>
              <View style={{flex: 1, borderWidth: 0}}>
                <Text
                  style={{fontSize: 10, color: 'white', fontWeight: 'bold'}}>
                  0 meetups
                </Text>

                <TextInput
                  maxLength={25}
                  onChangeText={(text) => {
                    setUserData({
                      ...userData,
                      changeTextInput: true,

                      data: {...userData.data, username: text},
                    });
                  }}
                  editable={userData.edit}
                  style={{
                    fontSize: 22,
                    borderColor: 'white',
                    padding: 0,
                    margin: 0,
                    borderBottomWidth: userData.edit ? 1 : 0,

                    color: 'white',
                    fontWeight: 'bold',
                  }}
                  // {/* Hill View Resturant */}
                  value={userData?.data?.username}
                />
                <Text
                  style={{
                    fontSize: 14,
                    marginLeft: 5,
                    color: 'white',
                  }}>
                  {userData?.data?.status}
                </Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  width: '20%',
                  // borderWidth: 1,
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
                    borderColor: userData.edit ? 'white' : theme.secondaryColor,
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
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
        <View style={{flex: 0.6, borderWidth: 0}}>
          <View
            style={{
              height: 120,
              borderWidth: 0,
              flexDirection: 'row',
              borderBottomLeftRadius: 50,
              shadowColor: 'white',

              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              overflow: 'hidden',
              borderColor: theme.primaryColor1,
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
                  borderRightWidth: 1,
                  borderColor: theme.primaryColor1,

                  width: '100%',
                  alignItems: 'center',
                }}>
                <Feather name="mail" size={40} color={'white'} />
                <Text style={{color: 'white', fontSize: 10, marginTop: 5}}>
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
              <Image
                source={require('../../assets/icons/alerts.png')}
                style={{height: 40, width: 40}}
                resizeMode="contain"
              />
              <Text style={{color: 'white', fontSize: 10, marginTop: 5}}>
                {' '}
                Notifications{' '}
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              height: 120,
              borderWidth: 0,
              flexDirection: 'row',
              borderBottomLeftRadius: 50,
              overflow: 'hidden',

              borderColor: 'white',
              paddingTop: 20,
              borderColor: theme.primaryColor1,
              borderBottomWidth: 1,
              borderLeftWidth: 1,
              paddingLeft: 20,
            }}>
            <View>
              <Text style={{color: 'white', fontSize: 15}}>About Me</Text>
              {/* <Text style={{color: '#9599B3', fontSize: 12, marginTop: 2}}>
                {userData?.data?.description}
              </Text> */}
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
          </View>

          <View style={{paddingHorizontal: 15, marginVertical: 10}}>
            <Text
              style={{
                color: 'white',
                marginTop: 25,
                fontSize: 14,
              }}>
              Langauge
            </Text>

            <View style={{marginBottom: 20}}>
              <Slider color="white" />
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          height: 60,
          // borderWidth: 1,
          width: '100%',
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        {[
          {
            navigateTo: 'Selectoffer',
            color: 'black',

            icons: (
              <Image
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
          {
            navigateTo: 'SeeYourMatch',
            color: 'black',

            dashboard: false,
            icons: (
              <MaterialCommunityIcons
                name="account-multiple"
                size={20}
                color={select == 1 ? 'black' : 'black'}
              />
            ),
          },
          {
            navigateTo: 'allchats',
            color: 'black',

            icons: (
              <Image
                source={require('../../assets/icons/Chat.png')}
                style={{
                  height: 18,
                  width: 18,
                  tintColor: select == 2 ? 'black' : 'black',
                }}
                resizeMode="contain"
              />
            ),
          },
          {
            navigateTo: 'Cruhes',
            color: 'black',

            icons: (
              <MaterialCommunityIcons
                name="account"
                size={20}
                color={select == 3 ? 'black' : 'gray'}
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
                color={select == 4 ? 'black' : 'black'}
              />
            ),
          },
        ].map((val, i) => (
          <TouchableOpacity
            key={i}
            style={{
              // flex: 1,
              width: '20%',
              justifyContent: 'center',
              alignItems: 'center',
              // backgroundColor: 'red',

              padding: 10,
            }}
            onPress={() => {
              // setSelected(i);
              if (val.navigateTo === 'statusstack') {
                props.EditSetting(true);
                props.navigation.navigate(val.navigateTo, {
                  screen: 'chooseyourinterest',
                  // settingStatus: true,
                  // dashboard: false,
                });
              } else
                props.navigation.navigate(val.navigateTo, {
                  // screen: 'chooseyourinterest',

                  settingStatus: true,
                  dashboard: false,
                });
            }}
            // onPress={() =>
            //   props.navigation.navigate('statusstack', {
            //     screen: 'chooseyourinterest',
            //     settingStatus: true,
            //     dashboard: false,
            //   })
            // }
            // onPress={() =>
            //   props.navigation.navigate('statusstack', true, {
            //     screen: 'matchprofile',
            //     settingStatus: true,
            //     dashboard: false,
            //   })
            // }
            activeOpacity={1}>
            {val.icons}
          </TouchableOpacity>
        ))}
      </View>
      <AnimatedLoader
        status={state.loader}
        loaderStyle={true}
        // loaderMessage={`Signing ${loaderMessage}`}
      />
    </View>
  );
};

const mapStateToProp = (state) => ({
  userData: state.reducers.userData,

  image: state.reducers.images_Interests,
  token: state.reducers.token,
  loader: state.reducers.loader,
});
const mapDispatchToProps = {
  Logout: Actions.Logout,
  UpdateUserProfileData: Actions.UpdateUserProfileData,
  EditSetting: Actions.EditSetting,
  GetLoggedInUserData: Actions.GetLoggedInUserData,
};

export default connect(mapStateToProp, mapDispatchToProps)(App);
