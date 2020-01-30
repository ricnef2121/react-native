import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import HomeViewStyles from './HomeViewStyles';
import i18n from '../../i18n/i18n';
import moment from 'moment'

const HomeView = () => {

  const [countInterval, setCountInterval] = useState(0);
  const [started, setStarted] = useState(false);


  useEffect(() => {
    let intervalID;
    if (started) {
      intervalID = setInterval(() => {
        setCountInterval(prevTime => prevTime + 1000);     
      }, 1000);
    }
    return () => clearInterval(intervalID);
  }, [started, countInterval]);

  const timeStop = () => {
    console.log('st',started)
    setStarted(!started)
   
  }


  const RenderRunningTimer = () => {
    return (
      <TouchableOpacity style={HomeViewStyles.mainActionButton} onPress={timeStop}>
        <Text style={HomeViewStyles.mainActionButtonText}>
          {moment.utc(countInterval).format('HH:mm:ss')}
          </Text>
      </TouchableOpacity>
    );
  }

  const RenderStart = () => {
    return (
      <TouchableOpacity style={HomeViewStyles.mainActionButton} onPress={() => setStarted(true)}>
        <Text style={HomeViewStyles.mainActionButtonText}>{i18n.HOME.START}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={{ flex: 1 }, HomeViewStyles.HomeViewContainer}>
      <View stye={{ flex: 1 }}>
        <Text style={HomeViewStyles.WelcomeHeader}>{i18n.HOME.WELCOME_HEADER}</Text>
      </View>
      <View style={{ flex: 2 }}>
        {countInterval > 0 ? RenderRunningTimer(): RenderStart()}
      </View>

    </View>
  );
};

export default HomeView;
