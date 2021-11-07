import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {propsStateType} from "../../Redux/State";



type propsPostDataForProfile = {
    postData: propsStateType
}

export const Profile = (props: propsPostDataForProfile) => {

    // let PostData = [
    //     {id: 1, message: 'Hi, how are you?', like: 10},
    //     {id: 2, message: 'It\'s my first post', like: 25},
    //     {id: 3, message: 'My name Alex', like: 11}
    // ];

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.postData}/>
        </div>
    )
}