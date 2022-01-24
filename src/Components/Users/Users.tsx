import React from "react";
import styles from "./users.module.css";
import {UserType} from "../../Redux/Users-reducer";
import axios from "axios";
import userPhoto from '../../assets/image/user.png'

type PropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: any) => void

}
export const Users = (props: PropsType) => {

    let GetUsers = () => {
        if(props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then( response => {
                debugger
                props.setUsers(response.data.items)
            })
        };
    }

    return <div>
        <button onClick={GetUsers}>Get users</button>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photo != null ? u.photo : userPhoto } className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={ () => props.unfollow(u.id)}>Unfollow</button>
                            : <button onClick={ () => props.follow(u.id)}>Follow</button>
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