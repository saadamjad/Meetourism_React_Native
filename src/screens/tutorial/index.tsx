import React, {Component, useState, useEffect, useRef} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
// import Style from './style';
import CustomView from '../../components/customView';
import {theme} from '../../constants/theme';
import Header from '../../components/header/longheader';
import AppIntroSlider from 'react-native-app-intro-slider';
import {FastImageComponent} from '../../components/fastimage';
const Tutorial = (props) => {
  const [state, setState] = useState({selectedIndex: 0});
  let node = useRef();
  const firstSlide = () => (
    <View
      style={{
        // height: '50%',
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
        paddingBottom: 30,
      }}>
      <View style={{paddingVertical: 20}}>
        <View style={{width: '100%', alignItems: 'flex-end'}}>
          <View
            style={{
              width: '75%',
              backgroundColor: theme.primaryColor,
              height: 160,
              justifyContent: 'center',
              borderBottomLeftRadius: 100,
              paddingBottom: 20,
              borderWidth: 1,
              borderColor: theme.primaryColor,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 25,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Welcome to {'\n'} Meetourism
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={1}
            // onPress={() => setState({...state, selectedIndex: 1})}
            onPress={() => {
              setState({...state, selectedIndex: 1});
              node.goToSlide(1);
            }}
            style={{
              backgroundColor: theme.secondaryColor,
              width: '45%',
              position: 'absolute',
              height: 50,
              bottom: -20,
              borderTopLeftRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomLeftRadius: 30,
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderColor: theme.secondaryColor,
            }}>
            <Text style={{color: 'white', fontWeight: '300', fontSize: 15}}>
              GET STARTED
            </Text>
            <Icon
              name="arrowright"
              type="AntDesign"
              style={{fontSize: 15, marginLeft: 10, color: 'white'}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  const secondSlide = () => (
    <View
      style={{
        height: '30%',
        // backgroundColor: 'black',
        width: '100%',
        justifyContent: 'center',
      }}>
      <View
        style={{
          width: '100%',
          height: 220,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          activeOpacity={0.75}
          style={{
            backgroundColor: theme.secondaryColor,
            width: 160,
            justifyContent: 'center',
            alignItems: 'center',
            height: 45,
            borderRadius: 30,
          }}
          onPress={() => props.navigation.navigate('signin')}>
          <Text style={{color: theme.textColor.whiteColor, fontSize: 22}}>
            Avail Offer
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.75}
          style={{
            width: 140,
            justifyContent: 'center',
            alignItems: 'center',
            height: 60,
          }}
          onPress={() => props.navigation.navigate('signin')}>
          <Text style={{color: theme.textColor.whiteColor, fontSize: 12}}>
            Skip to Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  const _renderItem = ({item}) => {
    return state.selectedIndex == 0 ? firstSlide() : secondSlide();
  };
  return (
    <CustomView
      image={
        state.selectedIndex == 0
          ? require('../../assets/images/background.png')
          : require('../../assets/images/burgerBackground.png')
      }
      resizeMode="contain">
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View style={{height: '50%', width: '100%', flexDirection: 'column'}}>
          <View
            style={{
              height: 40,
              width: '45%',
              alignSelf: 'flex-end',
              flexDirection: 'row',
              alignItems: 'center',
              paddingRight: 10,
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row'}}>
              {[0, 1].map((val, i) => (
                <View
                  key={i}
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 50,
                    marginHorizontal: 2,
                    backgroundColor:
                      i == state.selectedIndex
                        ? theme.textColor.whiteColor
                        : theme.textColor.greyColor,
                    opacity: i == state.selectedIndex ? 1 : 0.5,
                  }}></View>
              ))}
            </View>
            <TouchableOpacity
              activeOpacity={0.75}
              onPress={() => props.navigation.navigate('signin')}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>SKIP</Text>
            </TouchableOpacity>
          </View>
          {state.selectedIndex == 0 && (
            <View
              style={{
                // height: '45%',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                borderEndWidth: 1,
                // backgroundColor: 'red',
              }}>
              <View style={{height: 150, borderWidth: 0, width: 150}}>
                <FastImageComponent
                  source={require('../../assets/images/logo.png')}
                  resizeMode="contain"
                  style={{height: '100%', width: '100%'}}
                />
              </View>
            </View>
          )}
        </View>
        <AppIntroSlider
          renderItem={_renderItem}
          ref={(ref) => (node = ref)}
          data={[0, 1]}
          onSlideChange={(i) => {
            setState({...state, selectedIndex: i});
          }}
          // onDone={this._onDone}
          dotStyle={{display: 'none'}}
          activeDotStyle={{display: 'none'}}
          showDoneButton={false}
          showNextButton={false}
        />
      </View>
    </CustomView>
  );
};

export default Tutorial;
