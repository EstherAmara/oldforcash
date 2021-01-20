import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar, Switch, Button, Image } from 'react-native';

import Screen from './app/components/Screen';
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';
import ListingEditScreen from './app/screens/ListingEditScreen';


export default function App() {
	return (
        // <Screen>
		// 	<ImageInputList 
		// 		imageUris = { imageUris }
		// 		onAddImage = { uri => handleAdd(uri) }
		// 		onRemoveImage = { uri => handleRemove(uri) }
		// 	/>
		// </Screen>
		<ListingEditScreen />
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
