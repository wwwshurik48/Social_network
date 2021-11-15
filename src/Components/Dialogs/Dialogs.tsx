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

    let dialogsElement = props.dialogsData.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>);

    let messagesElement = props.messagesData.dialogsPage.messages.map(m => <MessageItem message={m.message}/>);

    let textAreaElement = React.createRef<HTMLTextAreaElement>()

    let buttonElement = () => {
        let text = textAreaElement.current && textAreaElement.current.value;
        alert(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
                <div>
                    <div>
                        <textarea ref={textAreaElement} className={s.textAreaElement}></textarea>
                    </div>
                    <div>
                        <button onClick={buttonElement} className={s.buttonElement}>Add new message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

