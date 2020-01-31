import {StyleSheet} from 'react-native';

const HomeViewStyles = StyleSheet.create({
    HomeViewContainer:{
        alignItems: 'center',
    },
    WelcomeHeader : {
        marginTop: 30,
        textAlign:'center',
        fontSize:30,
        color:'#000'
    },
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
        
    }

})

export default HomeViewStyles;