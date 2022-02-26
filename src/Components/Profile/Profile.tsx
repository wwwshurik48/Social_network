import React from "react";
import ContainerMyPosts from "./MyPosts/ContainerMyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "../../Redux/Profile-reducer";

type propsType = {
    profile:  null| ProfileType
    setUserProfile: (profile: ProfileType) => void
}
const Profile = (props: propsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <ContainerMyPosts/>
        </div>
    )
}

export default Profile;

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