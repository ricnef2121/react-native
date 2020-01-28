import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import HomeViewStyles from './HomeViewStyles'
const HomeView = () => {
  return (
    <View style={{flex: 1,},HomeViewStyles.HomeViewContainer}>
      <View stye={{flex: 1}}>
        <Text style={HomeViewStyles.WelcomeHeader}>Good Mornig</Text>
      </View>
      <View style={{flex: 2}}>
        <TouchableOpacity style={HomeViewStyles.mainActionButton} onPress={() => console.log('button press')}>
          <Text style={HomeViewStyles.mainActionButtonText}>START</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeView;
