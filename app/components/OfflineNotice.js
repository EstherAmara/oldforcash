import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { useNetInfo } from '@react-native-community/netinfo';

import colours from '../../assets/colours';
import Screen from './Screen';


function OfflineNotice(props) {
    const netInfo = useNetInfo();
    if(netInfo.type !== 'unknown' && netInfo.isInternetReachable === false)
        return (
            <View style={styles.container}>
                <Text style={styles.text}> Looks like you're Offline </Text>
            </View>
        );
    return null;
}

const styles = StyleSheet.create({
    container: {  
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colours.primary,
        height: 50,
        position: 'absolute',
        top: Constants.statusBarHeight,
        width: '100%',
        zIndex: 10,
    },
    text: {
        color: colours.white,
    }
});

export default OfflineNotice;