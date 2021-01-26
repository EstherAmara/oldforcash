import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import * as Yup from 'yup';

import auth from '../api/auth';
import users from '../api/users';
import ActivityIndicator from '../components/ActivityIndicator';
import { CustomForm, CustomFormField, ErrorMessage, SubmitButton } from '../components/form';

import Screen from '../components/Screen';
import useApi from '../hooks/useApi';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label('Name'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
});

function RegisterScreen(props) {
    const registerApi = useApi(users.register);
    const loginApi = useApi(auth.login)
    const [error, setError] = useState();
    const { logIn } = useAuth();

    const handleSubmit = async (userInfo) => {
        const result = await registerApi.request(userInfo);
        if(!result.ok) {
            if (result.data) {
                setError(result.data.error);
            }
            else {
                setError("An unexpected error occurred.");
                console.log(result);
            }
            return;
        };
        const { data: authToken} = await loginApi.request(
            userInfo.email,
            userInfo.password
        );
        logIn(authToken);
    }
    return (
        <>
            <ActivityIndicator visible={registerApi.loading || loginApi.loading} 
            />
            <Screen style={styles.container}>
                <Image
                    source={require('../../assets/logo-red.png')}
                    style={styles.image}
                />
                <CustomForm
                    initialValues={{name: '', email: '', password: ''}}
                    validationSchema = {validationSchema}
                    onSubmit = {handleSubmit}
                >
                    <ErrorMessage error={error} visible={error}/>
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
                        secureTextEntry
                        textContentType="password" 
                    />
                    <SubmitButton title="Register" />
                </CustomForm>
            </Screen>
        </>
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