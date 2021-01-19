import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import {  } from 'react-native-gesture-handler';

function PickerItem({ item, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.text}> { item.label } </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        padding: 20
    }
});

export default PickerItem;