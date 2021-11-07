import React from "react";
import r from './../Dialogs.module.css'
import {Link} from "react-router-dom";


type propsDialogType = {
    name: string
    id: string
}

export const DialogItem = (props: propsDialogType) => {
    return (
        <div className={r.dialog}>
            <Link to={props.id}>{props.name}</Link>
        </div>
    )
}

