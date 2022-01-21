import {ActionsTypes} from "./State";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

type ArrayPostsType = {
    posts: Array<PostsType>
    newPostText: string
}

type PostsType = {
    id: number
    message: string
    like: number
}

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', like: 10},
        {id: 2, message: 'It\'s my first post', like: 25},
        {id: 3, message: 'My name Alex', like: 11}
    ],
    newPostText: ''
};

const ProfileReducer = (state: ArrayPostsType = initialState, action: ActionsTypes): ArrayPostsType => {
        switch (action.type) {
            case ADD_POST: {
                let newPost: PostsType = {
                    id: 4,
                    message: state.newPostText,
                    like: 0
                };
               let stateCopy = {...state};
                stateCopy.posts = [...state.posts];
                stateCopy.posts.push(newPost);
                stateCopy.newPostText = '';
                return stateCopy;
            }
            case UPDATE_NEW_POST_TEXT: {
                let stateCopy = {...state};
                stateCopy.newPostText = action.newText;
                return stateCopy;
            }
            default:
                return state;
        }
}
export default ProfileReducer;