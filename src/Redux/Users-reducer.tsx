import React from 'react';

const FOLLOW = "FOLLOWT";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = 'SET_USERS'

// export type InitialStateType ={
//     users: Array<UserType>
// }

export type UserType = {
    id: number
    photo: string
    followed: boolean
    name: string
    status: string
    // location: LocationType
}

// type LocationType = {
//     city: string
//     country: string
// }

type ActionsType =
    | ReturnType<typeof FollowAC>
    | ReturnType<typeof UnfollowAC>
    | ReturnType<typeof SetUsersAC>;

let initialState = {
    users: [] as Array<UserType>
};

export type InitialStateType = typeof initialState

const UsersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            debugger
           return {
               ...state,
               users: state.users.map( u => {
                   if( u.id === action.userId) {
                       return { ...u, followed: true}
                   }
                   return u;
               })
           }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if( u.id === action.userId) {
                        return { ...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
        }
        default:
            return state;
        }
}

// export const FollowAC = (userId: number) =>{
//     debugger
//     return{type: 'FOLLOW', userId} as const
// };
export const UnfollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const);
export const FollowAC = (userId: number) => ({type: FOLLOW, userId} as const);
export const SetUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users} as const);



export default UsersReducer;

