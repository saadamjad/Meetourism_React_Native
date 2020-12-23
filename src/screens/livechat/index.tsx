import React, {Component, useState, useEffect, useCallback} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
// import {Icon} from 'native-base';
// import Style from './style';
import CustomView from '../../components/customView';
import {theme} from '../../constants/theme';
import {GiftedChat} from 'react-native-gifted-chat';
import LongHeader from '../../components/header/longheader';
import {TextInput} from 'react-native';
import {SafeAreaView} from 'react-native';
import {Icon} from 'native-base';
const Messages = (props) => {
  const [state, setState] = useState({
    messages: [
      {
        id: 0,
        username: 'Max',
        message: 'what is the best time to visit Rio de Janerio?',
      },
      {
        id: 1,
        username: 'Lady in the Blue',
        message:
          'March is the one of the best months to visit Rio. you can enjoy the beach and many of the attractions.',
      },
    ],
    message: '',
  });

  let id = 0;
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomView bg={theme.primaryColor} scroll>
        <View style={{backgroundColor: theme.primaryColor, flex: 1}}>
          <LongHeader
            navigation={props.navigation}
            leftArrow={true}
            searchIcon={true}
            headerText="Chats"
          />
          <View style={{paddingTop: 20}}>
            {state.messages.map((item, index) => (
              <View
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: item.id == id ? 'flex-end' : 'flex-start',
                  // paddingVertical: 10,
                }}>
                <View style={{paddingHorizontal: 10, paddingVertical: 10}}>
                  <Text
                    style={{
                      color: theme.textColor.whiteColor,
                      fontSize: 18,
                      fontWeight: '600',
                    }}>
                    {item.username}
                  </Text>
                </View>
                <View
                  style={
                    item.id == id
                      ? {
                          backgroundColor: theme.primaryColor2,
                          paddingVertical: 15,
                          width: '90%',
                          borderTopLeftRadius: 50,
                          borderBottomLeftRadius: 50,
                          paddingHorizontal: 20,
                        }
                      : {
                          backgroundColor: theme.primaryColor1,
                          paddingVertical: 15,
                          width: '90%',
                          borderTopRightRadius: 50,
                          borderBottomRightRadius: 50,
                          paddingHorizontal: 20,
                        }
                  }>
                  <Text style={{color: theme.textColor.whiteColor}}>
                    {item.message}
                  </Text>
                </View>
                <View
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    alignItems: item.id == id ? 'flex-end' : 'flex-start',
                  }}>
                  <Text
                    style={{
                      color: theme.textColor.whiteColor,
                      fontSize: 14,
                    }}>
                    Wednesday Aug 19
                  </Text>
                  <Text
                    style={{
                      color: theme.textColor.whiteColor,
                      fontSize: 14,
                    }}>
                    10:23 am
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </CustomView>
      <View
        style={{
          height: 80,
          backgroundColor: '#241332',
          width: '100%',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'row',
          // position: 'absolute',
        }}>
        <View>
          <Image source={require('../../assets/images/emoji.png')} />
        </View>
        <View style={{width: '80%'}}>
          <TextInput
            multiline
            style={{
              width: '100%',
              // height: '100%',
              color: theme.textColor.whiteColor,
            }}
            value={state.message}
            onChangeText={(text) => setState({...state, message: text})}
          />
        </View>
        <View>
          {state.message.length > 0 ? (
            <TouchableOpacity
              onPress={() => {
                setState({
                  ...state,
                  message: '',
                  messages: [
                    ...state.messages,
                    {
                      id,
                      username: 'Max',
                      message: state.message,
                    },
                  ],
                });
                // refs.scrollView.scrollTo(0);
              }}>
              <Icon
                style={{color: theme.textColor.whiteColor}}
                name="send"
                type="MaterialCommunityIcons"
              />
            </TouchableOpacity>
          ) : (
            <Image source={require('../../assets/images/mic.png')} />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Messages;
