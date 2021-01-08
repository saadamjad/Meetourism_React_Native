import React, {Component, useState, useEffect} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
// import {Icon} from 'native-base';
// import Style from './style';
import CustomView from '../../components/customView';
import {theme} from '../../constants/theme';
import LongHeader from '../../components/header/longheader';
import {Item, Icon} from 'native-base';
import RBSheet from 'react-native-raw-bottom-sheet';
const Location = (props) => {
  const [state, setState] = useState({
    messages: [
      {
        name: 'Dina Meyer',
        selected: false,
        description: 'Offer updated successfull',
        date: '9 hrs',
        badge: 5,
        l: 8,
      },
      {
        name: 'Dina Meyer',
        selected: false,
        description: 'Password is successfully updated.',
        date: '9 hrs',
        badge: 7,
        l: 7,
      },
      {
        name: 'Stephen Moreau',
        selected: false,
        description:
          'Everyday English-French-Spanish: Conversation and Fun-Joe!',
        date: 'Aug 19',
        l: 6,
      },
      {
        name: 'Dina Meyer',
        selected: false,
        description: 'Welcome to Yoga Meetup',
        date: '9 hrs',
        badge: 5,
        l: 5,
      },
      {
        name: 'Dina Meyer',
        selected: false,
        description: 'Welcome to Yoga Meetup',
        date: '9 hrs',
        badge: 5,
        l: 4,
      },
      {
        name: 'Dina Meyer',
        selected: false,
        description: 'Welcome to Yoga Meetup',
        date: '9 hrs',
        badge: 5,
        l: 3,
      },
      {
        name: 'Dina Meyer',
        selected: false,
        description: 'Welcome to Yoga Meetup',
        date: '9 hrs',
        badge: 5,
        l: 2,
      },
    ],
  });
  return (
    <CustomView
      image={require('../../assets/images/map.jpg')}
      bg={'transparent'}
      scroll>
      <View style={{backgroundColor: 'transparent', flex: 1}}>
        <LongHeader
          navigation={props.navigation}
          leftArrow={true}
          searchIcon={true}
          backgroundColor={'transparent'}
          headerText="Location"
        />
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <View
            style={{
              height: '60%',
              width: '100%',
              backgroundColor: theme.primaryColor,
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            {[
              {
                name: 'Meditation',
                time: '9:00 (25 min)',
                icon: (
                  <Image
                    resizeMode="contain"
                    source={require('../../assets/images/share.png')}
                  />
                ),
                an: false,
              },
              {
                name: 'Running',
                time: '9:25 (47 min)',
                icon: (
                  <Image
                    resizeMode="contain"
                    source={require('../../assets/images/heartCircle.png')}
                  />
                ),
                an: false,
              },
              {
                name: 'Yoga practice',
                time: '10:02 (1:16 hour)',
                icon: (
                  <Image
                    resizeMode="contain"
                    source={require('../../assets/images/signal.png')}
                  />
                ),
                an: true,
              },
            ].map((val, i) => (
              <View
                style={{
                  paddingVertical: 20,
                  width: '90%',
                  borderRadius: 40,
                  backgroundColor: 'rgba(255,255,255,0.3)',
                  flexDirection: val.an ? 'column' : 'row',
                  justifyContent: 'space-around',
                }}>
                <View
                  style={{
                    width: val.an ? '80%' : 'auto',
                    flexDirection: 'row',
                    alignSelf: 'center',
                    justifyContent: !val.an ? 'center' : 'flex-start',
                  }}>
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      backgroundColor: 'transparent',
                      borderRadius: 100,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    {/* <Icon
                      style={{fontSize: 18, color: 'white'}}
                      name="hearto"
                      type="AntDesign"
                    /> */}
                    {val.icon}
                  </View>
                  <View
                    style={{
                      height: '100%',
                      marginLeft: 10,
                    }}>
                    <Text
                      style={{color: 'rgba(255,255,255,0.7)', fontSize: 12}}>
                      {val.time}
                    </Text>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 15,
                        fontWeight: i == 0 ? 'bold' : '400',
                      }}>
                      {val.name}
                    </Text>
                    {val.an && (
                      <Image
                        resizeMode="contain"
                        style={{marginTop: 10}}
                        source={require('../../assets/images/peoples.png')}
                      />
                    )}
                  </View>
                </View>

                {!val.an ? (
                  <Image
                    source={require('../../assets/images/Avatars.png')}
                    resizeMode="contain"
                  />
                ) : (
                  <View style={{width: '100%', alignItems: 'center'}}>
                    {/* <Image
                      source={require('../../assets/images/peoples.png')}
                    /> */}
                  </View>
                )}
              </View>
            ))}
          </View>
        </View>
      </View>
    </CustomView>
  );
};

export default Location;
