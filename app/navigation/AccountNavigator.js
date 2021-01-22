import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AccountScreen from '../screens/accountScreen';
import MessagesScreen from '../screens/messagesScreen';

const Stack = createStackNavigator();

const AccountNavigator = () => (
    <Stack.Navigator mode="card">
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Messages" component={MessagesScreen} />
    </Stack.Navigator>
);

export default AccountNavigator;