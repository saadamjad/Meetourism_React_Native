import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import GlobalButton from '../../components/buttons/generalbutton';
import CustomView from '../../components/customView';
import SliderCom from '../../components/slider';
import {theme} from '../../constants/theme';

const Profile = (props) => {
  return (
    <CustomView scroll>
      <View style={{flex: 1, alignItems: 'center', width: '100%'}}>
        <Image
          style={{width: '100%', height: 400}}
          resizeMode="stretch"
          source={require('../../assets/images/profile.png')}
        />
        <View
          style={{
            // height: '80%',
            flex: 1,
            paddingVertical: 20,
            // paddingVertical: 10,
            backgroundColor: 'white',
            width: '100%',
            marginTop: -180,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            alignItems: 'center',
            paddingHorizontal: 30,
          }}>
          <Text
            style={{
              color: theme.secondaryColor,
              fontSize: 30,
              fontWeight: '700',
              paddingBottom: 10,
            }}>
            Patrick Tulso
          </Text>
          <View style={{width: '100%'}}>
            <Text style={{fontSize: 18, paddingBottom: 10}}>Interests</Text>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
              }}>
              {['Fitness', 'Beauty', 'Dogs', 'Cats', 'Laundry'].map((val) => (
                <Text style={{fontSize: 12}}>{val}</Text>
              ))}
            </View>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                marginTop: 15,
              }}>
              {[
                {name: 'AGE', value: '17'},
                {name: 'Contact', value: 'xxxxxxx'},
                {name: 'City', value: 'XYZ'},
              ].map((val) => (
                <View style={{width: '25%', alignItems: 'center'}}>
                  <Text style={{fontSize: 20}}>{val.name}</Text>
                  <Text style={{fontSize: 15, marginTop: 10}}>{val.value}</Text>
                </View>
              ))}
            </View>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                marginTop: 15,
              }}>
              {[
                {name: 'Height', value: '5.9'},
                {name: 'Shape', value: 'slim'},
                {name: 'EyeColor', value: 'Blue'},
              ].map((val) => (
                <View style={{width: '25%', alignItems: 'center'}}>
                  <Text style={{fontSize: 20}}>{val.name}</Text>
                  <Text style={{fontSize: 15, marginTop: 10}}>{val.value}</Text>
                </View>
              ))}
            </View>
            <Text style={{fontSize: 18, paddingVertical: 10}}>Description</Text>
            <Text style={{lineHeight: 20}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              sodales pulvinar lectus eu consequat. Sed sagittis ex non purus
              porttitor, sit amet posuere justo ultrices.
            </Text>
            <Text style={{fontSize: 18, paddingVertical: 10}}>Language</Text>
            <SliderCom />
            {/* <TouchableOpacity
              style={{
                width: '70%',
                alignSelf: 'center',
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 40,
                backgroundColor: theme.secondaryColor,
              }}>
              <Text style={{color: theme.textColor.whiteColor}}>
                See Your Matches
              </Text>
            </TouchableOpacity> */}
            <GlobalButton
              buttonText="See Your Matches"
              width="70%"
              onPress={() => props.navigation.navigate('SeeYourMatch')}
            />
          </View>
        </View>
      </View>
    </CustomView>
  );
};

export default Profile;
