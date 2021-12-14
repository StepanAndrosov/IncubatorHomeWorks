import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const getTime = (interval: number) => interval < 10 ? `0${interval}` : interval

    let hours = getTime(date.getHours())
    let minutes = getTime(date.getMinutes())
    let seconds = getTime(date.getSeconds())

    const stringTime = `${hours}:${minutes}:${seconds}`

    let day = getTime(new Date().getDate())
    let month = getTime(new Date().getMonth())
    let year = getTime(new Date().getFullYear())

    const stringDate = `${day}.${Number(month) + 1}.${year}`

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <span>
                    {stringDate}
                </span>
            )}

            <SuperButton style={{marginTop: '20px'}} onClick={start}>start</SuperButton>
            <SuperButton style={{marginTop: '20px'}} onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
