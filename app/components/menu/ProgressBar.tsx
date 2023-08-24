import React from 'react'
import styles from './../../../public/css/CardInfo.module.css'
import { progressBarProps } from './../../types/types'

const ProgressBar = ({atribute}:progressBarProps) => {
  return (
    <div className={` ${styles['pixel-art-container']} `}>
      <div className={`progress mb-2 ${styles['progress-container']}`}>
        <div className={`progress-bar  ${atribute < 20 ? 'bg-danger' : atribute < 50 ? 'bg-warning' : 'bg-success'} `} role="progressbar" style={{ width: `${atribute}%` }}>

        </div>
      </div>
    </div>
  )
}
export default ProgressBar;