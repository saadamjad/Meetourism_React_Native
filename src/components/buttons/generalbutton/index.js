/** @format */

import * as React from 'react';
import {Button} from 'react-native-elements';
import {View, Text} from 'react-native';

import styles from './styles';
import {theme} from '../../../constants/theme';

function GlobalButton(props) {
  return (
    <View style={{overflow: 'hidden'}}>
      <Button
        title={props.buttonText ? props.buttonText : 'enter text '}
        // style={{
        //   borderRadius: props.borderRadius ? props.borderRadius : 30,
        // }}
        buttonStyle={{
          overflow: 'hidden',

          backgroundColor: props.backgroundColor
            ? props.backgroundColor
            : theme.secondaryColor,
          marginVertical: props.marginVertical ? props.marginVertical : 5,
          marginLeft: props.marginLeft ? props.marginLeft : 5,
          width: props.width ? props.width : '90%',
          height: props.height ? props.height : 45,
          alignSelf: 'center',
          borderWidth: 1,
          borderColor: props.backgroundColor
            ? props.backgroundColor
            : theme.secondaryColor,
          shadowColor: props.backgroundColor
            ? props.backgroundColor
            : theme.secondaryColor,
          borderRadius: props.borderRadius ? props.borderRadius : 30,
        }}
        containerStyle={{
          justifyContent: 'center',
          overflow: 'hidden',
          height: props.height ? props.height : 50,
          // borderRadius: 20,
          borderRadius: props.borderRadius ? props.borderRadius : 30,
        }}
        titleStyle={{
          color: props.titleStyle ? props.titleStyle : 'white',
          fontSize: props.fontSize ? props.fontSize : 15,
        }}
        onPress={props.onPress}
        loading={props.loader ? props.loader : false}
      />
    </View>
  );
}
export default GlobalButton;
