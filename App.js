import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar, Switch } from 'react-native';

import * as ImagePicker from 'expo-image-picker';

import Screen from './app/components/Screen';


export default function App() {
	const requestPermission = async () => {
		const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
		if (!granted)
			alert('You need to enable permission to acess the library');
	}

	useEffect(() => {
		requestPermission();
	}, [])
	return (
		<Screen>

		</Screen>
	);
}

const styles = StyleSheet.create({	
	container: {
		flex: 1,
		backgroundColor: '#f0f0f0',
		paddingHorizontal: 15,
		paddingTop: 70

	},
	button: {		
	}
});
