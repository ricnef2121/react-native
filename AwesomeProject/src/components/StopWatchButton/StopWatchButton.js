import React from 'react';
import i18n from '../../i18n/i18n';
import moment from 'moment'
import StopWatchButtonStyles from './StopWatchButtonStyles'

import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';

const StopWatchButton = ({ time,timeStartOrStop }) => {
  if (time > 0) {
    return (
      <TouchableOpacity style={StopWatchButtonStyles.mainActionButton}
      onPress={timeStartOrStop}>
        <Text style={StopWatchButtonStyles.mainActionButtonText}>
          {moment.utc(time).format('HH:mm:ss')}
        </Text>
        <Text style={StopWatchButtonStyles.mainActionButtonPauseText}>{i18n.STOP_WATCH.PAUSE}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity style={StopWatchButtonStyles.mainActionButton} onPress={timeStartOrStop}>
      <Text style={StopWatchButtonStyles.mainActionButtonText}>{i18n.STOP_WATCH.START}</Text>
    </TouchableOpacity>
  );
}

export default StopWatchButton;