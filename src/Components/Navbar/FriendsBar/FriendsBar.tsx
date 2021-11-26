import React from "react";
import s from './../Navbar.module.css'

export const FriendsBar = () => {
    return (
        <div className={s.friendsBar}>
            <span>Friends</span>
            <div className={s.friendsFoto}>
                <div>
                    <img
                        src='https://sun9-42.userapi.com/impg/WTBqgxAUMqkom7qtwKhFFRQm1Wzejt9JIlYIWQ/vfOQtjlmXCs.jpg?size=1727x2160&quality=96&sign=40a08e75797850cf3d2f37158e383bc2&type=album'/>
                    <span>Dima</span>
                </div>
                <div>
                    <img src='https://sun9-14.userapi.com/impf/c840338/v840338428/709e5/YbtsFpTh9Jo.jpg?size=1620x2160&quality=96&sign=0f18feb0e020d4db55b8b4f0aa7028f5&type=album'/>
                    <span>Tolkach</span>
                </div>
                <div>
                    <img src='https://sun9-6.userapi.com/impf/c849528/v849528066/7d6d2/xTY2qCJvp9o.jpg?size=1440x1874&quality=96&sign=3574d3cf484759d8a12ccf7afc94d166&type=album'/>
                    <span>Oleg</span>
                </div>
            </div>
        </div>
    )
}