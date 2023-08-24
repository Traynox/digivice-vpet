import React from 'react'
import styles from './../../../public/css/CardInfo.module.css'
import type { RootState } from '../../redux/store/store';
import { useSelector,useDispatch } from 'react-redux'
import { setTabType } from '../../redux/store/slices/uiSlice';
import { getAudioSound } from '../../utils/sounds'
import TabAttributes from './../menu/TabAttributes';
import TabInfo from './../menu/TabInfo';

const CardBody = () => {

  const {tabType, isMobile}= useSelector((state:RootState)=>state.ui);
  

  const dispatch = useDispatch();
  
  const handleClick = (tabType:string) =>{
    dispatch(setTabType(tabType));
    
  }

  return (
    <div className="card-body text-white">
      <h1 className={`card-title text-center ${styles['pixel-font']}`}>Information</h1>
      <div className={`mb-5 ${tabType === 'attributes' ? 'show-content' : styles['containt']}`}>
        <TabAttributes />
      </div>
      <div className={tabType === 'info'  ? 'show-content' : styles['containt']}>
        <TabInfo />
      </div>
      {isMobile ?
          <div className="d-flex justify-content-center ">
            <button type='button' className={`${styles['buttonCard']} ${styles['pixel-font']} `} onClick={() => handleClick('digivice')}>Digivice</button>
          </div>
          : ''}
    </div>
  )
}
export default CardBody;