import React from 'react'
import styles from './../../public/css/MobileVersion.module.css'
import { useSelector } from 'react-redux'

import type { RootState } from '../redux/store/store'
import Digivice from './Digivice'
import CardBody from './card/CardBody'

export const MobileVersion = () => {

    const {tabType} = useSelector((state: RootState) => state.ui)
    return (
        <div className='row'>
            <div className="col-sm-12 ">

                <div className={`${styles['card-flip']} ${tabType==='attributes' || tabType==='info'  ? styles['flipped'] : ""}`}>
                    <div className={styles['front']}>
                        <div className="card cristal">
                            <div className="card-body">
                                <Digivice />
                               
                            </div>
                            
                        </div>

                    </div>
                    <div className={styles['back']}>
                  
                       <CardBody />
                    
                    </div>
                </div>
            </div>

        </div>
    )
}
export default MobileVersion;