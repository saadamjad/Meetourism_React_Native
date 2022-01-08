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
  const phoneNumber = '+8801686027751';;

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
          headerText="Contact Us "
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
            brands
          </Text>
          <View style={{flexDirection:'row',marginTop:50}} >
          
          <TouchableOpacity
            style={{height: 60, flex: 1, borderWidth: 0.4,borderColor:'gray' ,justifyContent:'center'}}
            onPress={() => Linking.openURL(`tel:${phoneNumber}`)}>
        <Text style={{color:'white', fontSize:20 }} > + 8 8 0 1 6 x x x x x x x x x </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 60,
              width: 70,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Entypo name="phone" size={25} color={'white'} />
          </TouchableOpacity>
        </View>
        </View>

    
      </View>
    </CustomView>
  );
};
export default Crushes;
