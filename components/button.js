import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const CustomButtons = (props) => {
    return (
        <TouchableOpacity>
            <View style={styles.button}>
                <Text style={ styles.buttonText }>
                    { props.text } 
                    {console.log(props)}
                </Text>
            </View>
        </TouchableOpacity>
    )
};

export default CustomButtons;

const styles = StyleSheet.create({
    button: {
        paddingVertical: 14,
        paddingHorizontal: 10,
        // backgroundColor: type == 'peach' ? '#fc5c65' : 'dodgerblue'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center'
    }
})