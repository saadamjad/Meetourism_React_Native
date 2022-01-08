/* eslint-disable react-native/no-inline-styles */
import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  ScrollView,
  Linking,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

// import Icon from 'react-native-vector-icons/Feather';
// import Style from './style';

import CustomView from '../components/customView';
import {theme} from '../constants/theme';
import LongHeader from '../components/header/longheader';
const Crushes = (props) => {
  const phoneNumber = '+8801686027751';

  return (
    <CustomView bg={theme.primaryColor} scroll>
      {/* {console.log("====checking",state.allOrders[0])} */}
      <View style={{backgroundColor: theme.primaryColor, flex: 1}}>
        <LongHeader
          if={props?.route?.params?.blockListNotOpen}
          navigation={props.navigation}
          leftArrow={true}
          // backgroundColor={
          //   state?.allOrders[0]?.selected
          //     ? theme.primaryColor3
          //     : theme.primaryColor
          // }
          headerText="Privacy Policy"
        />
        <View style={{width: '90%', alignSelf: 'center', paddingVertical: 30}}>
          <Text
            style={{
              color: theme.textColor.whiteColor,
              fontSize: 14,
            }}>
            Welcome to the meetourism! How we can help you?
          </Text>
          <Text
            style={{
              color: theme.textColor.whiteColor,
              fontSize: 14,
              lineHeight: 25,
            }}>
            Dummy Text Looking for inspiration for your Contact Us page? See
            these 39 amazing examples from ecommerce, SaaS, agencies, and other
            brands I've worked with Travel Content Collective for a couple of years now and Darren and his team always come through with great content. He won't assign articles to just any writer on his team—he looks for the right fit for his clients to ensure a consistent brand voice and the right type of content. I'm far from TCC's biggest client, but the level of customer service is what keeps me coming back. Even though my orders are smaller in comparison to some of their other clients, I'm always treated like a high-paying client and never feel like my business doesn't matter or isn't valued. Darren works hard to cultivate relationships with his clients, to understand their needs, and then over-deliver in every way possible. Can't recommend Darren enough!
JEREMY SCOTT FOSTER - TRAVEL FREAK
          </Text>
         
        </View>

    
      </View>
    </CustomView>
  );
};
export default Crushes;
