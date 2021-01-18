import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native';
import CustomButtons from '../../components/button';
import CustomButton from '../components/customButton';


function WelcomeScreen(props) {
    return (
        <ImageBackground 
        style={styles.background}
        source={require('../../assets/background.jpg')} >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../../assets/logo-red.png')} />
                <Text style={styles.tagline}> Trade your Old stuff for Cash</Text>
            </View>
            <View style={styles.buttonContainer}>
                <CustomButton title='Login' onPress={()=>console.log('hello')} />
                <CustomButton title='Register' onPress={()=>console.log('hello')} buttonColour='secondary' />   
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
   background: {
       flex: 1,
       justifyContent: 'flex-end',
       alignItems: 'center',
   },
   logoContainer: {
       position: 'absolute',
       top: 60,
       alignItems: 'center'
   },
   logo: {
       width: 100,
       height: 100,
    //    position: 'absolute',
    //    top: 50
   },
   tagline: {
       paddingVertical: 10,
       fontWeight: 'bold'

   },
   buttonContainer: {
       width: '100%',
       padding: 20
   }
});

export default WelcomeScreen;