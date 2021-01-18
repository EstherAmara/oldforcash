import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import colours from '../../assets/colours';
import Card from '../components/card';
import ListItem from '../components/listItem';

import Screen from '../components/Screen';

const initialListings = [
    {
        id: 1,
        title: 'Red jacket for sale',
        price: 100,
        image: require('../../assets/jacket.jpg')
    },
    {
        id: 2,
        title: 'Couch in great condition',
        price: 1000,
        image: require('../../assets/couch.jpg')
    }
]
function ListingScreen(props) {
    const [listings, setListing] = useState(initialListings);
    const [refresh, setRefresh] = useState(false);

    return (
        <Screen style={styles.screenContainer}>
            <FlatList
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) => (
                    <Card
                        title={item.title}
                        subTitle={"$" + item.price}
                        image={item.image}
                    />
                    // <ListItem
                    //     title={item.title}
                    //     subTitle={item.price}
                    //     image={item.image}
                    // />
                )}
                refreshing = { refresh }
                onRefresh = {() => {
                    setListing([
                        {
                            id: 3,
                            title: 'Another Couch in great condition',
                            price: 1000,
                            image: require('../../assets/couch.jpg')
                        }   
                    ])
                }}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screenContainer: {
        padding: 20,
        backgroundColor: colours.lightGray
    }
})

export default ListingScreen;