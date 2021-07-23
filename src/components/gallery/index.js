import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import { FastImageComponent } from '../../components/fastimage'
import FastImage from 'react-native-fast-image'


const App = (props) => {
  const images = props?.route?.params.images
  console.log("images=====", images)
  return (

    <Swiper
      style={styles.wrapper}
      // showsPagination={false}
      showsButtons={true}

    >

      {/* {images && images.map((item, i) => {
        console.log("item===", item)
        return <FastImageComponent
          resizeMode={'cover'}

          source={`${"https://meetourism.com/storage/" + item.image_path}`}
          style={{ height: '100%', width: '100%' }}

        />

      })} */}
      {images && images.map((item, i) => {
        console.log("item?.image_path", item?.image_path)

        let checkUrl = typeof item?.image_path === 'string' && item?.image_path?.search('https://meetourism.com')
        let image1WithUrl = `https://meetourism.com/storage/${item?.image_path}`
        checkUrl == -1 ? true : false
        // console.log("source===", source)

        return <FastImage
          style={{ width: '100%', height: '100%' }}
          source={{
            uri: checkUrl ? image1WithUrl : item?.image_path,
            headers: { Authorization: 'someAuthToken' },
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      })}
      {/* <View style={styles.slide2}>


        <FastImageComponent
          resizeMode={'cover'}
          source={require('../../assets/images/background.png')}
          style={{ height: '100%', width: '100%' }}

        />
      </View> */}
      {/* <View style={styles.slide3}>

        <FastImageComponent
          resizeMode={'cover'}
          source={require('../../assets/images/profile.png')}
          style={{ height: '100%', width: '100%' }}
        />

      </View> */}
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
