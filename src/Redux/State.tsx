import React from 'react';

export type propsStateType = {
    profilePage: propsPostsArrayType
    dialogsPage: propsDialogsArrayType
    messagesPage: propsMessagesArrayType
}
export type propsPostsType = {
    id: number
    message: string
    like: number
}
type propsDialogsType = {
    id: string
    name: string
}
type propsMessagesType = {
    id: number
    message: string
}

export type propsPostsArrayType = {
    posts: Array<propsPostsType>
}
export type propsDialogsArrayType = {
    dialogs: Array<propsDialogsType>
}
export type propsMessagesArrayType = {
    messages: Array<propsMessagesType>
}

let state: propsStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', like: 10},
            {id: 2, message: 'It\'s my first post', like: 25},
            {id: 3, message: 'My name Alex', like: 11}
        ]
    },

    dialogsPage: {
        dialogs: [
            {id: '1', name: 'Dimych'},
            {id: '2', name: 'Pavel'},
            {id: '3', name: 'German'},
            {id: '4', name: 'David'},
            {id: '5', name: 'Egor'},
            {id: '6', name: 'Ivan'}
        ]
    },

    messagesPage: {
        messages: [
            {id: 1, message: 'Hi boy!!!'},
            {id: 2, message: 'How is your it-kamasutra???'},
            {id: 3, message: 'YO YO YO'},
            {id: 4, message: 'HO HO HO'}
        ]
    }}
    export default state;