import {ActionsTypes, propsDialogsArrayType, propsStateType} from "./State";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"
const SEND_MESSAGE = "SEND-MESSAGE"

let initialState = {
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
}

const DialogsReducer = (store: propsDialogsArrayType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            store.newMessageBody = action.body;
            return store
        case SEND_MESSAGE:
            let body = store.newMessageBody;
            store.newMessageBody = '';
            store.messages.push({id: 5, message: body})
            return store
        default:
            return store
    }
}
export default DialogsReducer;