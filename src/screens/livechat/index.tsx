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
import Toast from '../../components/toastmessage';
import AnimatedLoader from '../../components/loader';
const Messages = (props) => {
  const token = props.token;
  useEffect(() => {
    _GetNotification();
  }, []);

  const _GetNotification = async () => {
    // setState({...state, loader: true});
    //
    let id = '5';
    let value = await props.GetPersonChat(id, token);
    console.log('=====>>', value?.messages);

    if (value) {
      setState({...state, loader: false, messages: value?.messages});
    } else {
      setState({...state, loader: false, messages: []});
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
    message: '',
  });

  let id = 31;
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomView bg={theme.primaryColor} scroll>
        <View style={{backgroundColor: theme.primaryColor, flex: 1}}>
          <LongHeader
            navigation={props.navigation}
            leftArrow={true}
            // searchIcon={true}
            headerText="Chats"
          />
          <View style={{paddingTop: 20}}>
            {state.messages &&
              state.messages.map((item, index) => (
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
                      }}>
                      <Image
                        source={item?.image}
                        style={{height: '100%', width: '100%'}}
                        resizeMode="contain"
                      />
                    </View>

                    <Text
                      style={{
                        color: theme.textColor.whiteColor,
                        fontSize: 17,
                        fontWeight: '600',
                      }}>
                      {item?.username}
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
                      style={{color: theme.textColor.whiteColor, fontSize: 14}}>
                      {item?.message}
                    </Text>
                  </View>
                  <View
                    style={{
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                      alignItems: item?.id == id ? 'flex-end' : 'flex-start',
                    }}>
                    <Text
                      style={{
                        color: theme.textColor.whiteColor,
                        fontSize: 12,
                      }}>
                      Wednesday Aug 19
                    </Text>
                    <Text
                      style={{
                        color: theme.textColor.whiteColor,
                        fontSize: 12,
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
});
const mapDispatchToProps = {
  CheckUser: Actions.CheckUser,
  Login: Actions.Login,
  GetPersonChat: Actions.GetPersonChat,
};

export default connect(mapStateToProp, mapDispatchToProps)(Messages);
