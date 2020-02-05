import {StyleSheet} from 'react-native';


const StopWatchButtonStyles = StyleSheet.create({
    mainActionButton:{
        width:234,
        height:234,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:'#00CD5E',
        borderRadius:142 ,
    },
    mainActionButtonText:{
        fontSize:40,
        color:'#FFF',
        fontWeight:'bold',
    },
    mainActionButtonPauseText:{
        fontSize:24,
        color:'#FFF',
        fontWeight:'bold',
        
    }

});
export default StopWatchButtonStyles;
