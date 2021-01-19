import React from 'react';
import { Image, Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colours from '../../assets/colours';
import Swipeable from "react-native-gesture-handler/Swipeable";

function ListItem({ title, subTitle, IconComponent, image, style={padding: 15}, onPress, renderRightActions }) {
    return (
        <Swipeable renderRightActions={ renderRightActions }>
            <TouchableHighlight
                //shows what colour to display when you tap on the element
                underlayColor={colours.lightGray}
                onPress={onPress}
            >
                <View style={[styles.container, style]}>
                    {IconComponent}
                    {image && <Image style={styles.image} source={image}/>}
                    <View style={styles.detailsContainer}>
                        <Text style={styles.title} numberOfLines={1}> { title } </Text>

                        {subTitle && <Text style={styles.subTitle} numberOfLines={2}> { subTitle } </Text>}
                    </View>
                    <MaterialCommunityIcons 
                        name='chevron-right'
                        size={20}
                        color={colours.mediumGray}
                        style={{alignSelf: 'center'}}
                    />
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colours.white,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,  
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: 'center',
        flex: 1,
    },
    title: {
        fontWeight: '600',
    },
    subTitle: {
        color: colours.mediumGray
    }
})

export default ListItem;