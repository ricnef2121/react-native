import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const HomeView = () => {
    return(
        <View style={{flex:1}}>
            <View stye={{flex:1}}>
                <Text>Good Mornig</Text>
            </View>
            <View style={{flex:2}}>
                <TouchableOpacity onPress={()=> console.log('button press')}>
                <Text>START</Text>
                </TouchableOpacity>
                
            </View>

        </View>
    

    );
}
