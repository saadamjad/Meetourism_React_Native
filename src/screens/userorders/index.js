/* eslint-disable react-native/no-inline-styles */
import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

// import Icon from 'react-native-vector-icons/Feather';
// import Style from './style';
import {Button, Overlay} from 'react-native-elements';

import CustomView from '../../components/customView';
import {theme} from '../../constants/theme';
import LongHeader from '../../components/header/longheader';
import {Actions} from '../../redux/actions/index';
import {connect} from 'react-redux';
import {FastImageComponent} from '../../components/fastimage';
const Crushes = (props) => {
  const token = props?.token;
  const [state, setState] = useState({
    loader: true,
    allOrders: [],
    block: false,
    isVisible: false,
    orderDetails: {},
    selectedIndex: 0,
  });
  useEffect(() => {
    GetAllUserOrders();
  }, []);

  const FilterResponseData = (response) => {
    const filteredResponse = response?.filter(
      (item) => item?.items?.length >= 1,
    );
    const addImage = filteredResponse?.map((item, i) => {
      let value = item?.items.map((v) => v?.offer?.image_path);
      const iterator = value?.values();
      for (const key of iterator) {
        return {...item, imagePath: key};
      }
    });
    return addImage;
  };
  const GetAllUserOrders = async () => {
    let response = await props.GettAllOrders(token);

    if (response) {
      setState({
        ...state,
        allOrders: FilterResponseData(response),
        loader: false,
      });
    } else {
      setState({
        ...state,
        allOrders: [],
        loader: false,
      });
    }
  };

  const _Overy = () => {
    // console.log('==final state=', state.orderDetails);
    let data = state.orderDetails;

    return (
      <Overlay
        isVisible={state.isVisible}
        onBackdropPress={() => setState({...state, isVisible: false})}
        overlayStyle={{
          // borderRadius: 50,
          alignItems: 'center',
          justifyContent: 'center',
          width: '90%',
          padding: 0,
          borderRadius: 10,
          margin: 0,
          height: '86%',
          overflow:'hidden'
        }}>
        <View style={{height: '100%', width: '100%', flex: 1}}>
          <View style={{paddingHorizontal:15,flexDirection: 'row',width:'100%',alignItems:'center',borderWidth:0,height:50 }}>
            
              <Text
                style={{
                  color: theme.textColor.blackColor,
                  fontWeight: '700',
                  fontSize: 22,
                }}>
                {data?.title}
              </Text>
              <TouchableOpacity
              activeOpacity={0.75}
              onPress={() => {
                setState({...state, isVisible: false});
              }}
              style={{
                height: 40,
                width: 40,
                alignSelf: 'flex-end',
                position:'absolute',
                right:0,
                borderRadius: 40,
                alignItems: 'center',
                justifyContent: 'center',
            
                backgroundColor: theme.primaryColor,
              }}>
              <Entypo name="circle-with-cross" size={24} color={'white'} />
            </TouchableOpacity>
            </View>
         

          <View style={{paddingVertical: 10, paddingHorizontal: 10}}>
            <Text
              style={{
                color: theme.textColor.blackColor,
                fontWeight: '700',
                fontSize: 15,
              }}>
              {data?.description}
            </Text>
          </View>

          <View
            style={{
              overflow: 'hidden',
              height: '50%',
              width: '90%',
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <FastImageComponent
              style={{height: '100%', width: '100%'}}
              resizeMode="contain"
              source={{
                uri: data.image_path,
              }}
            />
          </View>
        </View>
      </Overlay>
    );
  };
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
          headerText="Orders"
        />
        {state.allOrders &&
          state.allOrders.map((val, i) => {
            // console.log{val}
            let temp = '';
            return (
              <TouchableOpacity
                key={i}
                activeOpacity={1}
                onPress={() => {
                  let value = val.items.map((item) => {
                    return item.offer;
                  });
                  let value2 = value.values();
                  for (const key of value2) {
                    temp = key;
                  }

                  setState({
                    ...state,
                    orderDetails: temp,
                    isVisible: true,
                    selectedIndex: i,
                    allOrders: state.allOrders.map((value, ind) => {
                      if (i == ind) {
                        return {...value, selected: true};
                      } else {
                        return {...value, selected: false};
                      }
                    }),
                  });
                }}
                // eslint-disable-next-line react-native/no-inline-styles
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
                    <View style={{alignItems: 'center', width: '0%'}}>
                      <View style={{height: 40, width: 40}}>
                        <FastImageComponent
                          style={{height: '100%', width: '100%'}}
                          resizeMode="cover"
                          source={{
                            uri: val.imagePath,
                          }}
                        />
                      </View>
                    </View>
                    <View style={{width: '70%'}}>
                      <Text
                        style={{
                          color: theme.textColor.whiteColor,
                          fontSize: 14,
                        }}>
                        {val?.partner?.full_name}
                      </Text>
                      <Text
                        style={{
                          color: theme.textColor.whiteColor,
                          fontSize: 15,
                          textAlign:'right'
                        }}>
                        {val?.order_status}
                      </Text>
                      <Text
                        style={{
                          color: theme.textColor.whiteColor,
                          fontSize: 12,
                        }}>
                       Amount {' '} {val?.total_amount}
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
            No order Available{' '}
          </Text>
        ) : state.loader ? (
          <View style={{marginVertical: 10}}>
            <ActivityIndicator size={'small'} color="red" />
          </View>
        ) : null}
      </View>

      {_Overy()}
    </CustomView>
  );
};

const mapStateToProp = (state) => ({
  allOrders: state.reducers.allOrders,

  token: state.reducers.token,
  // allCrushes: state.reducers.allCrushes,
  loader: state.reducers.loader,
});
const mapDispatchToProps = {
  Logout: Actions.Logout,
  GettAllOrders: Actions.GettAllOrders,
};

export default connect(mapStateToProp, mapDispatchToProps)(Crushes);
