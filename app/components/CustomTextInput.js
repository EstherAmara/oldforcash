import React from 'react';
import { Platform, StyleSheet, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colours from '../../assets/colours';

function CustomTextInput({ icon, width = '100%', ...otherProps }) {
    return (
        <View style={[styles.container, { width }]}>
            { icon && 
                <MaterialCommunityIcons 
                    name={ icon } 
                    size={20} 
                    color={colours.mediumGray}
                    style={{marginRight: 10, alignSelf: 'center'}} 
                /> 
            }
            <TextInput 
                style={styles.textInput}
                placeholderTextColor={colours.mediumGray}
                {...otherProps}
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
    textInput: {
        fontSize: 18,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
        color: colours.darkGray,
        // backgroundColor: 'blue',
        flex: 1
    }
})

export default CustomTextInput;