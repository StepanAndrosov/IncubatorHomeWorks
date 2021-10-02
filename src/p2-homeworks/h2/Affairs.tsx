import React from 'react'
import Affair from './Affair'
import { AffairsType, AffairType, FilterType} from './HW2'
import style from "./Affairs.module.css"

type AffairsPropsType = {
    data: AffairsType
    setFilter: (value: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter('all')} // need to fix
    const setHigh = () => {props.setFilter('high')}
    const setMiddle = () => {props.setFilter('middle')}
    const setLow = () => {props.setFilter('low')}

    return (
        <div className={style.Affairs}>

            {mappedAffairs}

            <button className={style.filterBtn} onClick={setAll}>All</button>
            <button className={style.filterBtn} onClick={setHigh}>High</button>
            <button className={style.filterBtn} onClick={setMiddle}>Middle</button>
            <button className={style.filterBtn} onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
