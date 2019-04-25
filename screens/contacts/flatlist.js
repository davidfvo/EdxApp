import React from 'react'
import { Row } from './row';
import { FlatList } from 'react-native';


const renderItem = ({item}) => (
    <Row {...item} />
)

export const FlatListContacts = props => (
    <FlatList renderItem={renderItem} data={props.contacts} />
)