import React, { Component, useState, useEffect } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';
import CustomView from '../../components/customView';
import { theme } from '../../constants/theme';
import LongHeader from '../../components/header/longheader';

import { FastImageComponent } from '../../components/fastimage';
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
  const [cards, setCards] = useState([
    {
      image: require('../../assets/icons/mastercard.png'),
    },
    {
      image: require('../../assets/icons/visa.png'),
    },
    {
      image: require('../../assets/icons/paypal.png'),
    },
  ]);
  return (
    <CustomView bg={theme.primaryColor} scroll>
      <LongHeader
        navigation={props.navigation}
        leftArrow={true}
        // searchIcon={true}
        headerText="Select Payment Account"
      />
      <View style={{ flex: 1 }}>
        {cards.map((item, i) => {
          return (
            <TouchableOpacity
              key={i}
              style={{
                width: '100%',
                backgroundColor: 'white',
                marginVertical: 20,
                paddingVertical: 10,
                backgroundColor: 'white',
                height: 160,
              }}
              onPress={() => props.navigation.navigate('PaymentDetails')}
              activeOpacity={1}>
              <View
                style={{
                  // height: 100,
                  backgroundColor: 'white',
                  width: '60%',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <FastImageComponent
                  source={item.image}
                  style={{ height: '100%', width: '100%' }}
                  resizeMode="cover"
                />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </CustomView>
  );
};

export default Messages;
