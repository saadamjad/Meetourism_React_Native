import React, {Component, useState, useEffect} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
// import {Icon} from 'native-base';
// import Style from './style';
import CustomView from '../../components/customView';
import {theme} from '../../constants/theme';
import LongHeader from '../../components/header/longheader';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import DropDownPicker from 'react-native-dropdown-picker';

import {connect} from 'react-redux';

import {Actions} from '../../redux/actions/index';
import Button from '../../components/buttons/generalbutton';
const Messages = (props) => {
  const token = props.token;
  const orderData = props?.orderData;
  const [state, setState] = useState({
    messages: [
      {
        name: 'Dina Meyer',
        description: 'Welcome to Yoga Meetup',
        date: '9 hrs',
        badge: 5,
        l: 8,
      },
      {
        name: 'Dina Meyer',
        description: 'Hi everyone!',
        date: '9 hrs',
        badge: 7,
        l: 7,
      },
      {
        name: 'Stephen Moreau',
        description: 'Check out this Meetup with',
        date: 'Aug 19',
        l: 6,
      },
      {
        name: 'Dina Meyer',
        description: 'Welcome to Yoga Meetup',
        date: '9 hrs',
        badge: 5,
        l: 5,
      },
      {
        name: 'Dina Meyer',
        description: 'Welcome to Yoga Meetup',
        date: '9 hrs',
        badge: 5,
        l: 4,
      },
      {
        name: 'Dina Meyer',
        description: 'Welcome to Yoga Meetup',
        date: '9 hrs',
        badge: 5,
        l: 3,
      },
      {
        name: 'Dina Meyer',
        description: 'Welcome to Yoga Meetup',
        date: '9 hrs',
        badge: 5,
        l: 2,
      },
    ],
    loader: false,
    // dropDown: [
    //   {
    //     key: {
    //       placeholder: 'Country',
    //       value: 'usa',
    //     },
    //   },
    //   {
    //     key: {
    //       placeholder: 'City',

    //       value: 'karachi',
    //     },
    //   },
    //   {
    //     key: {
    //       placeholder: 'Address',

    //       value: 'shaz',
    //     },
    //   },
    // ],
    dropDown: [
      {
        name: 'country',
        values: ['Pakistan', 'bangaladesh', 'Switzerland'],
        // values: ['1', '1.0', '1.2'],
      },
      {
        name: 'City',
        values: ['Karachi', 'Hyderabad Dakan', 'SwitzerlandCity'],
        // values: ['2', '2.0', '2.1'],
      },
      {
        name: 'Address',
        values: ['shaz', 'banglows', 'Defence'],
        // values: ['3'],
      },
    ],
  });
  const _CreateOrder = async () => {
    setState({...state, loader: true});

    let data = {
      partner_id: orderData?.user?.id,
      order_type: 'delivery',
      payment_type: 'cash',
      items: [
        {
          id: orderData?.id, //item id
          quantity: 1,
        },
      ],
    };
    let value = await props.CreateOrder(data, token, props.navigation);

    setState({...state, loader: false});
  };

  return (
    <CustomView bg={theme.primaryColor} scroll>
      <LongHeader
        navigation={props.navigation}
        leftArrow={true}
        headerText="Payment"
      />

      <View
        style={{
          flex: 1,
          width: '80%',
          alignSelf: 'center',
          borderColor: 'white',
        }}>
        <View
          style={{flex: 0.8, borderWidth: 0, justifyContent: 'space-evenly'}}>
          <View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 40,
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  borderBottomWidth: 0.5,
                  width: '50%',
                  borderColor: 'white',
                }}>
                <Text style={{color: '#817889'}}> Card Number </Text>
                <TextInput
                  placeholder="0123 4567 8910 1112"
                  style={{
                    color: 'white',
                    // height: 40,
                    padding: 0,
                    fontSize: 12,
                    margin: 0,
                    paddingBottom: 0,
                  }}
                  placeholderTextColor="white"
                />
              </View>
              <View
                style={{
                  borderBottomWidth: 0.5,
                  width: '30%',
                  borderColor: 'white',
                }}>
                <Text style={{color: '#817889'}}>Expires </Text>
                <TextInput
                  placeholder="MM/YY"
                  style={{
                    color: 'white',
                    // height: 40,
                    padding: 0,
                    fontSize: 12,
                    margin: 0,
                    paddingBottom: 0,
                  }}
                  placeholderTextColor="white"
                />
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  borderBottomWidth: 0.5,
                  width: '50%',
                  borderColor: 'white',
                }}>
                <Text style={{color: '#817889'}}> Name </Text>
                <TextInput
                  placeholder="JOHN DOE"
                  style={{
                    color: 'white',
                    // height: 40,
                    padding: 0,
                    fontSize: 12,
                    margin: 0,
                    paddingBottom: 0,
                  }}
                  placeholderTextColor="white"
                />
              </View>
              <View
                style={{
                  borderBottomWidth: 0.5,
                  width: '30%',
                  borderColor: 'white',
                  justifyContent: 'flex-start',
                  //   borderWidth: 1,
                }}>
                <Text style={{color: '#817889'}}>CVC </Text>
                <TextInput
                  placeholder="0000"
                  style={{
                    color: 'white',
                    padding: 0,
                    fontSize: 12,
                    margin: 0,
                    paddingBottom: 0,
                  }}
                  placeholderTextColor="white"
                />
              </View>
            </View>
          </View>
          <View>
            {state.dropDown.map((item, i) => {
              return (
                <>
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => {
                      setState({
                        ...state,
                        dropDown: state.dropDown.map((val, index) => {
                          console.log('item.ke', val.selected);
                          if (index == i) {
                            return {...val, selected: !val.selected};
                          } else {
                            return {...val, selected: false};
                          }
                        }),
                      });
                    }}
                    style={{
                      flexDirection: 'row',
                      width: '100%',
                      alignSelf: 'center',
                      height: 50,
                    }}>
                    <View style={{flex: 0.8, justifyContent: 'center'}}>
                      <Text style={{fontSize: 16, color: 'white'}}>
                        {item?.name}
                      </Text>
                    </View>
                    <TouchableOpacity
                      style={{
                        flex: 0.2,
                        justifyContent: 'center',
                        alignItems: 'flex-end',
                      }}
                      onPress={() => {
                        setState({
                          ...state,
                          dropDown: state.dropDown.map((val, index) => {
                            console.log('item.ke', val.selected);
                            if (index == i) {
                              return {...val, selected: !val.selected};
                            } else {
                              return {...val, selected: false};
                            }
                          }),
                        });
                      }}>
                      <Icon
                        name={item.selected ? 'arrow-up' : 'arrow-down'}
                        color="white"
                        size={15}
                      />
                    </TouchableOpacity>
                  </TouchableOpacity>
                  {item.selected ? (
                    <View
                      style={{
                        // height: 100,
                        backgroundColor: 'white',
                      }}>
                      {item.values &&
                        item.values.map((keys, loop) => {
                          return (
                            <TouchableOpacity
                              onPress={() => {
                                setState({
                                  ...state,

                                  dropDown: state.dropDown.map((v, ind) => {
                                    if (ind == i) {
                                      return {
                                        ...v,
                                        name: item.values[loop],
                                      };
                                    } else {
                                      return {...v};
                                    }
                                  }),
                                });
                              }}
                              key={loop}
                              style={{paddingVertical: 7, borderWidth: 0}}>
                              <Text style={{fontSize: 15}}> {keys} </Text>
                            </TouchableOpacity>
                          );
                        })}
                    </View>
                  ) : null}
                </>
              );
            })}
          </View>
          <Text style={{fontSize: 15, color: 'white', textAlign: 'right'}}>
            {props?.orderData?.price}
          </Text>
        </View>
        <View
          style={{
            flex: 0.4,
            borderWidth: 0,
            justifyContent: 'center',
            overflow: 'hidden',
          }}>
          <View style={{overflow: 'hidden'}}>
            <Button
              loader={state.loader}
              buttonText={'Save'}
              width={'100%'}
              onPress={() => _CreateOrder()}
            />
          </View>
        </View>
      </View>
    </CustomView>
  );
};

const mapStateToProp = (state) => ({
  loader: state.reducers.loader,
  token: state.reducers.token,
  orderData: state.reducers.orderData,
});
const mapDispatchToProps = {
  CreateOrder: Actions.CreateOrder,
};

export default connect(mapStateToProp, mapDispatchToProps)(Messages);
