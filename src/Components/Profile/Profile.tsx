import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {
    ActionsTypes,
    propsPostsArrayType, propsStateType, StoreType,
} from "../../Redux/State";
import ContainerMyPosts from "./MyPosts/ContainerMyPosts";

// type propsPostDataForProfile = {
//     store: StoreType
//     // postData: propsPostsArrayType
//     // dispatch: (action: ActionsTypes) => void
//     // stateApp: propsStateType
//     // callBackAddPost: (postText: string) => void
//     // updateNewPostText: (newText: string) => void
// }

export const Profile = () => {

    return (
        <div>
            <ProfileInfo/>
            <ContainerMyPosts
                // store={props.store}
                // dispatch={props.dispatch}
                // // postData={props.postData}
                // stateApp={props.stateApp}

            />
        </div>
    )
}


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