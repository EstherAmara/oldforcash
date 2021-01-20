import React from 'react';
import * as Yup from 'yup';

import CategoryPickerItem from '../components/CategoryPickerItem';
import { CustomForm, CustomFormPicker, CustomFormField, SubmitButton} from '../components/form';
import FormImagePicker from '../components/form/FormImagePicker';
import Screen from '../components/Screen';
import useLocation from '../hooks/useLocation';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().required().min(1).max(10000).label('Price'),
    description: Yup.string().label('Description'),
    category: Yup.object().required().nullable().label('Category'),
    images: Yup.array().min(1, 'Please select at least one image'),
});

const categories = [
    {
      backgroundColor: "#fc5c65",
      icon: "floor-lamp",
      label: "Furniture",
      value: 1,
    },
    {
      backgroundColor: "#fd9644",
      icon: "car",
      label: "Cars",
      value: 2,
    },
    {
      backgroundColor: "#fed330",
      icon: "camera",
      label: "Cameras",
      value: 3,
    },
    {
      backgroundColor: "#26de81",
      icon: "cards",
      label: "Games",
      value: 4,
    },
    {
      backgroundColor: "#2bcbba",
      icon: "shoe-heel",
      label: "Clothing",
      value: 5,
    },
    {
      backgroundColor: "#45aaf2",
      icon: "basketball",
      label: "Sports",
      value: 6,
    },
    {
      backgroundColor: "#4b7bec",
      icon: "headphones",
      label: "Movies & Music",
      value: 7,
    },
    {
      backgroundColor: "#a55eea",
      icon: "book-open-variant",
      label: "Books",
      value: 8,
    },
    {
      backgroundColor: "#778ca3",
      icon: "application",
      label: "Other",
      value: 9,
    },
  ];

function ListingEditScreen(props) {
	const location = useLocation();

    return (
        <Screen>
            <CustomForm 
                initialValues = {{
                    title: '',
                    price: '',
                    description: '',
                    category: null,
                    images: []
                }}
				validationSchema = { validationSchema }
                onSubmit = {(values) => console.log(location)}
            >
				<FormImagePicker name="images" />
                <CustomFormField 
                    maxLength={255}
                    name="title"
                    placeholder="Title"
                />
                <CustomFormField
                    keyboardType="numeric"
                    maxLength={8}
                    name="price"
                    placeholder="Price"
                    width={120}
                />
                <CustomFormPicker
					items={categories}
					name="category"
                    numOfColumns = {3}
                    PickerItemComponent = {CategoryPickerItem}
                    placeholder="Category"
                    width='50%'
                />
                <CustomFormField
                    maxLength={255}
                    multiline
                    name="description"
                    numberOfLines={3}
                    placeholder="Description"
                />
                <SubmitButton title="POST" /> 
            </CustomForm>
        </Screen>
    );
}

export default ListingEditScreen;