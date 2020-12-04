import React, {useState} from 'react';
import {ScrollView, View, Text, SafeAreaView, Picker} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Header from '../../../components/header';
import {theme} from '../../../constants/theme';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './styles';
const Task = (props) => {
  function _Click(item) {
    props.navigation.navigate('taskdetail', {selectedTask: item});
  }
  const [country, setCountry] = useState('');
  const [isVisibleA, setisVisibleA] = useState(false);
  const [array, setArray] = useState([
    {
      Price: '1200',
      day: 'Monday',
      date: 'Mid-day 10am to 2pm',
      fname: 'J',
      name: 'Abdul Samad',
      request: 'Requests 16',
      adress: 'First Gate Dadinkowa',
      street: 'Mess Place ,Rayfiewl',
    },
    {
      Price: '1200',
      day: 'Monday',
      date: 'Mid-day 10am to 2pm',
      fname: 'M',
      name: 'Martha',
      request: 'Requests 8',
      adress: 'First Gate Dadinkowa',
      street: 'Mess Place ,Rayfiewl',
    },
    {
      Price: '1200',
      day: 'Monday',
      date: 'Mid-day 10am to 2pm',
      fname: 'A',
      name: 'Aleeza',
      request: 'Requests 6',
      adress: 'First Gate Dadinkowa',
      street: 'Mess Place ,Rayfiewl',
    },
  ]);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.bgColorWhite}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        {/* ==========Header========== */}

        <Header
          text={'Tasks'}
          isTransparent={false}
          isVisibleIcon={true}
          navigation={props.navigation}
          //   drawerIcon={true}
        />
        {/* ++++++++++++++++  main Container +++++++++++++++++++ */}

        <View style={{width: '90%', alignSelf: 'center'}}>
          <View
            style={styles.maincontainerview}>
            <Text
              style={styles.maincontainerText}>
              3 Tasks Available
            </Text>

            <View
              style={styles.dropdown}>
              <DropDownPicker
                items={[
                  {label: 'Name', value: 'name'},
                  {label: 'Size', value: 'size'},
                  {label: 'ItemType', value: 'itemTpe'},
                  {label: 'DateModified', value: 'dateModified'},
                ]}
                placeholder="Sort By"
                defaultValue={country}
                style={{borderWidth: 1, elevation: 1}}
                onChangeItem={(item) => setCountry(item.value)}
              />
            </View>
          </View>
        </View>

        {/* +++++++++++++++++++++++++ main elevation box++++++++++++++++++++ */}

        {array.map((item, i) => {
          return (
            <TouchableOpacity
              onPress={() => _Click(item)}
              key={i}
              style={styles.touchableview}>
              {/* ++++++++++++++++++ profile main View +++++++++++++++++++++++++ */}
              <View
                style={styles.profilemainview}>

                {/* ++++++++++++++++++ profile Image view+++++++++++++++++++++++++ */}

                <View style={styles.profileimgviewview}>
                  <View
                    style={styles.profileIcon}>
                    <Text
                      style={styles.profileimgtext}>
                      {item.fname}
                    </Text>
                  </View>

                  {/* ++++++++++++++ profile name View +++++++++++++++++++++ */}

                  <View style={{marginLeft: 10}}>
                    <Text
                      style={styles.profiletext}>
                      {item.name}
                    </Text>
                    <Text
                      style={styles.requestText}>
                      {item.request}
                    </Text>
                  </View>
                </View>

                {/* ++++++++++++++++++Price View +++++++++++++++++++++++++ */}

                <View>
                  <Text
                    style={styles.priceText}>
                    {item.Price}
                  </Text>
                  <Text
                    style={styles.heavyText}>
                    Heavy
                  </Text>
                </View>
              </View>

              {/* ==========  yellow dot Row ========== */}
              <View
                style={styles.view1}>
                <View
                  style={styles.view2}>
                  <View style={styles.view3}>
                    <View
                      style={styles.yellowDot}></View>
                  </View>
                  <Text
                    style={styles.yellowDottext}>
                    {item.adress}
                  </Text>
                </View>

                {/* ++++++++++++++++ midele small border +++++++++++++++ */}
                <View style={styles.view4}>
                  <View
                    style={styles.view5}></View>
                </View>

                {/* ========== Orange dot Row ========== */}
                <View
                  style={styles.view6}>
                  <View style={styles.view7}>
                    <View
                      style={styles.view8}
                    />
                  </View>

                  <Text
                    style={styles.orangedot}>
                    {item.street}
                  </Text>
                </View>
              </View>

              {/* ++++++ main view for date and time +++++++ */}

              <View
                style={styles.datetimemainview1}>
                <View
                  style={styles.datetimemainview2}>
                  <View>
                    <Entypo
                      name="calendar"
                      size={18}
                      color={theme.iconsColor.orange}
                    />
                  </View>
                  <Text
                    style={styles.daytext}>
                    {item.day}
                  </Text>
                </View>
                <View
                  style={styles.iconview}>
                  <View>
                    <AntDesign
                      name="clockcircleo"
                      size={18}
                      color={theme.iconsColor.orange}
                      style={{paddingLeft: 10}}
                    />
                  </View>
                  <Text
                    style={styles.datetext}>
                    {item.date}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};
export default Task;
