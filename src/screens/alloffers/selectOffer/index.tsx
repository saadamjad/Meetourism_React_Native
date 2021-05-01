import {Icon} from 'native-base';
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
import {ScrollView} from 'react-native-gesture-handler';

function SelectOffer(props) {
  const [filterItems, setFilterItems] = useState([
    {
      name: 'SELECT MINIMUM PRICE',
    },
    {
      name: 'SELECT MAXIMUM PRICE',
    },
  ]);
  const [state, setState] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [overlay, setOpenOverlay] = useState(true);
  return state ? (
    <LatestOffer
      navigation={props.navigation}
      _onPress={() => setState(false)}
    />
  ) : (
    <CustomView bg={theme.textColor.whiteColor} scroll>
      <Longheader
        headerText="Select Offer"
        filterIcon
        OpenFilter={() => setShowFilter(true)}
        alignItemsText="center"
        backgroundColor={theme.textColor.whiteColor}
        leftArrow={true}
        paddingLeft={10}
        navigation={props.navigation}
      />
      <View
        style={{
          flex: 1,
          // marginTop: 2,
          // justifyContent: 'center',
          alignItems: 'center',
        }}>
        {[0, 1, 2, 3].map((val) => (
          <TouchableOpacity
            onPress={() => {
              // navigate to screen there
              setState(true);
              // props.navigation.navigate('dealoffer');
            }}
            activeOpacity={1}
            style={{width: '100%', height: 260, marginVertical: 10}}>
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
              <ImageBackground
                resizeMode="cover"
                style={{
                  height: '100%',
                  width: '100%',
                  justifyContent: 'flex-end',
                }}
                source={require('../../../assets/images/download.jpg')}>
                {/* <View
                  style={{
                    flexDirection: 'row',
                    height: '25%',
                    paddingLeft: 35,
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text
                      style={{
                        color: theme.textColor.whiteColor,
                        fontSize: 14,
                      }}>
                      256
                    </Text>
                    <Icon
                      style={{
                        color: theme.textColor.whiteColor,
                        fontSize: 18,
                        marginLeft: 10,
                      }}
                      type="MaterialIcons"
                      name="chat-bubble-outline"
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginLeft: 20,
                    }}>
                    <Text
                      style={{
                        color: theme.textColor.whiteColor,
                        fontSize: 14,
                      }}>
                      256
                    </Text>
                    <Icon
                      style={{
                        color: theme.textColor.whiteColor,
                        fontSize: 18,
                        marginLeft: 10,
                      }}
                      type="AntDesign"
                      name="hearto"
                    />
                  </View>
                </View>
            */}
              </ImageBackground>
            </View>

            <View
              style={{
                width: '85%',
                alignSelf: 'center',
                flexDirection: 'row',
                marginTop: 20,
              }}>
              <Image source={require('../../../assets/images/avatar.png')} />
              <View style={{marginLeft: 20}}>
                <Text
                  style={{
                    color: theme.textColor.blackColor,
                    fontWeight: '800',
                  }}>
                  Fast Food
                </Text>
                <Text style={{color: theme.textColor.greyColor, fontSize: 13}}>
                  8 Nov
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
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
        visible={showFilter}>
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
                          <Icon
                            name={
                              items.open
                                ? 'arrow-circle-up'
                                : 'arrow-circle-down'
                            }
                            type="MaterialIcons"
                            style={{fontSize: 30, color: 'black'}}
                          />
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
                            {[
                              '100-200',
                              '300-500',
                              '1000-2000',
                              '3000-10000',
                            ].map((item, i) => {
                              return (
                                <TouchableOpacity
                                  activeOpacity={0.8}
                                  style={{
                                    flexDirection: 'row',
                                    paddingVertical: 20,
                                    alignItems: 'center',
                                    paddingLeft: 20,
                                    borderBottomWidth: 0.5,
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
                    onPress={() => setShowFilter(false)}
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
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </Overlay>
    </CustomView>
  );
}

export default SelectOffer;
