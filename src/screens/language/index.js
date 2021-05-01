import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {theme} from '../../constants/theme';
import Header from '../../components/header';

const App = (props) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.primaryColor,
      }}>
      <Header
        text={true}
        isTransparent={true}
        leftArrow={true}
        isVisibleIcon={true}
        navigation={props.navigation}
        //   drawerIcon={true}
        text={'Langauges'}
        textColor={'white'}
      />
      <View style={{flex: 1}}>
        {['English', 'French', 'German', 'Arabic'].map((item, i) => {
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                flexDirection: 'row',
                paddingVertical: 20,
                alignItems: 'center',
                paddingLeft: 20,
              }}>
              <View
                style={{
                  height: 16,
                  width: 16,
                  borderRadius: 16,
                  borderWidth: 1,
                  backgroundColor: 'white',
                }}></View>
              <Text style={{color: 'white', fontSize: 16, marginLeft: 10}}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};
export default App;
