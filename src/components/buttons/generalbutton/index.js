/** @format */

import * as React from 'react';
import {Button} from 'react-native-elements';
import {View, Text} from 'react-native';

import styles from './styles';

function GlobalButton(props) {
  return (
    <Button
      title={props.buttonText ? props.buttonText : 'enter text '}
      buttonStyle={{
        backgroundColor: props.backgroundColor
          ? props.backgroundColor
          : '#EC2027',
        marginVertical: props.marginVertical ? props.marginVertical : 5,
        width: props.width ? props.width : '90%',
        height: props.height ? props.height : 50,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#ED1C24',
        shadowColor: '#ED1C24',
        borderRadius: props.borderRadius ? props.borderRadius : 30,
      }}
      containerStyle={{
        justifyContent: 'center',
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
  );
}
export default GlobalButton;