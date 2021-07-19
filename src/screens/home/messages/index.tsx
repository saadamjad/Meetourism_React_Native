import React, {Component, useState, useEffect} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/Feather';
// import Style from './style';
import CustomView from '../../../components/customView';
import {theme} from '../../../constants/theme';
import Header from '../../../components/header/longheader';
import LongHeader from '../../../components/header/longheader';
const Messages = (props) => {
  const [state, setState] = useState({
    messages: [
      {
        name: 'Dina Meyer',
        description: 'Welcome to Yoga Meetup',
        date: '9 hrs',
        badge: 5,
        l: 8,
      },
      {
        name: 'Dina Meyer',
        description: 'Hi everyone!',
        date: '9 hrs',
        badge: 7,
        l: 7,
      },
      {
        name: 'Stephen Moreau',
        description: 'Check out this Meetup with',
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
    <CustomView scroll>
      <View style={{backgroundColor: 'white', flex: 1}}>
        <View
          style={{
            height: 180,
            backgroundColor: 'white',
            borderBottomLeftRadius: 150,
            zIndex: 9999,
          }}></View>
        {state.messages.map((val, i) => {
          let l = i - state.messages.length;
          return (
            <View
              style={{
                height: 220,
                backgroundColor: theme.primaryColor,
                // borderColor: 'orange',
                // borderBottomWidth: 5,
                borderWidth: 0.2,
                borderTopColor: 'transparent',
                borderRightColor: 'transparent',
                justifyContent: 'flex-end',
                borderColor: theme.primaryColor1,
                marginTop: -110,
                borderBottomLeftRadius: 150,
                zIndex: val.l,
                overflow: 'hidden',
              }}>
              <View
                style={{
                  height: '50%',
                  width: '90%',
                  flexDirection: 'row',
                  alignSelf: 'flex-end',
                  justifyContent: 'center',
                  alignItems: 'space-around',
                }}>
                <View
                  style={{
                    height: '100%',
                    width: '70%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 100,
                      borderWidth: 1,
                    }}></View>
                </View>
                <View
                  style={{
                    height: '100%',
                    width: '30%',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                  }}></View>
              </View>
            </View>
          );
        })}
      </View>
      {/* <LongHeader /> */}
    </CustomView>
  );
};

export default Messages;
