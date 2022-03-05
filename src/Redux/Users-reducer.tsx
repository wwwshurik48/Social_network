import React from 'react';
import {usersAPI} from "../api/Api";
import {Dispatch} from "redux";
import {setAuthUserDataAC} from "./Auth-reducer";
import {setUserProfile} from "./Profile-reducer";

const FOLLOW = "FOLLOWT";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

export type UserType = {
    id: number
    photo: string
    followed: boolean
    name: string
    status: string
}

type ActionsType =
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleIsFollowingProgress>


let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10 as number,
    totalUsersCount: 0 as number,
    currentPage: 1 as number,
    isFetching: true,
    followingInProgress: [] as number[]
};

export type InitialStateType = typeof initialState

const UsersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:

            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id !== action.id)
            }

        default:
            return state;
    }
}

export const unfollowSuccess = (userId: number) => ({type: UNFOLLOW, userId} as const);
export const followSuccess = (userId: number) => ({type: FOLLOW, userId} as const);
export const setUsers = (users: Array<UserType>) => ({type: SET_USERS, users} as const);
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const);
export const setTotalUsersCount = (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalCount} as const);
export const toggleIsFetching = (isFetching: boolean) => ({
    type: TOGGLE_IS_FETCHING, isFetching
} as const)
export const toggleIsFollowingProgress = (isFetching: boolean, id: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, id
} as const)

export const getUsersTC = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {

        dispatch(toggleIsFetching(true))

        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        });
    }
}

export const followTC = (userId: number) => {
    return (dispatch: Dispatch) => {

        dispatch(toggleIsFollowingProgress(true, userId))

        usersAPI.follow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toggleIsFollowingProgress(false, userId))
        });
    }
}

export const unfollowTC = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId))

        usersAPI.unfollow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleIsFollowingProgress(false, userId))
        });
    }
}

export const authTC = () => {
    return (dispatch: Dispatch) => {
        usersAPI.auth().then(response => {
            if(response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserDataAC(id, email, login));
            }
        });
    }
}

export const profileDataTC = (userId: string, params: {userId: string}) => {
    return (dispatch: Dispatch) => {
        let userId = params.userId
        if (!userId) userId='2'
        usersAPI.getProfile(userId).then(response => {
            console.log(response.data)
            dispatch(setUserProfile(response.data));
        });
    }
}

export default UsersReducer;

