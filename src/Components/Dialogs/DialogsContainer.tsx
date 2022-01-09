import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {ActionsTypes, propsStateType, sendMessageAC, StoreType, updateNewMessageBody} from "../../Redux/State";
import Dialogs from "./Dialogs";

export type dialogsDataForContainer = {
    stateApp: propsStateType
    dispatch: (action: ActionsTypes) => void
}

export const DialogsContainer = (props: dialogsDataForContainer) => {

    // let dialogsElement = props.dialogsData.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>);
    //
    // let messagesElement = props.messagesData.dialogsPage.messages.map(m => <MessageItem message={m.message}/>);
    //
    // let newMessageBody = props.dialogsData.dialogsPage.newMessageBody;

    let OnClickButton = () => {
        props.dispatch(sendMessageAC())
    }
    let onNewMessageChange = (body: any) => {
        props.dispatch(updateNewMessageBody(body))
    }

    return (
      <Dialogs
          updateNewMessageBody={onNewMessageChange}
          sendMessage={OnClickButton}
          stateApp={props.stateApp}
          />
    )
}

