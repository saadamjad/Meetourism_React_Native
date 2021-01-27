import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Slider from '../../../src/components/slider';
const App = (props) => {
  const [allStatus, setStatus] = useState([
    {
      name: 'you',
      image: require('../../assets/icons/row.png'),
    },
    {
      name: 'status ',
      navigation: 'Status',
      image: <FontAwesome name="user" size={20} color="black" />,
    },
    {
      name: 'Add more',
      image: <Feather name="plus" size={20} color="gray" />,
    },
  ]);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#352641',
      }}>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
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
                height: 125,
                backgroundColor: 'white',
                // borderWidth:1,
                borderBottomLeftRadius: 85,
                flexDirection: 'row',
                overflow: 'hidden',
                // elevation: 1,
                // borderWidth: 1,
              }}>
              <TouchableOpacity
                style={{
                  width: '20%',
                  paddingBottom: 20,
                  // borderWidth: 1,
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => props.navigation.openDrawer()}>
                <Image
                  source={require('../../assets/icons/drawer.png')}
                  style={{height: 30, width: 30, tintColor: '#ED1C24'}}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <View style={{flexDirection: 'row'}}>
                {allStatus.map((item, i) => {
                  return (
                    <View
                      style={{
                        alignItems: 'center',
                        // borderWidth: 1,
                        paddingHorizontal: 10,
                        paddingTop: 20,
                      }}>
                      <TouchableOpacity
                        style={{
                          height: 50,
                          overflow: 'hidden',
                          width: 50,
                          borderWidth: 0.6,
                          borderRadius: 50,
                          marginHorizontal: 15,
                          borderColor: '#707070',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                        onPress={() =>
                          item.navigation &&
                          props.navigation.navigate(item.navigation)
                        }>
                        {i == 0 ? (
                          <Image
                            source={item.image}
                            style={{height: '100%', width: '100%'}}
                            resizeMode="contain"
                          />
                        ) : (
                          item.image
                        )}
                      </TouchableOpacity>
                      <Text
                        style={{color: '#707070', fontSize: 12, marginTop: 7}}>
                        {item.name}
                      </Text>
                      {i == 1 ? (
                        <TouchableOpacity>
                          <MaterialIcons
                            name="keyboard-arrow-down"
                            size={25}
                            color={'gray'}
                          />
                        </TouchableOpacity>
                      ) : null}
                    </View>
                  );
                })}
              </View>
            </View>

            <View
              style={{
                alignItems: 'flex-end',
                flex: 1,
                paddingLeft: 45,
                paddingBottom: 20,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  height: 100,
                  alignItems: 'flex-end',
                  flexDirection: 'row',
                }}>
                <View style={{width: '75%', borderWidth: 0}}>
                  <Text style={{fontSize: 13, color: 'white'}}>
                    {' '}
                    0 meetups{' '}
                  </Text>
                  <Text style={{fontSize: 23, color: 'white'}}>
                    {' '}
                    Lady in the Blue{' '}
                  </Text>
                </View>
                <View
                  style={{
                    width: '25%',
                    height: '100%',
                    paddingTop: 20,
                    // borderWidth: 1,
                    justifyContent: 'center',
                    alignItems: 'flex-end',
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
              borderBottomLeftRadius: 50,
              shadowColor: 'white',

              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              overflow: 'hidden',
              borderColor: '#707070',
              borderBottomWidth: 0.7,
              borderLeftWidth: 0.7,
              // elevation: 1,
            }}>
            <TouchableOpacity
              style={{
                width: '50%',
                // borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => props.navigation.navigate('Chat')}>
              <View
                style={{
                  borderRightWidth: 0.5,
                  borderColor: '#707070',
                  width: '100%',
                  alignItems: 'center',
                }}>
                <Feather name="mail" size={40} color={'white'} />
                <Text style={{color: 'white', fontSize: 10, marginTop: 5}}>
                  Messages
                </Text>
              </View>
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
              <Text style={{color: 'white', fontSize: 10, marginTop: 5}}>
                {' '}
                Notifications{' '}
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              height: 120,
              borderWidth: 0,
              flexDirection: 'row',
              borderBottomLeftRadius: 50,
              overflow: 'hidden',

              borderColor: 'white',
              paddingTop: 20,
              borderColor: '#707070',
              borderBottomWidth: 0.7,
              borderLeftWidth: 0.7,
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

          <View style={{paddingHorizontal: 15, marginVertical: 10}}>
            <Text
              style={{
                color: 'white',
                marginTop: 25,
                fontSize: 14,
              }}>
              Langauge
            </Text>

            <View style={{marginBottom: 20}}>
              <Slider color="white" />
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          height: 60,
          width: '100%',
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        {[
          {
            navigateTo: 'allofferflow',
            icons: (
              <Image
                source={require('../../assets/icons/path.png')}
                style={{height: 18, width: 18, tintColor: 'gray'}}
                resizeMode="contain"
              />
            ),
          },
          {
            navigateTo: 'setting',
            icons: (
              <MaterialCommunityIcons
                name="account-multiple"
                size={20}
                color={'gray'}
              />
            ),
          },
          {
            navigateTo: 'Chatflow',
            icons: (
              <Image
                source={require('../../assets/icons/Chat.png')}
                style={{height: 18, width: 18, tintColor: 'gray'}}
                resizeMode="contain"
              />
            ),
          },
          {
            navigateTo: 'profileflow',
            icons: (
              <MaterialCommunityIcons name="account" size={20} color={'gray'} />
            ),
          },
          {
            navigateTo: 'settingflow',
            icons: <MaterialIcons name="settings" size={20} color={'gray'} />,
          },
        ].map((val) => (
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => props.navigation.navigate(val.navigateTo, true)}>
            {val.icons}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
export default App;
