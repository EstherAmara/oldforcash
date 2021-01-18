import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CustomButtons from '../components/button.js';

const ViewImage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <CustomButtons style={styles.buttons} text='Log In' type='peach' />
                <CustomButtons style={styles.buttons} text='Sign Up' type='blue' />
            </View>
        </View>
    )
}

export default ViewImage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    buttons: {  
    }
})