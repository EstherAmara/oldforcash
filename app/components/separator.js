import React from 'react';
import { View, StyleSheet } from 'react-native';
import colours from '../../assets/colours';

function Separator(props) {
    return (
        <View style={styles.separator} />
    );
}

const styles = StyleSheet.create({
   separator: {
       width: '100%',
       height: 1,
       backgroundColor: colours.lightGray
   } 
})

export default Separator;