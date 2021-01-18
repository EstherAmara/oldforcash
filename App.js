// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar, Switch } from 'react-native';

import WelcomeScreen from './app/screens/welcomeScreen';
import ViewImage from './app/screens/viewImageScreen';
import Card from './app/components/card';
import ListingDetailScreen from './app/screens/listingDetailScreen';
import MessagesScreen from './app/screens/messagesScreen';
import ListItemDeleteAction from './app/components/listItemDeleteAction';
import Screen from './app/components/Screen';
import Icon from './app/components/icon';
import ListItem from './app/components/listItem';
import AccountScreen from './app/screens/accountScreen';
import ListingScreen from './app/screens/listingScreen';
import CustomTextInput from './app/components/CustomTextInput';
import CustomPicker from './app/components/CustomPicker';


export default function App() {
	const [isNew, setIsNew] = useState(false);
	return (

		<Screen>
			<CustomPicker icon="apps" placeholder="Category" />
			<CustomTextInput icon="email" placeholder="Email" />
		</Screen>
		// <Screen>
		// 	<CustomTextInput placeholder="Username" icon="email" />
		// </Screen>

		// <ListingScreen />

		// <AccountScreen />
		
		// <Screen>
		// 	{/* <Icon
		// 		name="email"
		// 		size={50}
		// 		backgroundColor="red"
		// 		iconColor="white"
		// 	/> */}
		// 	<ListItem 
		// 		title="My title" 
		// 		subTitle="My subtitle"
		// 		ImageComponent={<Icon name="email" />} />
		// </Screen>

		// <ListItemDeleteAction />

		// <MessagesScreen />

		// <ListingDetailScreen />

		// <View style={styles.container}>
		// 	<Card 
		// 		title='Red jacket for sale!'
		// 		subTitle='$100'
		// 		image = {require('./assets/jacket.jpg')}
		// 	/>
		// </View>

		// <WelcomeScreen />
		
		// <ViewImage />
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
