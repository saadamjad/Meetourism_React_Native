import {Icon} from 'native-base';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  AsyncStorage,
  ScrollView,
} from 'react-native';
import {Actions} from '../../../redux/actions/index';

import {connect} from 'react-redux';

import GlobalButton from '../../../components/buttons/generalbutton';
import {theme} from '../../../constants/theme';
import {ImageBackground} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import AnimatedLoader from '../../../components/loader';

let statusValue = 0;

function DetailOffer1({props, data, _onPress, status, token, DeleteOffer}) {
  const [state, setState] = useState({
    edit: false,
    loader: false,
    loaderMessage: 'Deleting..',
  });
  let userStatus = status == 'partner' ? true : false;
  useEffect(() => {}, []);
  // const _DeleteOffer = async () => {
  //   _ImageUploadApiCall();
  // };

  const _DeleteOffer = async () => {
    setState({...state, loader: true});
    const base_url = 'https://meetourism.deviyoinc.com/api/v1/offers';

    let formData = new FormData();

    formData.append('title', data?.title);
    formData.append('description', data?.offerDescription);
    formData.append('price', Number(data?.price));
    formData.append('feature_type', 'none');
    formData.append('offer_id', data?.id);
    formData.append('action', 'delete');

    let header = {
      headers: {
        'Content-Type': 'multipart/form-data; ',
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .post(base_url, formData, header)
      .then(async (Res) => {
        setState({...state, loader: false});
        props.navigation.navigate('SelectOffer');
        // console.log('Resss', Res.data.data);
      })
      .catch((err) => {
        console.log('Error', err?.response?.data);

        setState({...state, loader: false});
      });
  };
  return (
    <ImageBackground
      source={require('../../../assets/images/statusbg.png')}
      style={{height: '100%', width: '100%'}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(00,00,00,0.8)',
            // borderWidth: 1,
            // paddingVertical: 2,
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              paddingHorizontal: 12,
              alignSelf: 'flex-start',
            }}
            onPress={() => _onPress()}>
            <Icon
              type="AntDesign"
              name="arrowleft"
              style={{color: 'white', fontSize: 20}}
            />
          </TouchableOpacity>
          <View
            style={{
              // borderWidth: 1,
              width: '90%',
              paddingHorizontal: 15,
              paddingVertical: 20,
              alignSelf: 'center',
              backgroundColor: 'white',
              borderRadius: 40,
              height: '90%',
              overflow: 'hidden',
            }}>
            <View style={{width: '100%', borderWidth: 0, overflow: 'hidden'}}>
              <View
                style={{
                  // width: '100%',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  // borderWidth: 1,
                  height: 40,
                }}>
                <TextInput
                  value={data?.title}
                  editable={state.edit}
                  style={{
                    color: theme.secondaryColor,
                    fontSize: 24,
                    paddingHorizontal: 10,
                    padding: 0,
                    margin: 0,
                    borderBottomWidth: state.edit ? 1 : 0,
                    borderColor: 'red',
                    fontWeight: '700',

                    // width: '70%',
                  }}
                  maxLength={20}
                />
                {userStatus ? (
                  <TouchableOpacity
                    style={{
                      alignItems: 'flex-end',
                      justifyContent: 'center',
                      height: '100%',
                      width: 50,
                    }}
                    onPress={() => setState({...state, edit: !state.edit})}>
                    <FontAwesome5 name="edit" color="black" size={20} />
                  </TouchableOpacity>
                ) : null}
              </View>
              <Text
                style={{
                  color: 'black',
                  paddingBottom: 10,
                  fontSize: 16,
                  // fontWeight: '500',
                  marginTop: 20,
                  fontWeight: 'bold',
                }}>
                Description
              </Text>
              <TextInput
                editable={state.edit}
                value={data?.description}
                style={{
                  color: 'black',
                  paddingBottom: 25,
                  borderBottomWidth: state.edit ? 1 : 0,
                  borderColor: 'red',
                  margin: 0,
                  padding: 0,
                  fontSize: 14,
                }}
                maxLength={100}
              />

              <View style={{alignItems: 'flex-end'}}>
                <TextInput
                  value={data?.price + '$.only/-'}
                  style={{
                    color: theme.secondaryColor,
                    fontWeight: '700',
                    borderBottomWidth: state.edit ? 1 : 0,
                    borderColor: 'red',
                    fontSize: 15,
                    padding: 0,
                    margin: 0,
                    marginTop: 5,
                  }}
                />
              </View>
              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  height: 200,
                  paddingVertical: 20,
                }}>
                <Image
                  resizeMode="contain"
                  style={{height: '100%', width: '100%'}}
                  source={
                    data?.image_path
                      ? {uri: data?.image_path}
                      : require('../../../assets/images/burgerDrink.png')
                  }
                />
              </View>
            </View>
            <View
              style={{
                flex: 1,
                // borderWidth: 1,
                justifyContent: 'flex-end',
                paddingBottom: 30,
              }}>
              {/* {statusValue == 2 ? ( */}
              <View style={{flex: 1, borderWidth: 0, paddingHorizontal: 12}}>
                <Image
                  source={require('../../../assets/images/map.jpg')}
                  style={{height: '100%', width: '100%'}}
                  resizeMode="contain"
                />
              </View>
              <GlobalButton
                buttonText="Pay the Offer"
                height={50}
                width="66%"
                onPress={() => props.navigation.navigate('payment')}
              />

              <View style={{height: 10}}></View>
              {state.edit ? (
                <GlobalButton
                  buttonText="Delete this offer"
                  height={50}
                  width="66%"
                  onPress={() => DeleteOffer(data)}
                />
              ) : null}
            </View>
          </View>
        </View>
      </ScrollView>

      <AnimatedLoader
        status={state.loader}
        loaderMessage={state.loaderMessage}
      />
    </ImageBackground>
  );
}
// const mapStateToProp = (state) => ({
//   userData: state.reducers.userData,
//   image: state.reducers.images_Interests,

//   loader: state.reducers.loader,
// });
// const mapDispatchToProps = {
//   Signup: Actions.Signup,
//   DeleteOffer: Actions.DeleteOffer,
// };

// export default connect(mapStateToProp, mapDispatchToProps)(DetailOffer1);

export default DetailOffer1;
