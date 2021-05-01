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
import {theme} from '../../constants/theme';
const App = (props) => {
  const [select, setSelected] = useState(3);

  const [allStatus, setStatus] = useState([
    {
      name: 'you',
      image: require('../../assets/icons/row.png'),
    },
    {
      name: 'status',
      navigation: 'statusstack',
      image: <FontAwesome name="user" size={20} color="black" />,
    },
    // {
    //   name: 'Add more',
    //   image: <Feather name="plus" size={20} color="black" />,
    // },
  ]);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.primaryColor,
      }}>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 0.4,
            // borderWidth: 1,
            borderBottomLeftRadius: 75,
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
                // borderWidth: 1,
                elevation: 1,
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

                          borderColor: '#AAB1B5',

                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                        onPress={() =>
                          item.navigation &&
                          props.navigation.navigate('statusstack', {
                            screen: 'selectstatus',
                            params: {comeFromProfileStatus: true},
                          })
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
                        style={{
                          color: '#8F989D',
                          fontSize: 12,
                          marginTop: 7,
                        }}>
                        {item.name}
                      </Text>
                      {i == 1 ? (
                        <TouchableOpacity>
                          <MaterialIcons
                            name="keyboard-arrow-down"
                            size={25}
                            color={'#AAB1B5'}
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
                height: 120,
                paddingVertical: 20,
                // borderWidth: 1,
                alignItems: 'flex-end',
                flexDirection: 'row',
                paddingHorizontal: 25,
              }}>
              <View style={{width: '75%', borderWidth: 0}}>
                <Text
                  style={{fontSize: 10, color: 'white', fontWeight: 'bold'}}>
                  {' '}
                  0 meetups{' '}
                </Text>
                <Text
                  style={{fontSize: 23, color: 'white', fontWeight: 'bold'}}>
                  {' '}
                  Lady in the Blue{' '}
                </Text>
              </View>
              <View
                style={{
                  width: '25%',
                  height: '100%',
                  paddingTop: 20,
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
              borderColor: theme.primaryColor1,
              borderBottomWidth: 1,
              borderLeftWidth: 1,
              // elevation: 1,
            }}>
            <TouchableOpacity
              style={{
                width: '50%',
                // borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => props.navigation.navigate('allchats')}>
              <View
                style={{
                  borderRightWidth: 1,
                  borderColor: theme.primaryColor1,

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
              borderColor: theme.primaryColor1,
              borderBottomWidth: 1,
              borderLeftWidth: 1,
              paddingLeft: 20,
            }}>
            <View>
              <Text style={{color: 'white', fontSize: 15}}>About Me</Text>
              <Text style={{color: '#9599B3', fontSize: 12, marginTop: 2}}>
                Tell us about you!!
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                borderWidth: 0,
                alignItems: 'flex-end',
                paddingRight: 20,
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
          // borderWidth: 1,
          width: '100%',
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        {[
          {
            navigateTo: 'Selectoffer',
            color: 'black',

            icons: (
              <Image
                source={require('../../assets/icons/path.png')}
                style={{
                  height: 18,
                  width: 18,
                  tintColor: select == 0 ? 'black' : 'black',
                }}
                resizeMode="contain"
              />
            ),
          },
          {
            navigateTo: 'SeeYourMatch',
            color: 'black',

            dashboard: false,
            icons: (
              <MaterialCommunityIcons
                name="account-multiple"
                size={20}
                color={select == 1 ? 'black' : 'black'}
              />
            ),
          },
          {
            navigateTo: 'allchats',
            color: 'black',

            icons: (
              <Image
                source={require('../../assets/icons/Chat.png')}
                style={{
                  height: 18,
                  width: 18,
                  tintColor: select == 2 ? 'black' : 'black',
                }}
                resizeMode="contain"
              />
            ),
          },
          {
            navigateTo: 'Cruhes',
            color: 'black',

            icons: (
              <MaterialCommunityIcons
                name="account"
                size={20}
                color={select == 3 ? 'black' : 'gray'}
              />
            ),
          },
          {
            navigateTo: 'statusstack',
            color: 'black',

            icons: (
              <MaterialIcons
                name="settings"
                size={20}
                color={select == 4 ? 'black' : 'black'}
              />
            ),
          },
        ].map((val, i) => (
          <TouchableOpacity
            style={{
              // flex: 1,
              width: '20%',
              justifyContent: 'center',
              alignItems: 'center',
              // backgroundColor: 'red',

              padding: 10,
            }}
            onPress={() => {
              setSelected(i);
              props.navigation.navigate(val.navigateTo, {
                screen: 'chooseyourinterest',

                settingStatus: true,
                dashboard: false,
              });
            }}
            // onPress={() =>
            //   props.navigation.navigate('statusstack', {
            //     screen: 'chooseyourinterest',
            //     settingStatus: true,
            //     dashboard: false,
            //   })
            // }
            // onPress={() =>
            //   props.navigation.navigate('statusstack', true, {
            //     screen: 'matchprofile',
            //     settingStatus: true,
            //     dashboard: false,
            //   })
            // }
            activeOpacity={1}>
            {val.icons}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
export default App;
