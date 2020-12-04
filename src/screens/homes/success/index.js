import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import GlobalButton from '../../../components/buttons/globalbutton';
import BgCustom from '../../../components/bgcustom';

import {theme} from '../../../constants/theme';
import styles from './styles';

const App = (props) => {
  function _Done() {
    props.navigation.navigate('home');
  }
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <BgCustom {...props} icon={true}>
        {/* ========== Text View ========== */}

        <View
          style={styles.textmainView}>
          <View style={{marginVertical: 25}}>
            <Text
              style={styles.SuccessText}>
              SUCCESS
            </Text>
          </View>
          <View style={styles.spacebetween}>
            <Text
              style={styles.thankyouText}>
              Thank you for{'\n'}your Reservation!
            </Text>
          </View>
          <View>
            <Text
              style={styles.detailText}>
              Your request has been published{'\n'}and you will be notified if
              anyone{'\n'}accepts the offer
            </Text>
          </View>
        </View>
        {/* +++++++++++++++++++ button View ++++++++++++++++++ */}
        <View
          style={styles.ButtonView}>
          <GlobalButton
            buttonTheme={'border'}
            title={'DONE'}
            onPress={() => _Done()}
            buttonStyle={{width: 300}}
            titleStyle={{fontSize: 13}}
          />
        </View>
      </BgCustom>
    </ScrollView>
  );
};
export default App;
