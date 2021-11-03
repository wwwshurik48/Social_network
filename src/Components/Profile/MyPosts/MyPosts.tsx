import React from "react";
import s from './MyPosts.module.css'
import {Posts} from "./Post/Posts";


export const MyPosts = () => {
    return (
        <div>
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
            </div>
            <div>
                New post
            </div>
            <div className={s.posts}>
                <Posts message={'Hi, how are you?'} like={10}/>
                <Posts message={"It's my first post"} like={25}/>
                <Posts message={'My name Alex'} like={11}/>
            </div>
        </div>
    )
}