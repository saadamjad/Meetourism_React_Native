import React, {Component, useState, useEffect} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
// import {Icon} from 'native-base';
// import Style from './style';
import CustomView from '../../components/customView';
import {theme} from '../../constants/theme';
import LongHeader from '../../components/header/longheader';
import {Item} from 'native-base';
import {Actions} from '../../redux/actions/index';
import {connect} from 'react-redux';
const Crushes = (props) => {
  const token = props.token;
  const [state, setState] = useState({
    loader: false,
    CrushesArray: [],
    messages: [
      {
        name: 'Dina Meyer',
        selected: false,
        description: 'Offer updated successfull',
        date: '9 hrs',
        badge: 5,
        l: 8,
      },
      {
        name: 'Dina Meyer',
        selected: false,
        description: 'Password is successfully updated.',
        date: '9 hrs',
        badge: 7,
        l: 7,
      },
      {
        name: 'Stephen Moreau',
        selected: false,
        description:
          'Everyday English-French-Spanish: Conversation and Fun-Joe!',
        date: 'Aug 19',
        l: 6,
      },
      {
        name: 'Dina Meyer',
        selected: false,
        description: 'Welcome to Yoga Meetup',
        date: '9 hrs',
        badge: 5,
        l: 5,
      },
      {
        name: 'Dina Meyer',
        selected: false,
        description: 'Welcome to Yoga Meetup',
        date: '9 hrs',
        badge: 5,
        l: 4,
      },
      {
        name: 'Dina Meyer',
        selected: false,
        description: 'Welcome to Yoga Meetup',
        date: '9 hrs',
        badge: 5,
        l: 3,
      },
      {
        name: 'Dina Meyer',
        selected: false,
        description: 'Welcome to Yoga Meetup',
        date: '9 hrs',
        badge: 5,
        l: 2,
      },
    ],
  });

  useEffect(() => {
    _GetCrushes();
  }, []);
  const _GetCrushes = async () => {
    let _token = '133|7YAjWfsLSQqRW4tI1VURjA4z1NAV7Sn2XyjV9Z7h';
    let data = 'followings';
    let value = await props.GetAllCrushes(data, _token);
    console.log('Valuee return', value);
    if (value) {
      setState({
        ...state,
        CrushesArray: value.map((item, i) => {
          return {
            ...item,

            name: 'Dina Meyer',
            selected: false,
            description: 'Offer updated successfull',
            date: '9 hrs',
            badge: 5,
            l: 8,
          };
        }),
        loader: false,
      });
    } else {
      setState({...state, CrushesArray: [], loader: false});
    }
  };
  return (
    <CustomView bg={theme.primaryColor} scroll>
      <View style={{backgroundColor: 'white', flex: 1}}>
        {console.log('sssstate', state.CrushesArray[0])}
        <LongHeader
          // !props?.route?.params?.blockListNotOpen
          // followandBlock
          if={props?.route?.params?.blockListNotOpen}
          navigation={props.navigation}
          leftArrow={true}
          searchIcon={true}
          backgroundColor={
            state.messages[0].selected
              ? theme.primaryColor1
              : theme.primaryColor
          }
          headerText="Crushes"
        />
        {state.CrushesArray &&
          state.CrushesArray.map((val, i) => {
            console.log('Valueeee', val.user_id);
            let l = i - state.messages.length;
            return (
              <TouchableOpacity
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
                  height: props?.route?.params?.blockListNotOpen
                    ? 300
                    : val.selected
                    ? 300
                    : 200,
                  // backgroundColor: 'blue',
                  backgroundColor: val.selected
                    ? theme.primaryColor1
                    : theme.primaryColor,

                  borderRightWidth: 1,
                  borderWidth: 0.5,
                  // borderTopColor: 'transparent',
                  // borderRightColor: 'transparent',
                  justifyContent: 'flex-end',
                  borderColor: theme.primaryColor1,
                  // marginTop: -150,
                  borderBottomLeftRadius:
                    i == state.CrushesArray.length - 1 ? 0 : 100,
                  // zIndex: val.l,
                  overflow: 'hidden',
                }}>
                <View
                  style={{
                    // flex: val.selected ? 0.75 : 0.55,
                    width: '100%',
                    alignSelf: 'flex-end',
                    justifyContent: 'center',
                    alignItems: 'space-around',
                    backgroundColor: 'red',
                  }}>
                  <View
                    style={{
                      height: '40%',
                      width: '90%',
                      justifyContent: 'space-around',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View style={{alignItems: 'center', width: '0%'}}>
                      <View style={{height: 40, width: 40}}>
                        <Image
                          style={{height: '100%', width: '100%'}}
                          resizeMode="cover"
                          source={require('../../assets/images/ava.png')}
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
                        {val.user_id}
                      </Text>
                    </View>
                  </View>

                  {props?.route?.params?.blockListNotOpen
                    ? null
                    : val.selected && (
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            width: '80%',
                            alignSelf: 'center',
                          }}>
                          <TouchableOpacity
                            onPress={() =>
                              props.navigation.navigate('followandBlock')
                            }>
                            <Text
                              style={{
                                color: theme.textColor.whiteColor,
                                fontSize: 16,
                              }}>
                              View
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            onPress={() =>
                              props.navigation.navigate('followandBlock', {
                                block: true,
                              })
                            }>
                            <Text
                              style={{
                                color: theme.textColor.whiteColor,
                                fontSize: 16,
                              }}>
                              Block
                            </Text>
                          </TouchableOpacity>
                        </View>
                      )}
                </View>
              </TouchableOpacity>
            );
          })}
      </View>
    </CustomView>
  );
};

const mapStateToProp = (state) => ({
  userData: state.reducers.userData,

  token: state.reducers.token,
  loader: state.reducers.loader,
});
const mapDispatchToProps = {
  Logout: Actions.Logout,
  GetAllCrushes: Actions.GetAllCrushes,
};

export default connect(mapStateToProp, mapDispatchToProps)(Crushes);
