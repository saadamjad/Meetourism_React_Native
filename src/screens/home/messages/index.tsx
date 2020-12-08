import React, {Component, useState, useEffect} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
// import {Icon} from 'native-base';
// import Style from './style';
import CustomView from '../../../components/customView';
import {theme} from '../../../constants/theme';
import Header from '../../../components/header/longheader';
import LongHeader from '../../../components/header/longheader';
const Messages = (props) => {
  return (
    <CustomView>
      <View style={{backgroundColor: 'white', flex: 1}}>
        <View
          style={{
            height: 200,
            backgroundColor: 'purple',
            borderBottomLeftRadius: 150,
            zIndex: 9999,
          }}></View>
        <View
          style={{
            height: 250,
            backgroundColor: 'yellow',
            marginTop: -100,
            borderBottomLeftRadius: 150,
            zIndex: 0,
          }}></View>
      </View>
      {/* <LongHeader /> */}
    </CustomView>
  );
};

export default Messages;
