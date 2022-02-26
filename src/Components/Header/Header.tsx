import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

type propsType = {
    isAuth: boolean
    login: null | string
    setAuthUserDataAC: (id: number, email: string, login: string) => void
}
export const Header = (props: propsType) => {
    return (
        <header className={s.header}>
            <img src='https://img.devrant.com/devrant/rant/r_1431662_fcaK4.jpg' alt='img'/>
            <span className={s.label}>Social Network</span>
            <div className={s.loginBlock}>
                {
                    props.isAuth
                        ? props.login
                        : <NavLink to={'./login'}>Login</NavLink>
                }

            </div>
        </header>
    )
}