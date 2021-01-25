import React from 'react';
import { useFormikContext } from 'formik';

import CustomTextInput from '../CustomTextInput';
import ErrorMessage from './errorMessage';

function CustomFormField({ name,  width, ...otherProps }) {
    const {handleChange, errors, setFieldValue, setFieldTouched, touched, values} = useFormikContext();
    return (
        <>
            <CustomTextInput
                onBlur={() => setFieldTouched(name)}
                onChangeText={text => setFieldValue(name, text)}
                value={values[name]}
                width={width}
               {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default CustomFormField;