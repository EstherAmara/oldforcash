import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';

import colours from '../../assets/colours';
import ListItem from '../components/listItem'

function ListingDetailScreen(props) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={require('../../assets/jacket.jpg')} />
            <View style={styles.textContainer}>
                <Text style={styles.title}> Red jacket for sale </Text>
                <Text style={styles.subTitle}> $100 </Text>
                <View style={styles.listContainer}>
                    <ListItem
                        image={require('../../assets/mosh.jpg')}
                        title='Mosh Hamedani'
                        subTitle='5 Listings'
                        style={{padding: 0}}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: colours.white,
        marginBottom: 15,
    },
    image: {
        width: '100%',
        height: 300 , 
    },
    textContainer: {
        padding: 15
    },
    listContainer: {
        marginVertical: 50
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

export default ListingDetailScreen;