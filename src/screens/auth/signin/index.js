import React, {useState, useRef} from 'react';
import {
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import {theme} from '../../../constants/theme';
import GlobalButton from '../../../components/buttons/generalbutton';
import FacebookButton from '../../../components/buttons/facebookbutton';
import Header from '../../../components/header/longheader';
import Toastmessage from '../../../components/toastmessage';
import styles from './styles';
import {ThemeContext} from 'react-native-elements';
import Overlay from '../../../components/overlays';
let path = '../../../assets/images/bg6.png';

const App = (props) => {
  function _SignInB() {
    if (value == '') {
      Toastmessage('Please Fill Inputs', '', 'info');
    } else if (value.length >= 1) {
      props.navigation.navigate('drawer');
    } else {
      Toastmessage('You enter wrong details', '', 'error');
    }
  }

  const [name, setname] = useState('');
  function _SignUpB() {
    // let dbName = 'Samad';
    if (name == '' || value == '') {
      Toastmessage('Please Fill Inputs', '', 'info');
    } else if (name.length >= 1 && value.length >= 1) {
      props.navigation.navigate('otp');
    } else {
      Toastmessage('You enter wrong details', '', 'error');
    }
  }

  // ==============PhoneInputs==============
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [isClicked, setClicked] = useState(false);
  const [color, setColor] = useState('');
  const phoneInput = useRef();

  // =======main=====
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Header
        // textAlign={'flex-end'}
        leftArrow={true}
        navigation={props.navigation}
        searchIcon={true}
        // alignItemsText={'flex-end'}
        headerText={'LIVE CHAT'}
        // paddingLeft
        // filterIcon={true}
        // drawerIcon={true}
      />
      <GlobalButton width={'50%'} />

      {/* <Overlay visible={false} /> */}
    </View>
  );
};

export default App;
