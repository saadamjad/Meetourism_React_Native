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
import Fontisto from 'react-native-vector-icons//Fontisto';
import Feather from 'react-native-vector-icons//Feather';
import {connect} from 'react-redux';
import {Actions} from '../../redux/actions/index';
import AnimatedLoader from '../../components/loader';
import moment from 'moment';
import {FastImageComponent} from '../../components/fastimage';

const Messages = (props) => {
  const token = props.token;
  const _id = props?.route?.params?.id;
  const loggedInUser = props.userData;
  // console.log('loggedInUser', _id);
  useEffect(() => {
    _StartChat();
  }, []);
  useEffect(() => {
    if (!props.loader) {
      setState({...state, loader: false, messages: props.personalChatData});
    }
  }, [props.personalChatData]);

  const _StartChat = async () => {
    let value = await props.StartChat(_id, token, props.navigation);
    if (value) {
      setState({
        ...state,
        loader: false,
        conversationId: value?.conversation_id,
        messages: value.messages,
      });
    } else {
      setState({...state, loader: false});
    }
  };

  const [state, setState] = useState({
    messages: [
      {
        id: 0,
        username: 'Max',
        message: 'what is the best time to visit Rio de Janerio?',

        image: require('../../assets/icons/row.png'),
      },
      {
        id: 1,
        username: 'Lady in the Blue',
        image: require('../../assets/icons/row.png'),

        message:
          'March is the one of the best months to visit Rio. you can enjoy the beach and many of the attractions.',
      },
    ],
    loader: true,
    conversationId: '',
    message: '',
    msgText: '',
  });

  let id = loggedInUser;

  const _SendMessage = () => {
    let conversation_id = String(_id);
    let data = {message: state.msgText};

    // console.log('Sss', conversation_id, '-dat', data);
    props.SendMessage(conversation_id, data, token);

    setState({...state, msgText: ''});
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomView bg={theme.primaryColor} scroll>
        {/* {console.log('ssss====', state)} */}

        <AnimatedLoader
          status={state.loader}
          // loaderStyle={true}
          loaderMessage={`Starting Conversation...`}
        />
        <View style={{backgroundColor: theme.primaryColor, flex: 1}}>
          <LongHeader
            navigation={props.navigation}
            leftArrow={true}
            // searchIcon={true}
            headerText="Chats"
          />
          <View style={{paddingTop: 20}}>
            {state.messages &&
              state.messages.map(
                (item, index) => (
                  console.log('======', item),
                  (
                    <View
                      style={{
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: item?.id == id ? 'flex-end' : 'flex-start',
                        // paddingVertical: 10,
                      }}>
                      <View
                        style={{
                          paddingHorizontal: 10,
                          paddingVertical: 10,
                          flexDirection: item?.id == id ? 'row-reverse' : 'row',
                          alignItems: 'center',
                        }}>
                        <View
                          style={{
                            borderWidth: 1,
                            borderColor: 'pink',
                            height: 35,
                            width: 35,
                            marginRight: 10,
                            marginLeft: item?.id == id ? 10 : 0,
                            borderRadius: 35,
                            overflow: 'hidden',
                          }}>
                          <FastImageComponent
                            source={
                              item?.user?.profile_url
                                ? {uri: item?.user?.profile_url}
                                : item?.image
                            }
                            style={{height: '100%', width: '100%'}}
                            resizeMode="cover"
                          />
                        </View>

                        <Text
                          style={{
                            color: theme.textColor.whiteColor,
                            fontSize: 17,
                            fontWeight: '600',
                          }}>
                          {item?.user?.full_name}
                        </Text>
                      </View>
                      <View
                        style={
                          item?.id == id
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
                        <Text
                          style={{
                            color: theme.textColor.whiteColor,
                            fontSize: 14,
                          }}>
                          {item?.message}
                        </Text>
                      </View>
                      <View
                        style={{
                          paddingHorizontal: 10,
                          paddingVertical: 5,
                          alignItems:
                            item?.id == id ? 'flex-end' : 'flex-start',
                        }}>
                        <Text
                          style={{
                            color: theme.textColor.whiteColor,
                            fontSize: 12,
                            marginTop: 5,
                          }}>
                          {moment(item?.user?.updated_at).format('DD-MM-YYYY')}
                          {/* {moment(val.created_at).format('DD-MM-YYYY')} */}
                        </Text>
                        <Text
                          style={{
                            color: theme.textColor.whiteColor,
                            fontSize: 12,
                            marginTop: 10,
                          }}>
                          10:23 am
                          {/* {new Date().getTime()} */}
                        </Text>
                      </View>
                    </View>
                  )
                ),
              )}
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
          paddingHorizontal: 5,
          // position: 'absolute',
        }}>
        <View>
          <Fontisto name="smiley" size={20} color="white" />
          {/* <Image source={require('../../assets/images/emoji.png')} /> */}
        </View>
        <View style={{width: '80%'}}>
          <TextInput
            multiline
            style={{
              width: '100%',
              // height: '100%',
              color: theme.textColor.whiteColor,
            }}
            value={state.msgText}
            onChangeText={(text) => setState({...state, msgText: text})}
          />
        </View>
        <View>
          {state.msgText.length > 0 ? (
            <TouchableOpacity
              onPress={() => {
                _SendMessage();
                // setState({
                //   ...state,
                //   message: '',
                //   messages: [
                //     ...state.messages,
                //     {
                //       message: state.message,
                //     },
                //   ],
                // });
                // refs.scrollView.scrollTo(0);
              }}>
              <Icon
                style={{color: theme.textColor.whiteColor}}
                name="send"
                type="MaterialCommunityIcons"
              />
            </TouchableOpacity>
          ) : (
            <Feather name="mic" size={20} color="white" />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProp = (state) => ({
  userData: state.reducers.userData,
  loader: state.reducers.loader,
  token: state.reducers.token,
  personalChatData: state.reducers.personalChatData,
});
const mapDispatchToProps = {
  CheckUser: Actions.CheckUser,
  Login: Actions.Login,
  GetPersonChat: Actions.GetPersonChat,
  StartChat: Actions.StartChat,
  SendMessage: Actions.SendMessage,
};

export default connect(mapStateToProp, mapDispatchToProps)(Messages);
