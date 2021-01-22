import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';

import colours from '../../assets/colours';
import Icon from '../components/icon';
import ListItem from '../components/listItem';
import Screen from '../components/Screen';
import Separator from '../components/separator';
import route from '../navigation/route';
import MessagesScreen from '../screens/messagesScreen';

const menuItems = [
    {
        id: 1,
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colours.primary
        },
        targetScreen: route.MESSAGES
    },
    {
        id: 2,
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colours.secondary
        },
        targetScreen: route.MESSAGES
    }
]

function AccountScreen({ navigation }) {
    return (
        <Screen style={styles.screenContainer}>
            <View style={styles.container}>
                <ListItem 
                    title="Esthere Amara"
                    subTitle="esthere@gmail.com"
                    image={require('../../assets/mosh.jpg')}
                />
            </View>

            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={(menu) => menu.id.toString()}
                    ItemSeparatorComponent={Separator}
                    renderItem={({ item }) => (
                        <ListItem
                            onPress={() => navigation.navigate(item.targetScreen)}
                            title={item.title}
                            IconComponent={
                                <Icon 
                                    name={item.icon.name} 
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                        />
                    ) }
                />
            </View>

            <View>
                <ListItem
                    title="Log Out"
                    IconComponent={
                        <Icon
                            name="logout"
                            backgroundColor={colours.warning}
                        />
                    }
                />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    screenContainer: {
        backgroundColor: colours.lightGray
    },
    container: {
        marginVertical: 20
    }
})

export default AccountScreen;