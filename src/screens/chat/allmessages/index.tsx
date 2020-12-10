import React, {Component, useState, useEffect} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
// import {Icon} from 'native-base';
// import Style from './style';
import CustomView from '../../../components/customView';
import {theme} from '../../../constants/theme';
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
    <CustomView bg={theme.primaryColor} scroll>
      <View style={{backgroundColor: 'white', flex: 1}}>
        <LongHeader
          navigation={props.navigation}
          leftArrow={true}
          searchIcon={true}
          headerText="Chats"
        />
        {state.messages.map((val, i) => {
          let l = i - state.messages.length;
          console.log("helo",i== state.messages.length-1)
          return (
            <View
              style={{
                height: 300,
                backgroundColor: theme.primaryColor,
               
                borderWidth: 0.2,
                borderTopColor: 'transparent',
                borderRightColor: 'transparent',
                justifyContent: 'flex-end',
                borderColor: theme.primaryColor1,
                marginTop: -150,
                borderBottomLeftRadius:  i== state.messages.length-1?0: 100,
                zIndex: val.l,
                overflow: 'hidden',
              }}>
              <View style={{
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
                  <View style={{width: '60%', alignItems: 'center'}}>
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
                  <View style={{width: '60%'}}>
                    <Text style={{color: theme.textColor.whiteColor}}>
                      {val.name}
                    </Text>
                    <Text
                      style={{
                        color: theme.textColor.whiteColor,
                        fontWeight: '900',
                        fontSize: 14,
                      }}>
                      {val.description}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    height: '100%',
                    width: '30%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: theme.textColor.whiteColor}}>
                    {val.date}
                  </Text>
                  {val.badge && (
                    <View
                      style={{
                        backgroundColor: 'white',
                        justifyContent:'center',alignItems:'center',
                     
                        borderRadius: 25,
                        height:25,width:25,marginTop:4
                      }}>
                      <Text
                        style={{
                          color: theme.primaryColor1,
                          fontSize: 14,
                        }}>
                        {val.badge}
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </CustomView>
  );
};

export default Messages;