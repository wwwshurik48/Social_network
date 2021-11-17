import React from 'react';

let rerenderTree = (state:propsStateType) => {
    console.log('state change')
}

export const subscriber = (callback: (state:propsStateType) => void) => {
    rerenderTree = callback
}

export type propsStateType = {
    profilePage: propsPostsArrayType
    dialogsPage: propsDialogsArrayType
    siteBar: {}
}
export type propsPostsType = {
    id: number
    message: string
    like: number
}
export type propsPostsArrayType = {
    posts: Array<propsPostsType>
    newPostText: string
}

type propsDialogsType = {
    id: string
    name: string
}

type propsMessagesType = {
    id: number
    message: string
}

export type propsDialogsArrayType = {
    dialogs: Array<propsDialogsType>
    messages: Array<propsMessagesType>
}

let state: propsStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', like: 10},
            {id: 2, message: 'It\'s my first post', like: 25},
            {id: 3, message: 'My name Alex', like: 11}
        ],
        newPostText: ''
    },
    dialogsPage: {
        dialogs: [
            {id: '1', name: 'Dimych'},
            {id: '2', name: 'Pavel'},
            {id: '3', name: 'German'},
            {id: '4', name: 'David'},
            {id: '5', name: 'Egor'},
            {id: '6', name: 'Ivan'}
        ],
        messages: [
            {id: 1, message: 'Hi boy!!!'},
            {id: 2, message: 'How is your it-kamasutra???'},
            {id: 3, message: 'YO YO YO'},
            {id: 4, message: 'HO HO HO'}
        ]
    },
    siteBar: {}
}

export let addPost = (postText: string) => {
    let newPost: propsPostsType = {id: 4, message: postText, like: 0}
    state.profilePage.posts.push(newPost)
    rerenderTree(state);
}

export let updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderTree(state);
}

export default state;