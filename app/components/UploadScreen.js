import React from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';
import * as Progress from 'react-native-progress';
import LottieView from 'lottie-react-native';

import colours from '../../assets/colours';

function UploadScreen({ done, progress = 0, visible = false}) {
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                { 
                    progress < 1 ? (
                        <Progress.Bar color={colours.primary} progress={progress} width={200} />
                    ) : (
                        <LottieView 
                            autoPlay
                            loop
                            onAnimationFinish={done}
                            source={require('../../assets/animations/done.json')}
                            style={styles.animation}
                        />
                    )                
                }
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    animation: {
        width: 150
    }
});

export default UploadScreen;