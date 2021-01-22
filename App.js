import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar, Switch, Button, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Screen from './app/components/Screen';
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';
import ListingEditScreen from './app/screens/ListingEditScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import RegisterScreen from './app/screens/RegisterScreen';
import AuthNavigator from './app/navigation/AuthNavigator';
import myTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';


export default function App() {
	return (
		<NavigationContainer theme={myTheme}>
			{/* <AuthNavigator /> */}
			<AppNavigator />
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({	
	container: {
		flex: 1,
		backgroundColor: '#f0f0f0',
		paddingHorizontal: 15,
		paddingTop: 70

	}
});
