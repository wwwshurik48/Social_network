import React from "react";
import {AppStateType} from "../../Redux/redux-store";
import {
    follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching,
    unfollow, UserType
} from "../../Redux/Users-reducer";
import {connect} from "react-redux";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

export type PropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: any) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    isFetching: boolean
}

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber: number) => {

        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                onPageChanged={this.onPageChanged}

            />
        </>
    }
}

type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

let MapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(MapStateToProps,
    {
        follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount,
        toggleIsFetching
    })(UsersContainer);


// type MapDispatchToProps = {
//     follow: (userId: number) => void
//     unfollow: (userId: number) => void
//     setUsers: (users: Array<UserType>) => void
//     setCurrentPage: (currentPage: number) => void
//     setTotalUsersCount: (totalCount: number) => void
//     toggleIsFetching: (isFetching: boolean) => void
// }

// let MapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
//     return {
//         follow: (userId: number) => {
//             dispatch(FollowAC(userId));
//         },
//         unfollow: (userId: number) => {
//             dispatch(UnfollowAC(userId));
//         },
//         setUsers: (users: Array<UserType>) => {
//             dispatch(SetUsersAC(users));
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch(SetCurrentPageAC(currentPage));
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(SetTotalUsersCountAC(totalCount));
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(ToggleIsFetchingAC(isFetching));
//         }
//     }
// }

