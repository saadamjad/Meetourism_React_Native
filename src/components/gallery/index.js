/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import {FastImageComponent} from '../../components/fastimage';
import FastImage from 'react-native-fast-image';
import LongHeader from '../../components/header/longheader';
import {theme} from '../../constants/theme';

const App = (props) => {
  const images = props?.route?.params?.images;
  console.log('images=====', images?.length);
  var emptyImages = images?.length > 0 ? false : true;
  const component = () => {
    return (
      <View style={{backgroundColor: theme.primaryColor, flex: 1}}>
        <LongHeader
          navigation={props.navigation}
          leftArrow={true}
          // searchIcon={true}
          backgroundColor={
            // theme.secondaryColor
            theme.primaryColor
          }
          headerText="Gallery"
        />
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            textAlign: 'center',
            marginTop: 10,
          }}>
          {' '}
          User didn't upload any images{' '}
        </Text>
      </View>
    );
  };
  return emptyImages ? (
    component()
  ) : (
    <Swiper style={styles.wrapper} showsButtons={true}>
      {images &&
        images.map((item, i) => {
          console.log('item?.image_path', item?.image_path);

          let checkUrl =
            typeof item?.image_path === 'string' &&
            item?.image_path?.search('https://dev.meetourism.com');;
          let image1WithUrl = `https://dev.meetourism.com/storage/${item?.image_path}`;
          checkUrl == -1 ? true : false;

          return (
            <FastImage
              style={{width: '100%', height: '100%'}}
              source={{
                uri: checkUrl ? image1WithUrl : item?.image_path,
                headers: {Authorization: 'someAuthToken'},
              }}
              priority={FastImage.priority.normal}
              resizeMode={FastImage.resizeMode.cover}
            />
          );
        })}
    </Swiper>
  );
};

export default App;

const styles = StyleSheet.create({
  wrapper: {
    // backgroundColor: 'red',
  },
  slide1: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#9DD6EB',
    // backgroundColor: 'red',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
