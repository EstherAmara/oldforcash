import React from 'react';
import { Text, View, StyleSheet, Image, Platform, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../../assets/colours';

export default function ViewImage() {
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <View style={styles.pinkButton}>
                    <MaterialCommunityIcons name="close" color={colors.secondary} size={30} />
                </View>
                <View style={styles.blueButton}>
                    <MaterialCommunityIcons name="trash-can-outline" color="crimson" size={30} />
                </View>
            </View>
            <Image resizeMode='contain' style={styles.image} source={require('../../assets/chair.jpg')} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black
    },
    buttonContainer: {
        top: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    pinkButton: {
        alignSelf: 'flex-start'
    },
    blueButton: {
        alignSelf: 'flex-end'
    },
    image: {
        width: '100%',
        height: '100%',
    }
});
