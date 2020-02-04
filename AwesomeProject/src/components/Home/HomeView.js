import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import HomeViewStyles from './HomeViewStyles';
import i18n from '../../i18n/i18n';
import StopWatchButton from '../StopWatchButton/StopWatchButton'

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

  const timeStartOrStop = () => {
    console.log('st',started)
    setStarted(!started)
   
  }


  return (
    <View style={{ flex: 1 }, HomeViewStyles.HomeViewContainer}>
      <View stye={{ flex: 1 }}>
        <Text style={HomeViewStyles.WelcomeHeader}>{i18n.HOME.WELCOME_HEADER}</Text>
      </View>
      <View style={{ flex: 2 }}>
        <StopWatchButton time={countInterval} timeStartOrStop={timeStartOrStop} />
      </View>

    </View>
  );
};

export default HomeView;
