import React from 'react';
import i18n from '../../i18n/i18n';
import moment from 'moment'
import HomeViewStyles from '../Home/HomeViewStyles'

import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';

const StopWatchButton = ({ time,timeStartOrStop }) => {
  if (time > 0) {
    return (
      <TouchableOpacity style={HomeViewStyles.mainActionButton}
      onPress={timeStartOrStop}>
        <Text style={HomeViewStyles.mainActionButtonText}>
          {moment.utc(time).format('HH:mm:ss')}
        </Text>
        <Text style={HomeViewStyles.mainActionButtonPauseText}>{i18n.HOME.PAUSE}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity style={HomeViewStyles.mainActionButton} onPress={timeStartOrStop}>
      <Text style={HomeViewStyles.mainActionButtonText}>{i18n.HOME.START}</Text>
    </TouchableOpacity>
  );
}

export default StopWatchButton;