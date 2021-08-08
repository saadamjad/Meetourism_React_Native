import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
} from 'react-native';
import Header from '../../components/header';
import Button from '../../components/buttons/generalbutton';
// import * as Actions from '../../redux/actions/index';
import { Actions } from '../../redux/actions/index';
import { FastImageComponent } from '../../components/fastimage'


import { connect } from 'react-redux';

const App = (props) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    // _GetUserType();
    let data = props?.userData;
    setUserData({ ...userData, data });
    // console.log('userData++', userData?.data);
  }, []);
  useEffect(() => {
    // _GetUserType();
    let data = props?.userData;
    setUserData({ ...userData, data });
  }, [props.userData]);
  const Food = [
    {
      allinterests: ['Fitness', 'Buety', 'Dogs', 'Cats', 'Laundry'],
      Ifitness: 'Fitness',
      Ibeeauty: 'Beauty',
      Idogs: 'Dogs',
      Icats: 'Cats',
      Ilaundary: 'Laundary',
      Idetail:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ...',
      Ipassword: '*******',
      Ilocation: 'XYZ',
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#423050' }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ flex: 1 }}>
        <ImageBackground
          source={require('../../assets/images/statusbg.png')}
          style={{ height: '100%', width: '100%' }}>
          <View
            style={{
              backgroundColor: 'rgba(00,00,00, 0.8)',
              flex: 1,
              // paddingVertical: 20,
            }}>
            <Header
              isTransparent={true}
              // leftArrow={true}
              navigation={props.navigation}
            />
            {Food.map((item, i) => {
              // console.log("item imagges", userData?.data?.profile_url)
              let imageUrl = userData?.data?.profile_url
              var checkUrl = imageUrl?.search('https://meetourism.com');
              let image1WithUrl = `https://meetourism.com/storage/${imageUrl}`;
              checkUrl === -1 ? true : false;
              console.log(checkUrl)
              return (
                <View
                  style={{
                    flex: 1,
                    borderWidth: 0.5,
                    // borderColor: 'gray',
                    // elevation: 1,
                    backgroundColor: 'red',
                    overflow: 'hidden',
                    width: '90%',
                    alignSelf: 'center',
                    borderRadius: 40,
                    // alignItems: 'center',
                    marginVertical: 15,
                    backgroundColor: 'white',
                  }}>
                  <View
                    style={{
                      height: 120,
                      // borderWidth: 1,
                      overflow: 'hidden',
                      backgroundColor: 'white',
                    }}>
                    <View
                      style={{
                        flex: 1,
                        width: '100%',
                        //  : 30,
                        overflow: 'hidden',
                        // borderWidth: 1,
                        borderBottomLeftRadius: 30,
                        borderBottomRightRadius: 30,
                        justifyContent: 'flex-start',
                      }}>

                      <FastImageComponent
                        source={
                          imageUrl
                            ? {
                              uri: checkUrl ? image1WithUrl : imageUrl,
                            }
                            : require('../../assets/images/statusbg.png')
                        }
                        style={{
                          width: '100%',
                          height: '100%',
                        }}
                        resizeMode="cover"

                      />
                    </View>
                  </View>
                  <View
                    style={{ flex: 1, borderWidth: 0, paddingHorizontal: 12 }}>
                    <View
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingVertical: 5,
                      }}>
                      <Text
                        style={{
                          fontSize: 20,
                          color: 'red',
                          fontWeight: 'bold',
                        }}>
                        {/* Hill View Resturants */}
                        {userData?.data?.company_name}
                      </Text>
                    </View>
                    <Text style={{ fontSize: 18, color: 'black' }}>
                      Interests
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        marginVertical: 10,
                      }}>
                      {userData?.data?.interests &&
                        userData?.data.interests.map((value, i) => {
                          // console.log('values====', value.image_path);
                          return (
                            <View
                              style={{
                                width: '20%',
                                paddingVertical: 10,

                                alignItems: 'center',
                                justifyContent: 'center',
                              }}>
                              <Text style={{ fontSize: 10 }}>{value.name}</Text>
                            </View>
                          );
                        })}
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        // borderWidth: 1,
                        marginVertical: 5,
                      }}>
                      <View
                        style={{
                          width: '50%',
                          alignItems: 'flex-start',
                          paddingRight: 50,

                          justifyContent: 'center',
                        }}>
                        <Text style={{ fontSize: 18 }}>Contact </Text>
                        <Text
                          style={{
                            fontSize: 12,
                            marginVertical: 5,
                            alignItems: 'center',
                          }}>
                          {' '}
                          {userData?.data?.phone}{' '}
                        </Text>
                      </View>
                      <View
                        style={{
                          width: '50%',
                          alignItems: 'flex-start',
                          justifyContent: 'center',
                        }}>
                        <Text style={{ fontSize: 18 }}>City </Text>
                        <Text style={{ fontSize: 15, marginVertical: 5 }}>
                          {' '}
                          {userData?.data?.city}{' '}
                        </Text>
                      </View>
                    </View>

                    <Text style={{ fontSize: 14 }}>Description </Text>
                    <View style={{ marginVertical: 10 }}>
                      <Text style={{ fontSize: 10, lineHeight: 15 }}>
                        {' '}
                        {userData?.data?.description}{' '}
                      </Text>
                    </View>
                    <ScrollView
                      horizontal={true}
                      nestedScrollEnabled={true}
                    // style={{ backgroundColor: 'blue' }}
                    // showsHorizontalScrollIndicator={false}
                    >

                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginVertical: 10,
                        }}>

                        {userData?.data?.images &&
                          userData?.data?.images.map((value, i) => {
                            console.log('values====', value?.image_path);

                            return (
                              <TouchableOpacity
                                style={{
                                  height: 70,
                                  width: 75,
                                  elevation: 1,

                                  marginHorizontal: 10,
                                }}>
                                {/* <Image
                                  source={value?.image_path ? { uri: value?.image_path } : require('../../assets/images/r1.png')}
                                  style={{ height: '100%', width: '100%' }}
                                  resizeMode="cover"
                                /> */}
                                <FastImageComponent
                                  source={value?.image_path ? { uri: value?.image_path } : require('../../assets/images/r1.png')}
                                  style={{ height: '100%', width: '100%' }}
                                  resizeMode="cover"

                                />


                              </TouchableOpacity>
                            );
                          })}


                      </View>
                    </ScrollView>


                    <View
                      style={{
                        overflow: 'hidden',
                        // width: '70%',
                        marginVertical: 5,
                      }}>
                      <Button
                        buttonText="My Offer"
                        width={'80%'}
                        height={40}
                        onPress={() => props.navigation.navigate('SelectOffer')}
                      />
                    </View>

                    <View
                      style={{
                        overflow: 'hidden',
                        // width: '70%',
                        marginVertical: 5,
                      }}>
                      <Button
                        buttonText="Create new offer"
                        width={'80%'}
                        height={40}
                        onPress={() =>
                          props.navigation.navigate('createnewoffer')
                        }
                      />
                    </View>
                    <View
                      style={{
                        overflow: 'hidden',
                        // width: '70%',
                        marginVertical: 5,
                      }}>
                      <Button
                        width={'80%'}
                        buttonText="Dashboard"
                        height={40}
                        onPress={() => props.navigation.replace('partnerhome')}
                      />
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
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
