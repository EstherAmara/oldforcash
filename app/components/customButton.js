import React from 'react';
import { Text, StyleSheet, TouchableHighlight } from 'react-native';

import colours from '../../assets/colours';

function CustomButton({ title, onPress, buttonColour='primary' }) {
    return (
        <TouchableHighlight style={[styles.button, {backgroundColor: colours[buttonColour]}]} onPress={onPress}>
            <Text style={styles.text}> { title } </Text>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colours.primary,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%',
        marginVertical: 8
    },
    text: {
        color: colours.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})

export default CustomButton;