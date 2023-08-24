

import React from 'react';
import { useDispatch } from 'react-redux';
import styles from '../../../public/css/Button.module.css'
import {props} from '../../types/types';
import {getAudioSound} from '../../utils/sounds'
import {evolucion} from '../../utils/vpet'
const ButtonLeft = ({ id, textTitle, text}:props) => {
  
  const dispatch = useDispatch();
  
  const handleClick = () => {
  
    const vpet_screen = document.getElementById('id_screen-vpet'); 
    if(text && vpet_screen){
   
      switch (text) {
        case 'koromon':
          evolucion('id_screen-vpet','agumon',dispatch);
          break;

        case 'agumon':
          evolucion('id_screen-vpet','greymon',dispatch);
          break;

        case 'greymon':
          evolucion('id_screen-vpet','koromon',dispatch);
          break;

        default:
          evolucion('id_screen-vpet','Unknown',dispatch);
          break;
      }
    }

    if(id)
    getAudioSound(id);
  };

  return (
    <>
     <button type='button' onClick={handleClick} title={textTitle} className={styles['concentric-button']}>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
         </button>
        
    </>
  );
};

export default ButtonLeft;