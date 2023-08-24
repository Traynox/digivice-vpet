import React from 'react'
import styles from '../../../public/css/Navbar.module.css'
import { props } from './../../types/types'
import MenuButton from '../buttons/MenuButton'

const Item = ({ classText, text, isActive, useclick }: props) => {

    return (
        <>
            <li onClick={useclick} className={`${styles.list} ${isActive ? styles.active : ''} `}>
                <a href="#">
                    <span className={styles.icon}>
                        <MenuButton textTitle={text} classText={classText} useclick={useclick} />
                    </span>
                    <span className={styles.text}>{text}</span>
                </a>
            </li>
        </>

    )
}
export default Item;