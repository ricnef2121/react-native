import React,{useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import HomeViewStyles from './HomeViewStyles';
import i18n from '../../i18n/i18n';

const HomeView = () => {

    const [time,setTime] = useState(0);

    const startTime  = ()=>{
        setInterval(() => {
            setTime(time + 1000)
        },1000);
    }



    const RenderRunningTimer = ()=>{
        return(
            <TouchableOpacity style={HomeViewStyles.mainActionButton} onPress={startTime}>
                <Text style={HomeViewStyles.mainActionButtonText}>00:00:00</Text>
            </TouchableOpacity>
        );
    }

    const RenderStart = ()=>{
        return(
            <TouchableOpacity style={HomeViewStyles.mainActionButton} onPress={startTime}>
            <Text style={HomeViewStyles.mainActionButtonText}>{i18n.HOME.START}</Text>
        </TouchableOpacity>
        );
    }

  return (
    <View style={{flex: 1},HomeViewStyles.HomeViewContainer}>
      <View stye={{flex: 1}}>
        <Text style={HomeViewStyles.WelcomeHeader}>{i18n.HOME.WELCOME_HEADER}</Text>
      </View>
      <View style={{flex: 2}}>
         <Text> {time}</Text>
        {RenderStart()}
        {RenderRunningTimer()}
      </View>
    </View>
  );
};

export default HomeView;
