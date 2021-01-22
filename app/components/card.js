import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import colours from '../../assets/colours';

function Card({ title, subTitle, image, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.card}>
                <Image style={styles.image} source={image} />
                <View style={styles.textContainer}>
                    <Text style={styles.title} numberOfLines={1}> { title } </Text>
                    <Text style={styles.subTitle} numberOfLines={2}> { subTitle } </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colours.white,
        marginBottom: 15,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200 , 
    },
    textContainer: {
        padding: 15
    },
    title: {
        marginBottom: 5,
        fontWeight: '600',
        fontSize: 18
    },
    subTitle: {
        fontWeight: 'bold',
        color: colours.secondary
    }
});

export default Card;