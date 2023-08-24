import React from 'react'
import { useDispatch } from 'react-redux'
import { setHappiness, setDiscipline, setHungry } from '../../redux/store/slices/vpetSlice';
import { setTabActive } from '../../redux/store/slices/uiSlice';
import {stats} from './../../utils/vpet'
import { getAudioSound } from '../../utils/sounds'
import MenuButton from './../buttons/MenuButton';
export const CardFooter = () => {

    const {add} = stats;
    const id_sound = 'sound_transition'
    const dispatch = useDispatch()

    const handleEat = () => {
        dispatch(setHungry(add.hungry));
        dispatch(setTabActive(1))
    }

    const handleHappiness = () => {
        dispatch(setHappiness(add.happiness));
        dispatch(setTabActive(2))
    }
    const handleDiscipline = () => {
        dispatch(setDiscipline(add.discipline));
        dispatch(setTabActive(3))
    }
   
    const handleInfo = () =>{
       
        dispatch(setTabActive(4));
        getAudioSound(id_sound);
    }


  return (
    <div className='card-footer tab'>
    <div className='d-flex justify-content-center'>
        <MenuButton textTitle='Eat' classText='eat' useclick={handleEat} />
        <MenuButton textTitle='Mimar' classText='mimar' useclick={handleHappiness} />
        <MenuButton textTitle='Discipline' classText='discipline' useclick={handleDiscipline} />
        <MenuButton textTitle='Info' classText='info' useclick={handleInfo} />
    </div>
</div>
  )
}
export default CardFooter;