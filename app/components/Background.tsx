
'use client'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../redux/store/store'
import styles from '../../public/css/Background.module.css'
import { setAge, updateAttributes } from '../redux/store/slices/vpetSlice';
import { setIsMobile, setTabType } from '../redux/store/slices/uiSlice';
import { getAudioSound } from '../utils/sounds'
import {stats} from './../utils/vpet'
import Title from './Title'
import Navbar from './navbar/Navbar'
import PcVersion from './PcVersion'
import MobileVersion from './MobileVersion'

const Background = () => {

  const {tabType,isMobile,isFirstInteraction} = useSelector((state:RootState)=> state.ui);
  const {down} = stats;
  
  const dispatch = useDispatch()
  const id_sound = 'sound_transition'

  useEffect(() => {
      if(isFirstInteraction && (tabType ==='attributes' || tabType==='info' || tabType==='digivice'))
          getAudioSound(id_sound);
   
  }, [tabType]);
  

  useEffect(() => {

      const attributesInterval = setInterval(() => {
          dispatch(updateAttributes({ happiness: down.happiness, discipline: down.discipline, hungry: down.hungry,age: 0 }));

      }, 5000);
     
      const ageInterval = setInterval(() => {
          dispatch(setAge())
      }, 10000);

      return () => {
          clearInterval(attributesInterval);
          clearInterval(ageInterval);
      };
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      dispatch(setIsMobile(window.innerWidth <= 912));// resolución móvil
      
      if(!isMobile){
        dispatch(setTabType('attributes'))
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // función  para manejar el estado inicial

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
     
     {isMobile ? (<Navbar /> ):''}
      <div className="row">
        <div className="col-md-12 col-sm-12 d-flex justify-content-center">
          <Title />
        </div>
      </div>
      { isMobile ? (<MobileVersion/>) :(<PcVersion />) }
  
      <div className={styles.box}>
        <div >A</div>
        <div >B</div>
        <div >C</div>
        <div >D</div>
        <div >E</div>
        <div >F</div>
        <div >G</div>
        <div >H</div>
        <div >I</div>
        <div >J</div>
        <div >K</div>
        <div >L</div>
        <div >M</div>
        <div >N</div>
        <div >A</div>
        <div >O</div>
        <div >P</div>
        <div >Q</div>
        <div >R</div>
        <div >S</div>
        <div >T</div>
        <div >U</div>
        <div >V</div>
        <div >W</div>
        <div >X</div>
        <div >Y</div>
        <div >Z</div>

      </div>
            <audio id={id_sound} src='/assets/sounds/buttonSound2.wav'></audio>
    </div>
  );
};

export default Background;
