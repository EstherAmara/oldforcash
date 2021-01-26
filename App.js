import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar, Switch, Button, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import jwtDecode from 'jwt-decode';
import AppLoading from 'expo-app-loading';

import Screen from './app/components/Screen';
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';
import ListingEditScreen from './app/screens/ListingEditScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import RegisterScreen from './app/screens/RegisterScreen';
import AuthNavigator from './app/navigation/AuthNavigator';
import myTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import OfflineNotice from './app/components/OfflineNotice';
import AuthContext from './app/auth/context';
import storage from './app/auth/storage';


export default function App() {
	const [user, setUser] = useState();
	const [isReady, setIsReady] = useState(false);
	const restoreUser = async () => {
		const user = await storage.getUser();
		if(user) setUser(user);
	}
	
	if(!isReady) {
		return <AppLoading 
			startAsync={restoreUser} 
			onFinish={() => setIsReady(true)} 
			onError= {console.warn}/>
	}
	
	return (
		<AuthContext.Provider value={{user, setUser}}>
			<NavigationContainer theme={myTheme}>
				{ user ? <AppNavigator /> : <AuthNavigator /> }
			</NavigationContainer>
			<OfflineNotice />
		</AuthContext.Provider>
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
