import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import GlobalButton from '../../components/buttons/generalbutton';
import CustomView from '../../components/customView';
import SliderCom from '../../components/slider';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/header';
// import {TextInput} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {connect} from 'react-redux';

import {Actions} from '../../redux/actions/index';
const Profile = (props) => {
  const token = props.token;
  const data = props?.route?.params?.data;
  const [state, setState] = useState({
    follow: false,
    loader: true,
    data: {},
  });

  const shape =
    state.data?.weight < 50
      ? 'slim'
      : state.data?.weight >= 50 && state.data?.weight <= 65
      ? 'smart'
      : 'fat';

  const _Gallery = () => {
    // return <Gallery />;
    props.navigation.navigate('Gallery');
  };
  useEffect(() => {
    let id = data?.id;
    console.log('id', id);
    _GetProfileData(id);
  }, []);

  const _GetProfileData = async (id) => {
    let value = await props.GetProfileData(id, token);
    console.log('value', value);
    if (value) {
      setState({...state, loader: false, data: value});
    } else {
      setState({...state, loader: false});
    }
  };

  const Follow_UnFollow = async () => {
    let id = state?.data?.id;

    await setState({
      ...state,
      data: {...state.data, am_following: !state.data.am_following},
    });

    if (!state.data?.am_following) {
      props.FollowUser(id, token, 'follow');
    } else {
      console.log('UN follow');
      props.FollowUser(id, token, 'unfollow');
    }
  };
  return (
    <CustomView scroll>
      <View style={{flex: 1, alignItems: 'center', width: '100%'}}>
        <ImageBackground
          style={{width: '100%', height: 400}}
          resizeMode="stretch"
          source={require('../../assets/images/profile.png')}>
          <Header
            leftArrow={true}
            isTransparent={true}
            // searchIcon={true}
            navigation={props.navigation}
          />
        </ImageBackground>

        <View
          style={{
            flex: 1,
            paddingVertical: 20,
            backgroundColor: '#F1F0F2',
            width: '100%',
            marginTop: -180,
            borderTopRightRadius: 80,
            paddingHorizontal: 20,
          }}>
          {props.loader || state.loader ? (
            <ActivityIndicator size={'small'} color="red" />
          ) : (
            <>
              <View
                style={{
                  justifyContent: 'space-around',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 25,
                      fontWeight: '700',
                    }}>
                    {state?.data?.username}
                  </Text>
                  {state.data?.country?.name ||
                    (state.data?.city && (
                      <Text style={{fontSize: 15, color: '#998FA2'}}>
                        {state.data?.country?.name}
                        {state.data?.city}
                      </Text>
                    ))}

                  <Text style={{fontSize: 13, color: '#9E94A6'}}>
                    {' '}
                    {state.data?.age}{' '}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    height: '100%',
                  }}>
                  <View
                    style={{
                      height: 30,
                      width: 30,
                      borderRadius: 30,
                      overflow: 'hidden',
                    }}></View>
                </View>

                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    Follow_UnFollow();
                  }}
                  style={{
                    // width: 100,
                    borderBottomLeftRadius: 20,
                    borderTopRightRadius: 20,
                    paddingHorizontal: 20,
                    elevation: 1,
                    width: 100,

                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#8A56AC',
                    paddingVertical: 10,
                  }}>
                  <Text style={{color: 'white', fontWeight: 'bold'}}>
                    {state.data?.am_following ? 'unfollow' : 'Follow'}
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  width: '100%',
                  overflow: 'hidden',
                  flexDirection: 'row',
                  // height: 100,
                  flex: 1,
                  // alignSelf: 'center',
                  borderRadius: 40,
                  marginVertical: 10,
                  backgroundColor: 'white',
                }}>
                <TouchableOpacity
                  style={{
                    width: '33.33%',
                    height: 100,
                    borderWidth: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => props.navigation.navigate('innerchat')}>
                  <Image
                    source={require('../../assets/images/path.png')}
                    style={{height: 20, width: 20, tintColor: 'purple'}}
                    resizeMode="contain"
                  />
                  <Text style={{fontSize: 12, marginTop: 5}}>Chat </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: '33.33%',
                    borderWidth: 0,
                    height: 100,

                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() =>
                    props.navigation.navigate('Friends', {
                      blockListNotOpen: true,
                    })
                  }>
                  <Image
                    source={require('../../assets/icons/singleuser.png')}
                    style={{height: 20, width: 20, tintColor: 'purple'}}
                    resizeMode="contain"
                  />
                  <Text style={{fontSize: 12, marginTop: 5}}>Friends </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: '33.33%',
                    height: 100,

                    // borderWidth: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() =>
                    props.navigation.navigate('location', {
                      data: state.data,
                    })
                  }>
                  <Entypo name="location" size={15} color={'purple'} />

                  <Text style={{fontSize: 12, marginTop: 5}}>Location </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: '100%',
                  overflow: 'hidden',
                  borderRadius: 20,
                  elevation: 1,
                  marginVertical: 10,
                  backgroundColor: 'white',
                }}>
                <View
                  style={{flex: 1, paddingHorizontal: 30, paddingVertical: 20}}>
                  {state.data?.interests?.length > 0 ? (
                    <Text
                      style={{fontSize: 15, color: 'black', marginVertical: 5}}>
                      Interests
                    </Text>
                  ) : null}

                  <View
                    style={{
                      width: '100%',
                      flexDirection: 'row',
                      // justifyContent: 'space-between',
                      flexWrap: 'wrap',

                      borderWidth: 0,
                      marginVertical: 5,
                    }}>
                    {state.data?.interests?.length > 0
                      ? state.data?.interests.map((val, i) => (
                          <View
                            style={{
                              width: '20%',
                              alignItems: 'center',
                              // borderWidth: 1,
                              paddingVertical: 10,
                            }}
                            key={i}>
                            <Text style={{fontSize: 13, color: 'black'}}>
                              {val.name}{' '}
                            </Text>
                          </View>
                        ))
                      : null}
                  </View>
                  <View
                    style={{
                      width: '100%',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      marginTop: 15,
                    }}>
                    {[
                      {name: 'AGE', value: state.data?.age},
                      {name: 'Contact', value: state.data?.phone},
                      {name: 'City', value: state.data?.city},
                    ].map((val, i) => (
                      <View
                        style={{width: '25%', alignItems: 'center'}}
                        key={i}>
                        <Text
                          style={{
                            fontSize: 15,
                            color: '#998FA2',
                            fontWeight: 'bold',
                          }}>
                          {val.name}
                        </Text>
                        <Text style={{fontSize: 13, marginTop: 10}}>
                          {val.value}
                        </Text>
                      </View>
                    ))}
                  </View>

                  <View
                    style={{
                      width: '100%',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      marginTop: 15,
                    }}>
                    {[
                      {name: 'Height', value: state.data?.height},
                      {name: 'Shape', value: shape},
                      {name: 'EyeColor', value: state.data?.eye_color},
                    ].map((val, i) => (
                      <View
                        style={{width: '25%', alignItems: 'center'}}
                        key={i}>
                        <Text
                          style={{
                            fontSize: 15,
                            color: '#998FA2',
                            fontWeight: 'bold',
                          }}>
                          {val.name}
                        </Text>
                        <Text style={{fontSize: 13, marginTop: 10}}>
                          {val.value}
                        </Text>
                      </View>
                    ))}
                  </View>

                  <Text style={{fontSize: 15, paddingVertical: 10}}>
                    Description
                  </Text>
                  <Text style={{lineHeight: 20, color: 'gray', fontSize: 11}}>
                    {state.data?.description}
                  </Text>
                  <Text style={{fontSize: 18, paddingVertical: 10}}>
                    Language
                  </Text>
                  <SliderCom trackStyle="black" />
                  <GlobalButton
                    buttonText="Dashboard"
                    width="70%"
                    onPress={() => props.navigation.replace('drawer')}
                  />
                </View>
              </View>
            </>
          )}

          {/* <View
            style={{
              width: '100%',
              overflow: 'hidden',
              borderRadius: 40,
              marginVertical: 10,
              backgroundColor: 'white',
            }}>
            <View
              style={{
                flex: 1,
                paddingHorizontal: 30,
                paddingVertical: 20,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  paddingVertical: 20,
                  borderWidth: 0,
                }}>
                <View
                  style={{
                    height: 40,
                    width: 40,
                    marginRight: 10,
                    overflow: 'hidden',
                    borderRadius: 40,
                    elevation: 1,
                  }}>
                  <Image
                    style={{width: '100%', height: 400}}
                    resizeMode="stretch"
                    source={require('../../assets/images/profile.png')}
                  />
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      color: 'black',
                      fontWeight: 'bold',
                    }}>
                    Dayanaa
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: 'gray',
                    }}>
                    8 Nov
                  </Text>
                </View>
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                  <TouchableOpacity
                    style={{
                      //   borderWidth: 1,
                      flex: 1,
                      paddingHorizontal: 10,
                      justifyContent: 'center',
                    }}>
                    <MaterialIcons
                      name="keyboard-arrow-down"
                      size={20}
                      color="black"
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <Text style={{lineHeight: 20, color: 'gray', fontSize: 11}}>
                When one door of happiness closes, another opens, but often we
                look so long at the closed door that we do not see the one that
                has been opened for us.
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-end',
                  paddingVertical: 15,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginRight: 10,
                  }}>
                  <Text style={{fontSize: 12, color: 'gray'}}>143</Text>

                  <Ionicons
                    name="ios-chatbox-outline"
                    color="black"
                    style={{marginLeft: 5}}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginRight: 10,
                  }}>
                  <Text style={{fontSize: 12, color: 'gray'}}>143</Text>

                  <Ionicons
                    name="heart-outline"
                    color="black"
                    style={{marginLeft: 5}}
                  />
                </View>
              </View>
            </View>
      
      
          </View>
      */}
        </View>
      </View>
    </CustomView>
  );
};

const mapStateToProp = (state) => ({
  loader: state.reducers.loader,
  matches: state.reducers.matchesData,
  alloffers: state.reducers.alloffers,
  token: state.reducers.token,
});
const mapDispatchToProps = {
  FollowUser: Actions.FollowUser,

  GetProfileData: Actions.GetProfileData,
  // Login: Actions.Login,
};

export default connect(mapStateToProp, mapDispatchToProps)(Profile);
