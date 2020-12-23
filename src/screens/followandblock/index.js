import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import GlobalButton from '../../components/buttons/generalbutton';
import CustomView from '../../components/customView';
import SliderCom from '../../components/slider';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TextInput} from 'react-native-gesture-handler';
const Profile = (props) => {
  // console.log('props',);
  return (
    <CustomView scroll>
      <View style={{flex: 1, alignItems: 'center', width: '100%'}}>
        <ImageBackground
          style={{width: '100%', height: 400}}
          resizeMode="stretch"
          source={require('../../assets/images/profile.png')}>
          <Header leftArrow={true} isTransparent={true} searchIcon={true} />
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
                  //   paddingBottom: 10,
                }}>
                Dayanaa
              </Text>
              <Text style={{fontSize: 15, color: '#998FA2'}}>
                San Francisco, CA
              </Text>
              <Text style={{fontSize: 13, color: '#998FA2'}}>20 years</Text>
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
                }}>
                <Image
                  source={require('../../assets/icons/edit.png')}
                  style={{height: '100%', width: '100%'}}
                  resizeMode="contain"
                />
              </View>
            </View>

            {props.route?.params?.block ? (
              <TouchableOpacity
                style={{
                  // width: 100,
                  borderBottomLeftRadius: 20,
                  borderTopRightRadius: 20,
                  paddingHorizontal: 20,
                  elevation: 1,

                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#8A56AC',
                  paddingVertical: 10,
                }}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  {' '}
                  Block{' '}
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={{
                  // width: 100,
                  borderBottomLeftRadius: 20,
                  borderTopRightRadius: 20,
                  paddingHorizontal: 20,
                  elevation: 1,

                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#8A56AC',
                  paddingVertical: 10,
                }}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  {' '}
                  Follow{' '}
                </Text>
              </TouchableOpacity>
            )}
          </View>

          <View
            style={{
              width: '100%',
              overflow: 'hidden',
              flexDirection: 'row',
              height: 100,
              alignSelf: 'center',
              borderRadius: 40,
              marginVertical: 10,
              backgroundColor: 'white',
            }}>
            <TouchableOpacity
              style={{
                width: '33.33%',
                borderWidth: 0,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => props.navigation.navigate('innerchat')}>
              <Image
                source={require('../../assets/icons/Chat.png')}
                style={{height: 20, width: 20, tintColor: 'gray'}}
                resizeMode="contain"
              />
              <Text style={{fontSize: 12, marginTop: 5}}>Chat </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '33.33%',
                borderWidth: 0,
                alignItems: 'center',
                justifyContent: 'center',
              }}

              //  onPress={()=>props.navigation.navigate('allchat')}
            >
              <Image
                source={require('../../assets/icons/singleuser.png')}
                style={{height: 20, width: 20, tintColor: 'purple'}}
                resizeMode="contain"
              />
              <Text style={{fontSize: 12, marginTop: 5}}>Gallery </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '33.33%',
                borderWidth: 0,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../assets/icons/userss.png')}
                style={{height: 20, width: 20, tintColor: 'purple'}}
                resizeMode="contain"
              />
              <Text style={{fontSize: 12, marginTop: 5}}>Follow </Text>
            </TouchableOpacity>
          </View>

          <View
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
        </View>
      </View>
    </CustomView>
  );
};

export default Profile;
