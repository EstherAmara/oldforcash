import React from 'react';
import { useFormikContext } from 'formik';

import CustomTextInput from '../CustomTextInput';
import ErrorMessage from './errorMessage';

function CustomFormField({ name,  width, ...otherProps }) {
    const {handleChange, errors, setFieldTouched, touched} = useFormikContext();
    return (
        <>
            <CustomTextInput
                onBlur={() => setFieldTouched(name)}
                onChangeText={handleChange(name)}
                width={width}
               {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default CustomFormField;