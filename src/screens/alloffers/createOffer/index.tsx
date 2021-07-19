import Icon from 'react-native-vector-icons/Feather';
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import GlobalButton from '../../../components/buttons/generalbutton';
import CustomView from '../../../components/customView';
import App from '../../../components/header';
import {theme} from '../../../constants/theme';
import Overlay from '../../../components/overlays';

function CreateOffer(props) {
  const [offerPosted, setOfferPosted] = useState(false);
  const _Successfull = () => {
    return (
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
              paddingTop: 40,
              paddingBottom: 20,
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
          <GlobalButton
            buttonText="Create new offer"
            height={40}
            onPress={() => props.navigation.navigate('partnerhome')}
          />
          <GlobalButton
            buttonText="Dashboard"
            height={40}
            onPress={() => props.navigation.navigate('partnerhome')}
          />
        </View>
      </View>
    );
  };

  const _PostOffer = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <View
          style={{
            width: '90%',
            backgroundColor: 'white',
            borderRadius: 45,
            paddingVertical: 50,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: theme.secondaryColor,
              paddingBottom: 25,
              fontSize: 24,
              fontWeight: '700',
            }}>
            Post Offer
          </Text>
          <View
            style={{
              width: '80%',
              borderWidth: 1,
              height: 200,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 35,
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
            <GlobalButton height={40} width="100%" buttonText="Upload Image" />
          </View>
          <View style={{width: '80%'}}>
            <View style={{width: '60%', height: 40, marginVertical: 10}}>
              <TextInput
                style={{
                  width: '100%',
                  borderBottomWidth: 1,
                  height: '100%',
                  borderRadius: 1,
                  borderStyle: 'solid',
                }}
                placeholder="Title here"
                placeholderTextColor="black"
              />
            </View>
            <View style={{width: '60%', height: 40, marginVertical: 10}}>
              <TextInput
                style={{
                  width: '100%',
                  borderBottomWidth: 1,
                  height: '100%',
                  borderRadius: 1,
                  borderStyle: 'solid',
                }}
                placeholder="Write Description Here"
                placeholderTextColor="black"
              />
            </View>
            <View style={{width: '60%', height: 40, marginVertical: 10}}>
              <TextInput
                style={{
                  width: '100%',
                  borderBottomWidth: 1,
                  height: '100%',
                  borderRadius: 1,
                  borderStyle: 'solid',
                }}
                placeholder="Enter Price here"
                placeholderTextColor="black"
              />
            </View>
            <View
              style={{
                width: '100%',
                height: 40,
                marginVertical: 10,
                borderBottomWidth: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <TextInput
                style={{
                  width: '90%',

                  height: '100%',
                  borderRadius: 1,
                  fontSize: 18,
                  borderStyle: 'solid',
                }}
                placeholder="Upload to"
                placeholderTextColor={theme.textColor.greyColor}
              />
              <View style={{width: '10%', alignItems: 'center'}}>
                <Icon
                  style={{fontSize: 10}}
                  type="AntDesign"
                  name="caretdown"
                />
              </View>
            </View>
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
              buttonText="Save & upload"
              onPress={
                () => {
                  setOfferPosted(true);
                }
                // props.navigation.navigate('offerUploadedSuccessfully')
              }
            />
          </View>
        </View>
      </View>
    );
  };
  return offerPosted ? <_Successfull /> : <_PostOffer />;
}
export default CreateOffer;
