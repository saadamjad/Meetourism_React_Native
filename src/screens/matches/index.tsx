import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Header from '../../components/header';
import GlobalButton from '../../components/buttons/generalbutton';

const App = (props) => {
  const [buttonHide, setButtonHide] = useState(false);
  const [offer, setOffers] = useState([
    {
      image: '../../assets/images/burgerBackground.png',
      offerName: 'whoper Feast',
    },
    {
      image: '../../assets/images/burgerBackground.png',
      offerName: 'whoper Feast',
    },
    {
      image: '../../assets/images/burgerBackground.png',
      offerName: 'whoper Feast',
    },
    {
      image: '../../assets/images/burgerBackground.png',
      offerName: 'whoper Feast',
    },
    {
      image: '../../assets/images/burgerBackground.png',
      offerName: 'whoper Feast',
    },
  ]);

  useEffect(() => {
    console.log(
      '==================================================================',
    );
    // console.log('props?.route?.params?.dashboard', props?.route);

    if (props?.route?.params) {
      console.log('andr agyaa ha ', props?.route?.params);
      setButtonHide(true);
    }
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#241332',
      }}>
      <Header
        leftArrow={true}
        searchIcon={true}
        // headerText="MATCHES"
        height={40}
        navigation={props.navigation}
      />
      <View
        style={{
          // height: 100,
          backgroundColor: 'white',
          // paddingVertical: 7,
          paddingBottom: 15,
          width: '100%',
          borderWidth: 0,
          marginBottom: 2,
        }}>
        <ScrollView contentContainerStyle={{flexGrow: 1}} horizontal={true}>
          {offer.map((item, i) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('detailoffer');
                }}
                style={{alignItems: 'center', marginHorizontal: 10}}>
                <View
                  style={{
                    height: 55,
                    width: 85,
                    borderRadius: 40,
                    borderWidth: 1,
                    overflow: 'hidden',
                    borderColor: 'red',
                    backgroundColor: 'white',
                  }}>
                  <Image
                    source={require('../../assets/images/burgerBackground.png')}
                    style={{height: '100%', width: '100%'}}
                    resizeMode="cover"
                  />
                </View>
                <Text
                  style={{
                    fontSize: 10,
                    color: '#0A0A0A',
                    marginTop: 5,
                    fontWeight: 'bold',
                  }}>
                  Whopper Feast
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      <ScrollView>
        {offer.map((item, i) => {
          return (
            <View
              style={{
                flex: 1,
                paddingVertical: 15,
                borderBottomWidth: 1.5,
                borderColor: '#707070',
                backgroundColor: '#423050',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  borderRadius: 30,
                  width: '88%',
                  alignSelf: 'center',
                  backgroundColor: 'white',
                  paddingVertical: 10,
                  marginVertical: 10,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,

                  elevation: 5,
                }}>
                <Text
                  style={{
                    color: '#FF0606',
                    fontSize: 26,
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  {' '}
                  See Your Match{' '}
                </Text>
                <Text
                  style={{
                    color: '#707070',
                    marginVertical: 10,
                    fontSize: 14,
                    textAlign: 'center',
                    marginTop: 10,
                    lineHeight: 20,
                  }}>
                  {' '}
                  Mutual sympathy. Do not waste {'\n'} and write to Him
                </Text>

                <View style={{borderWidth: 0, width: '100%'}}>
                  <Image
                    source={require('../../assets/icons/group.png')}
                    style={{height: 240, width: '100%'}}
                    resizeMode="cover"
                  />
                </View>
                <View style={{paddingHorizontal: 25, marginBottom: 10}}>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: 'bold',
                      marginBottom: 10,
                    }}>
                    Description{' '}
                  </Text>
                  <Text style={{fontSize: 12, color: '#707070'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris ...{' '}
                  </Text>
                </View>

                {buttonHide ? (
                  <View style={{overflow: 'hidden'}}>
                    <GlobalButton
                      onPress={() =>
                        props.navigation.navigate('matchprofile', {
                          buttonHide: true,
                        })
                      }
                      width="48%"
                      buttonText="Profile"
                      height={40}
                    />
                  </View>
                ) : (
                  <View style={{overflow: 'hidden'}}>
                    <GlobalButton
                      onPress={() => props.navigation.navigate('matchprofile')}
                      width="48%"
                      buttonText="Profile"
                      height={40}
                    />
                  </View>
                )}

                <TouchableOpacity
                  onPress={() => props.navigation.navigate('search')}
                  style={{
                    width: '60%',
                    alignItems: 'center',
                    alignSelf: 'center',
                  }}>
                  <Text style={{fontSize: 15, marginVertical: 5}}>
                    {' '}
                    Back to search
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
export default App;
