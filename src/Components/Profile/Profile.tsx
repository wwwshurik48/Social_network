import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {propsStateType, updateNewPostText} from "../../Redux/State";

type propsPostDataForProfile = {
    postData: propsStateType
    callBackAddPost: (postText: string) => void
}

export const Profile = (props: propsPostDataForProfile) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.postData}
                     callBackAddPost={props.callBackAddPost}
                     updateNewPostText={updateNewPostText}
            />
        </div>
    )
}