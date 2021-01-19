import React from 'react';
import { useFormikContext } from 'formik';

import CustomPicker from '../CustomPicker'
import ErrorMessage from './errorMessage';
import CategoryPickerItem from '../CategoryPickerItem';

function CustomFormPicker({ 
    items, 
    name, 
    numOfColumns, 
    PickerItemComponent, 
    placeholder, 
    width 
}) {
    const { errors, setFieldValue, touched, values } = useFormikContext();
    
    return (
        <>
            <CustomPicker
                items= {items}
                numOfColumns = {numOfColumns}
                onSelectItem = {(item) => setFieldValue(name, item)}
                PickerItemComponent = {PickerItemComponent}
                placeholder = {placeholder}
                selectedItem = { values[name] }
                width = { width }
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default CustomFormPicker;