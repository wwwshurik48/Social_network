import React from "react";
import {
    AddPostAC,
    UpdateNewPostAction
} from "../../../Redux/State";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {Dispatch} from "redux";

export type MyPostsType = MapStateForMyPost & MapDispatchForMyPost

type MapStateForMyPost = { state: AppStateType }

type MapDispatchForMyPost = {
    updateNewPostText: (newPostText: string) => void
    addPost: () => void
}

let mapStateForMyPost = (state: AppStateType): MapStateForMyPost => {
    return {
        state: state
    }
}
let mapDispatchForMyPost = (dispatch: Dispatch): MapDispatchForMyPost => {
    return {
        updateNewPostText: (newPostText: string) => {
            let action = UpdateNewPostAction(newPostText)
            dispatch(action)
        },
        addPost: () => {
            dispatch(AddPostAC())
        }
    }
}

const ContainerMyPosts = connect(mapStateForMyPost, mapDispatchForMyPost)(MyPosts);

export default ContainerMyPosts;

// type propsContainerMyPostsType = {
//     store: StoreType
//     // postData: propsPostsArrayType
//     // stateApp: propsStateType
//     // dispatch: (action: ActionsTypes) => void
//     // callBackAddPost: (postText: string) => void
//     // updateNewPostText: (newText: string) => void
//
// }

// const ContainerMyPosts = () => {
//
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let addNewPost = () => {
//                     store.dispatch(AddPostAC(store._state.profilePage.newPostText))
//                 }
//
//                 const onPostChange = (newPostText: string) => {
//                     store.dispatch(UpdateNewPostAction(newPostText))
//                 }
//
//                 return <MyPosts store={store}
//                                 addPost={addNewPost}
//                                 updateNewPostText={onPostChange}/>
//             }
//             }
//         </ StoreContext.Consumer>
//     )
// }

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