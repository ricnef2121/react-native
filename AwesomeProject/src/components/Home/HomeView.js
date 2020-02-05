import React, { useState, useEffect } from 'react';
import { Text, View, AppState } from 'react-native';
import HomeViewStyles from './HomeViewStyles';
import i18n from '../../i18n/i18n';
import StopWatchButton from '../StopWatchButton/StopWatchButton'
import AsyncStorage from '@react-native-community/async-storage';


const HomeView = () => {

  const [countInterval, setCountInterval] = useState(0);
  const [started, setStarted] = useState(false);
  
  const handleAppStateChange = (nextAppState) => {
    console.log('nextAppState',nextAppState)  
    const now = new Date().getTime;
    const readTime = await AsyncStorage.getItem('@counInterval')
    const readState = await AsyncStorage.getItem('@appStateChangedTimestamp')
    console.log('stored data',readTime,readState)
    
    await AsyncStorage.setItem('@counInterval',countInterval);
    await AsyncStorage.setItem('@appStateChangedTimestamp',now);
  }
  
  useEffect(() => {   
    AppState.addEventListener('change',handleAppStateChange)
    return () =>  {AppState.removeEventListener('change',handleAppStateChange)};
  },[])

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
