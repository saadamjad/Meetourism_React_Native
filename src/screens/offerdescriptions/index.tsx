/* eslint-disable react-native/no-inline-styles */
import Icon from 'react-native-vector-icons/Feather';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  AsyncStorage,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {Actions} from '../../redux/actions/index';
import {FastImageComponent} from '../../components/fastimage';

import {connect} from 'react-redux';

import GlobalButton from '../../components/buttons/generalbutton';
import {theme} from '../../constants/theme';
import {ImageBackground} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import AnimatedLoader from '../../components/loader';
import {Payment} from '../paymentcomp';
import stripe from 'tipsi-stripe';
let publishableKey =
'pk_test_51JuwLLFZA0WXAOtjmYDqmu2ViVArHW7xNUjbhsB1x7ffGhdOPoAdNC9BsYFpEdq0fLJ2mRBeB36GpjlGWvusiNkS00Ku2zpKAS';
let scretKey =
'sk_test_51JuwLLFZA0WXAOtjb2zR1RHeT3nNiFDxcwkvMQE502KWOL8UknCQPPcrnv5euCfm5mst9verejrtGK2VZxlwaWzH0062oWbCcw';

function App(props) {
  const token = props.token;
  const offerDescriptions = props.alloffers;
  const index = props?.route?.params?.index; //ye back se index leke arha ha and iskay according data get kr rha ha
  const [state, setState] = useState({
    edit: false,
    offerDescription: [],
    loader: false,
    paymentLoader: false,
  });

  useEffect(() => {
    // console.log('offerDescriptions', offerDescriptions[index].id);
    let getData = offerDescriptions[index];
    setState({...state, offerDescription: getData});
  }, []);


  useEffect(() => {
    stripeusage();
  },[]);
  const stripeusage = async () => {
    stripe.setOptions({
      publishableKey: publishableKey,
      androidPayMode: 'test', // Android only
    });
  };

  const PaymentForm = async () => {
    let {username, city, address, full_name, country_id} = props.userData;
    const options = {
      requiredBillingAddressFields: 'full',
      prefilledInformation: {
        billingAddress: {
          name: full_name,
          line1: address,
          line2: '3',
          city: city,
          state: city,
          country: 'country_id',
          postalCode: '31217',
        },
      },
    };

    try {
      setState({...state, paymentLoader: true});
      const paymentApiResponse = await stripe.paymentRequestWithCardForm(
        options,
      );
      console.log('pay', paymentApiResponse);
      const {id} = paymentApiResponse;
      if (paymentApiResponse) {
        confirmOrder(id);
      }
    } catch (err) {
      console.log({err});
      setState({...state, paymentLoader: false});
    }
  };
  const confirmOrder = async (_id) => {
    let data = {
      partner_id: state.offerDescription?.user?.id,
      order_type: 'delivery',
      payment_type: 'cash',
      items: [
        {
          id: state.offerDescription?.id, //item id
          quantity: 1,
        },
      ],
    };
    console.log({data});
    try {
      await props.CreateOrder(data, token, props.navigation);
      setState({...state, paymentLoader: false});
    } catch (err) {
      console.log({err});
      setState({...state, paymentLoader: false});
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/images/statusbg.png')}
      style={{height: '100%', width: '100%'}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>

        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(00,00,00,0.8)',

            justifyContent: 'center',
          }}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              paddingHorizontal: 12,
              alignSelf: 'flex-start',
            }}
            onPress={() => props.navigation.goBack()}>
            <Icon
              type="AntDesign"
              name="arrow-left"
              style={{color: 'white', fontSize: 17}}
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
                  value={state?.offerDescription?.title}
                  editable={false}
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
                value={state?.offerDescription?.description}
                editable={false}
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

              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',

                  justifyContent: 'flex-end',
                  height: 50,
                  // width: 100,

                  alignSelf: 'flex-end',
                  borderBottomWidth: state.edit ? 1 : 0,
                  borderColor: theme.secondaryColor,
                }}>
                <TextInput
                  editable={false}
                  value={`${state?.offerDescription?.price}`}
                  style={{
                    color: theme.secondaryColor,
                    fontWeight: '700',

                    // borderBottomWidth: state.edit ? 1 : 0,
                    borderColor: 'red',
                    fontSize: 17,
                    height: '100%',
                    // padding: 0,
                    // margin: 0,
                    marginTop: 5,
                  }}
                />
                <Text
                  style={{
                    borderColor: 'red',
                    color: theme.secondaryColor,
                    // marginLeft: 5,

                    fontSize: 15,
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    fontWeight: '500',
                    paddingTop: 3,
                  }}>
                  $ {''}only/-
                </Text>
              </View>
              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  height: 130,

                  //   paddingVertical: 20,
                  //   borderWidth: 1,
                  overflow: 'hidden',
                }}>
                <FastImageComponent
                  resizeMode="contain"
                  style={{height: '100%', width: '100%'}}
                  source={
                    state?.offerDescription?.image_path
                      ? {uri: state.offerDescription?.image_path}
                      : require('../../assets/images/burgerDrink.png')
                  }
                />
              </View>
              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  height: 130,
                  paddingVertical: 5,
                  overflow: 'hidden',
                }}>
                <FastImageComponent
                  source={require('../../assets/images/map.jpg')}
                  style={{height: '100%', width: '100%'}}
                  resizeMode="cover"
                />
              </View>
            </View>

            <View
              style={{
                flex: 1,
                // borderWidth: 1,
                justifyContent: 'flex-end',
                // paddingBottom: 30,
                // backgroundColor: 'blue',
                paddingVertical: 10,
              }}>
              {/* {statusValue == 2 ? ( */}

              <GlobalButton
                buttonText="Pay the Offer"
                height={50}
                width="66%"
                loader={state.paymentLoader}
                // onPress={() => props.navigation.navigate('payment')}
                onPress={() => PaymentForm()}
              />
            </View>
          </View>
        </View>
      </ScrollView>

      <AnimatedLoader status={state.loader} loaderMessage={'Deleting...'} />
    </ImageBackground>
  );
}
const mapStateToProp = (state) => ({
  userData: state.reducers.userData,
  alloffers: state.reducers.alloffers,
  token: state.reducers.token,

  loader: state.reducers.loader,
});
const mapDispatchToProps = {
  Signup: Actions.Signup,
  CreateOrder: Actions.CreateOrder,
};

export default connect(mapStateToProp, mapDispatchToProps)(App);
