import React from 'react';
import { Formik } from 'formik';

import CustomButton from '../customButton';

function CustomForm({ initialValues, onSubmit, validationSchema, children}) {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
        { ({ handleSubmit }) => (
            <>
                { children }       
            </>
        )}
    </Formik>
    );
}

export default CustomForm;