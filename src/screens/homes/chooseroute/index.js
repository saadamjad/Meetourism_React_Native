import React, {useState} from 'react';
import {View, ScrollView, Text, TextInput} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {theme} from '../../../constants/theme';
import GlobalButton from '../../../components/buttons/globalbutton';
import BgCustom from '../../../components/bgcustom';
import styles from './styles';

const App = (props) => {
  const [pickupA, setPickupA] = useState('');
  const [dropoffA, setdropoffA] = useState('');
  const [color, setColor] = useState('');
  const [color2, setColor2] = useState('');
  const [isError, setError] = useState(false);
  const [isError2, setError2] = useState(false);

  function _Continue1() {
    if (pickupA.length >= 1 && dropoffA.length >= 1) {
      props.navigation.navigate('describepackage');
      setError(false);
      setError2(false);
    } else if (pickupA == '') {
      setError(true);
    } else if (dropoffA == '') {
      setError2(true);
    } else {
      setError(true);
      setError2(true);
    }
  }
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <BgCustom {...props} name="Route" suggest="Choose Your">
        {/* ==========main view========== */}

        <View style={styles.mainView}>
          {/* ==========Pick Up Location========== */}
          {/* borderColor: color ? theme.bordersColor.darkOrangeB :
          theme.bordersColor.borderColor, */}
          <View
            style={{
              ...styles.BordercolorPickup,
              borderColor: color
                ? theme.bordersColor.darkOrangeB
                : theme.bordersColor.borderColor,
            }}>
            <View style={styles.flexrowView}>
              <MaterialIcons
                name="gps-not-fixed"
                size={25}
                color={theme.iconsColor.darkOrange}
              />

              <Text style={styles.pickuptextstyle}>Pick Up Location</Text>
            </View>

            <View>
              <Text style={styles.enteradressText}>Enter Address</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TextInput
                placeholder="Pick Up address"
                placeholderTextColor={theme.textColors.placeholder}
                onChangeText={(Ptext) => {
                  setPickupA(Ptext);
                }}
                onFocus={() => setColor(true)}
                onBlur={() => setColor(false)}
                style={{fontSize: 15, width: '90%'}}
              />

              <View style={styles.iconpickupViews}>
                <Ionicons
                  name="location"
                  size={17}
                  color={theme.iconsColor.placeholderIcon}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              ...styles.warningPickupView,
              backgroundColor: isError ? '#ffeeee' : null,
            }}>
            <Text style={styles.warningtext}>
              {isError ? 'Please Fill a Valid Address' : null}
            </Text>
          </View>
          {/* ========== Package Destination ========== */}
          <View
            style={{
             ...styles.borderPackageView,
              borderColor: color2
                ? theme.bordersColor.darkOrangeB
                : theme.bordersColor.borderColor,
            }}>
            <View style={styles.packagerowView}>
              <MaterialIcons
                name="gps-fixed"
                size={25}
                color={theme.iconsColor.darkOrange}
              />

              <Text
                style={styles.packagedestinationText}>
                Package Destination
              </Text>
            </View>

            <View>
              <Text
                style={styles.enteradressText}>
                Enter Address
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
              }}>
              <TextInput
                placeholder="Drop off address"
                placeholderTextColor={theme.textColors.placeholder}
                onChangeText={(text) => {
                  setdropoffA(text);
                }}
                onFocus={() => setColor2(true)}
                onBlur={() => setColor2(false)}
                style={{fontSize: 15, width: '90%'}}
              />

              <View
                style={styles.icondestinationView}>
                <Ionicons
                  name="location"
                  size={17}
                  color={theme.iconsColor.placeholderIcon}
                />
              </View>
            </View>
          </View>
          <View
            style={{
            ...styles.warningdestination,
              backgroundColor: isError2 ? '#ffeeee' : null,
            }}>
            <Text style={styles.warningtext}>
              {isError2 ? 'Please Fill a Valid Destination' : null}
            </Text>
          </View>
        </View>

        {/* ========== Button ========== */}

        <View
          style={styles.buttonView}>
          <GlobalButton title={'Continue'} onPress={() => _Continue1()} />
        </View>
      </BgCustom>
      {/* ========== Toast Message ========== */}
      {/* <Toast ref={(ref) => Toast.setRef(ref)} /> */}
    </ScrollView>
  );
};
export default App;
