import React from 'react';

const SET_USER_DATA = "SET_USER_DATA";

export type AuthType = {
    data: DataType,
    messages: [],
    fieldsErrors: [],
    resultCode:  null | number
}
export type DataType = {
    id: number,
    email: string,
    login: string,
}

let initialState = {
    data: null  as null | DataType,
    id: null as null | number,
    email: null as null | string,
    login: null as null | string ,
    isAuth: false
}

export type InitialStateType = typeof initialState

export type ActionType = ReturnType<typeof setAuthUserDataAC>

const AuthReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthUserDataAC = (id: number, email: string, login: string) => ({type: SET_USER_DATA, data:{id, email, login}} as const);

export default AuthReducer;

