import React from 'react';
import { StyleSheet, Text } from 'react-native';
import * as Yup from 'yup'

import CategoryPickerItem from '../components/CategoryPickerItem';
import CustomPicker from '../components/CustomPicker';
import { CustomForm, CustomFormPicker, CustomFormField, SubmitButton} from '../components/form';
import Screen from '../components/Screen'

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().required().min(1).max(10000).label('Price'),
    description: Yup.string().label('Description'),
    category: Yup.object().required().nullable().label('Category')
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
    return (
        <Screen>
            <CustomForm 
                initialValues = {{
                    title: '',
                    price: '',
                    description: '',
                    category: null
                }}
                onSubmit = { values => console.log(values)}
                validationSchema = { validationSchema }
            >
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
                <SubmitButton title="Post" />
            </CustomForm>
        </Screen>
    );
}

export default ListingEditScreen;