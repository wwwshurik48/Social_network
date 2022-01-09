import React, {ChangeEvent} from "react";
import {Posts} from "./Post/Posts";
import {
    ActionsTypes,
    AddPostAC,
    propsPostsArrayType, propsStateType,
    UpdateNewPostAction
} from "../../../Redux/State";
import {MyPosts} from "./MyPosts";

type propsContainerMyPostsType = {
    // postData: propsPostsArrayType
    stateApp: propsStateType
    dispatch: (action: ActionsTypes) => void
    // callBackAddPost: (postText: string) => void
    // updateNewPostText: (newText: string) => void

}

const ContainerMyPosts = (props: propsContainerMyPostsType) => {

    let addNewPost = () => {
        props.dispatch(AddPostAC(props.stateApp.profilePage.newPostText))

        // if (newTextElement.current) {
        //     props.callBackAddPost(newTextElement.current.value);
        //     props.updateNewPostText('')
        // }
    }

    const onPostChange = (newPostText: string) => {
        props.dispatch(UpdateNewPostAction(newPostText))
        // props.updateNewPostText(e.currentTarget.value);
    }

    return  (

        <MyPosts stateApp={props.stateApp} addPost={addNewPost} updateNewPostText={onPostChange}/>)

}

export default ContainerMyPosts;

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