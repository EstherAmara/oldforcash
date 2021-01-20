import React, { useRef, useState } from 'react';
import { Alert, ScrollView, StyleSheet, View } from 'react-native';

import * as ImagePicker from 'expo-image-picker';

import ImageInput from './ImageInput';

function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
    const scrollView = useRef();

    return (
        <View>
            <ScrollView ref={scrollView} horizontal onContentSizeChange={() => 
                scrollView.current.scrollToEnd()}>
                <View style={styles.container}>
                    {
                        imageUris.map( uri => (
                            <View key={uri} style={styles.image}>
                                <ImageInput
                                    image={ uri }
                                    onChangeImage={ () => onRemoveImage(uri) }
                                />
                            </View>
                        ))
                    }
                    <ImageInput onChangeImage={ uri => onAddImage(uri)} />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    image: {
        marginRight: 5
    }
});

export default ImageInputList;