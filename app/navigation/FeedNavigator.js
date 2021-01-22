import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ListingScreen from '../screens/listingScreen';
import ListingDetailScreen from '../screens/listingDetailScreen'

const Stack = createStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator mode="card" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Listings" component={ListingScreen} />
        <Stack.Screen name="ListingDetails" component={ListingDetailScreen} />
    </Stack.Navigator>
);

export default FeedNavigator;