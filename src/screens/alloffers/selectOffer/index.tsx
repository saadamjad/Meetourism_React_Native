import Icon from 'react-native-vector-icons/Feather';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import GlobalButton from '../../../components/buttons/generalbutton';
import CustomView from '../../../components/customView';
import Longheader from '../../../components/header/longheader';
import {theme} from '../../../constants/theme';
import Successful from '../../successful';
import LatestOffer from '../../alloffers/detailsOffer1';
import Overlay from '../../../components/overlays';
import DropDownPicker from 'react-native-dropdown-picker';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {Actions} from '../../../redux/actions';
import {connect} from 'react-redux';
import AnimatedLoader from '../../../components/loader';
import moment from 'moment';
import axios from 'axios';
import {FastImageComponent} from '../../../components/fastimage';
import stripe from 'tipsi-stripe';
import Ionicons from 'react-native-vector-icons/Ionicons';


function SelectOffer(props) {
  // const profileImage = props.userData
  //   ? props?.userData?.images[0]?.image_path
  //   : null;

  const token = props?.token;
  const status = props?.status;
  const orderData = props?.orderData;
  const userData = props?.userData;

  const [state, setState] = useState({
    showOfferDetails: false,
    allOffers: [],
    index: 0,
    loader: true,
    // profileImage: userData?.images[0]?.image_path,
    minimumPrice: '',
    maximumPrice: '',
    showFilter: false,
    loaderMessage: 'Loading...',
    notFoundMessage: '',
    offerName: '',
  });

  const [filterItems, setFilterItems] = useState([
    {
      name: 'SELECT MINIMUM PRICE',
      value: ['0', '200', '300'],
    },
    {
      name: 'SELECT MAXIMUM PRICE',
      value: ['400', '600', '1000'],
    },
  ]);

  const [overlay, setOpenOverlay] = useState();
  useEffect(() => {
    // q=o&price[min]=1&price[max]=1000&start=0&limit=20
    // const unsubscribe = props.navigation.addListener('focus', () => {
    //   // The screen is focused
    //   setState({...state, showOfferDetails: false});

    //   console.log('focuss running===========================================');
    //   _GetAllOffersData();

    //   // Call any action
    // });

    _GetAllOffersData();
    // return unsubscribe;
  }, []);
  const _GetAllOffersData = async () => {
    let id = userData?.id;
    console.log('orderdata===?');

    let value = await props.GetAllOffers(id, token, status);
    if (value) {
      setState({
        ...state,
        allOffers: value,
        loader: false,
        showOfferDetails: false,
      });
    } else {
      setState({
        ...state,
        allOffers: [],
        showOfferDetails: false,
        loader: false,
        notFoundMessage: 'No offers found',
      });
    }
  };

 

  const ApplyFilter = async (value, index) => {
    setState({...state, loader: true, loaderMessage: 'searching'});

    let data = `q=${state.offerName}&price[min]=${state.minimumPrice}&price[max]=${state.maximumPrice}`;
    let filterValues = await props.ApplyFilter(data, token, props.navigation);

    filterValues
      ? setState({
          ...state,
          loader: props.loader,
          showFilter: false,
          allOffers: filterValues,
          notFoundMessage:
            filterValues?.length > 0
              ? ''
              : 'No Offers Found Related to this search',
        })
      : setState({
          ...state,
          loader: false,
          showFilter: false,
          allOffers: [],
          notFoundMessage: 'No Offers Found Related to this search',
        });
  };
  const _DeleteOffer = async (data) => {
    console.log('gello');
    setState({...state, loader: true});
    const base_url = 'https://dev.meetourism.com/api/v1//offers';

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
        console.log('response deleted', Res);
        await setState({
          ...state,
          loader: false,
          showOfferDetails: false,
        });

        _GetAllOffersData();
      })
      .catch((err) => {
        console.log('Error', err?.response?.data);

        setState({...state, loader: false});
      });
  };

  const UpdateOfferData = (param) => {
    console.log(param?.id);
    const base_url = 'https://dev.meetourism.com/api/v1//offers';

    let formData = new FormData();

    formData.append('title', param?.title);
    formData.append('description', param?.description);
    formData.append('price', Number(param?.price));
    formData.append('feature_type', 'none');
    formData.append('offer_id', param?.id);

    let header = {
      headers: {
        'Content-Type': 'multipart/form-data; ',
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .post(base_url, formData, header)
      .then(async (Res) => {
        console.log('response update', Res);

        _GetAllOffersData();
      })
      .catch((err) => {
        console.log('Error', err?.response?.data);
      });
  };

  let publishableKey =
  'pk_test_51JuwLLFZA0WXAOtjmYDqmu2ViVArHW7xNUjbhsB1x7ffGhdOPoAdNC9BsYFpEdq0fLJ2mRBeB36GpjlGWvusiNkS00Ku2zpKAS';
  let scretKey =
  'sk_test_51JuwLLFZA0WXAOtjb2zR1RHeT3nNiFDxcwkvMQE502KWOL8UknCQPPcrnv5euCfm5mst9verejrtGK2VZxlwaWzH0062oWbCcw';
  
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
    console.log("======testing",state?.allOffers[state.index].user?.id)
    let data = {
      partner_id: state?.allOffers[state.index].user?.id,
      // partner_id: state.offerDescription?.user?.id,
      order_type: 'delivery',
      payment_type: 'cash',
      items: [
        {
          id: state?.allOffers[state.index]?.id, //item id
          // id: state.offerDescription?.id, //item id
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

  useEffect(() => {
    stripeusage();
  },[]);
  const stripeusage = async () => {
    stripe.setOptions({
      publishableKey: publishableKey,
      androidPayMode: 'test', // Android only
    });
  };
  
  return state.showOfferDetails ? (
    <LatestOffer
      loader={state?.loader}
      UpdateOfferData={(data) => UpdateOfferData(data)}
      status={status}
      props={{...props}}
      DeleteOffer={(data) => _DeleteOffer(data)}
      token={token}
      // SaveOrderData={(data) => props.SaveOrderData(data, props.navigation)}
      SaveOrderData={(data) => PaymentForm()}
      data={state?.allOffers[state.index]}
      _onPress={() => setState({...state, showOfferDetails: false})}
    />
  ) : (
    <>
      <Longheader
        headerText="Select Offers"
        filterIcon={true}
        OpenFilter={() => setState({...state, showFilter: true})}
        alignItemsText="center"
        backgroundColor={theme.textColor.whiteColor}
        leftArrow={true}
        paddingLeft={10}
        navigation={props.navigation}
      />
      <CustomView bg={theme.textColor.whiteColor} scroll>
        <View
          style={{
            flex: 1,

            alignItems: 'center',
          }}>
          {state.allOffers &&
            state.allOffers.map((val, i) => (
              // console.log('profile_url', val?.user?.profile_url),
              <TouchableOpacity
                onPress={() => {
                  setState({...state, showOfferDetails: true, index: i});
                }}
                activeOpacity={1}
                style={{width: '100%', marginVertical: 10}}>
                <View
                  style={{
                    height: 200,
                    width: '90%',
                    borderTopRightRadius: 120,
                    borderBottomRightRadius: 120,
                    justifyContent: 'flex-end',
                    overflow: 'hidden',
                    backgroundColor: 'white',
                    elevation: 2,
                  }}>
                  <FastImageComponent
                    resizeMode="cover"
                    style={{
                      height: '100%',
                      width: '100%',
                      justifyContent: 'flex-end',
                    }}
                    source={
                      val.image_path
                        ? {
                            uri: `${val.image_path}`,
                          }
                        : require('../../../assets/images/download.jpg')
                    }
                  />

                  {/* </ImageBackground> */}
                </View>

                <View
                  style={{
                    width: '85%',
                    alignSelf: 'center',
                    flexDirection: 'row',
                    marginTop: 20,
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      height: 40,
                      width: 40,
                      borderRadius: 40,
                      overflow: 'hidden',
                      // borderWidth: ,
                      elevation: 1,
                      backgroundColor: 'white',
                    }}>
                    {/* <Image
                      style={{height: '100%', width: '100%'}}
                      resizeMode="cover"
                      source={
                        val?.user?.profile_url
                          ? {uri: val?.user?.profile_url}
                          : require('../../../assets/images/avatar.png')
                      }
                    /> */}

                    <FastImageComponent
                      style={{height: '100%', width: '100%'}}
                      resizeMode="cover"
                      source={
                        val?.user?.profile_url
                          ? {uri: val?.user?.profile_url}
                          : require('../../../assets/images/avatar.png')
                      }
                    />
                  </View>
                  <View style={{marginLeft: 20}}>
                    <Text
                      style={{
                        color: theme.textColor.blackColor,
                        fontWeight: '800',
                      }}>
                      {val.title}
                    </Text>
                    <Text
                      style={{
                        color: theme.textColor.greyColor,
                        fontSize: 13,
                      }}>
                      {moment(val.created_at).format('DD-MM-YYYY')}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          {state.allOffers.length == 0 && !state.loader ? (
            <Text style={{color: 'red', fontSize: 15}}>
              {state.notFoundMessage || 'Sorry No offers found'}
            </Text>
          ) : null}
        </View>
        <Overlay
          overlayStyle={{
            backgroundColor: 'blue',
            width: '100%',
            height: '100%',
          }}
          onBackdropPress={() => {
            setOpenOverlay(false);
          }}
          visible={state.showFilter}>
          <View
            style={{
              // flex: 1,
              justifyContent: 'center',
              width: '96%',
              height: '90%',

              borderRadius: 20,
              overflow: 'hidden',
              alignSelf: 'center',
            }}>
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 20,

                paddingVertical: 20,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 20,
                  color: 'red',
                  marginTop: 15,
                  fontWeight: 'bold',
                  letterSpacing: 1,
                }}>
                Apply Price Filters
              </Text>
              <ScrollView showsVerticalScrollIndicator={false}>
                <TextInput
                  placeholder="Search  Offer Name"
                  style={{
                    height: 50,
                    fontSize: 20,
                    width: '90%',
                    alignSelf: 'center',
                    borderBottomWidth: 0.6,
                    paddingHorizontal: 10,
                    marginVertical: 15,
                  }}
                  onChangeText={(text) =>
                    setState({
                      ...state,
                      offerName: text.replace(/^\s+|.\s+$/gm, ''),
                    })
                  }
                />
                <View
                  style={{
                    marginHorizontal: 10,
                  }}>
                  {filterItems.map((items, index) => {
                    return (
                      <>
                        <TouchableOpacity
                          activeOpacity={0.8}
                          onPress={() => {
                            let array = filterItems.map((val, i) => {
                              if (i == index) {
                                return {...val, open: !val.open};
                              } else {
                                return {...val, open: false};
                              }
                            });
                            setFilterItems(array);
                          }}
                          style={{
                            height: 50,
                            width: '100%',
                            borderWidth: 0.6,
                            paddingHorizontal: 10,
                            marginVertical: 15,

                            flexDirection: 'row',
                          }}>
                          <View
                            style={{
                              height: '100%',
                              justifyContent: 'center',
                              flex: 1,
                            }}>
                            <Text style={{fontSize: 20, color: 'black'}}>
                              {items.name}
                              {'  |  '}
                              {index == 0
                                ? state.minimumPrice
                                : state.maximumPrice}
                            </Text>
                          </View>
                          <View
                            style={{
                              height: '100%',
                              // flex: 1,
                              width: 50,
                              justifyContent: 'center',
                              alignItems: 'flex-end',
                            }}>
                            {/* <Ionicons
                              name={
                                items.open
                                  ? 'arrow-circle-up'
                                  : 'arrow-circle-down'
                              }
                              type="MaterialIcons"
                              style={{fontSize: 30, color: 'black'}}
                            /> */}
            <Ionicons name={
                                items.open
                                  ? 'arrow-up'
                                  : 'arrow-down'
                              } size={20} color={'#423050'} />

                          </View>
                        </TouchableOpacity>
                        {items.open ? (
                          <View
                            style={{
                              // height: 100,
                              borderWidth: 1,
                              width: '100%',
                              height: 200,
                              marginVertical: 15,
                            }}>
                            <ScrollView nestedScrollEnabled={true}>
                              {items.value.map((item, i) => {
                                return (
                                  <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={{
                                      flexDirection: 'row',
                                      paddingVertical: 20,
                                      alignItems: 'center',
                                      paddingLeft: 20,
                                      borderBottomWidth: 0.5,
                                    }}
                                    onPress={async () => {
                                      (await index) == 0
                                        ? setState({
                                            ...state,
                                            minimumPrice: item,
                                          })
                                        : setState({
                                            ...state,
                                            maximumPrice: item,
                                          });
                                      let array = filterItems.map((val, i) => {
                                        if (i == index) {
                                          return {...val, open: !val.open};
                                        } else {
                                          return {...val, open: false};
                                        }
                                      });
                                      setFilterItems(array);
                                    }}>
                                    <View
                                      style={{
                                        height: 16,
                                        width: 16,
                                        borderRadius: 16,
                                        borderWidth: 1,
                                        backgroundColor: 'black',
                                      }}></View>
                                    <Text
                                      style={{
                                        color: 'black',
                                        fontSize: 16,
                                        marginLeft: 10,
                                      }}>
                                      {item}
                                    </Text>
                                  </TouchableOpacity>
                                );
                              })}
                            </ScrollView>
                          </View>
                        ) : null}
                      </>
                    );
                  })}

                  <View
                    style={{
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                      flex: 1,
                      // height: '50%',
                      paddingVertical: 40,
                    }}>
                    <TouchableOpacity
                      activeOpacity={0.75}
                      onPress={() => ApplyFilter()}
                      style={{
                        backgroundColor: theme.secondaryColor,
                        width: '80%',
                        height: 50,
                        borderRadius: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          color: theme.textColor.whiteColor,
                          fontSize: 20,
                          letterSpacing: 2,
                        }}>
                        APPLY
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      activeOpacity={0.75}
                      onPress={() => setState({...state, showFilter: false})}
                      style={{
                        backgroundColor: theme.secondaryColor,
                        width: '80%',
                        height: 50,
                        marginTop: 20,
                        borderRadius: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          color: theme.textColor.whiteColor,
                          fontSize: 20,
                          letterSpacing: 2,
                        }}>
                        Cancel
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        </Overlay>

        <AnimatedLoader
          status={state.loader}
          loaderMessage={state.loaderMessage}
        />
      </CustomView>
    </>
  );
}

const mapStateToProps = (state) => ({
  loader: state.reducers.loader,
  token: state.reducers.token,
  status: state.reducers.status,
  orderData: state.reducers.orderData,
  userData: state.reducers.userData,
  image: state.reducers.images_Interests,
});
const mapDispatchToProps = {
  // Signup: Actions.Signup,
  GetAllOffers: Actions.GetAllOffers,
  ApplyFilter: Actions.ApplyFilter,
  DeleteOffer: Actions.DeleteOffer,
  SaveOrderData: Actions.SaveOrderData,
  CreateOrder: Actions.CreateOrder,

};

export default connect(mapStateToProps, mapDispatchToProps)(SelectOffer);
