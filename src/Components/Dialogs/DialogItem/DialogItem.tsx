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
            <img src='https://i1.wp.com/sova.ponominalu.ru/wp-content/uploads/2019/08/ava-max.jpg?fit=2000%2C1333&ssl=1' alt='ava'/>
            <Link to={props.id}>{props.name}</Link>
        </div>
    )
}

