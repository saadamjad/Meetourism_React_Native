import React, {useState} from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';
import {theme} from '../../../constants/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BgCustom from '../../../components/bgcustom';
import GlobalButton from '../../../components/buttons/globalbutton';
import Toastmessage from '../../../components/toastmessage';
import styles from './styles'

const App = (props) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [color, setColor] = useState('');
  const [color2, setColor2] = useState('');
  const [isError, setError] = useState(false);
  const [isError2, setError2] = useState(false);

  function _Continue4() {
    if (name.length >= 1 && phone.length >= 1) {
      props.navigation.navigate('setyourbudget');
      setError(false);
      setError2(false);
    } else if (name == '') {
      setError(true);
    } else if (phone == '') {
      setError2(true);
    } else {
      setError(true);
      setError2(true);
    }
  }
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <BgCustom {...props} name="Contact Info" suggest="Set receivers">
        {/* ==========2nd Flex========== */}

        <View
          style={styles.secondflexView}>
          <View
            style={styles.reciverIcon}>
            <Ionicons
              name="person-outline"
              size={25}
              color={theme.iconsColor.darkOrange}
            />
            <Text
              style={styles.recieverText}>
              Receiver Details
            </Text>
          </View>

          <View
            style={{
              ...styles.recieverborder,
              borderColor: color
                ? theme.bordersColor.darkOrangeB
                : theme.bordersColor.borderColor,

            }}>
            <View>
              <Text
                style={styles.recievernameText}>
                Receiver Name
              </Text>

              <TextInput
                placeholder="Abdul Samad"
                placeholderTextColor={theme.textColors.placeholder}
                onChangeText={(textName) => {
                  setName(textName);
                }}
                onFocus={() => setColor(true)}
                onBlur={() => setColor(false)}
                style={styles.Textinputuser}
              />
            </View>
          </View>
          <View
            style={{
              ...styles.warningborder,
              backgroundColor: isError ? '#ffeeee' : null,
            }}>
            <Text style={styles.warningtext}>
              {isError ? '* Please Fill the Name Input' : null}
            </Text>
          </View>
{/* ====================phonenumber=============== */}
          <View
            style={{
             ...styles.phonenumberBorder,
              borderColor: color2
                ? theme.bordersColor.darkOrangeB
                : theme.bordersColor.borderColor,
            }}>
            <View>
              <Text
                style={styles.phonenumberText}>
                Receiver Phone Number
              </Text>

              <TextInput
                placeholder="e.g.03103844268"
                placeholderTextColor={theme.textColors.placeholder}
                keyboardType={'number-pad'}
                onChangeText={(textPhone) => {
                  setPhone(textPhone);
                }}
                onFocus={() => setColor2(true)}
                onBlur={() => setColor2(false)}
                style={styles.phonenumberTextinput}
              />
            </View>
          </View>
          <View
            style={styles.warningPhonenumerView}>
            <Text style={styles.warningphonenumberText}>
              {isError2 ? '* Please Fill the Number Input' : null}
            </Text>
          </View>
        </View>

        {/* // ++++++++++++++++++++++++ Button View++++++++++++++++++ */}

        <View
          style={styles.buttonview}>
          <GlobalButton title={'Continue'} onPress={() => _Continue4()} />
        </View>
      </BgCustom>
    </ScrollView>
  );
};
export default App;
