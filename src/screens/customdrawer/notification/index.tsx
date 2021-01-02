import React, {Component, useState, useEffect} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
// import {Icon} from 'native-base';
// import Style from './style';
import CustomView from '../../../components/customView';
import {theme} from '../../../constants/theme';
import LongHeader from '../../../components/header/longheader';
import {Item} from 'native-base';
const Notification = (props) => {
  const [state, setState] = useState({
    messages: [
      {
        name: 'Dina Meyer',
        description: 'Offer updated successfull',
        date: '9 hrs',
        badge: 5,
        l: 8,
      },
      {
        name: 'Dina Meyer',
        description: 'Password is successfully updated.',
        date: '9 hrs',
        badge: 7,
        l: 7,
      },
      {
        name: 'Stephen Moreau',
        description:
          'Everyday English-French-Spanish: Conversation and Fun-Joe!',
        date: 'Aug 19',
        l: 6,
      },
      {
        name: 'Dina Meyer',
        description: 'Welcome to Yoga Meetup',
        date: '9 hrs',
        badge: 5,
        l: 5,
      },
      {
        name: 'Dina Meyer',
        description: 'Welcome to Yoga Meetup',
        date: '9 hrs',
        badge: 5,
        l: 4,
      },
      {
        name: 'Dina Meyer',
        description: 'Welcome to Yoga Meetup',
        date: '9 hrs',
        badge: 5,
        l: 3,
      },
      {
        name: 'Dina Meyer',
        description: 'Welcome to Yoga Meetup',
        date: '9 hrs',
        badge: 5,
        l: 2,
      },
    ],
  });
  return (
    <CustomView bg={theme.primaryColor} scroll>
      <View style={{backgroundColor: 'white', flex: 1}}>
        <LongHeader
          navigation={props.navigation}
          leftArrow={true}
          searchIcon={true}
          backgroundColor={theme.secondaryColor}
          headerText="Notifications"
        />
        {state.messages.map((val, i) => {
          let l = i - state.messages.length;
          console.log('helo', i == state.messages.length - 1);
          return (
            <View
              style={{
                height: 300,
                backgroundColor:
                  i == 0
                    ? theme.secondaryColor
                    : i == 1
                    ? theme.primaryColor1
                    : theme.primaryColor,

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
                  flexDirection: 'row',
                  alignSelf: 'flex-end',
                  justifyContent: 'center',
                  alignItems: 'space-around',
                }}>
                <View
                  style={{
                    height: '100%',
                    width: '80%',
                    justifyContent: 'space-around',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View style={{alignItems: 'center', width: '20%'}}>
                    {/* <View
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 100,
                        // borderWidth: 1,
                        backgroundColor: 'white',
                      }}> */}
                    <Image
                      resizeMode="contain"
                      source={require('../../../assets/images/ava.png')}
                    />
                    {/* </View> */}
                  </View>
                  <View style={{width: '70%'}}>
                    <Text
                      style={{
                        color: theme.textColor.whiteColor,
                        fontWeight: '900',
                        fontSize: 16,
                      }}>
                      {val.description}
                    </Text>
                    <Text
                      style={{
                        color: theme.textColor.whiteColor,
                        marginTop: 10,
                      }}>
                      {val.date}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </CustomView>
  );
};

export default Notification;
