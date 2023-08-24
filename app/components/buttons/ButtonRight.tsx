

import React from 'react';
import styles from '../../../public/css/Button.module.css'
import screenStyles from './../../../public/css/Digivice.module.css'
import {props} from '../../types/types';
import {getAudioSound} from '../../utils/sounds'

const ButtonRight = ({ classText , textTitle, text }:props) => {
 
  const handleClick = () => {

    const vpet_screen = document.getElementById('v-pet');
    
    if(vpet_screen && classText==='top'){
      vpet_screen.setAttribute('class', '');
      vpet_screen.classList.add(screenStyles['sprite-move-one']); 
    }else if(vpet_screen && classText==='bottom'){
      vpet_screen.setAttribute('class', '');
      vpet_screen.classList.add(screenStyles['sprite-move-two']); 
    }
    if(text)
    getAudioSound(text);
  };

  return (
    <>
        <button type='button' onClick={handleClick} title={textTitle} className={styles[`oval-button-${classText}`]}>
            <div className={`${styles['inner-oval']} ${styles['outer-inner']}`}></div>
            <div className={styles['inner-oval']}></div>
        </button>
        
    </>
  );
};

export default ButtonRight;

