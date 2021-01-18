import React from 'react';
import { Image, Text, View, StyleSheet, TouchableHighlight } from 'react-native';

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
                        <Text style={styles.title}> { title } </Text>
                        {subTitle && <Text style={styles.subTitle}> { subTitle } </Text>}
                    </View>
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
        justifyContent: 'center'
    },
    title: {
        fontWeight: '600',
    },
    subTitle: {
        color: colours.mediumGray
    }
})

export default ListItem;