import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import * as Yup from 'yup';
import { CustomForm, CustomFormField, SubmitButton } from '../components/form';

import Screen from '../components/Screen';

function RegisterScreen(props) {
    const validationSchema = Yup.object().shape({
        name: Yup.string().required().label('Name'),
        email: Yup.string().required().email().label('Email'),
        password: Yup.string().required().min(4).label('Password'),
    });
    return (
        <Screen style={styles.container}>
            <Image
                source={require('../../assets/logo-red.png')}
                style={styles.image}
            />
            <CustomForm
                initialValues={{name: '', email: '', password: ''}}
                validationSchema = {validationSchema}
                onSubmit = {(values) => console.log(values)}
            >
                <CustomFormField
                    icon='account'
                    name='name'    
                    placeholder='Name'     
                    textContentType="name"            
                />
                <CustomFormField
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyBoard='email-address'
                    icon='email'
                    name='email'
                    placeholder='Email'
                    textContentType="emailAddress" 
                />
                <CustomFormField
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='lock'
                    name='password'
                    placeholder='Password'
                    secureTextContent
                    textContentType="password" 
                />
                <SubmitButton title="Register" />
            </CustomForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    image: {
        alignSelf: 'center',
        width: 80,
        height: 80,   
        marginTop: 50, 
        marginBottom: 20,
    }
});

export default RegisterScreen;