import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Constants from 'expo-constants'

function Screen({ children, style }) {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            {children}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        // this makes sure whatever content we use sits under the device's statusbar
        paddingTop: Constants.statusBarHeight,
        flex: 1,
    }
})

export default Screen;