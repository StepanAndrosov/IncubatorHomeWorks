import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import style from "./Header.module.css"
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

function Header() {

    const [active, setActive] = useState(false)
    const isActive = active ? `${style.navBlock} ${style.active}` : style.navBlock
    const switchLinks = () => {
        setActive(!active)
    }

    return (
        <div className={style.Header}>
            <SuperButton
                style={{alignItems: 'start' }}
                onClick={switchLinks}
            >Click</SuperButton>
            <div className={isActive}>
           <NavLink to={PATH.PRE_JUNIOR}>Pre-Junior</NavLink>
            <NavLink to={PATH.JUNIOR}>Junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS}>Junior+</NavLink>
            </div>
        </div>
    )
}

export default Header
