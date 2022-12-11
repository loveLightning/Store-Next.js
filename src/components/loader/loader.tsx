import React from 'react'
import s from './styled.module.sass'

export const Loader = () => {
    return (
        <>
            <div className={s['wrapper-loader']}>
                <div className={`${s['lds-ring']} ${s.fullscreen}`}><div></div><div></div><div></div><div></div></div>
            </div>
        </>
    )
}
