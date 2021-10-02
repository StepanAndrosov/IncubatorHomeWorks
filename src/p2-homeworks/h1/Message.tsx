import React from 'react'
import {MessageDataType} from "./HW1";
import style from "./Message.module.css"

function Message({avatar, name, message, time}: MessageDataType) {
    return (
        <div className={style.message}>
            <div>
                <img className={style.ava} src={avatar}/>
            </div>
            <div className={style.messageItem}>
                <span className={style.name}>{name}</span>
                <span className={style.text}>{message}</span>
                <span className={style.time}>{time}</span>
            </div>

        </div>
    )
}

export default Message
