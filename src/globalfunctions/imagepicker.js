import React, {useEffect, useState} from 'react';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Text, View} from 'react-native';

const ImagePicker = () => {
  var options = {
    title: 'Select Image',
    mediaType: 'photo',
    base64: true,
    noData: false,
    quality: 0.1,
  };
  launchImageLibrary(options, (res) => {
    if (res.didCancel) {
      console.log('User cancelled');
    } else if (res.error) {
      console.log('Camera Error: ');
      //   return true;
    } else {
      console.log('res', res);
      if (res) {
        return 'helo';
      }
      //   let temp = state.images;
      //   temp.push(res.uri);
      //   setState({...state, images: temp});
    }
  });
};

export default ImagePicker;
// var options = {
//   title: 'Select Image',
//   mediaType: 'photo',
//   base64: true,
//   noData: false,
//   quality: 0.1,
// };
// async function IMAGE(params) {
//   var ImagePickerValue = '';
//   return (ImagePickerValue = launchImageLibrary(options, (res) => {
//     if (res.didCancel) {
//       console.log('User cancelled');
//       //   return 'bye';
//     } else if (res.error) {
//       console.log('Camera Error: ');
//       //   return 'helo';
//     } else {
//       console.log('res', res);

//       //   return res;

//       //   let temp = state.images;
//       //   temp.push(res.uri);
//       //   setState({...state, images: temp});
//     }
//   }));
// }

// export default IMAGE;
