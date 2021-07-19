import React, {Component, useState, useEffect} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/Feather';
// import Style from './style';
import CustomView from '../../components/customView';
import {theme} from '../../constants/theme';
import LongHeader from '../../components/header/longheader';
const Friends = (props) => {
  const [state, setState] = useState({
    messages: [
      // {
      //   name: 'Dina Meyer',
      //   selected: false,
      //   description: 'Offer updated successfull',
      //   date: '9 hrs',
      //   badge: 5,
      //   l: 8,
      // },
      // {
      //   name: 'Dina Meyer',
      //   selected: false,
      //   description: 'Password is successfully updated.',
      //   date: '9 hrs',
      //   badge: 7,
      //   l: 7,
      // },
      // {
      //   name: 'Stephen Moreau',
      //   selected: false,
      //   description:
      //     'Everyday English-French-Spanish: Conversation and Fun-Joe!',
      //   date: 'Aug 19',
      //   l: 6,
      // },
      // {
      //   name: 'Dina Meyer',
      //   selected: false,
      //   description: 'Welcome to Yoga Meetup',
      //   date: '9 hrs',
      //   badge: 5,
      //   l: 5,
      // },
      // {
      //   name: 'Dina Meyer',
      //   selected: false,
      //   description: 'Welcome to Yoga Meetup',
      //   date: '9 hrs',
      //   badge: 5,
      //   l: 4,
      // },
      // {
      //   name: 'Dina Meyer',
      //   selected: false,
      //   description: 'Welcome to Yoga Meetup',
      //   date: '9 hrs',
      //   badge: 5,
      //   l: 3,
      // },
      // {
      //   name: 'Dina Meyer',
      //   selected: false,
      //   description: 'Welcome to Yoga Meetup',
      //   date: '9 hrs',
      //   badge: 5,
      //   l: 2,
      // },
    ],
  });
  return (
    <CustomView bg={theme.primaryColor} scroll>
      <View style={{backgroundColor: theme.primaryColor, flex: 1}}>
        <LongHeader
          // !true
          // followandBlock
          if={true}
          navigation={props.navigation}
          leftArrow={true}
          // searchIcon={true}
          backgroundColor={theme.primaryColor}
          headerText="Friends"
        />
        {state.messages.map((val, i) => {
          let l = i - state.messages.length;
          console.log('helo', i == state.messages.length - 1);
          return (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                setState({
                  ...state,
                  messages: state.messages.map((value, ind) => {
                    if (i == ind) {
                      return {...value, selected: true};
                    } else {
                      return {...value, selected: false};
                    }
                  }),
                });
              }}
              style={{
                height: 300,
                backgroundColor: theme.primaryColor,

                borderRightWidth: 0,
                borderWidth: 0.5,
                borderTopColor: 'transparent',
                borderRightColor: 'transparent',
                justifyContent: 'flex-end',
                borderColor: theme.primaryColor1,
                marginTop: -150,
                borderBottomLeftRadius:
                  i == state.messages.length - 1 ? 0 : 100,
                zIndex: val.l,
                overflow: 'hidden',
              }}>
              <View
                style={{
                  flex: 0.55,
                  width: '100%',
                  alignSelf: 'flex-end',
                  justifyContent: 'center',
                  alignItems: 'space-around',
                  // backgroundColor: 'red',
                }}>
                <View
                  style={{
                    height: '40%',
                    width: '90%',
                    justifyContent: 'space-around',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View style={{alignItems: 'center', width: '0%'}}>
                    <View style={{height: 40, width: 40}}>
                      <FastImageComponent
                        style={{height: '100%', width: '100%'}}
                        resizeMode="cover"
                        source={require('../../assets/images/ava.png')}
                      />
                    </View>
                    {/* </View> */}
                  </View>
                  <View style={{width: '70%'}}>
                    <Text
                      style={{
                        color: theme.textColor.whiteColor,
                        fontSize: 12,
                      }}>
                      {val.name}
                    </Text>
                  </View>
                </View>

                {true
                  ? null
                  : val.selected && (
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-around',
                          alignItems: 'center',
                          width: '80%',
                          alignSelf: 'center',
                          // backgroundColor: 'red',
                        }}>
                        {/* <TouchableOpacity>
                      <Text
                        style={{
                          color: theme.textColor.whiteColor,
                          fontSize: 20,
                        }}>
                        Edit
                      </Text>
                    </TouchableOpacity> */}
                        <TouchableOpacity
                          onPress={() =>
                            props.navigation.navigate('followandBlock')
                          }>
                          <Text
                            style={{
                              color: theme.textColor.whiteColor,
                              fontSize: 16,
                            }}>
                            View
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() =>
                            props.navigation.navigate('followandBlock', {
                              block: true,
                            })
                          }>
                          <Text
                            style={{
                              color: theme.textColor.whiteColor,
                              fontSize: 16,
                            }}>
                            Block
                          </Text>
                        </TouchableOpacity>
                      </View>
                    )}
              </View>

              {/* {console.log('====', true)} */}
            </TouchableOpacity>
          );
        })}

        <Text
          style={{
            color: 'white',
            fontSize: 15,
            marginVertical: 10,
            textAlign: 'center',
          }}>
          {' '}
          You Don't Have Friends{' '}
        </Text>
      </View>
    </CustomView>
  );
};

export default Friends;
