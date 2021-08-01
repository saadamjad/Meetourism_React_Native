import React, {Component, useState, useEffect} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/Feather';
// import Style from './style';
import CustomView from '../../../components/customView';
import {theme} from '../../../constants/theme';
import LongHeader from '../../../components/header/longheader';
import {connect} from 'react-redux';
import {Actions} from '../../../redux/actions/index';
import Toast from '../../../components/toastmessage';
import moment from 'moment';
import {FastImageComponent} from '../../../components/fastimage';

import AnimatedLoader from '../../../components/loader';
const Messages = (props) => {
  const token = props.token;
  useEffect(() => {
    _GetNotification();
  }, []);

  const _GetNotification = async () => {
    // setState({...state, loader: true});
    //
    let value = await props.GetAllMessages(token);
    console.log('==========', value);
    if (value) {
      setState({...state, loader: false, messages: value});
    } else {
      setState({...state, loader: false, messages: []});
    }
  };
  const [state, setState] = useState({
    messages: [],
    loader: true,
  });
  return (
    <CustomView bg={theme.primaryColor} scroll>
      <View style={{backgroundColor: theme.primaryColor, flex: 1}}>
        <AnimatedLoader status={state.loader} loaderMessage={'Loading...'} />

        <LongHeader
          navigation={props.navigation}
          leftArrow={true}
          // searchIcon={true}
          headerText="Messages"
        />
        {state.messages &&
          state.messages.map((val, i) => {
            let l = i - state.messages?.length;
            // console.log('hel===o', val);
            const d = new Date('2015-03-25T12:00:00Z');
            // console.log('-======DATeE===', d.format(d, 'DDMMYY'));
            return (
              <TouchableOpacity
                activeOpacity={1}
                style={{
                  height: 110,

                  borderColor: theme.primaryColor1,

                  borderRightWidth: 0,
                  borderWidth: 0.5,

                  overflow: 'hidden',
                }}
                onPress={() => {
                  props.navigation.navigate('innerchat', {
                    id: val?.id,
                  });
                  props.GetPersonChat(val?.id, token);
                }}>
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      height: '100%',
                      width: '80%',
                      justifyContent: 'space-around',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View style={{width: '30%', alignItems: 'flex-end'}}>
                      <View
                        style={{
                          // width: '60%',
                          alignItems: 'center',
                          borderWidth: 1,
                          width: 50,
                          borderRadius: 50,
                          marginLeft: 10,
                          height: 50,
                          overflow: 'hidden',
                        }}>
                        {/* <Image
                          resizeMode="cover"
                          style={{height: '100%', width: '100%'}}
                          source={{uri: val?.user?.profile_url}}
                        /> */}
                        <FastImageComponent
                          resizeMode="cover"
                          style={{height: '100%', width: '100%'}}
                          source={{uri: val?.user?.profile_url}}
                        />
                        {/* </View> */}
                      </View>
                    </View>

                    <View
                      style={{
                        flex: 1,
                        paddingLeft: 10,
                      }}>
                      <Text style={{color: theme.textColor.whiteColor}}>
                        {val?.user?.full_name}
                      </Text>
                      <Text
                        style={{
                          color: theme.textColor.whiteColor,
                          fontWeight: '900',
                          fontSize: 14,
                        }}>
                        {val?.last_message[0]?.message}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      height: '100%',
                      width: '30%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: theme.textColor.whiteColor}}>
                      {moment(val?.last_message[0]?.updated_at).format(
                        'yy-MM-DD',
                      )}
                    </Text>
                    {val?.badge && (
                      <View
                        style={{
                          backgroundColor: 'white',
                          justifyContent: 'center',
                          alignItems: 'center',

                          borderRadius: 25,
                          height: 25,
                          width: 25,
                          marginTop: 4,
                        }}>
                        <Text
                          style={{
                            color: theme.primaryColor1,
                            fontSize: 14,
                          }}>
                          {val?.badge}ssssadaaddasdsad
                        </Text>
                      </View>
                    )}
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        {state?.messages?.length === 0 && !state.loader ? (
          <Text
            style={{
              color: 'white',
              fontSize: 15,
              marginVertical: 10,
              textAlign: 'center',
            }}>
            {' '}
            You Don't Have Messages Right Now{' '}
          </Text>
        ) : null}
      </View>
    </CustomView>
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
  GetAllMessages: Actions.GetAllMessages,
  GetPersonChat: Actions.GetPersonChat,
};

export default connect(mapStateToProp, mapDispatchToProps)(Messages);
