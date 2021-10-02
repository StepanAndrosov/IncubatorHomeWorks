import React from 'react'
import {AffairType} from "./HW2";
import style from "./Affairs.module.css"

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair({affair, ...props}: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(affair._id)
    }

    return (
        <div className={style.affair}>
            <div>
                <span className={style.affairId}>{affair._id}</span>
            </div>
            <div>
                <span className={style.affairName}><b>{affair.name}</b></span>
            </div>
            <div>
                <span className={style.affairPriority}>{affair.priority}</span>
            </div>
            <div>
                <button className={style.btnX} onClick={deleteCallback}>X</button>
            </div>
        </div>
    )
}

export default Affair
