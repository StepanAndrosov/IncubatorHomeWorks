import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW10.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC, LoadingType} from "./bll/loadingReducer";
import {Preloader} from "./Loader";


function HW10() {
    const dispatch = useDispatch()
    const loading = useSelector<AppStoreType, LoadingType>(state => state.loading)


    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 3000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10
            <div className={s.column}>
            {loading.isLoading
                ? (
                    <Preloader />
                ) : (
                    <div >
                        <SuperButton style={{marginTop: "20px"}} onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
