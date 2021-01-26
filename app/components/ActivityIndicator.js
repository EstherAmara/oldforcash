import React from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

function ActivityIndicator({ visible = false }) {
    if (!visible) return null;
    return (
        <View style={styles.overlay}>
            <LottieView
                autoPlay
                loop
                source={require('../../assets/animations/lf30_editor_yzy51cgg.json')} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    overlay: {
        backgroundColor: 'white',
        position: 'absolute',
        height: '100%',
        width: '100%',
        opacity: 0.8,
        zIndex: 1,
    }
});

export default ActivityIndicator;