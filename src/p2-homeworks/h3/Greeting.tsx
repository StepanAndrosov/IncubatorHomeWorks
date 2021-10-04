import React, {ChangeEvent, KeyboardEvent} from 'react'
import style from "./Greeting.module.css"

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string | null
    totalUsers: number
    onKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPress} // деструктуризация пропсов
) => {
    const inputClass = error ? style.error : ""

    return (
        <div className={style.Greeting}>
            <input value={name} onChange={setNameCallback} onKeyPress={onKeyPress} className={inputClass}/>
            <button onClick={addUser}>add</button>
            <span className={style.total}>{totalUsers}</span>
            <span className={style.spanError}>{error}</span>
        </div>
    )
}

export default Greeting
