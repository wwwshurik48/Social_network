import React from "react";
import s from './Header.module.css'


export const Header = () => {
    return (
        <header className={s.header}>
            <img src='https://img.devrant.com/devrant/rant/r_1431662_fcaK4.jpg' alt='img' />
            <span className={s.label}>Social Network</span>
        </header>
    )
}