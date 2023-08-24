import React from 'react'

import type { RootState } from '../../redux/store/store';
import styles from './../../../public/css/CardInfo.module.css'
import menuStyles from './../../../public/css/MenuButton.module.css'
import { useSelector } from 'react-redux'

import ProgressBar from './ProgressBar';

 const TabInfo = () => {

    const { discipline,hungry,happiness,age, name, mood } = useSelector((state: RootState) => state.digimon)
    const {isMobile} = useSelector((state: RootState) => state.ui)
  return (
    <>
     

      <div className="row ">
      <h3 className={`card-subtitle ${styles['pixel-font']} text-center`}>{name}</h3>
       <div className="d-flex mt-4 justify-content-around">
       <div className="d-flex">
          <h2 className={styles['pixel-font']}>Mood: </h2>
          <div className={` ${menuStyles['boton-sprite']} ${menuStyles['state']} `}>
            <div className={menuStyles['imagen-sprite-size']}>
              <div title={mood} className={menuStyles[`${mood}-sprite`]}></div>
            </div>
          </div>
        </div>
       <div className="d-flex">
          <h2 className={styles['pixel-font']}>Age: {age}</h2>
       </div>
       
       </div>
        <div className=" my-2 d-flex justify-content-around justify-content-lg-around">
          <h5 className={styles['pixel-font']}>Happiness
           { isMobile? <ProgressBar atribute={happiness} /> :'' }
            <p className='text-center'>
              {happiness}
            </p>
          </h5>
          <h5 className={styles['pixel-font']}>Discipline
            { isMobile ? <ProgressBar atribute={discipline} /> : '' }
            <p className='text-center'>
              {discipline}
            </p>
          </h5>
          <h5 className={`${styles['pixel-font']}`}>Hungry
           { isMobile ? <ProgressBar atribute={hungry} /> : '' }
            <p className=' text-center'>
              {hungry}
            </p>
          </h5>
        </div>

      </div>
    </>
  )
}
export default TabInfo