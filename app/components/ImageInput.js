import React from 'react';
import { Alert, Image, StyleSheet, TouchableHighlight, View } from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Screen from './Screen';
import colours from '../../assets/colours';

function ImageInput({ image, onChangeImage }) {
    const handlePress = () => {
        if(!image) selectImage()
        else Alert.alert(
            'Delete item',
            'Are you sure you want to delete item?',
            [
                {
                    text: 'Yes',
                    onPress: () => onChangeImage(null)
                },
                {
                    text: 'No',
                    onPress: () => console.log('It was a mistake please spare me')
                }
            ]
        );
    }
    const selectImage = async () => {
		try {
			const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5
            });
			if(!cancelled) onChangeImage(uri);
		} catch (error) {
			console.log('error reading image');
		}
    }
    return (
        <TouchableHighlight style={styles.container} onPress={handlePress}>
            <View>
                { !image && <MaterialCommunityIcons
                    style={styles.icon}
                    name='camera'
                    size={40}
                    color={colours.mediumGray}
                />}
                { image && <Image 
                    source={{uri: image}}
                    style={styles.image}
                />}
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colours.lightGray,
        height: 100,
        width: 100,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    image: {
        width: '100%', 
        height: '100%', 
        aspectRatio: 1, 
    }
});

export default ImageInput;