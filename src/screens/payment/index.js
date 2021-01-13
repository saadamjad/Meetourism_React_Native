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
import Button from '../../components/buttons/generalbutton';
const Messages = (props) => {
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
  });
  return (
    <CustomView bg={theme.primaryColor} scroll>
      <LongHeader
        navigation={props.navigation}
        leftArrow={true}
        searchIcon={true}
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
            <DropDownPicker
              items={[
                {
                  label: 'USA',
                  value: 'usa',
                },
              ]}
              placeholder="Country"
              placeholderStyle={{color: 'white'}}
              searchablePlaceholderTextColor="white"
              containerStyle={{height: 40, marginTop: 20, color: 'white'}}
              style={{
                backgroundColor: 'transparent',
                borderBottomWidth: 1,
                borderWidth: 0,
                color: 'white',
              }}
              itemStyle={{
                justifyContent: 'flex-start',
                color: 'white',
              }}
              arrowColor={'white'}
              onChangeItem={(item) => console.log('items', item)}
            />

            <DropDownPicker
              items={[
                {
                  label: 'USA',
                  value: 'usa',
                },
              ]}
              placeholder="City"
              placeholderStyle={{color: 'white'}}
              arrowColor={'white'}
              searchablePlaceholderTextColor="white"
              containerStyle={{
                height: 40,
                marginTop: 20,
                color: 'white',
              }}
              style={{
                backgroundColor: 'transparent',
                borderBottomWidth: 1,
                borderWidth: 0,
                color: 'white',
              }}
              itemStyle={{
                justifyContent: 'flex-start',
                color: 'white',
              }}
              //   dropDownStyle={{color: 'white'}}
              onChangeItem={(item) => console.log('items', item)}
            />

            <DropDownPicker
              arrowColor={'white'}
              items={[
                {
                  label: 'USA',
                  value: 'usa',
                },
              ]}
              placeholder="Address"
              placeholderStyle={{color: 'white'}}
              searchablePlaceholderTextColor="white"
              containerStyle={{height: 40, marginTop: 20, color: 'white'}}
              style={{
                backgroundColor: 'transparent',
                borderBottomWidth: 1,
                borderWidth: 0,
                color: 'white',
              }}
              itemStyle={{
                justifyContent: 'flex-start',
                color: 'white',
              }}
              //   dropDownStyle={{color: 'white'}}
              onChangeItem={(item) => console.log('items', item)}
            />
          </View>
        </View>
        <View style={{flex: 0.4, borderWidth: 0, justifyContent: 'center'}}>
          <Button
            buttonText={'Save'}
            width={'100%'}
            onPress={() => props.navigation.navigate('detailsoffer')}
            // onPress={() => props.navigation.navigate('selectPaymentMethodCards')}
          />
        </View>
      </View>
    </CustomView>
  );
};

export default Messages;
