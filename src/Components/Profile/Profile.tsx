import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {
    ActionsTypes,
    propsPostsArrayType,
} from "../../Redux/State";

type propsPostDataForProfile = {
    postData: propsPostsArrayType
    dispatch: (action: ActionsTypes) => void
    // callBackAddPost: (postText: string) => void
    // updateNewPostText: (newText: string) => void
}

export const Profile = (props: propsPostDataForProfile) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.postData}
                     dispatch={props.dispatch}
                     // callBackAddPost={props.callBackAddPost}
                     // updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}