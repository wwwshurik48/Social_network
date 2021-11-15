import React from "react";
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div className={s.profileBox}>
            <div className={s.profile}>
                <img src="https://tipik.ru/wp-content/uploads/2018/11/1316796242_67_www.nevseoboi.com_.ua_.jpg"
                     alt="img"/>
                <div className={s.avaBox}>
                    ava+description
                </div>
            </div>
        </div>
    )
}