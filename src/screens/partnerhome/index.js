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
import * as Actions from '../../redux/actions/index';
import {connect} from 'react-redux';
const App = (props) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    // _GetUserType();
    let data = props?.userData;
    setUserData({...userData, data});
    // console.log('userData++', userData?.data);
  }, []);
  useEffect(() => {
    // _GetUserType();
    let data = props?.userData;
    setUserData({...userData, data});
  }, [props.userData]);
  const [allStatus, setStatus] = useState([
    {
      name: 'YOU',
      image: require('../../assets/icons/row.png'),
    },
    {
      name: 'My offers ',
      navigation: 'SelectOffer',
      image: <FontAwesome name="user" size={20} color="black" />,
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
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#241332',
      }}>
      {console.log('props.image[0]props.image[0]')}
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 0.4,
            borderWidth: 1,
            borderColor: '#423050',
            borderBottomLeftRadius: 80,
            overflow: 'hidden',
          }}>
          <ImageBackground
            // source={require('../../assets/icons/girls.png')}
            // source={require('../../../src/assets/images/r3.png')}
            source={
              props?.image?.length > 0
                ? {uri: props.image[0]}
                : require('../../../src/assets/images/r3.png')
            }
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
                  paddingHorizontal: 10,
                }}>
                {allStatus.map((item, i) => {
                  return (
                    <View
                      style={{
                        alignItems: 'center',
                        paddingTop: 20,
                        width: '25%',
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
                          if (item.name === 'Logout') {
                            props.Logout(props.navigation);
                          }
                          item.navigation &&
                            props.navigation.navigate(item.navigation);
                        }}>
                        {i == 0 ? (
                          <Image
                            source={item.image}
                            style={{height: '100%', width: '100%'}}
                            resizeMode="contain"
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
                // paddingLeft: 45,
                // paddingBottom: 20,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  height: 60,
                  // alignItems: 'flex-end',
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    width: '80%',
                    paddingLeft: 40,
                    justifyContent: 'center',
                    // paddingBottom: 20,
                  }}>
                  <Text
                    style={{fontSize: 22, color: 'white', fontWeight: 'bold'}}>
                    {/* Hill View Resturant */}
                    {userData?.data?.company_name}
                  </Text>
                </View>

                <View
                  style={{
                    width: '20%',
                    // borderWidth: 1,
                    // backgroundColor: 'red',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={require('../../assets/icons/edit.png')}
                    resizeMode="contain"
                    style={{
                      height: 30,
                      width: 30,
                      borderWidth: 0,
                      borderRadius: 30,
                    }}
                  />
                </View>
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
              <Image
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
              <Text style={{color: '#9599B3', fontSize: 12, marginTop: 2}}>
                {userData?.data?.description}
              </Text>
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
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        {[
          {
            navigateTo: 'SelectOffer',
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
              <Image
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
                null;
              } else
                props.navigation.navigate(val.navigateTo, {
                  // screen: 'chooseyourinterest',

                  settingStatus: true,
                  dashboard: false,
                });
            }}
            activeOpacity={1}>
            {val.icons}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
const mapStateToProp = (state) => ({
  userData: state.reducers.userData,
  image: state.reducers.images_Interests,

  loader: state.reducers.loader,
});
const mapDispatchToProps = {
  Signup: Actions.Signup,
  Login: Actions.Login,
  Logout: Actions.Logout,
};

export default connect(mapStateToProp, mapDispatchToProps)(App);
