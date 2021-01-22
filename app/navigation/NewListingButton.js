import React from 'react';
import { StyleSheet, TouchableOpacity as TouchableWithoutFeedback, View } from 'react-native';
import colours from '../../assets/colours';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function NewListingButton({ onPress }) {
    return (
        <TouchableWithoutFeedback style={styles.container} onPress={onPress}>
            <View>
                <MaterialCommunityIcons 
                    name='plus-circle' 
                    color={colours.white} 
                    size={40} />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colours.primary,
        borderColor: colours.white,
        borderRadius: 40,
        borderWidth: 10,
        bottom: 30,
        height: 80,
        width: 80,
    }
});

export default NewListingButton;