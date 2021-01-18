import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/listItem';
import Separator from '../components/separator';
import ListItemDeleteAction from '../components/listItemDeleteAction';

const initialMessages = [
    {
        id: 1,
        title: 'This is a title',
        description: 'This is a description',
        image: require('../../assets/mosh.jpg')
    },
    {
        id: 2,
        title: 'This is a second title',
        description: 'This is a second description',
        image: require('../../assets/mosh.jpg')
    }
];

// const [messages, setMessages] = useState(messages);
function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const deleteHandler = message => {
        const newMessages = messages.filter( m => m.id !== message.id );
        setMessages(newMessages);
    };

    return (
        // we put the safearea view in a screen component so that we can use this  div whenever we want a content to be below the statusbar
        <Screen>
            <FlatList
                data = { messages }
                keyExtractor = {(message) => message.id.toString()}
                renderItem = {({ item }) => {
                    return <ListItem 
                        title= { item.title }
                        subTitle = { item.description }
                        image = { item.image }
                        style={styles.list}
                        onPress={()=>console.log('Message selected')}
                        renderRightActions={() => (
                            <ListItemDeleteAction onPress={() => deleteHandler(item)} />
                        )}
                    />
                } }
                ItemSeparatorComponent = {()=> <Separator />}
                refreshing = { refreshing }
                onRefresh = {() => {
                    setMessages([
                        {
                            id: 2,
                            title: 'This is a second title',
                            description: 'This is a second description',
                            image: require('../../assets/mosh.jpg')
                        }
                    ])
                }}
            />
        </Screen>
    );
};

const styles = StyleSheet.create({
    list: {
        padding: 15
    }
})

export default MessagesScreen;