import React from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

function ActivityIndicator({ visible = false }) {
    if (!visible) return null;
    return (
        <LottieView
            autoPlay
            loop
            source={require('../../assets/animations/lf30_editor_yzy51cgg.json')} />
    );
}

const styles = StyleSheet.create({
    container: {

    }
});

export default ActivityIndicator;