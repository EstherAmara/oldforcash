import React from 'react';
import { Formik } from 'formik';

import CustomButton from '../customButton';
import CustomFormField from './CustomFormField';

function CustomForm({ initialValues, onSubmit, validationSchema, children}) {
    return (
        <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
    >
        { ({  }) => (
            <>
                { children }         
            </>
        )}
    </Formik>
    );
}

export default CustomForm;