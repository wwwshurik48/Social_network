import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {propsStateType} from "../../Redux/State";


export type dialogsDataForDialogsType = {
    dialogsData: propsStateType
    messagesData: propsStateType

}

export const Dialogs = (props: dialogsDataForDialogsType) => {

    // let dialogsData = [
    //     {id: '1', name: 'Dimych'},
    //     {id: '2', name: 'Pavel'},
    //     {id: '3', name: 'German'},
    //     {id: '4', name: 'David'},
    //     {id: '5', name: 'Egor'},
    //     {id: '6', name: 'Ivan'}
    // ]

    let dialogsElement = props.dialogsData.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>);

    // let messagesData = [
    //     {id: 1, message: 'Hi boy!!!'},
    //     {id: 2, message: 'How is your it-kamasutra???'},
    //     {id: 3, message: 'YO YO YO'},
    //     {id: 4, message: 'HO HO HO'}
    // ]

    let messagesElement = props.messagesData.messagesPage.messages.map(m => <MessageItem message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    )
}

