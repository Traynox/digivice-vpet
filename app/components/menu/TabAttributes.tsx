import React from 'react'
import styles from './../../../public/css/CardInfo.module.css'
import type { RootState } from '../../redux/store/store';
import { useSelector } from 'react-redux'
import ProgressBar from './ProgressBar';


    const TabAttributes = () => {

    const { happiness, discipline,
        hungry } = useSelector((state: RootState) => state.digimon)
    
    
    return (
            <>
                <h6 className={styles['pixel-font']}>Happiness</h6>
                 <ProgressBar atribute={happiness} />
                <h6 className={styles['pixel-font']}>Discipline</h6>
                <ProgressBar atribute={discipline} />
                <h6 className={styles['pixel-font']}>Hungry</h6>
                <ProgressBar atribute={hungry} />
            </>
  )
}

export default TabAttributes;
