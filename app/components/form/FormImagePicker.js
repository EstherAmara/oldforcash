import React from 'react';

import { useFormikContext } from 'formik';

import ErrorMessage from './errorMessage';
import ImageInputList from '../ImageInputList';

function FormImagePicker({ name }) {
    const { errors, setFieldValue, touched, values } = useFormikContext();

    const handleAdd = (uri) => {
		setFieldValue(name, [...values[name], uri]);
	};
	const handleRemove = (uri) => {	
		setFieldValue(name, values[name].filter( imageUri => imageUri !== uri))
	}

    return (
        <>
            <ImageInputList 
                imageUris = { values[name] }
                onAddImage = { handleAdd } //same as (uri) => handleAdd(uri)
                onRemoveImage = { handleRemove } // same as (uri) => handleRemove(uri)
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default FormImagePicker;