const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

type ArrayPostsType = {
    posts: Array<PostsType>
    newPostText: string
    profile: string
}

type PostsType = {
    id: number
    message: string
    like: number
}
type ActionsTypes =
    | ReturnType<typeof AddPostAC>
    | ReturnType<typeof UpdateNewPostAction>
    | ReturnType<typeof setUserProfile>

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', like: 10},
        {id: 2, message: 'It\'s my first post', like: 25},
        {id: 3, message: 'My name Alex', like: 11}
    ],
    newPostText: 'it-kamasutra',
    profile: ''
};

const ProfileReducer = (state: ArrayPostsType = initialState, action: ActionsTypes): ArrayPostsType => {
        switch (action.type) {
    case ADD_POST: {
        let newPost: PostsType = {
            id: 4,
            message: state.newPostText,
            like: 0
        };
        return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: ''
        };
    }
    case UPDATE_NEW_POST_TEXT: {
        return {
            ...state,
            newPostText: action.newText
        };
    }
            case SET_USER_PROFILE: {
                return {
                    ...state,
                    profile: action.profile
                }
            }
    default:
        return state;
}
}
export default ProfileReducer;

export const AddPostAC = () => ({type: ADD_POST} as const)
export const UpdateNewPostAction = (newText: string) => ({
    type: UPDATE_NEW_POST_TEXT, newText}as const)
export const setUserProfile = (profile: string) => ({type: SET_USER_PROFILE, profile} as const)



