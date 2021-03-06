import React from 'react';
import SidebarReducer from "./Sidebar-reducer";
import DialogsReducer from "./Dialogs-reducer";
import ProfileReducer from "./Profile-reducer";


const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"
const SEND_MESSAGE = "SEND-MESSAGE"

type propsStateType = {
    profilePage: propsPostsArrayType
    dialogsPage: propsDialogsArrayType
    sideBar: {}
}
type propsPostsType = {
    id: number
    message: string
    like: number
}
type propsPostsArrayType = {
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

type propsDialogsArrayType = {
    dialogs: Array<propsDialogsType>
    messages: Array<propsMessagesType>
    newMessageBody: string
}

type StoreType = {
    _state: propsStateType
    _callSubscriber: (store: StoreType) => void
    subscriber: (observer: (store: StoreType) => void) => void
    getState: () => propsStateType
    dispatch: (action: ActionsTypes) => void
}
type ActionsTypes =
    | ReturnType<typeof AddPostAC>
    | ReturnType<typeof UpdateNewPostAction>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof updateNewMessageBody>;

 const AddPostAC = () => {
     return {
         type: ADD_POST
     }as const
 }

  const UpdateNewPostAction = (newText: string) => {
     return{
         type: UPDATE_NEW_POST_TEXT, newText
     }as const
 }

  const sendMessageAC = () => {
     return {
         type: SEND_MESSAGE
     } as const
 }
 const updateNewMessageBody = (body: string) => {
     return{
         type: UPDATE_NEW_MESSAGE_BODY, body: body
     } as const
 }

const store: any = {
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
            ],
            newMessageBody: ''
        },
        sideBar: {}
    },
    _callSubscriber() {
        console.log('state change');
    },

    subscriber(observer: any) {
        this._callSubscriber = observer;
    },

    getState() {
        return this._state;
    },

    dispatch(action: any) {
        this._state.profilePage = ProfileReducer(this._state.profilePage as any, action)
        this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action)
        this._state.sideBar = SidebarReducer(store)
        this._callSubscriber(store)

        // if (action.type === ADD_POST) {
        //     let newPost: propsPostsType = {id: 4, message: action.postText, like: 0};
        //     this._state.profilePage.posts.push(newPost);
        //     this._state.profilePage.newPostText = '';
        //     this._callSubscriber(store);
        //
        // }else if (action.type === UPDATE_NEW_POST_TEXT){
        //     this._state.profilePage.newPostText = action.newText;
        //     this._callSubscriber(store);
        //
        // }else if (action.type === UPDATE_NEW_MESSAGE_BODY){
        //     this._state.dialogsPage.newMessageBody = action.body;
        //     this._callSubscriber(store)
        //
        // }else if (action.type === SEND_MESSAGE) {
        //     let body = this._state.dialogsPage.newMessageBody;
        //     this._state.dialogsPage.newMessageBody = '';
        //     this._state.dialogsPage.messages.push({id: 5, message: body})
        //     this._callSubscriber(store)
        // }
    }
}

// export default store;
