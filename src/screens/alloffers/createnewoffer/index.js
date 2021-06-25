import { Form, Icon } from 'native-base';
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import GlobalButton from '../../../components/buttons/generalbutton';
// import CustomView from '../../../components/customView';
// import App from '../../../../components/header';
import Header from '../../../components/header';

import { theme } from '../../../constants/theme';
import { Actions } from '../../../redux/actions/index';
import ImagePicker from '../../../globalfunctions/imagepicker';

import { connect } from 'react-redux';
// import { ProfileStack } from '../../../navigations/stacknavigation';
import Toast from '../../../components/toastmessage';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';
import AnimatedLoader from '../../../components/loader';

// import { error } from 'react-native-gifted-chat/lib/utils';
function CreateOffer(props) {
  const token = props.token;
  console.log('token===', token);
  const [state, setState] = useState({
    images: 'asdd',
    title: 'asdaa',
    offerDescription: 'ssassad',
    price: '20',
    imageData: {},
    loader: false,
    returnUrl: '',
    secondComponentCall: false,
    loaderMessage: 'Uploading...',
  });

  const _AddOffer = () => {
    if (
      state.title !== '' &&
      state.offerDescription !== '' &&
      state.price !== ''
    ) {
      // props.AddOffers(data, props.navigation);
      _ImageUploadApiCall();
    } else {
      Toast('Error', 'PLease Fill All Required Information', 'error');
    }
  };

  const _ImageUploadApiCall = async () => {
    setState({ ...state, loader: true });
    const base_url = 'https://meetourism.com/api/v1/offers';
    console.log('res.fileName', state.imageData);
    let path = state?.imageData?.uri;

    let formData = new FormData();

    formData.append('image', { ...state.imageData, name: state.returnUrl });
    formData.append('title', state.title);
    formData.append('description', state.offerDescription);
    formData.append('price', Number(state.price));
    formData.append('feature_type', 'none');
    // formData.append('offer_id', 18);
    // formData.append('action', 'delete');

    let header = {
      headers: {
        'Content-Type': 'multipart/form-data; ',
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .post(base_url, formData, header)
      .then(async (Res) => {
        setState({
          ...state,
          loader: false,
          secondComponentCall: !state.secondComponentCall,
        });
        // props.navigation.goBack();
        console.log('Resss', Res?.data?.data);
      })
      .catch((err) => {
        console.log('Error', err?.response?.data);
        setState({ ...state, loader: false });
      });
  };

  const _ImagePicker = (data) => {
    var options = {
      title: 'Select Image',
      mediaType: 'photo',
      base64: true,
      noData: false,
      quality: 0.1,
    };
    let value = launchImageLibrary(options, async (res) => {
      if (res.didCancel) {
        console.log('User cancelled');
      } else if (res.error) {
        console.log('Camera Error: ');
      } else {
        // setState({ ...state, imageData: res });
        let returnUrl = await props.ImageUploadingGeneral(res)
        console.log("return url", returnUrl)
        setState({
          ...state, imageData: res,
          returnUrl: returnUrl,
        })

      }
    });
    return value;
  };
  const _Successfull = () => {
    return (
      <ImageBackground
        source={require('../../../assets/images/statusbg.png')}
        style={{ height: '100%', width: '100%' }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'rgba(000,000,000, 0.7)',
          }}>
          <View
            style={{
              width: '90%',
              backgroundColor: theme.primaryColor,
              paddingHorizontal: 15,
              // borderRadius: 45,
              borderTopRightRadius: 100,
              borderBottomLeftRadius: 100,
              paddingVertical: 60,
              elevation: 2,
              // alignItems: 'center',
            }}>
            <Text
              style={{
                color: theme.textColor.whiteColor,
                // paddingTop: 40,
                paddingBottom: 40,
                alignSelf: 'center',
                fontSize: 30,
                textAlign: 'center',
                fontWeight: '700',
              }}>
              Offer Successfully Uploaded
            </Text>

            <GlobalButton
              buttonText="My Offer"
              height={40}
              onPress={() => props.navigation.navigate('SelectOffer')}
            />

            <View
              style={{
                height: 20,
              }}></View>
            <GlobalButton
              buttonText="Create new offer"
              height={40}
              onPress={() =>
                setState({
                  ...state,
                  secondComponentCall: !state.secondComponentCall,
                  images: '',
                  title: '',
                  offerDescription: '',
                  price: '',
                  imageData: {},
                  loader: false,
                  secondComponentCall: false,
                  loaderMessage: 'Uploading...',
                })
              }
            />
            <View
              style={{
                height: 20,
              }}></View>
            <GlobalButton
              buttonText="Dashboard"
              height={40}
              onPress={() => props.navigation.navigate('partnerhome')}
            />
          </View>
        </View>
      </ImageBackground>
    );
  };

  const _CreateOffer = () => {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <AnimatedLoader
          status={state.loader}
          loaderMessage={state.loaderMessage}
        />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <ImageBackground
            source={require('../../../assets/images/statusbg.png')}
            style={{ height: '100%', width: '100%' }}>
            <View
              style={{
                backgroundColor: 'rgba(00,00,00, 0.7)',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
              }}>
              <Header
                isTransparent={true}
                leftArrow={true}
                navigation={props.navigation}
              />
              <View
                style={{
                  width: '90%',
                  // height: '80%',
                  backgroundColor: 'white',
                  borderRadius: 45,
                  paddingVertical: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: theme.secondaryColor,
                    // paddingBottom: 25,
                    paddingVertical: 20,
                    fontSize: 24,
                    fontWeight: '700',
                  }}>
                  Post Offers
                </Text>
                <View
                  style={{
                    width: '80%',
                    borderWidth: 0.4,
                    marginVertical: 10,
                    height: 150,
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden'
                  }}>
                  <ImageBackground
                    source={{ uri: state?.imageData?.uri }}
                    style={{
                      height: '100%',
                      width: '100%',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 30,
                        fontWeight: '700',
                        color: theme.textColor.lightWhiteColor,
                        opacity: 0.4,
                      }}>
                      Image
                    </Text>
                  </ImageBackground>
                </View>
                <View
                  style={{
                    width: '80%',
                    backgroundColor: 'white',
                    paddingVertical: 10,
                  }}>
                  <GlobalButton
                    height={40}
                    width="100%"
                    onPress={async () => {
                      _ImagePicker();
                      // console.log('Value retuuunnnn+', value);
                    }}
                    buttonText="Upload Image"
                  />
                  {/* <TouchableOpacity
                onPress={() => {
                  IMAGEUPLOAD();
                }}
                style={{
                  height: 50,
                  width: 50,
                  borderWidth: 1,
                }}></TouchableOpacity> */}
                </View>
                <View style={{ width: '80%' }}>
                  <View style={{ width: '100%', height: 40, marginVertical: 10 }}>
                    <TextInput
                      style={{
                        width: '100%',
                        borderBottomWidth: 0.4,

                        height: '100%',
                        borderRadius: 1,
                        borderStyle: 'solid',
                        fontWeight: 'bold',
                      }}
                      placeholder="Title here"
                      placeholderTextColor="black"
                      onChangeText={(text) => setState({ ...state, title: text })}
                    />
                  </View>
                  <View style={{ width: '100%', height: 40, marginVertical: 10 }}>
                    <TextInput
                      style={{
                        width: '100%',
                        borderBottomWidth: 0.4,
                        height: '100%',
                        fontWeight: 'bold',

                        borderRadius: 1,
                        borderStyle: 'solid',
                      }}
                      placeholder="Write Description Here"
                      placeholderTextColor="black"
                      onChangeText={(text) =>
                        setState({ ...state, offerDescription: text })
                      }
                    />
                  </View>
                  <View style={{ width: '60%', height: 40, marginVertical: 10 }}>
                    <TextInput
                      style={{
                        width: '100%',
                        borderBottomWidth: 0.4,

                        height: '100%',
                        fontWeight: 'bold',
                        borderRadius: 1,
                        borderStyle: 'solid',
                      }}
                      placeholder="Enter Price here"
                      onChangeText={(text) => setState({ ...state, price: text })}
                      placeholderTextColor="black"
                    />
                  </View>
                </View>
                <View
                  style={{
                    width: '80%',
                    borderRadius: 30,
                    backgroundColor: 'white',
                    paddingVertical: 10,
                    marginTop: 25,
                    marginBottom: 25,
                    overflow: 'hidden',
                  }}>
                  <GlobalButton
                    height={40}
                    width="100%"
                    buttonText="Save & upload"
                    onPress={
                      () => {
                        // setOfferPosted(true);
                        _AddOffer();
                        // props.navigation.navigate('confirmedoffers');
                      }
                      // props.navigation.navigate('offerUploadedSuccessfully')
                    }
                  />
                </View>
              </View>
            </View>
          </ImageBackground>
        </ScrollView>
      </View>
    );
  };

  return state.secondComponentCall ? _Successfull() : _CreateOffer();
}
const mapStateToProp = (state) => ({
  userData: state.reducers.userData,
  image: state.reducers.images_Interests,
  token: state.reducers.token,

  loader: state.reducers.loader,
});
const mapDispatchToProps = {
  AddOffers: Actions.AddOffers,
  ImageUploadingGeneral: Actions.ImageUploadingGeneral,
};

export default connect(mapStateToProp, mapDispatchToProps)(CreateOffer);

// import React from 'react';
// import {
//   View,
//   Text,
//   ScrollView,
//   SafeAreaView,
//   TouchableOpacity,
//   TextInput,
//   Image,
//   ImageBackground,
// } from 'react-native';
// import Header from '../../../components/header';
// import Button from '../../../components/buttons/generalbutton';
// import {Item} from 'native-base';
// const App = (props) => {
//   const Food = [
//     {
//       allinterests: ['Fitness', 'Buety', 'Dogs', 'Cats', 'Laundry'],
//       Ifitness: 'Fitness',
//       Ibeeauty: 'Beauty',
//       Idogs: 'Dogs',
//       Icats: 'Cats',
//       Ilaundary: 'Laundary',
//       Idetail:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ...',
//       Ipassword: '*******',
//       Ilocation: 'XYZ',
//     },
//   ];
//   return (
//     <SafeAreaView style={{flex: 1, backgroundColor: '#423050'}}>
//       <ImageBackground
//         source={require('../../../assets/images/home.png')}
//         style={{height: '100%', width: '100%'}}>
//         <View
//           style={{
//             backgroundColor: 'rgba(00,00,00, 0.8)',
//             flex: 1,
//             // paddingVertical: 20,
//           }}>
//           <Header
//             isTransparent={true}
//             leftArrow={true}
//             navigation={props.navigation}
//           />
//           {Food.map((item, i) => {
//             return (
//               <View
//                 style={{
//                   flex: 1,
//                   borderWidth: 0.5,
//                   // borderColor: 'gray',
//                   // elevation: 1,
//                   backgroundColor: 'red',
//                   overflow: 'hidden',
//                   width: '90%',
//                   alignSelf: 'center',
//                   borderRadius: 40,
//                   // alignItems: 'center',
//                   marginVertical: 15,
//                   backgroundColor: 'white',
//                 }}>
//                 <View
//                   style={{
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     paddingVertical: 25,
//                   }}>
//                   <Text
//                     style={{
//                       color: theme.secondaryColor,
//                       fontSize: 20,
//                       fontWeight: '700',
//                     }}>
//                     Post Offer
//                   </Text>
//                 </View>
//                 <View
//                   style={{
//                     height: 150,
//                     marginVertical: 10,
//                     borderWidth: 0.5,
//                     width: '80%',
//                     borderRadius: 15,
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     alignSelf: 'center',
//                   }}>
//                   <Text style={{color: 'gray', fontSize: 20}}>Image</Text>
//                 </View>
//                 <View
//                   style={{
//                     overflow: 'hidden',
//                     // width: '70%',
//                     marginVertical: 5,
//                   }}>
//                   <Button
//                     buttonText="Upload Image"
//                     width={'80%'}
//                     height={40}
//                     // onPress={() => props.navigation.navigate('createnewoffer')}
//                   />
//                   <View
//                     style={{
//                       width: '60%',
//                       height: 40,
//                       marginVertical: 10,
//                       borderWidth: 1,
//                     }}>
//                     <TextInput
//                       style={{
//                         width: '100%',
//                         borderBottomWidth: 1,
//                         height: '100%',
//                         borderRadius: 1,
//                         borderStyle: 'solid',
//                       }}
//                       placeholder="Title here"
//                       placeholderTextColor="black"
//                     />
//                   </View>
//                   <View>
//                     <Text style={{fontSize: 12}}> Title here</Text>
//                     <View style={{width: '80%', borderWidth: 1}}>
//                       <TextInput
//                         style={{
//                           width: '100%',
//                           borderBottomWidth: 1,
//                           borderRadius: 1,
//                           borderStyle: 'solid',
//                         }}
//                         placeholder="Title here"
//                         placeholderTextColor="black"
//                       />
//                     </View>
//                   </View>
//                 </View>
//               </View>
//             );
//           })}
//         </View>
//       </ImageBackground>
//     </SafeAreaView>
//   );
// };
// export default App;
