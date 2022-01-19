import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import ContainerMyPosts from "./MyPosts/ContainerMyPosts";

export const Profile = () => {

    return (
        <div>
            <ProfileInfo/>
            <ContainerMyPosts

            />
        </div>
    )
}

// type propsPostDataForProfile = {
//     store: StoreType
//     // postData: propsPostsArrayType
//     // dispatch: (action: ActionsTypes) => void
//     // stateApp: propsStateType
//     // callBackAddPost: (postText: string) => void
//     // updateNewPostText: (newText: string) => void
// }
//export const Profile = (props: propsPostDataForProfile) => {
//
//     return (
//         <div>
//             <ProfileInfo/>
//             <MyPosts postData={props.postData}
//                      dispatch={props.dispatch}
//                      // callBackAddPost={props.callBackAddPost}
//                      updateNewPostText={props.updateNewPostText}
//             />
//         </div>
//     )
// }