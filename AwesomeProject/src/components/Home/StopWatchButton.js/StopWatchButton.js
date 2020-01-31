import React from 'react';
import i18n from '../../../i18n/i18n';

import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';

const StopWatchButton = () => {
    return(
        <TouchableOpacity style={HomeViewStyles.mainActionButton} 
        //onPress={() => setStarted(true)}
        >
        <Text style={HomeViewStyles.mainActionButtonText}>{i18n.HOME.START}</Text>
      </TouchableOpacity>
    );
}