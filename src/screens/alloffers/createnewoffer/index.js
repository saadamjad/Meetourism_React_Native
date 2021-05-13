import {Form, Icon} from 'native-base';
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import GlobalButton from '../../../components/buttons/generalbutton';
// import CustomView from '../../../components/customView';
// import App from '../../../../components/header';
import Header from '../../../components/header';

import {theme} from '../../../constants/theme';
import {Actions} from '../../../redux/actions/index';
import ImagePicker from '../../../globalfunctions/imagepicker';

import {connect} from 'react-redux';
import {ProfileStack} from '../../../navigations/stacknavigation';
import Toast from '../../../components/toastmessage';

function CreateOffer(props) {
  const token = props.token;
  console.log('token===', token);
  const [state, setState] = useState({
    images: '',
    title: 'ssss',
    offerDescription: 'ss',
    price: '10',
  });

  const _AddOffer = () => {
    let data = {
      image: 'https://meetourism.deviyoinc.com/images/user_demo.png',

      title: 'hello  offer',
      description: 'nice offer in town',
      price: 100,
      feature_type: 'none',
    };
    if (
      state.title !== '' ||
      state.offerDescription !== '' ||
      state.price !== ''
    ) {
      props.AddOffers(data, props.navigation);
    } else {
      Toast('Error', 'PLease Fill All Required Information', 'error');
    }
  };
  const IMAGEUPLOAD = async () => {
    let value = ImagePicker();
    console.log('Value retuuunnnn+', value);
  };
  return (
    <View
      style={{
        flex: 1,
      }}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <ImageBackground
          source={require('../../../assets/images/statusbg.png')}
          style={{height: '100%', width: '100%'}}>
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
                    let value = await ImagePicker();
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
              <View style={{width: '80%'}}>
                <View style={{width: '100%', height: 40, marginVertical: 10}}>
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
                    onChangeText={(text) => setState({...state, title: text})}
                  />
                </View>
                <View style={{width: '100%', height: 40, marginVertical: 10}}>
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
                      setState({...state, offerDescription: text})
                    }
                  />
                </View>
                <View style={{width: '60%', height: 40, marginVertical: 10}}>
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
                    onChangeText={(text) => setState({...state, price: text})}
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
}
const mapStateToProp = (state) => ({
  userData: state.reducers.userData,
  image: state.reducers.images_Interests,
  token: state.reducers.token,

  loader: state.reducers.loader,
});
const mapDispatchToProps = {
  AddOffers: Actions.AddOffers,
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