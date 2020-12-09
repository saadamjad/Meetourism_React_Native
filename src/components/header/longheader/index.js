import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
// import {theme} from '../../constants/';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { theme } from '../../../constants/theme';

// allPRops
// leftArrow={true}
// text="sss"
// navigation={props.navigation}
// searchIcon={true}
// // alignItemsText={'flex-end'}
// headerText={'LIVE CHAT'}
// // paddingLeft
// filterIcon={true}
// drawerIcon={true}
const App = (props) => {
  return (
    <View
      style={{
        height: 120,
        backgroundColor: props.backgroundColor
          ? props.backgroundColor
          : theme.primaryColor,
          zIndex: 999,
      }}>
      <View
        style={{
          height: 50,
          width: '100%',
          flexDirection: 'row',
          elevation: 0,
          backgroundColor: 'white',
        }}>
        {props.leftArrow && (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              width: '16%',

              paddingLeft: 20,
              justifyContent: 'center',
            }}>
            <Ionicons name="arrow-back" size={20} color={'black'} />
          </TouchableOpacity>
        )}
        {props.drawerIcon && (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              width: '16%',

              paddingLeft: 20,
              justifyContent: 'center',
            }}>
            <Ionicons name="arrow-back" size={20} color={'#757575'} />
          </TouchableOpacity>
        )}

        <View
          style={{
            flex: 1,
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}>
          {props.searchIcon && (
            <TouchableOpacity style={{paddingRight: 25, borderWidth: 0}}>
              <Ionicons name="search" size={20} color={'#241332'} />
            </TouchableOpacity>
          )}

          {props.filterIcon && (
            <TouchableOpacity style={{paddingRight: 25, borderWidth: 0}}>
              <Ionicons name="live" size={20} color={'#241332'} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          borderBottomLeftRadius: 150,
          elevation: 0.4,
          alignItems: props.alignItemsText
            ? props.alignItemsText
            : 'flex-start',
          paddingLeft: props.paddingLeft ? props.paddingLeft : 60,
        }}>
        <Text
          style={{
            color: 'red',
            // marginBottom: 5,
            fontSize: props.fontSize ? props.fontSize : 25,
          }}>
          {props.headerText ? props.headerText : 'enter text'}
        </Text>
      </View>
    </View>
  );
};
export default App;
