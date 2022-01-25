import React from "react";
import Users from "./UsersClass";
import {AppStateType} from "../../Redux/redux-store";
import {FollowAC, SetUsersAC, UnfollowAC, UserType} from "../../Redux/Users-reducer";
import {Dispatch} from "redux";
import {connect} from "react-redux";

type MapStateToPropsType = {
    users: Array<UserType>
}
type MapDispatchToProps = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: any) => void
}

let MapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}
let MapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        follow: (userId: number) => {
            dispatch(FollowAC(userId));
        },
        unfollow: (userId: number) => {
            dispatch(UnfollowAC(userId));
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(SetUsersAC(users));
        }
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(Users);