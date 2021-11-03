import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";


export const Profile = () => {
    return (
        <div className={s.content}>
            <img src="https://tipik.ru/wp-content/uploads/2018/11/1316796242_67_www.nevseoboi.com_.ua_.jpg"
                 alt="img"/>
            <div>
                ava+description
            </div>
            <MyPosts/>
        </div>
    )
}