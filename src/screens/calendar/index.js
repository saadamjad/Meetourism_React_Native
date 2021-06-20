import React, { Component, useState, useEffect, useRef } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
// import {Icon} from 'native-base';
// import Style from './style';
import CustomView from '../../components/customView';
import { theme } from '../../constants/theme';
import LongHeader from '../../components/header/longheader';
import { Item, Icon } from 'native-base';
import { CalendarList } from 'react-native-calendars';
const Calendar = (props) => {
  const [selectedDay, setSelectedDay] = useState({});

  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    openLarge: true,
    showCloseButton: true,
    onClose: () => closePanel(),
    onPressCloseButton: () => closePanel(),
    // ...or any prop you want
  });
  const [isPanelActive, setIsPanelActive] = useState(true);

  const openPanel = () => {
    setIsPanelActive(true);
  };

  const closePanel = () => {
    setIsPanelActive(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <LongHeader
        navigation={props.navigation}
        leftArrow={true}
        searchIcon={true}
        backgroundColor={theme.primaryColor}
        headerText="Calender"
      />
      {
        <CalendarList
          style={{
            // flex: 1,
            backgroundColor: theme.primaryColor, x
            // color: 'white',
            // height: '100%',
            // width: '100%',
          }}
          onVisibleMonthsChange={(months) => {
            console.log('now these months are visible', months);
          }}
          theme={{
            backgroundColor: 'transparent',
            calendarBackground: 'transparent',
            textSectionTitleColor: '#b6c1cd',
            textSectionTitleDisabledColor: '#d9e1e8',
            selectedDayBackgroundColor: '#D47FA6',
            selectedDayTextColor: '#fff',
            todayTextColor: '#fff',
            todayBackgroundColor: '#D47FA6',
            dayTextColor: '#fff',
            textDisabledColor: '#d9e1e8',
            dotColor: '#D47FA6',
            selectedDotColor: '#D47FA6',
            arrowColor: 'orange',
            disabledArrowColor: '#d9e1e8',
            monthTextColor: '#fff',
            indicatorColor: '#fff',
            textDayFontFamily: 'monospace',
            textMonthFontFamily: 'monospace',
            textDayHeaderFontFamily: 'monospace',
            textDayFontWeight: '300',
            textMonthFontWeight: '600',
            textDayHeaderFontWeight: '300',
            textDayFontSize: 16,
            textMonthFontSize: 20,
            textDayHeaderFontSize: 16,
          }}
          markedDates={selectedDay}
          onDayPress={async (va) => {
            let keys = Object.keys(selectedDay);
            if (keys.length > 0) {
              let anotherData = selectedDay;
              let isFound = false;
              await keys.map((val) => {
                if (val == va.dateString) {
                  isFound = true;
                }
              });
              if (isFound) {
                delete anotherData[va.dateString];
              } else {
                anotherData[va.dateString] = { selected: true, marked: true };
              }
              setSelectedDay({ ...anotherData });
            } else {
              setSelectedDay({
                ...selectedDay,
                [va.dateString]: { selected: true, marked: true },
              });
            }
            console.log('This now i got this is', selectedDay);
          }}
          pastScrollRange={50}
          futureScrollRange={50}
          scrollEnabled={true}
          showScrollIndicator={true}
        />
      }
    </View>
  );
};

export default Calendar;
