import React from "react";
import s from './../Dialogs.module.css'

type propsMessagesType = {
    message: string
}

export const MessageItem = (props: propsMessagesType) => {
    return (
        <div className={s.dialog}>
            {props.message}
        </div>
    )
}



