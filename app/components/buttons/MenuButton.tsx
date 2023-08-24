import React from 'react'
import styles from './../../../public/css/MenuButton.module.css'
import { props } from '../../types/types'
export const MenuButton = ({ classText,textTitle, useclick }: props) => {

    return (
        <button type='button' onClick={useclick} title={textTitle} className={styles['boton-sprite']}>
              <div className={styles['imagen-sprite-size']}>
                <div className={styles[`${classText}-sprite`]}>
                   
                </div>
              </div>
        </button>
      
        )
}
export default MenuButton;