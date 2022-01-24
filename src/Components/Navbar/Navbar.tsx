import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {FriendsBar} from "./FriendsBar/FriendsBar";

export const Navbar = () => {
    return (
        <div className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' className={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs'>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news'>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music'>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings'>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users'>Users</NavLink>
            </div>
            <FriendsBar/>
        </div>

    )
}