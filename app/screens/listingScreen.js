import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';

import listingsApi from '../api/listings';

import ActivityIndicator from '../components/ActivityIndicator';
import Card from '../components/card';
import colours from '../../assets/colours';
import CustomButton from '../components/customButton';
import route from '../navigation/route';
import Screen from '../components/Screen';
import useApi from '../hooks/useApi';

function ListingScreen({ navigation }) {
    
    const {data:listings, error, loading, request:loadListings} = useApi(listingsApi.getListings);

    useEffect(() => {
        loadListings();
    }, []);

    return (
        <>
            <ActivityIndicator visible={loading} />
            <Screen style={styles.screenContainer}>        
                {
                    error && <> 
                        <Text> Couldn't retrieve the listings </Text>
                        <CustomButton onPress={loadListings} title="Retry"> Retry </CustomButton>
                    </>
                }
                <FlatList
                    data={listings}
                    keyExtractor={listing => listing.id.toString()}
                    renderItem={({ item }) => (
                        <Card
                            title={item.title}
                            subTitle={"$" + item.price}
                            imageUrl={item.images[0].url}
                            thumbnailUrl={item.images[0].thumbnailUrl}
                            onPress={ () => navigation.navigate(route.LISTING_DETAILS, item)}
                        />
                    )}
                />
            </Screen>
        </>
    );
}

const styles = StyleSheet.create({
    screenContainer: {
        padding: 20,
        backgroundColor: colours.lightGray
    }
})

export default ListingScreen;