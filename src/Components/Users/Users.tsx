import React from "react";
import userPhoto from "../../assets/image/user.png";
import styles from "./users.module.css";
import {UserType} from "../../Redux/Users-reducer";
import {NavLink} from "react-router-dom";

type PropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    followingInProgress: []
    toggleIsFollowingProgress: (isFetching: boolean, id: number) => void
}
//{userId}
let Users = (props: PropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? styles.selectedPage : ''} onClick={() => {
                    props.onPageChanged(p)
                }}>{p}</span>
            })}
        </div>

        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photo != null ? u.photo : userPhoto} className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.unfollow(u.id)

                                // props.toggleIsFollowingProgress(true, u.id)
                                // usersAPI.unfollow(u.id).then(response => {
                                //         if (response.data.resultCode == 0) {
                                //             props.unfollow(u.id)
                                //         }
                                //     props.toggleIsFollowingProgress(false, u.id)
                                //     });


                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                 props.follow(u.id)

                                // props.toggleIsFollowingProgress(true, u.id)
                                // usersAPI.follow(u.id).then(response => {
                                //        if (response.data.resultCode == 0) {
                                //            props.follow(u.id)
                                //        }
                                //     props.toggleIsFollowingProgress(false, u.id)
                                //     });

                            }}>Follow</button>
                        }
                    </div>
                </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                </span>
                </div>
            )
        }
    </div>
}

export default Users;