import React from "react";
import s from './MyPosts.module.css'
import {Posts} from "./Post/Posts";
import {propsStateType} from "../../../Redux/State";


type propsMyPostsType = {
    postData: propsStateType
}

export const MyPosts = (props: propsMyPostsType) => {
    // let PostData = [
    // {id: 1, message: 'Hi, how are you?', like: 10},
    // {id: 2, message: 'It\'s my first post', like: 25},
    // {id: 3, message: 'My name Alex', like: 11}]

    let PostsElement = props.postData.profilePage.posts.map(m => <Posts message={m.message} like={m.like}/>)
    return (
        <div className={s.myPosts}>
            <div>
                <h3>My posts</h3>
                <div className={s.form}>
                    <textarea className={s.textArea}></textarea>
                    <button className={s.addPost}>Add post</button>
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