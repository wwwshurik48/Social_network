import React, {ChangeEvent, KeyboardEvent} from "react";
import s from './MyPosts.module.css'
import {Posts} from "./Post/Posts";
import {
    propsPostsArrayType, propsStateType,
    UpdateNewPostAction
} from "../../../Redux/State";

type propsMyPostsType = {
    addPost: () => void
    // postData: propsPostsArrayType
    stateApp: propsStateType
    updateNewPostText: (newText: string) => void
    // dispatch: (action: ActionsTypes) => void
    // callBackAddPost: (postText: string) => void
}

export const MyPosts = (props: propsMyPostsType) => {

    let PostsElement = props.stateApp.profilePage.posts.map(m => <Posts message={m.message} like={m.like} /> )

    // let newTextElement = React.createRef<HTMLTextAreaElement>();

    let addNewPost = () => {
        props.addPost();
        // props.dispatch(AddPostAC(props.postData.newPostText))
        // if (newTextElement.current) {
        //     props.callBackAddPost(newTextElement.current.value);
        //     props.updateNewPostText('')
        // }
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value);
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.charCode === 13) {
            addNewPost();
        }
    }
    return (
        <div className={s.myPosts}>
            <div>
                <h3>My posts</h3>
                <div className={s.form}>
                    <textarea onKeyPress={onKeyPressHandler} onChange={onPostChange} className={s.textArea} value={props.stateApp.profilePage.newPostText}></textarea>
                    <button className={s.addPost} onClick={addNewPost}>Add post</button>
                </div>
            </div>
            <div>
                <h3>New post</h3>
            </div>
            <div className={s.posts}>
                {PostsElement}
            </div>
        </div>
    )
}

// export const MyPosts = (props: propsMyPostsType) => {
//
//     let PostsElement = props.postData.posts.map(m => <Posts message={m.message} like={m.like} /> )
//
//     let newTextElement = React.createRef<HTMLTextAreaElement>();
//
//     let addNewPost = () => {
//         if (newTextElement.current) {
//             props.callBackAddPost(newTextElement.current.value);
//             props.updateNewPostText('')
//         }
//     }
//
//     const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
//         props.updateNewPostText(e.currentTarget.value);
//     }
//     props.postData.profilePage.newPostText
//     return (