import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  Dimensions,
} from 'react-native';
import CustomView from '../../components/customView';
// import Longheader from '../../components/header/longheader';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TabView, SceneMap} from 'react-native-tab-view';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import SimpleLineIcons from 'react-native-vector-icons/MaterialIcons';

import {theme} from '../../constants/theme';
import {TextInput} from 'react-native-gesture-handler';
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      strokeWidth: 2, // optional
    },
  ],
  legend: ['Rainy Days'], // optional
};
const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const App = (props) => {
  const [dashboardItems, setDashboardItems] = useState([
    {
      name: 'Profiles',
      // image:'../src/asssets/icons/trolley.png',
    },
    {
      name: 'Offers',
      // image:'../src/asssets/icons/trolley.png',
    },
    {
      name: 'Notification',
      // image: '..,
    },
    {
      name: 'Old offers/History',
      // image:'../src/asssets/icons/trolley.png',
    },
    {
      name: 'Setting',
      // image:'../src/asssets/icons/trolley.png',
    },
    {
      name: 'Log Out',
      // image:'../src/asssets/icons/trolley.png',
    },
  ]);
  const [state, setState] = useState({
    selectedIndex: 0,
    activeInput: 3,
    routes: [
      {key: 'first', title: 'SignIn'},
      {key: 'second', title: 'SignUp'},
      {key: 'third', title: 'third'},
    ],
  });

  const signUpRoute = () => (
    <>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{
            alignItems: 'center',
            // borderWidth: 1,
            flex: 1,
            borderBottomLeftRadius: 70,
            overflow: 'hidden',
            backgroundColor: '#241332',
          }}>
          <LineChart
            data={data}
            width={Dimensions.get('window').width}
            height={220}
            chartConfig={chartConfig}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 10,
            }}>
            <Text style={{color: 'white'}}> In Relationship </Text>
            <SimpleLineIcons name="arrow-drop-down" color="white" size={25} />
          </View>
        </View>
      </View>
    </>
  );
  const signUpRoute2 = () => (
    <>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{
            alignItems: 'center',
            // borderWidth: 1,
            flex: 1,
            borderBottomLeftRadius: 70,
            overflow: 'hidden',
            backgroundColor: '#241332',
          }}>
          <LineChart
            data={data}
            width={Dimensions.get('window').width}
            height={220}
            chartConfig={chartConfig}
          />
        </View>
      </View>
    </>
  );
  const signUpRout3 = () => (
    <>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{
            alignItems: 'center',
            // borderWidth: 1,
            flex: 1,
            borderBottomLeftRadius: 70,
            overflow: 'hidden',
            backgroundColor: '#241332',
          }}>
          <LineChart
            data={data}
            width={Dimensions.get('window').width}
            height={220}
            chartConfig={chartConfig}
          />
        </View>
      </View>
    </>
  );
  const renderScene = SceneMap({
    first: signUpRoute,
    second: signUpRoute2,
    third: signUpRout3,
  });

  return (
    <CustomView scroll bg="white">
      <View
        style={{
          height: 85,
          paddingVertical: 10,
          // borderWidth: 1,
          backgroundColor: 'white',
          justifyContent: 'center',
          paddingLeft: 20,
        }}>
        <Text style={{color: '#ED1C24', fontSize: 25, fontWeight: 'bold'}}>
          {' '}
          Dashboard{' '}
        </Text>
      </View>

      <View
        style={{
          flex: 0.3,
          elevation: 1,
          overflow: 'hidden',
          // borderWidth: 1,
          backgroundColor: '#F1F0F2',
          borderTopRightRadius: 70,
          justifyContent: 'center',
          borderBottomLeftRadius: 70,
          paddingVertical: 40,
        }}>
        <View
          style={{
            overflow: 'hidden',
            borderWidth: 0,
            borderRadius: 30,
            width: '91%',
            alignSelf: 'center',
            backgroundColor: 'white',
            justifyContent: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              // borderWidth: 1,
              paddingVertical: 10,
              flexWrap: 'wrap',

              flex: 1,
            }}>
            {dashboardItems.map((item, i) => {
              return (
                <TouchableOpacity
                  style={{
                    width: '33.333%',
                    // borderWidth: 1,
                    paddingVertical: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <AntDesign name="user" color="black" size={20} />
                  <Text style={{color: 'gray', fontSize: 12, marginTop: 5}}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          // borderWidth: 1,
        }}>
        <TabView
          navigationState={{index: state.selectedIndex, routes: state.routes}}
          renderScene={renderScene}
          renderTabBar={(props) => (
            <View
              style={{
                width: '100%',
                paddingVertical: 20,

                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              {['Today', 'WEEK', 'MONTH'].map((val, i) => (
                <View
                  style={{
                    backgroundColor: 'white',
                    width: '33.33%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => setState({...state, selectedIndex: i})}
                    style={{
                      backgroundColor:
                        state.selectedIndex == i
                          ? theme.secondaryColor
                          : 'transparent',

                      paddingVertical: 6,
                      paddingHorizontal: 24,
                      borderRadius: 20,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        color:
                          state.selectedIndex == i
                            ? theme.textColor.whiteColor
                            : theme.textColor.greyColor,
                        fontSize: 14,
                      }}>
                      {val}
                    </Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          )}
          onIndexChange={(ind) => {
            setState({...state, selectedIndex: ind});
          }}
          initialLayout={{
            width: Dimensions.get('window').width,
          }}></TabView>
      </View>
    </CustomView>
  );
};
export default App;
