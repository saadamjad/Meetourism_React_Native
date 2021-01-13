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
            backgroundColor: props.trackStyle ? props.trackStyle : 'white',

            borderRadius: 10,
          }}
          minimumTrackTintColor="#998FA2"
          thumbTintColor="#fff"
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
            borderRadius: 10,
          }}
          trackStyle={{
            backgroundColor: props.trackStyle ? props.trackStyle : 'white',
            borderRadius: 10,
          }}
          // style={{backgroundColor:'blue'}}
          minimumTrackTintColor="#998FA2"
          // thumbStyle="red"
        />
      </View>
    </>
  );
};
export default SliderCom;
