import {ActionsTypes, propsPostsArrayType, propsPostsType, propsStateType} from "./State";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', like: 10},
        {id: 2, message: 'It\'s my first post', like: 25},
        {id: 3, message: 'My name Alex', like: 11}
    ],
    newPostText: ''
};

const ProfileReducer = (store: propsPostsArrayType = initialState, action: ActionsTypes) => {
        switch (action.type) {
            case ADD_POST:
                let newPost: propsPostsType = {id: 4, message: action.postText, like: 0};
                store.posts.push(newPost);
                store.newPostText = '';
                return store
            case UPDATE_NEW_POST_TEXT:
                store.newPostText = action.newText;
                return store
            default:
                return store
        }
}
export default ProfileReducer;