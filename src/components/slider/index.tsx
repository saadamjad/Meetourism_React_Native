import React from 'react';
import {View, Text} from 'react-native';
import Slider from 'react-native-slider';
import {theme} from '../../constants/theme';
const SliderCom = (props) => {
  return (
    <>
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              color: props.color ? props.color : theme.textColor.blackColor,
              fontSize: 14,
              marginVertical: 10,
            }}>
            {' '}
            English{' '}
          </Text>
          <Text
            style={{
              color: props.color ? props.color : theme.textColor.blackColor,
              fontSize: 14,
              marginVertical: 10,
            }}>
            {' '}
            Native{' '}
          </Text>
        </View>

        <Slider
          onValueChange={(value) => console.log('value', value)}
          thumbStyle={{backgroundColor: '#D9B372'}}
          trackStyle={{
            backgroundColor: theme.textColor.blackColor,
            borderRadius: 10,
          }}
          thumbTintColor="#0000"
        />
      </View>

      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              color: props.color ? props.color : theme.textColor.blackColor,
              fontSize: 14,
              marginVertical: 10,
            }}>
            {' '}
            Russian{' '}
          </Text>
          <Text
            style={{
              color: props.color ? props.color : theme.textColor.blackColor,
              fontSize: 14,
              marginVertical: 10,
            }}>
            {' '}
            Fluient{' '}
          </Text>
        </View>

        <Slider
          // value={this.state.value}
          onValueChange={(value) => console.log('value', value)}
          thumbStyle={{
            backgroundColor: '#D9B372',
            height: 20,
            width: 20,
            borderRadius: 3,
          }}
          trackStyle={{
            backgroundColor: theme.textColor.blackColor,
            borderRadius: 10,
          }}
          // style={{backgroundColor:'blue'}}
          thumbTintColor="#0000"
        />
      </View>
    </>
  );
};
export default SliderCom;
