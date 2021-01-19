import React, { useState } from 'react';
import { Button, FlatList, Modal, Platform, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colours from '../../assets/colours';
import Screen from './Screen';
import PickerItem from './pickerItem';
import { TouchableHighlight } from 'react-native-gesture-handler';

function CustomPicker({ 
    icon, 
    items, 
    numOfColumns = 1,
    onSelectItem, 
    PickerItemComponent = PickerItem, 
    placeholder, 
    selectedItem, 
    width='100%' 
}) {
    const [modalVisibility, setModalVisibility] = useState(false)
    return (
        <React.Fragment>
            <TouchableWithoutFeedback onPress={() => setModalVisibility(true)}>
                <View style={[styles.container, { width }]}>
                    { icon && 
                        <MaterialCommunityIcons 
                            name={ icon } 
                            size={20} 
                            color={colours.mediumGray}
                            style={{marginRight: 10, alignSelf: 'center'}} 
                        /> 
                    }
                    {
                        <Text style={styles.text}> 
                            { selectedItem ? selectedItem.label : placeholder } 
                        </Text>
                    }
                    <MaterialCommunityIcons 
                        name="chevron-down"
                        size={20} 
                        color={colours.mediumGray}
                    /> 
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisibility} animationType="slide ">
                <Screen>
                    <MaterialCommunityIcons
                        name="close"
                        size={20}
                        color={colours.danger}
                        onPress={()=>setModalVisibility(false)}
                        style={{
                            alignSelf: 'center'
                        }}
                    />
                    <FlatList 
                        data={items}
                        keyExtractor={(item) => item.value.toString()}
                        numColumns={numOfColumns}
                        renderItem={({ item }) => <PickerItemComponent 
                            item={item}
                            label={item.label}
                            onPress={() => {
                                setModalVisibility(false)
                                onSelectItem(item)
                            }}
                        />}
                    />
                </Screen>
            </Modal>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colours.lightGray,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        marginVertical: 10,
    },
    text: {
        fontSize: 18,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
        color: colours.mediumGray,
        flex: 1,
    }
})

export default CustomPicker;