import React from 'react'
import A from "./A"
import Head from "next/head"
import styles from '../styles/MainContainer.module.scss'


const MainContainer = ({children}) => {
    return (
        <>
            <Head>
                <meta keywords={children}></meta>
                <title>Главная страница</title>
            </Head>
            <div>
                <div className="navbar">
                    <A href={'/'} text="Главная"/>
                    <A href={'/users'} text="Пользователи"/>
                </div>
                <div>
                    {children}
                </div>
                <style jsx>
                    {`
                      .navbar {
                        background: orange;
                        padding: 15px;
                      }
                    `}
                </style>
            </div>
        </>
    )
}

export default MainContainer