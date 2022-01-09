import React, {ChangeEvent} from "react";
import {
    ActionsTypes,
    AddPostAC,
    propsPostsArrayType, propsStateType, StoreType,
    UpdateNewPostAction
} from "../../../Redux/State";
import {MyPosts} from "./MyPosts";
import StoreContext from "../../../StoreContext";

// type propsContainerMyPostsType = {
//     store: StoreType
//     // postData: propsPostsArrayType
//     // stateApp: propsStateType
//     // dispatch: (action: ActionsTypes) => void
//     // callBackAddPost: (postText: string) => void
//     // updateNewPostText: (newText: string) => void
//
// }

const ContainerMyPosts = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let addNewPost = () => {
                    store.dispatch(AddPostAC(store._state.profilePage.newPostText))
                }

                const onPostChange = (newPostText: string) => {
                    store.dispatch(UpdateNewPostAction(newPostText))
                }

                return <MyPosts store={store}
                                addPost={addNewPost}
                                updateNewPostText={onPostChange}/>
            }
            }
        </ StoreContext.Consumer>
    )
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