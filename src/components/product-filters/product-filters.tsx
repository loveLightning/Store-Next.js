import React, { useEffect, useState } from 'react'
import s from './styled.module.sass'
import Slider from '@mui/material/Slider'
import Typography from '@mui/material/Typography'
import { ratingData } from './types'
import { useDebounce } from 'src/hooks'
import { dynamicRangeSelector, rangeSelector, setValueDynamicRange, setValueRating, useAppDispatch, useAppSelector, valueRatingSelector } from 'src/store'

const range = {
    color: 'black',
}

const price = {
    fontSize: '12px',
    fontWeight: 'bold',
}

export const ProductFilters = () => {
    const [changedByUser, setChangedByUser] = useState(false)
    const dispatch = useAppDispatch()
    const valueDynamicRange = useAppSelector(dynamicRangeSelector)
    const valueRange = useAppSelector(rangeSelector)
    const valueRating = useAppSelector(valueRatingSelector)
    const [value, setValue] = useState<number[]>([])
    const debouncedValue = useDebounce(value, 300)

    useEffect(() => {
        setValue(valueDynamicRange)
    }, [valueDynamicRange])

    useEffect(() => {
        if (changedByUser) {
            dispatch(setValueDynamicRange(debouncedValue))
        }
    }, [changedByUser, debouncedValue, dispatch])

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[])

        if (!changedByUser) {
            setChangedByUser(true)
        }
    }

    const changedValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setValueRating(+(e.target.value)))
    }

    return (
        <>
            <div className={s.price}>
                <div className={s['price-range']}>Price range</div>
                {valueRange.length && value.length && <><Slider
                    style={range}
                    getAriaLabel={() => 'range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    min={valueRange[0]}
                    max={valueRange[1]}
                />
                    <div className={s['wrapper-price']}>
                        <Typography style={price}>{value[0]}$</Typography>
                        <Typography style={price}>{value[1]}$</Typography>
                    </div></>}

            </div>

            <div className={s.line} />

            <div className={s.wrapper}>
                <div className={s.title}>Rating</div>
                <div className={s.rate}>
                    {ratingData?.map((item) => (
                        <label key={item.id} className={s.label}>
                            <input onChange={changedValue} className={s.input} name={item.name} type="radio" value={item.value} checked={item.value === valueRating} />
                            <span className={s.btn}>
                                <span className={s.inner}>{item.value}+</span>
                            </span>
                        </label>
                    ))}
                </div>
            </div>
        </>
    )
}
