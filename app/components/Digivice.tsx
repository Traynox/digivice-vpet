
import React from 'react';

import type { RootState } from '../redux/store/store'
import { useSelector} from 'react-redux'
import styles from '../../public/css/Digivice.module.css';
import ButtonLeft from './buttons/ButtonLeft'
import ButtonRight from './buttons/ButtonRight'
import  Loading  from './Loading';

const Digivice = () => {

  const {name} = useSelector((state:RootState)=> state.digimon);
  const {isLoading} = useSelector((state:RootState)=> state.ui);
  const id_sound = 'sound-button';
  const id_vpet= 'v-pet';
  const id_vpet_screen= 'id_screen-vpet';

  return (
      <>
   
      <div className={`position-relative ${styles['centered-image-size']}`}>
      
      
        <div className={styles['glass-effect']}></div>
     
        <div className={styles['background-animate']}></div>
        <div id={id_vpet_screen} className={`${styles['screen-vpet']} ${styles['character']}`} >

          <img id={id_vpet} className={`${styles['sprite-move-one']}`} src={`/assets/sprites/${name}-sprite.png`} alt="v-pet" />
           
        </div>
      
          { isLoading ?  <Loading /> : '' }
       
          <div className={`position-relative d-flex justify-content-sm-around justify-content-around  ${styles.divSizeButton}`}>
          <ButtonLeft id={id_sound} textTitle={name} text={name} />

          <ButtonRight classText="top" textTitle="Calm" text={id_sound} />

          <ButtonRight classText="bottom" textTitle="Attack" text={id_sound} />
        </div>

        <audio id={id_sound} src='/assets/sounds/buttonSound.wav'></audio>

      </div>
     
      </>
  );
};

export default Digivice;
