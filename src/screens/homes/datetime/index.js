import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DateTimePicker from '@react-native-community/datetimepicker';
import {theme} from '../../../constants/theme';
import BgCustom from '../../../components/bgcustom';
import GlobalButton from '../../../components/buttons/globalbutton';
import moment from 'moment';
import Toast from 'react-native-toast-message';
import styles from './styles';
const App = (props) => {
  function _Continue3() {
    props.navigation.navigate('contactinfo');
  }

  // ==========Date & Time States==========

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  // ========== Using Map ==========

  const [array, setarray] = useState([
    {
      image: require('../../../assets/icons/sunrise.png'),
      title1: 'Morning',
      title2: 'before 10am',
    },
    {
      image: require('../../../assets/icons/dawn.png'),
      title1: 'Mid Day',
      title2: '10am-2pm',
    },
    {
      image: require('../../../assets/icons/sun.png'),
      title1: 'Afternoon',
      title2: '2pm-6pm',
    },
    {
      image: require('../../../assets/icons/half-moon.png'),
      title1: 'Evening',
      title2: 'after 6pm',
    },
  ]);
  // ==========Border Change Function & State==========
  const [change, setChange] = useState('');
  const _Change = (i) => {
    setChange(i);
  };
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <BgCustom {...props} name="Date & Time" suggest="Set Your">
        {/* ========Second Flex ======== */}

        <View
          style={styles.mainView}>
          {/* ==========Date & Time Row========== */}

          <View
            style={styles.datetimeRowview}>
            <Entypo name="calendar" color={theme.iconsColor.orange} size={25} />

            <Text
              style={styles.setdatetimeText}>
              Set Date & Time
            </Text>
          </View>

          {/* ========== Date & Time Code ========== */}

          <View
            style={styles.datetimecodeMainView}>
            <View style={{justifyContent: 'center', paddingLeft: 7}}>
              <Text>{`${moment(date).format(' dddd, DD MMM YYYY')}`}</Text>
            </View>
            <TouchableOpacity
              style={styles.DropDownIcon}
              onPress={showDatepicker}>
              <AntDesign
                name="caretdown"
                size={12}
                color={theme.iconsColor.placeholderIcon}
              />
            </TouchableOpacity>
          </View>

          <View>
            {/* <Button onPress={showTimepicker} title="Show time picker!" /> */}
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={false}
                display="default"
                onChange={onChange}
              />
            )}
          </View>

          {/* ========== Box Row Wrap ==========  */}

          <View
            style={styles.BoxRowwrapMainView}>
            {/* ========== Box with Map ==========  */}

            {array.map((item, i) => {
              // let loop = i.toString();
              return (
                <TouchableOpacity
                  key={i}
                  style={{
                    ...styles.boxView,
                    borderWidth: change == i ? 1 : 0,
                  }}
                  onPress={() => _Change(i)}>
                  <Image source={item.image} style={styles.ImageMap} />

                  <Text style={styles.title1}>
                    {item.title1}
                  </Text>
                  <Text style={styles.title2}>
                    {item.title2}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* ++++++++++++++++++++ button ++++++++++++++++++++ */}

        <View style={styles.ButtonVIew}>
          <GlobalButton title={'Continue'} onPress={() => _Continue3()} />
        </View>
      </BgCustom>
    </ScrollView>
  );
};
export default App;
