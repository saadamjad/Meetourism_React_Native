import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import Slider from '../../../src/components/slider';
const App = (props) => {
  const [allStatus, setStatus] = useState([
    {
      name: 'you',
      image: require('../../assets/icons/row.png'),
    },
    {
      name: 'user 1 ',
      image: require('../../assets/icons/row.png'),
    },
    {
      name: 'user 2 ',
      image: require('../../assets/icons/row.png'),
    },
    {
      name: 'user 3',
      image: require('../../assets/icons/row.png'),
    },
    {
      name: 'user 4',

      image: require('../../assets/icons/row.png'),
    },
    {
      name: 'user 5',

      image: require('../../assets/icons/row.png'),
    },
    {
      name: 'user 6',
      image: require('../../assets/icons/row.png'),
    },
  ]);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#352641',
      }}>
      <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{
            flex: 0.4,
            borderWidth: 1,
            borderBottomLeftRadius: 80,
            overflow: 'hidden',
          }}>
          <ImageBackground
            source={require('../../assets/icons/girls.png')}
            style={{height: '100%', width: '100%', borderBottomLeftRadius: 80}}
            resizeMode="cover">
            <View
              style={{
                height: 100,
                backgroundColor: 'white',
                // borderWidth:1,
                borderBottomLeftRadius: 90,
                flexDirection: 'row',
                overflow: 'hidden',
                elevation: 1,
              }}>
              <TouchableOpacity
                style={{
                  width: '20%',
                  paddingBottom: 20,
                  borderWidth: 0,
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../../assets/icons/drawer.png')}
                  style={{height: 30, width: 30, tintColor: '#ED1C24'}}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  borderWidth: 0,
                  backgroundColor: 'white',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <ScrollView horizontal={true}>
                  {allStatus.map((item, i) => {
                    return (
                      <View style={{alignItems: 'center'}}>
                        <TouchableOpacity
                          style={{
                            height: 50,
                            overflow: 'hidden',
                            width: 50,
                            borderWidth: 0,
                            borderRadius: 50,
                            marginHorizontal: 15,
                          }}>
                          <Image
                            source={item.image}
                            style={{height: '100%', width: '100%'}}
                            resizeMode="contain"
                          />
                        </TouchableOpacity>
                        <Text style={{color: '#707070', fontSize: 12}}>
                          {' '}
                          {item.name}{' '}
                        </Text>
                      </View>
                    );
                  })}
                </ScrollView>
              </View>
            </View>

            <View
              style={{
                alignItems: 'flex-end',
                borderWidth: 0,
                flex: 1,
                paddingLeft: 45,
                paddingBottom: 20,
                flexDirection: 'row',
              }}>
              <View style={{borderWidth: 0, height: 50, flexDirection: 'row'}}>
                <View style={{width: '75%', borderWidth: 0}}>
                  <Text style={{fontSize: 13, color: 'white'}}> meetups </Text>
                  <Text style={{fontSize: 23, color: 'white'}}>
                    {' '}
                    Lady in the Blue{' '}
                  </Text>
                </View>
                <View
                  style={{
                    width: '25%',
                    height: '100%',
                    borderWidth: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../../assets/icons/edit.png')}
                    resizeMode="contain"
                    style={{
                      height: 30,
                      width: 30,
                      borderWidth: 0,
                      borderRadius: 30,
                    }}
                  />
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={{flex: 0.6, borderWidth: 0}}>
          <View
            style={{
              height: 120,
              borderWidth: 0,
              flexDirection: 'row',
              borderBottomLeftRadius: 40,
              shadowColor: 'white',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              borderColor: 'white',
              elevation: 1,
            }}>
            <TouchableOpacity
              style={{
                width: '50%',
                borderWidth: 0,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => props.navigation.navigate('Chat')}>
              <Feather name="mail" size={40} color={'white'} />
              <Text style={{color: 'white', fontSize: 12}}> Messages </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '50%',
                borderWidth: 0,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => props.navigation.navigate('Notification')}>
              {/* <Feather name="mail" size={40} color={'white'}/> */}
              <Image
                source={require('../../assets/icons/alerts.png')}
                style={{height: 40, width: 40}}
                resizeMode="contain"
              />
              <Text style={{color: 'white', fontSize: 12}}>
                {' '}
                Notofications{' '}
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              height: 120,
              borderWidth: 0,
              flexDirection: 'row',
              borderBottomLeftRadius: 40,
              shadowColor: 'white',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              borderColor: 'white',
              elevation: 1,
              paddingTop: 20,
              paddingLeft: 20,
            }}>
            <View>
              <Text style={{color: 'white', fontSize: 15}}>About Me</Text>
              <Text style={{color: '#9599B3', fontSize: 12, marginTop: 2}}>
                Tell us about you!!
              </Text>
            </View>
            <View style={{flex: 1, borderWidth: 0, alignItems: 'flex-end'}}>
              <Image
                source={require('../../assets/icons/edit.png')}
                resizeMode="contain"
                style={{
                  height: 30,
                  width: 30,
                  borderWidth: 0,
                  borderRadius: 30,
                }}
              />
            </View>
          </View>

          <View style={{paddingHorizontal: 10}}>
            <Text style={{color: 'white', fontSize: 14, marginVertical: 10}}>
              {' '}
              Langauge{' '}
            </Text>

            <View>
              <Slider color="white" />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default App;
