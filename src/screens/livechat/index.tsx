import React, {Component, useState, useEffect, useCallback} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
// import {Icon} from 'native-base';
// import Style from './style';
import CustomView from '../../components/customView';
import {theme} from '../../constants/theme';
import {GiftedChat} from 'react-native-gifted-chat';
import LongHeader from '../../components/header/longheader';
const Messages = (props) => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);
  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);
  return (
    <CustomView bg={theme.primaryColor} scroll>
      <View style={{backgroundColor: theme.primaryColor, flex: 1}}>
        <LongHeader
          navigation={props.navigation}
          leftArrow={true}
          searchIcon={true}
          headerText="Chats"
        />
        <GiftedChat
          messagesContainerStyle={{flex: 1}}
          messages={messages}
          onSend={(messages) => onSend(messages)}
          user={{
            _id: 1,
          }}
        />
      </View>
    </CustomView>
  );
};

export default Messages;
