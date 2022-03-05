import React from "react";
import {AppStateType} from "../../Redux/redux-store";
import {
     followTC,
    getUsersTC,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    toggleIsFollowingProgress,
    unfollowTC,
    UserType
} from "../../Redux/Users-reducer";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";



export type PropsTypeForUserContainer = {
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
    followingInProgress: []
    toggleIsFollowingProgress: (isFetching: boolean, id: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

class UsersContainer extends React.Component<PropsTypeForUserContainer> {
    componentDidMount() {
         this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    // this.props.toggleIsFetching(true)
    //
    // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
    //         this.props.toggleIsFetching(false)
    //         this.props.setUsers(data.items);
    //         this.props.setTotalUsersCount(data.totalCount);
    //     });
    onPageChanged = (pageNumber: number) => {
       this.props.getUsers(pageNumber, this.props.pageSize);
    }
    // this.props.setCurrentPage(pageNumber);
    // this.props.toggleIsFetching(true)
    //
    // usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
    //         this.props.toggleIsFetching(false)
    //         this.props.setUsers(data.items);
    //     });

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
                followingInProgress={this.props.followingInProgress}
                toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}

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
    followingInProgress: any
}

let MapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(MapStateToProps,
    { follow: followTC, unfollow: unfollowTC, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleIsFollowingProgress, getUsers: getUsersTC})(UsersContainer);

