import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
  AsyncStorage,
  ActivityIndicator,
} from 'react-native';
import GlobalButton from '../../../components/buttons/generalbutton';
import CustomView from '../../../components/customView';
import SliderCom from '../../../components/slider';
import {theme} from '../../../constants/theme';
import Header from '../../../components/header';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Gallery from '../../../components/gallery';
import {Icon} from 'native-base';

import {connect} from 'react-redux';

import {Actions} from '../../../redux/actions/index';
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

  const _followApiCall = async () => {
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
    if (value) {
      setState({...state, loader: false, data: value});
    } else {
      setState({...state, loader: false});
    }
  };

  return (
    <CustomView scroll bg="white">
      <View style={{flex: 1, alignItems: 'center', width: '100%'}}>
        <ImageBackground
          style={{width: '100%', height: 400}}
          resizeMode="stretch"
          source={require('../../../assets/images/profile.png')}>
          <Header
            navigation={props.navigation}
            leftArrow={true}
            isTransparent={true}
            filterIcon={true}
            filterColor={'white'}
            OpenFilter={() => props.navigation.navigate('Gallery')}

            // searchIcon={true}
          />
        </ImageBackground>

        <View
          style={{
            // height: '80%',
            flex: 1,
            paddingVertical: 20,
            // paddingVertical: 10,
            backgroundColor: '#F1F0F2',
            width: '100%',
            marginTop: -180,
            // borderTopLeftRadius: 40,
            borderTopRightRadius: 70,
            // alignItems: 'center',
            paddingHorizontal: 20,
          }}>
          {props.loader || state.loader ? (
            <ActivityIndicator size={'small'} color="red" />
          ) : (
            <>
              <Text
                style={{
                  color: 'black',
                  fontSize: 25,
                  fontWeight: '700',
                  //   paddingBottom: 10,
                }}>
                {/* Peter */}
                {/* {state.data?.first_name + state.data?.last_name} */}
                {state.data?.username}
              </Text>
              <Text style={{fontSize: 15, color: '#9E94A6'}}>
                {/* San Francisco, CA */}
                {state.data?.country?.name}
                {state.data?.city}
              </Text>
              <Text style={{fontSize: 13, color: '#9E94A6'}}>
                {' '}
                {state.data?.age}{' '}
              </Text>
              <View
                style={{
                  width: '100%',
                  overflow: 'hidden',
                  flexDirection: 'row',
                  height: 100,
                  alignSelf: 'center',
                  borderRadius: 40,
                  elevation: 1,
                  marginVertical: 10,
                  backgroundColor: 'white',
                }}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{
                    width: '33.33%',
                    borderWidth: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => props.navigation.navigate('innerchat')}>
                  <Image
                    source={require('../../../assets/images/path.png')}
                    style={{height: 20, width: 20, tintColor: '#9E94A6'}}
                    resizeMode="contain"
                  />
                  <Text style={{fontSize: 12, marginTop: 7, color: '#8F989D'}}>
                    Chat{' '}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{
                    width: '33.33%',
                    borderWidth: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  //  onPress={()=>props.navigation.navigate('allchat')}
                  onPress={() =>
                    // alert('In process ')
                    // <Gallery />
                    _Gallery()
                  }>
                  {/* <Image
                source={require('../../../assets/icons/singleuser.png')}
                style={{height: 20, width: 20, tintColor: 'purple'}}
                resizeMode="contain"
              /> */}
                  <Feather name="users" color="#8A56AC" size={20} />
                  <Text style={{fontSize: 12, marginTop: 7, color: '#8F989D'}}>
                    Gallery{' '}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{
                    width: '33.33%',
                    borderWidth: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => _followApiCall()}>
                  <FontAwesome name="user" color="#8A56AC" size={20} />

                  <Text style={{fontSize: 12, marginTop: 7, color: '#8F989D'}}>
                    {state?.data?.am_following ? 'unfollow' : 'Follow'}
                  </Text>
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
