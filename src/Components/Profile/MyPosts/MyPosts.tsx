import React, {ChangeEvent, KeyboardEvent} from "react";
import s from './MyPosts.module.css'
import {Posts} from "./Post/Posts";
import {MyPostsType} from "./ContainerMyPosts";
import {AppStateType} from "../../../Redux/redux-store";

// type propsMyPostsType = {
//     store: StoreType
//     addPost: () => void
//     updateNewPostText: (newText: string) => void
//     // postData: propsPostsArrayType
//     // stateApp: propsStateType
//     // dispatch: (action: ActionsTypes) => void
//     // callBackAddPost: (postText: string) => void
// }

export const MyPosts = (props: MyPostsType) => {

    let PostsElement = props.state.profilePage.posts.map(m => <Posts message={m.message} like={m.like}/>)

    // let newTextElement = React.createRef<HTMLTextAreaElement>();

    let addNewPost = () => {
        props.addPost();
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
                    <textarea onKeyPress={onKeyPressHandler} onChange={onPostChange} className={s.textArea}
                              value={props.state.profilePage.newPostText}></textarea>
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