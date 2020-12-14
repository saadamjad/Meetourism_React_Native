import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';
// import {Icon} from 'native-base';
// import Style from './style';
import CustomView from '../../components/customView';
import {theme} from '../../constants/theme';
import LongHeader from '../../components/header/longheader';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import DropDownPicker from 'react-native-dropdown-picker';
import Button from '../../components/buttons/generalbutton';
import {Item} from 'native-base';
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
        searchIcon={true}
        headerText="Select Payment Account"
      />
      <View style={{flex: 1}}>
        {cards.map((item, i) => {
          return (
            <View
              key={i}
              style={{
                width: '100%',
                marginVertical: 20,
                paddingVertical: 10,
                backgroundColor: 'white',
                height: 160,
              }}>
              <Image
                source={item.image}
                style={{height: '100%', width: '100%'}}
                resizeMode="contain"
              />
            </View>
          );
        })}
      </View>
    </CustomView>
  );
};

export default Messages;
