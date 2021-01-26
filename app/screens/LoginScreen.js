import React, { useState } from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import * as Yup from 'yup';

import authApi from '../api/auth';
import { ErrorMessage, CustomFormField, CustomForm, SubmitButton } from '../components/form';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
});

function LoginScreen(props) {
    const { logIn } = useAuth();
    const [loginFailed, setloginFailed] = useState(false);
    const handleSubmit = async ({ email, password }) => {
        const result = await authApi.login(email, password);
        if(!result.ok) return setloginFailed(true);
        setloginFailed(false);
        logIn(result.data);
    }
    return (
        <Screen style={styles.container}>
            <Image 
                source={require('../../assets/logo-red.png')}
                style={styles.logo}
            />
            <ErrorMessage error="Invalid email and/or password" visible={loginFailed} />
            <CustomForm
                initialValues={{email: '', password: ''}}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <CustomFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    placeholder="Email"
                    keyboardType="email-address" 
                    name="email"
                    textContentType="emailAddress"               
                />
                <CustomFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    placeholder="Password"
                    name="password"
                    secureTextEntry
                    textContentType="password"               
                /> 
                <SubmitButton title="Login" />
                
            </CustomForm>
            
        </Screen>
    )
};
const styles = StyleSheet.create({
    container: {
        padding: 10  
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20
    }
})
export default LoginScreen;