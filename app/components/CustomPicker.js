import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colours from '../../assets/colours';

function CustomPicker({ icon, placeholder, ...otherProps }) {
    return (
        <View style={styles.container}>
            { icon && 
                <MaterialCommunityIcons 
                    name={ icon } 
                    size={20} 
                    color={colours.mediumGray}
                    style={{marginRight: 10, alignSelf: 'center'}} 
                /> 
            }
            <Text style={styles.text}> { placeholder } </Text>
            <MaterialCommunityIcons 
                    name="chevron-down"
                    size={20} 
                    color={colours.mediumGray}
                /> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colours.lightGray,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        marginVertical: 10,
    },
    text: {
        fontSize: 18,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
        color: colours.darkGray,
        flex: 1,
    }
})

export default CustomPicker;