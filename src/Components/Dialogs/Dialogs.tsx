import React, {KeyboardEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {ActionsTypes, propsStateType, sendMessageAC, StoreType, updateNewMessageBody} from "../../Redux/State";

export type dialogsDataForDialogsType = {
    dialogsData: propsStateType
    messagesData: propsStateType
    updateNewMessageBody: (body: any) => void
    sendMessage: () => void
}

const Dialogs = (props: dialogsDataForDialogsType) => {

    let dialogsElement = props.dialogsData.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>);

    let messagesElement = props.messagesData.dialogsPage.messages.map(m => <MessageItem message={m.message}/>);

    let newMessageBody = props.dialogsData.dialogsPage.newMessageBody;

    let OnClickButton = () => {
        props.sendMessage()
    }
    let onNewMessageChange = (e: any) => {
        let body = e.currentTarget.value;
        props.updateNewMessageBody(body)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.charCode === 13) {
            OnClickButton();
        }
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
                        <textarea
                            onKeyPress={onKeyPressHandler}
                            value={newMessageBody}
                            className={s.textAreaElement}
                            placeholder='Enter your message'
                            onChange={onNewMessageChange}
                        >
                        </textarea>
                    </div>
                    <div>
                        <button onClick={OnClickButton} className={s.buttonElement}>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
//import React from "react";
// import s from './Dialogs.module.css'
// import {DialogItem} from "./DialogItem/DialogItem";
// import {MessageItem} from "./MessageItem/MessageItem";
// import {ActionsTypes, propsStateType, sendMessageAC, StoreType, updateNewMessageBody} from "../../Redux/State";
//
// export type dialogsDataForDialogsType = {
//     dialogsData: propsStateType
//     messagesData: propsStateType
//     dispatch: (action: ActionsTypes) => void
// }
//
// export const Dialogs = (props: dialogsDataForDialogsType) => {
//
//     let dialogsElement = props.dialogsData.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>);
//
//     let messagesElement = props.messagesData.dialogsPage.messages.map(m => <MessageItem message={m.message}/>);
//
//     let newMessageBody = props.dialogsData.dialogsPage.newMessageBody;
//
//     let OnClickButton = () => {
//         props.dispatch(sendMessageAC())
//     }
//     let onNewMessageChange = (e: any) => {
//         let body = e.currentTarget.value;
//         props.dispatch(updateNewMessageBody(body))
//     }
//
//     return (
//         <div className={s.dialogs}>
//             <div className={s.dialogsItem}>
//                 {dialogsElement}
//             </div>
//             <div className={s.messages}>
//                 {messagesElement}
//                 <div>
//                     <div>
//                         <textarea
//                             value={newMessageBody}
//                             className={s.textAreaElement}
//                             placeholder='Enter your message'
//                             onChange={onNewMessageChange}
//                         >
//                         </textarea>
//                     </div>
//                     <div>
//                         <button onClick={OnClickButton} className={s.buttonElement}>Send message</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }