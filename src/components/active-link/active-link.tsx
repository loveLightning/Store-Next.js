import React from 'react'
import { useRouter } from 'next/router'
import s from './styled.module.sass'
import Link from 'next/link'

interface Props {
    path: string
    children: React.ReactNode
}

export const ActiveLink = ({ path, children }: Props) => {
    const router = useRouter()

    return (
        <Link href={path}>
            <a className={router.asPath === path ? `${s.link} ${s.active}` : `${s.link}`}>
                {children}
            </a>
        </Link>
    )
}
