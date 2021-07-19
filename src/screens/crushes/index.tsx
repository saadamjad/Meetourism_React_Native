import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
// import Icon from 'react-native-vector-icons/Feather';
// import Style from './style';
import CustomView from '../../components/customView';
import {theme} from '../../constants/theme';
import LongHeader from '../../components/header/longheader';
import {FastImageComponent} from '../../components/fastimage';

import {Actions} from '../../redux/actions/index';
import {connect} from 'react-redux';
const Crushes = (props) => {
  const token = props?.token;
  const [state, setState] = useState({
    loader: true,
    CrushesArray: [],
    block: false,
  });

  useEffect(() => {
    // const unsubscribe = props.navigation.addListener('focus', () => {
    //   // do something
    //   _GetCrushes(false);
    // });

    _GetCrushes(true);
    // return unsubscribe;
  }, [props.navigation]);
  useEffect(() => {
    setState({
      ...state,
      CrushesArray: props.allCrushes,
      loader: false,
    });
  }, [props.allCrushes]);
  const _GetCrushes = async (param) => {
    setState({...state, loader: param});
    let data = 'followings';
    props.GetAllCrushes(data, token);
  };

  const _Block_UnBlock = (block, id) => {
    if (block) {
      console.log('block ki api ', id);
      props.Block_Unblock(id, token, 'block');
    } else {
      props.Block_Unblock(id, token, 'unblock');

      console.log('unblock ki api', id);
    }
  };
  return (
    <CustomView bg={theme.primaryColor} scroll>
      <View style={{backgroundColor: theme.primaryColor, flex: 1}}>
        <LongHeader
          if={props?.route?.params?.blockListNotOpen}
          screenName={'crushes'}
          navigation={props.navigation}
          leftArrow={true}
          searchIcon={true}
          backgroundColor={
            state?.CrushesArray[0]?.selected
              ? theme.primaryColor3
              : theme.primaryColor
          }
          headerText="Crushes"
        />
        {state.CrushesArray &&
          state.CrushesArray.map((val, i) => {
            // console.log('valueeee', val?.follower?.profile_url);
            let valUrl = val?.follower?.profile_url;
            var checkUrl = valUrl?.search('https://meetourism.com');
            let image1WithUrl = `https://meetourism.com/storage/${valUrl}`;
            let image2 = valUrl;
            checkUrl == -1 ? true : false;

            return (
              <TouchableOpacity
                key={i}
                activeOpacity={1}
                onPress={() => {
                  setState({
                    ...state,
                    CrushesArray: state.CrushesArray.map((value, ind) => {
                      if (i == ind) {
                        return {...value, selected: true};
                      } else {
                        return {...value, selected: false};
                      }
                    }),
                  });
                }}
                style={{
                  // height: 200,
                  height: val.selected ? 150 : 100,
                  backgroundColor: val?.selected
                    ? theme.primaryColor3
                    : theme.primaryColor,

                  borderRightWidth: 1,
                  borderWidth: state?.CrushesArray[0]?.selected ? 0 : 0.5,

                  borderColor: theme.primaryColor1,
                  justifyContent: 'center',
                  borderBottomLeftRadius: 50,
                  alignItems: 'center',

                  overflow: 'hidden',
                }}>
                <View
                  style={{
                    width: '100%',
                    alignItems: 'space-around',
                  }}>
                  <View
                    style={{
                      width: '90%',
                      justifyContent: 'space-around',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View style={{alignItems: 'center', width: '0%'}}>
                      <View
                        style={{
                          height: 40,
                          width: 40,
                          borderRadius: 40,
                          overflow: 'hidden',
                        }}>
                        {/* <Image
                          style={{height: '100%', width: '100%'}}
                          resizeMode="cover"
                          source={
                            val?.follower?.profile_url
                              ? {
                                  uri: checkUrl ? image1WithUrl : image2,
                                }
                              : require('../../assets/images/ava.png')
                          }
                        /> */}
                        <FastImageComponent
                          style={{height: '100%', width: '100%'}}
                          resizeMode="cover"
                          source={
                            val?.follower?.profile_url
                              ? {
                                  uri: checkUrl ? image1WithUrl : image2,
                                }
                              : require('../../assets/images/ava.png')
                          }
                        />
                      </View>
                      {/* </View> */}
                    </View>
                    <View style={{width: '70%'}}>
                      <Text
                        style={{
                          color: theme.textColor.whiteColor,
                          fontSize: 12,
                        }}>
                        {val?.follower?.username}
                      </Text>
                    </View>
                  </View>
                  {val.selected ? (
                    <View
                      style={{
                        flexDirection: 'row',
                        // backgroundColor: 'blue',
                        height: 50,
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        width: '80%',
                        alignSelf: 'center',
                      }}>
                      <TouchableOpacity
                        onPress={() => {
                          val.is_blocked
                            ? null
                            : props.navigation.navigate('followandBlock', {
                                data: val.follower,
                                image: checkUrl ? image1WithUrl : image2,
                              });
                        }}
                        style={{
                          height: '100%',
                          width: 100,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Text
                          style={{
                            color: theme.textColor.whiteColor,
                            fontSize: 16,
                          }}>
                          {val.is_blocked ? null : 'View'}
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          height: '100%',
                          width: 100,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                        onPress={async () => {
                          await setState({
                            ...state,
                            CrushesArray: state.CrushesArray.map(
                              (value, ind) => {
                                console.log('values');
                                let blockUserId = value.follower.id;
                                if (i == ind) {
                                  if (value.is_blocked) {
                                    _Block_UnBlock(false, blockUserId);
                                    return {...value, is_blocked: false};
                                  } else {
                                    _Block_UnBlock(true, blockUserId);
                                    return {...value, is_blocked: true};
                                  }
                                } else {
                                  return {...value};
                                }
                              },
                            ),
                          });
                        }}>
                        <Text
                          style={{
                            color: theme.textColor.whiteColor,
                            fontSize: 16,
                          }}>
                          {val.is_blocked ? 'UnBlock' : 'Block'}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  ) : null}
                </View>
              </TouchableOpacity>
            );
          })}
        {!state.CrushesArray?.length > 0 && !state.loader ? (
          <Text
            style={{
              color: 'white',
              fontSize: 15,
              textAlign: 'center',
              marginVertical: 10,
            }}>
            {' '}
            No Crushes Available{' '}
          </Text>
        ) : state.loader ? (
          <View style={{marginVertical: 10}}>
            <ActivityIndicator size={'small'} color="red" />
          </View>
        ) : null}
      </View>
    </CustomView>
  );
};

const mapStateToProp = (state) => ({
  userData: state.reducers.userData,

  token: state.reducers.token,
  allCrushes: state.reducers.allCrushes,
  loader: state.reducers.loader,
});
const mapDispatchToProps = {
  Logout: Actions.Logout,
  GetAllCrushes: Actions.GetAllCrushes,
  Block_Unblock: Actions.Block_Unblock,
};

export default connect(mapStateToProp, mapDispatchToProps)(Crushes);
