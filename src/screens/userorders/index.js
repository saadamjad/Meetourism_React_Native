import React, { Component, useState, useEffect } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
// import Icon from 'react-native-vector-icons/Feather';
// import Style from './style';
import { Button, Overlay } from 'react-native-elements';

import CustomView from '../../components/customView';
import { theme } from '../../constants/theme';
import LongHeader from '../../components/header/longheader';
import { Actions } from '../../redux/actions/index';
import { connect } from 'react-redux';
import { FastImageComponent } from '../../components/fastimage';
const Crushes = (props) => {
  const token = props?.token;
  const [state, setState] = useState({
    loader: true,
    allOrders: [],
    block: false,
    isVisible: false,
  });

  //   useEffect(() => {

  //     _GetCrushes(true);
  //   }, [props.navigation]);
  useEffect(() => {
    setState({
      ...state,
      allOrders: props.allCrushes,
      loader: false,
    });
  }, [props.allCrushes]);
  const _GetCrushes = async (param) => {
    setState({ ...state, loader: param });
    let data = 'followings';
    props.GetAllCrushes(data, token);
  };

  const _Block_UnBlock = (block) => {
    if (block) {
      console.log('block');
    } else {
      console.log('unblock');
    }
  };

  const _Overy = () => {
    return (
      <Overlay
        isVisible={state.isVisible}
        onBackdropPress={() => setState({ ...state, isVisible: false })}
        overlayStyle={{
          // borderRadius: 50,
          alignItems: 'center',
          justifyContent: 'center',
          width: '90%',
          padding: 0,
          borderRadius: 10,
          margin: 0,
          height: '86%',
        }}>
        <View style={{ height: '100%', width: '100%', alignItems: 'center' }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                // width: '70%',
                flex: 1,
                borderWidth: 0,
                paddingLeft: 10,
                paddingLeft: 20,
              }}>
              <Text
                style={{
                  color: theme.textColor['blackColor'],
                  fontWeight: '700',
                  fontSize: 20,
                }}>
                initialRouteName
              </Text>
            </View>
          </ScrollView>
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => {
              setState({ ...state, isVisible: false });
            }}
            style={{
              height: 40,
              marginVertical: 10,
              overflow: 'hidden',
              backgroundColor: theme.secondaryColor,
              elevation: 2,
              width: '50%',
              borderRadius: 30,
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{ fontSize: 15, color: 'white' }}> Done</Text>
          </TouchableOpacity>
        </View>
      </Overlay>
    );
  };
  return (
    <CustomView bg={theme.primaryColor} scroll>
      <View style={{ backgroundColor: theme.primaryColor, flex: 1 }}>
        <LongHeader
          if={props?.route?.params?.blockListNotOpen}
          navigation={props.navigation}
          leftArrow={true}
          backgroundColor={
            state?.allOrders[0]?.selected
              ? theme.primaryColor3
              : theme.primaryColor
          }
          headerText="Orders"
        />
        {state.allOrders &&
          state.allOrders.map((val, i) => {
            return (
              <TouchableOpacity
                key={i}
                activeOpacity={1}
                onPress={() => {
                  setState({
                    ...state,
                    isVisible: true,
                    allOrders: state.allOrders.map((value, ind) => {
                      if (i == ind) {
                        return { ...value, selected: true };
                      } else {
                        return { ...value, selected: false };
                      }
                    }),
                  });
                }}
                style={{
                  // height: 200,
                  height: val.selected ? 130 : 100,
                  backgroundColor: val?.selected
                    ? theme.primaryColor3
                    : theme.primaryColor,

                  borderRightWidth: 1,
                  borderWidth: state?.allOrders[0]?.selected ? 0 : 0.5,

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
                    <View style={{ alignItems: 'center', width: '0%' }}>
                      <View style={{ height: 40, width: 40 }}>
                        <FastImageComponent
                          style={{ height: '100%', width: '100%' }}
                          resizeMode="cover"
                          source={require('../../assets/images/ava.png')}
                        />
                      </View>
                      {/* </View> */}
                    </View>
                    <View style={{ width: '70%' }}>
                      <Text
                        style={{
                          color: theme.textColor.whiteColor,
                          fontSize: 15,
                        }}>
                        {/* {val?.follower?.username} */}
                        ORDER NAME
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        {!state.allOrders?.length > 0 && !state.loader ? (
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
          <View style={{ marginVertical: 10 }}>
            <ActivityIndicator size={'small'} color="red" />
          </View>
        ) : null}
      </View>

      {_Overy()}
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
};

export default connect(mapStateToProp, mapDispatchToProps)(Crushes);
