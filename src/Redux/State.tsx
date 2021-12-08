import React from 'react';

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

export type StoreType = {
    _state: propsStateType
    _callSubscriber: (store: StoreType) => void
    subscriber: (observer: (store: StoreType) => void) => void
    getState: () => propsStateType
    dispatch: (action: ActionsTypes) => void
}
export type ActionsTypes = ReturnType<typeof AddPostAC> | ReturnType<typeof UpdateNewPostAction> ;

 export const AddPostAC = (postText: string) => {
     return {
         type: "ADD-POST", postText: postText
     }as const
 }

 export const UpdateNewPostAction = (newText: string) => {
     return{
         type: "UPDATE-NEW-POST-TEXT", newText
     }as const
 }

const store: StoreType = {
    _state: {
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
    },
    _callSubscriber() {
        console.log('state change');
    },

    subscriber(observer) {
        this._callSubscriber = observer;
    },

    getState() {
        return this._state;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost: propsPostsType = {id: 4, message: action.postText, like: 0};
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(store);
        }else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(store);
        }
    },


}

export default store;
