import React from "react";
import s from './Posts.module.css'

type propsType = {
    message: string
    like: number
}


export const Posts = (props: propsType) => {
    return (
                <div className={s.item}>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA8w2Ky2pcF1sZE-dyBpHh7S5nj72ZnYC-Zg&usqp=CAU'/>
                   {props.message}
                    <div>
                        <span>Like {props.like}</span>
                    </div>
                </div>



    )
}